"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-44 bg-nude/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
          [ HAPPY CLIENT FEEDBACK ]
        </p>
        <h2 className="font-display text-5xl md:text-6xl leading-[1.0] font-medium">
          They booked an emcee.{" "}
          <span className="italic text-clay">They got a memory.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-nude/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-nude/40 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-[testimonial-scroll_38s_linear_infinite] hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[360px] bg-paper-2 border border-line rounded-[2px] p-8"
            >
              <Quote className="w-6 h-6 text-clay mb-5" strokeWidth={1.5} />
              <p className="text-ink-soft leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
