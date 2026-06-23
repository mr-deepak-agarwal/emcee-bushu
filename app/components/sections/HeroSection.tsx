"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { stats } from "@/app/lib/data";

/* ── Animated counter ── */
function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let cur = 0;
      const inc = target / 80;
      const t = setInterval(() => {
        cur += inc;
        if (cur >= target) { setVal(target); clearInterval(t); }
        else setVal(parseFloat(cur.toFixed(decimal ? 1 : 0)));
      }, 20);
      obs.disconnect();
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, decimal]);
  return <div ref={ref} className="stat-number">{decimal ? val.toFixed(1) : val}{suffix}</div>;
}

/* ── Carousel slides ── */
const slides = [
  {
    label: "World Economic Forum",
    sub: "Davos, Switzerland · 2024",
    accent: "rgba(184,148,63,0.15)",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1208 100%)",
  },
  {
    label: "APAC Tech Summit",
    sub: "Singapore · 8,000 Delegates",
    accent: "rgba(100,120,180,0.12)",
    bg: "linear-gradient(135deg, #080810 0%, #0f0f1a 100%)",
  },
  {
    label: "Royal Destination Wedding",
    sub: "Udaipur, India · Private Client",
    accent: "rgba(180,80,80,0.1)",
    bg: "linear-gradient(135deg, #0d0808 0%, #1a0f0f 100%)",
  },
  {
    label: "Global Climate Leadership",
    sub: "Dubai, UAE · 5,000 Attendees",
    accent: "rgba(60,140,100,0.12)",
    bg: "linear-gradient(135deg, #080e0a 0%, #0d1610 100%)",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const next = useCallback(() => setActive((a) => (a + 1) % slides.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#080808]">

      {/* ── Background carousel with parallax ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: slides[active].bg }}
          >
            {/* Coloured accent radial */}
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 70% 50%, ${slides[active].accent}, transparent)` }} />
          </motion.div>
        </AnimatePresence>

        {/* Grid */}
        <div className="grid-overlay" />
        {/* Noise */}
        <div className="noise-overlay" />

        {/* Gold ambient glow */}
        <motion.div
          className="ambient-glow w-[700px] h-[700px]"
          style={{ top: "-20%", right: "-10%", background: "radial-gradient(circle, rgba(184,148,63,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ambient-glow w-[400px] h-[400px]"
          style={{ bottom: "5%", left: "-5%", background: "radial-gradient(circle, rgba(184,148,63,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* Left: Text */}
          <motion.div className="lg:col-span-7 flex flex-col justify-center" style={{ y: textY, opacity }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-line" />
              <p className="eyebrow">International Stage Personality</p>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1
                className="font-display text-white leading-[0.92]"
                style={{ fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 300 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Creating
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="font-display leading-[0.92]"
                style={{ fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 300 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="gold-text italic">Unforgettable</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="font-display text-white/20 leading-[0.92]"
                style={{ fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 300 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Experiences
              </motion.h1>
            </div>

            <motion.p
              className="mt-8 text-white/35 text-xs tracking-[0.25em] uppercase font-light max-w-sm leading-loose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
            >
              Anchor · Emcee · Moderator · Corporate Host · Event Presenter
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.1 }}
            >
              <a href="#booking" className="btn-primary" data-hover>Book for Your Event</a>
              <button
                className="btn-outline flex items-center gap-3"
                onClick={() => setVideoOpen(true)}
                data-hover
              >
                <span className="w-8 h-8 rounded-full border border-[#B8943F]/50 flex items-center justify-center">
                  <Play size={10} fill="currentColor" />
                </span>
                Watch Showreel
              </button>
            </motion.div>

            {/* Live event badge */}
            <motion.div
              className="mt-10 inline-flex items-center gap-3 max-w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
            >
              <div className="glass-dark px-4 py-2.5 flex items-center gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8943F] animate-pulse" />
                    <span className="text-white/50 text-[10px] tracking-widest uppercase">
                      {slides[active].label}
                    </span>
                    <span className="text-white/20 text-[10px]">·</span>
                    <span className="text-white/30 text-[10px] tracking-wider">
                      {slides[active].sub}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo frame + carousel controls */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative corner lines */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B8943F]/30" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B8943F]/30" />

            {/* Photo container */}
            <div className="relative aspect-[3/4] overflow-hidden" style={{ background: "linear-gradient(160deg, #181208, #0e0e0e)" }}>
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-20">
                <svg viewBox="0 0 60 60" className="w-14 h-14" fill="none">
                  <rect x="20" y="8" width="20" height="28" rx="10" stroke="#B8943F" strokeWidth="1.5"/>
                  <path d="M12 30c0 9.941 8.059 18 18 18s18-8.059 18-18" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="30" y1="48" x2="30" y2="56" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="22" y1="56" x2="38" y2="56" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-[#B8943F] text-[9px] tracking-widest uppercase text-center">
                  Replace with<br />professional photo
                </p>
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080808 0%, transparent 50%)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(8,8,8,0.4) 100%)" }} />

              {/* Name on photo */}
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-white text-2xl font-light tracking-wide">Aria Kapoor</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="gold-line w-6" />
                  <p className="eyebrow text-[9px]">Global Stage Personality</p>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -left-8 top-1/4 glass-dark px-5 py-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-display text-3xl text-white font-light">800+</p>
              <p className="eyebrow text-[8px] mt-1">Events Hosted</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Carousel nav + stats ── */}
        <motion.div
          className="border-t border-white/5 pt-8 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4 }}
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {stats.map((s, i) => (
              <div key={i}>
                <Counter target={s.value} suffix={s.suffix} decimal={s.decimal} />
                <p className="text-white/25 text-[9px] tracking-[0.2em] uppercase mt-1 font-light">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-4">
            <button onClick={prev} className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8943F]/50 hover:text-[#B8943F] transition-all duration-300" data-hover>
              <ChevronLeft size={14} />
            </button>
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} data-hover
                  className="transition-all duration-400"
                  style={{ width: active === i ? 24 : 5, height: 1.5, background: active === i ? "#B8943F" : "rgba(255,255,255,0.2)" }}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8943F]/50 hover:text-[#B8943F] transition-all duration-300" data-hover>
              <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-white/20 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#B8943F]/40" />
      </motion.div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideoOpen(false)}>
            <div className="w-full max-w-4xl px-4" onClick={e => e.stopPropagation()}>
              <div className="aspect-video bg-black">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen />
              </div>
              <button className="mt-4 text-white/30 text-[10px] tracking-widest uppercase hover:text-white transition-colors w-full text-center" onClick={() => setVideoOpen(false)}>Close ✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
