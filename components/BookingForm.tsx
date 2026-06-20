"use client";

import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Baptism / Communion",
  "Bridal / Baby Shower",
  "Engagement",
  "School Event",
  "Team Building",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-lavender-200 bg-cream-deep p-10 text-center">
        <span className="text-4xl">🎉</span>
        <h3 className="mt-4 font-display text-2xl text-plum">Enquiry sent!</h3>
        <p className="mt-2 text-plum/70">
          You'll get a confirmation email shortly. Bushu will reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="focus-ring btn-ghost mt-6 rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Email address" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
        <Field label="WhatsApp number" name="whatsapp" type="tel" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-plum/80">
            Event type
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="focus-ring w-full rounded-xl border border-lavender-200 bg-cream px-4 py-3 text-sm text-plum outline-none transition-colors focus:border-lavender-400"
          >
            <option value="">Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <Field label="Event date" name="eventDate" type="date" required />
      </div>

      <Field label="Event location / city" name="location" required />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-plum/80">
          Tell me about your event
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="focus-ring w-full rounded-xl border border-lavender-200 bg-cream px-4 py-3 text-sm text-plum outline-none transition-colors focus:border-lavender-400"
          placeholder="Guest count, venue, vibe you're going for..."
        />
      </div>

      {/* Honeypot field for basic spam protection */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring btn-primary w-full rounded-full px-8 py-4 text-sm font-semibold disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Booking Enquiry 🎤"}
      </button>

      <p className="text-center text-xs text-plum/50">
        You'll get a confirmation email immediately. Bushu will reply within 24 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-plum/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring w-full rounded-xl border border-lavender-200 bg-cream px-4 py-3 text-sm text-plum outline-none transition-colors focus:border-lavender-400"
      />
    </div>
  );
}
