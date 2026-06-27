"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { heroWords, tickerItems } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-0 overflow-hidden"
    >
      {/* ambient backdrop texture */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, var(--color-spotlight-soft) 0%, transparent 45%), radial-gradient(circle at 10% 90%, var(--color-nude-2) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center flex-1">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
            Now booking — Worldwide 2026
          </motion.div>

          <h1 className="font-display text-[13vw] md:text-[5.2vw] leading-[0.95] font-medium tracking-tight">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  "inline-block mr-[0.25em] " +
                  (word === "PERFORMS." ? "italic text-clay" : "")
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 text-lg text-ink-soft max-w-md leading-relaxed"
          >
            Emcee, host & choreographer based in Goa — booking weddings,
            corporate events and celebrations across India, the UK and
            Ireland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-ink text-paper px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-clay transition-colors duration-300"
            >
              Book Bushu
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:border-clay hover:text-clay transition-colors duration-300"
            >
              <Play className="w-3.5 h-3.5" fill="currentColor" />
              Watch Her Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden md:block"
        >
          <PlaceholderImage
            variant="clay"
            label="Hero portrait — mid performance"
            aspect="aspect-[3/4]"
          />
          <div className="absolute -bottom-6 -left-6 bg-paper border border-line rounded-[2px] px-5 py-4 shadow-[0_8px_30px_rgba(43,36,32,0.08)]">
            <p className="font-display italic text-2xl">10+</p>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-soft">
              years on stage
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="hidden md:flex mx-auto mb-6 flex-col items-center gap-2 text-ink-soft hover:text-clay transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>

      {/* marquee ticker */}
      <div className="relative border-t border-line bg-ink py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 mx-6 flex items-center gap-6"
            >
              {item}
              <span className="text-clay">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
