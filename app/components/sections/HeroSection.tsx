"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import { stats } from "@/app/lib/data";

function AnimatedCounter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(parseFloat(start.toFixed(decimal ? 1 : 0)));
          }
        }, step);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <span ref={ref} className="stat-number">
      {decimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0E0E0E] flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background elements */}
      <div
        className="ambient-glow w-[600px] h-[600px] top-[-10%] right-[-10%] opacity-20"
        style={{ background: "radial-gradient(circle, #C8A96B 0%, transparent 70%)" }}
      />
      <div
        className="ambient-glow w-[400px] h-[400px] bottom-[10%] left-[-5%] opacity-10"
        style={{ background: "radial-gradient(circle, #C8A96B 0%, transparent 70%)" }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(200,169,107,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.3) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.4 }}
            >
              <p className="eyebrow mb-6">International Stage Personality</p>
            </motion.div>

            <motion.h1
              className="font-display text-white leading-[0.95] mb-8"
              style={{ fontSize: "clamp(52px, 7vw, 108px)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Creating{" "}
              <em className="gold-text not-italic">Unforgettable</em>
              <br />
              Experiences
              <br />
              <span className="text-white/30">Across Global</span>
              <br />
              <span className="text-white/30">Stages.</span>
            </motion.h1>

            <motion.p
              className="text-white/40 text-sm tracking-widest uppercase font-light mb-10 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.8 }}
            >
              International Anchor · Emcee · Moderator · Corporate Host · Event Presenter
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.0 }}
            >
              <a href="#booking" className="btn-primary" data-hover>
                Book for Your Event
              </a>
              <button
                className="btn-outline flex items-center gap-3"
                onClick={() => setVideoPlaying(true)}
                data-hover
              >
                <div className="w-7 h-7 rounded-full border border-[var(--gold)] flex items-center justify-center">
                  <Play size={10} fill="currentColor" />
                </div>
                Watch Showreel
              </button>
            </motion.div>
          </div>

          {/* Right: Photo + decorative */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 opacity-20"
                style={{ border: "1px solid var(--gold)" }}
              />
              <div
                className="absolute -inset-6 opacity-10"
                style={{ border: "1px solid var(--gold)" }}
              />

              {/* Photo placeholder */}
              <div
                className="relative w-full aspect-[3/4] overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" }}
              >
                {/* Placeholder for real photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <span className="text-3xl">🎤</span>
                  </div>
                  <p className="text-white/20 text-xs tracking-widest uppercase">
                    Replace with your<br />professional photo
                  </p>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, #0E0E0E 0%, transparent 40%)"
                }} />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-white text-2xl font-light">Aria Kapoor</p>
                  <p className="text-[var(--gold)] text-xs tracking-widest uppercase mt-1">
                    Global Stage Personality
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-4 top-1/3 glass-dark px-4 py-3 text-right"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display text-2xl text-white font-light">42+</p>
                <p className="text-[var(--gold)] text-[9px] tracking-widest uppercase">Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="border-t border-white/5 pt-10 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                <p className="text-white/30 text-[10px] tracking-widest uppercase mt-1 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={12} />
      </motion.div>

      {/* Video modal */}
      {videoPlaying && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setVideoPlaying(false)}
        >
          <div className="w-full max-w-4xl px-4" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-black flex items-center justify-center relative">
              {/* Replace src with real YouTube embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <button
              className="mt-4 text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors w-full text-center"
              onClick={() => setVideoPlaying(false)}
            >
              Close ✕
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
