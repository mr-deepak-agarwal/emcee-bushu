"use client";

import { motion } from "framer-motion";

type Testimonial = { quote: string; name: string; role: string };

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-center text-lavender-600"
        >
          In their words
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 text-center font-display text-3xl text-plum md:text-4xl"
        >
          Clients who've had her on stage.
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-lavender-200/70 bg-cream-deep p-7 transition-shadow hover:shadow-lg hover:shadow-lavender-200/40"
            >
              <blockquote className="font-display text-lg italic leading-snug text-plum/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-plum">{t.name}</span>
                <span className="block text-plum/55">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
