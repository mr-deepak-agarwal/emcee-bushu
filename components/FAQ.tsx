"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "Popular dates (weekends, festival season) get booked 3–6 months out. For UK bookings between June–August, the earlier the better — those months fill up fast.",
  },
  {
    q: "Do you travel outside Goa / the UK?",
    a: "Yes — available for worldwide booking. Travel and accommodation are scoped into the quote for events outside the home base.",
  },
  {
    q: "Can you host in multiple languages?",
    a: "Yes, hosting is comfortable in English, Hindi, and Konkani — let me know what mix suits your guests.",
  },
  {
    q: "What's included in the choreography sessions?",
    a: "Personalised choreography for couples, families, or groups — traditional, contemporary, or fusion — rehearsed over sessions leading up to the event.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream-deep px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow text-center text-lavender-600">FAQ</p>
        <h2 className="mt-3 text-center font-display text-3xl text-plum md:text-4xl">
          Good to know.
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-lavender-200/70 bg-cream">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-plum">{f.q}</span>
                  <span
                    className={`shrink-0 text-xl text-lavender-600 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-plum/70">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
