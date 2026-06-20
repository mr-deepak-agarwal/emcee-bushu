import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where booking enquiries get sent — update once the client's domain is live.
const OWNER_EMAIL = process.env.OWNER_EMAIL || "bookings@emceebushu.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Emcee Bushu Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      whatsapp,
      eventType,
      eventDate,
      location,
      message,
      company, // honeypot
    } = body;

    // Honeypot — silently accept but skip sending if filled by a bot
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !whatsapp || !eventType || !eventDate || !location || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Booking form isn't fully configured yet. Please WhatsApp instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1. Notify the owner
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      reply_to: body.email || undefined,
      subject: `New booking enquiry — ${eventType} on ${eventDate}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #2A2233;">
          <h2 style="color: #5B4A82;">New Booking Enquiry 🎤</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email || "—")}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
          <p><strong>Event type:</strong> ${escapeHtml(eventType)}</p>
          <p><strong>Event date:</strong> ${escapeHtml(eventDate)}</p>
          <p><strong>Location:</strong> ${escapeHtml(location)}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    // 2. Auto-reply to the client (best-effort — don't fail the request if this errors)
    try {
      const clientEmail = body.email;
      if (clientEmail) {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: clientEmail,
          subject: "Got your enquiry — Emcee Bushu",
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #2A2233;">
              <h2 style="color: #5B4A82;">Thanks, ${escapeHtml(name)}! 🎤</h2>
              <p>Your booking enquiry for a <strong>${escapeHtml(eventType)}</strong> on
              <strong>${escapeHtml(eventDate)}</strong> has been received.</p>
              <p>I'll get back to you within 24 hours. If it's urgent, message me directly on WhatsApp.</p>
              <p>— Bushu</p>
            </div>
          `,
        });
      }
    } catch (autoReplyErr) {
      console.error("Auto-reply failed:", autoReplyErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
