"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const saturate = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const filter = useTransform(
    saturate,
    (v) => `grayscale(${1 - v}) brightness(${0.95 + v * 0.05})`
  );

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div style={{ scale }} className="order-2 md:order-1">
          <motion.div style={{ filter }}>
            <PlaceholderImage
              variant="nude"
              label="Bushu — candid, off-stage"
              aspect="aspect-[4/5]"
            />
          </motion.div>
        </motion.div>

        <div className="order-1 md:order-2">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ THE STORY SO FAR ]
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
            Not every host can{" "}
            <span className="italic text-clay">read a room.</span>
          </h2>
          <div className="space-y-5 text-ink-soft text-lg leading-relaxed max-w-lg">
            <p>
              I started hosting because I couldn&apos;t stand watching a good
              party run flat. A decade later, that&apos;s still the job:
              walking into a room of strangers and leaving them dancing,
              laughing, or in tears for the right reasons.
            </p>
            <p>
              Based in Goa, booked across India, the UK and Ireland — I bring
              the same energy whether it&apos;s 50 people at a baptism or 500
              at a corporate gala. I also choreograph couple and group
              performances, because the best events have more than one
              showstopper moment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-clay pl-4">
                <p className="font-display text-3xl italic">{stat.value}</p>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
