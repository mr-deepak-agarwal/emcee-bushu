"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/lib/data";

export default function ServicesScroller() {
  const loop = [...events, ...events];

  return (
    <section className="overflow-hidden bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-lavender-600">Services</p>
            <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
              Every occasion, <span className="italic text-lavender-600">every beat.</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="focus-ring hidden shrink-0 text-sm font-semibold text-lavender-600 hover:underline md:block"
          >
            View all services →
          </Link>
        </div>
      </div>

      <div className="group relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-deep to-transparent" />

        <div className="flex w-max gap-5 [animation:scroller_38s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((e, i) => (
            <motion.div
              key={`${e.title}-${i}`}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-72 shrink-0 rounded-2xl border border-lavender-200/70 bg-cream p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-lavender-200/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 text-2xl">
                {e.icon}
              </span>
              <h3 className="mt-4 font-display text-xl text-plum">{e.title}</h3>
              <p className="mt-2 text-sm text-plum/65">{e.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Link
        href="/events"
        className="focus-ring mt-8 block px-6 text-center text-sm font-semibold text-lavender-600 hover:underline md:hidden"
      >
        View all services →
      </Link>

      <style>{`
        @keyframes scroller {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
