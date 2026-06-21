"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Essential",
    tagline: "Intimate gatherings",
    points: [
      "Up to 3 hours hosting",
      "1 pre-event planning call",
      "Custom run-of-show",
      "Mic + sound coordination",
    ],
    featured: false,
  },
  {
    name: "Signature",
    tagline: "Weddings & corporate nights",
    points: [
      "Up to 6 hours hosting",
      "2 planning calls + vendor coordination",
      "Custom run-of-show + games/activities",
      "Choreography session (1 dance)",
      "On-site arrival 1hr early",
    ],
    featured: true,
  },
  {
    name: "Headliner",
    tagline: "Galas & multi-day events",
    points: [
      "Full-day / multi-day hosting",
      "Unlimited planning calls",
      "Full production coordination",
      "Choreography (multiple routines)",
      "Travel-ready, worldwide booking",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow text-lavender-600">Packages</p>
          <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
            Built around <span className="italic text-lavender-600">your event.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-plum/65">
            Every package is a starting point — final scope is always tailored on a call.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: p.featured ? -16 : -6 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.featured
                  ? "bg-plum text-cream shadow-2xl shadow-plum/30 md:-translate-y-3"
                  : "border border-lavender-200/70 bg-cream-deep text-plum"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-plum">
                  Most Booked
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-cream/65" : "text-plum/60"}`}>
                {p.tagline}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className={p.featured ? "text-gold" : "text-lavender-600"}>✦</span>
                    <span className={p.featured ? "text-cream/85" : "text-plum/75"}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className={`focus-ring mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-gold text-plum" : "btn-primary"
                }`}
              >
                Enquire — {p.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
