"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { eventTypeOptions } from "@/lib/content";
import ParallaxField, { FloatItem } from "./ParallaxField";

const floatItems: FloatItem[] = [
  { shape: "ticket", top: "6%", left: "4%", size: 50, speed: 1.1, color: "var(--color-clay)", rotateSpeed: -0.3 },
  { shape: "star", top: "85%", left: "92%", size: 24, speed: 1.4, color: "var(--color-spotlight)", rotateSpeed: 0.6 },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      full_name: String(data.get("full_name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      event_type: String(data.get("event_type") || "").trim(),
      event_date: String(data.get("event_date") || "") || null,
      location: String(data.get("location") || "").trim(),
      guest_count: String(data.get("guest_count") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.location) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, phone and event location.");
      return;
    }

    if (!isSupabaseConfigured) {
      setStatus("error");
      setErrorMsg(
        "Booking storage isn't connected yet (Supabase keys missing). Use WhatsApp below for now — see the README to finish setup."
      );
      return;
    }

    const { error } = await supabase.from("bookings").insert([payload]);

    if (error) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your inquiry. Try WhatsApp instead, or refresh and try again."
      );
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section id="book" className="relative py-32 md:py-44 overflow-hidden">
      <ParallaxField items={floatItems} />
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ NOW BOOKING — 2026 ]
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.0] font-medium">
            Let&apos;s make your event{" "}
            <span className="italic text-clay">extraordinary.</span>
          </h2>
          <p className="text-ink-soft mt-4 max-w-lg mx-auto text-lg">
            Tell me a bit about what you&apos;re planning. I reply to every
            inquiry personally, usually within a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-paper-2 border border-line rounded-[2px] p-6 md:p-12"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-12"
            >
              <CheckCircle2 className="w-12 h-12 text-clay mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-2xl italic mb-2">
                Got it — thank you!
              </h3>
              <p className="text-ink-soft max-w-sm">
                Your inquiry is in. I&apos;ll get back to you personally to
                lock in the details.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 font-mono text-xs tracking-[0.14em] uppercase text-clay hover:text-clay-dark transition-colors"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <Field label="Full name" name="full_name" required placeholder="Your name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
              <Field
                label="Phone / WhatsApp"
                name="phone"
                required
                placeholder="+44 ..."
              />
              <div>
                <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft mb-2">
                  Event type
                </label>
                <select
                  name="event_type"
                  required
                  defaultValue=""
                  className="w-full bg-paper border border-line rounded-[2px] px-4 py-3 text-ink focus:outline-none focus:border-clay transition-colors"
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  {eventTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <Field label="Event date" name="event_date" type="date" />
              <Field
                label="Location"
                name="location"
                required
                placeholder="City, country"
              />
              <Field
                label="Guest count"
                name="guest_count"
                placeholder="Roughly how many guests?"
              />
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft mb-2">
                  Tell me about your event
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Vibe, schedule, anything I should know..."
                  className="w-full bg-paper border border-line rounded-[2px] px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-clay transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <div className="md:col-span-2 flex items-start gap-2 text-clay-dark bg-clay/10 border border-clay/30 rounded-[2px] px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="md:col-span-2 flex flex-wrap items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-clay transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "loading" && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </button>

                <a
                  href="https://wa.me/447466660294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:border-clay hover:text-clay transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Or WhatsApp directly
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft mb-2">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-paper border border-line rounded-[2px] px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-clay transition-colors"
      />
    </div>
  );
}
