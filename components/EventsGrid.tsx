"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/lib/data";

export default function EventsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {events.map((e, i) => (
        <motion.div
          key={e.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -6 }}
          className="flex flex-col rounded-2xl border border-lavender-200/70 bg-cream-deep p-7 transition-shadow hover:shadow-lg hover:shadow-lavender-200/50"
        >
          <span className="text-3xl">{e.icon}</span>
          <h2 className="mt-4 font-display text-2xl text-plum">{e.title}</h2>
          <p className="mt-2 flex-1 text-sm text-plum/65">{e.blurb}</p>
          <Link
            href="/book"
            className="focus-ring mt-5 text-sm font-semibold text-lavender-600 hover:underline"
          >
            Enquire for {e.title.toLowerCase()} →
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
