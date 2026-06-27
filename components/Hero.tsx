"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { tickerItems } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";
import SpinBadge from "./SpinBadge";
import ParallaxField, { FloatItem } from "./ParallaxField";

const floatItems: FloatItem[] = [
  { shape: "star", top: "12%", left: "6%", size: 26, speed: 1.4, color: "var(--color-spotlight)", rotateSpeed: 0.6 },
  { shape: "ring", top: "70%", left: "10%", size: 70, speed: 0.6, color: "var(--color-clay)" },
  { shape: "note", top: "20%", left: "88%", size: 38, speed: 1.1, color: "var(--color-ink)", rotateSpeed: 0.3 },
  { shape: "ticket", top: "60%", left: "92%", size: 48, speed: 0.8, color: "var(--color-clay)", rotateSpeed: -0.2 },
  { shape: "star", top: "85%", left: "78%", size: 18, speed: 1.6, color: "var(--color-spotlight)", rotateSpeed: 0.8 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    let raf: number;
    let lastY = window.scrollY;
    const tick = () => {
      const y = window.scrollY;
      const velocity = y - lastY;
      lastY = y;
      if (titleRef.current) {
        const skew = Math.max(-6, Math.min(6, velocity * 0.4));
        titleRef.current.style.transform = `skewX(${skew}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100vh] flex flex-col justify-between pt-28 pb-0 overflow-hidden bg-paper"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 8%, var(--color-spotlight-soft) 0%, transparent 40%), radial-gradient(circle at 8% 95%, var(--color-clay) 0%, transparent 35%), radial-gradient(circle at 50% 50%, var(--color-nude-2) 0%, transparent 60%)",
            opacity: 0.55,
          }}
        />
      </motion.div>

      <ParallaxField items={floatItems} className="-z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.5fr_1fr] gap-10 items-center flex-1 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-7 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
            Now booking — Worldwide 2026
          </motion.div>

          <motion.h1
            ref={titleRef}
            style={{ y: headlineY }}
            className="font-display leading-[0.86] tracking-tight"
          >
            <Word delay={0.2} className="block text-[15vw] md:text-[7.4vw] font-medium">
              SHE DOESN&apos;T
            </Word>
            <Word delay={0.4} className="block text-[15vw] md:text-[7.4vw] font-medium">
              HOST.
            </Word>
            <Word
              delay={0.6}
              className="block text-[15vw] md:text-[7.4vw] italic text-clay font-medium -mt-1 md:-mt-3"
            >
              SHE PERFORMS.
            </Word>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-9 text-lg text-ink-soft max-w-md leading-relaxed"
          >
            Emcee, host &amp; choreographer based in Goa — booking weddings,
            corporate events and celebrations across India, the UK and
            Ireland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#book" primary>
              Book Bushu
            </MagneticButton>
            <MagneticButton href="#gallery">
              <Play className="w-3.5 h-3.5" fill="currentColor" />
              Watch Her Work
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden md:block"
        >
          <div className="rotate-2">
            <PlaceholderImage variant="clay" label="Hero portrait — mid performance" aspect="aspect-[3/4]" />
          </div>
          <motion.div
            style={{ opacity: fade }}
            className="absolute -bottom-8 -left-10"
          >
            <SpinBadge size={130} />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-line bg-ink py-4 overflow-hidden z-10">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
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

function Word({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`overflow-hidden ${className}`} style={{ display: "block" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MagneticButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={
        "inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase transition-[background-color,color,border-color] duration-300 ease-out " +
        (primary
          ? "bg-ink text-paper hover:bg-clay"
          : "border border-ink/20 hover:border-clay hover:text-clay")
      }
      style={{ transition: "transform 0.2s ease-out, background-color 0.3s, color 0.3s, border-color 0.3s" }}
    >
      {children}
    </a>
  );
}
