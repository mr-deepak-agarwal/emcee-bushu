"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { galleryItems } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, var(--color-spotlight) 0, var(--color-spotlight) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-end justify-between mb-12 relative z-10">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-spotlight-soft mb-5">
            [ FROM THE LAST RUN OF SHOWS ]
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.0] text-paper font-medium">
            On stage,{" "}
            <span className="italic text-spotlight-soft">on location.</span>
          </h2>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll gallery left"
            className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center text-paper hover:bg-spotlight-soft hover:border-spotlight-soft hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll gallery right"
            className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center text-paper hover:bg-spotlight-soft hover:border-spotlight-soft hover:text-ink transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4 relative z-10 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="snap-start flex-shrink-0 w-[280px] md:w-[360px]"
          >
            <PlaceholderImage variant="nude" label={item.label} aspect="aspect-[3/4]" />
            <div className="flex items-center justify-between mt-4">
              <p className="text-paper text-sm">{item.label}</p>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-spotlight-soft border border-spotlight-soft/30 rounded-full px-2.5 py-1">
                {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
