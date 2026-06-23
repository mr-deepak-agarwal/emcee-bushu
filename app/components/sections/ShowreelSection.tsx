"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const reels = [
  { title: "Corporate & Conference", duration: "2:34" },
  { title: "Luxury Weddings", duration: "1:58" },
  { title: "Award Ceremonies", duration: "2:12" },
  { title: "International Events", duration: "3:01" },
];

const bgs = [
  "linear-gradient(135deg,#1a1208,#0a0800)",
  "linear-gradient(135deg,#1a0f0f,#0a0808)",
  "linear-gradient(135deg,#101a0f,#080d08)",
  "linear-gradient(135deg,#0f101a,#08080d)",
];

export default function ShowreelSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showreel" className="section-pad dark-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <motion.div className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="gold-line" />
            <p className="eyebrow">In Action</p>
          </motion.div>
          <motion.h2 className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            The <em className="gold-text not-italic">Showreel</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main player */}
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative aspect-video group overflow-hidden" style={{ background: bgs[active] }} data-hover>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center backdrop-blur-sm group-hover:border-[#B8943F]/60 group-hover:bg-[#B8943F]/08 transition-all duration-500"
                  whileHover={{ scale: 1.12 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8943F" className="ml-1">
                    <path d="M5 3l14 9-14 9V3z"/>
                  </svg>
                </motion.div>
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <p className="font-display text-white text-xl font-light">{reels[active].title}</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase mt-1">{reels[active].duration}</p>
              </div>
            </div>
          </motion.div>

          {/* Reel list */}
          <motion.div className="flex flex-col gap-2"
            initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            {reels.map((reel, i) => (
              <div key={reel.title} onClick={() => setActive(i)} data-hover
                className="flex gap-4 p-4 border transition-all duration-300 cursor-none"
                style={{ borderColor: active === i ? "rgba(184,148,63,0.35)" : "rgba(255,255,255,0.05)", background: active === i ? "rgba(184,148,63,0.04)" : "transparent" }}>
                <div className="w-20 h-14 flex-shrink-0 flex items-center justify-center" style={{ background: bgs[i] }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(184,148,63,0.7)"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-sm">{reel.title}</p>
                  <p className="text-white/30 text-[10px] mt-1 tracking-widest">{reel.duration}</p>
                </div>
              </div>
            ))}
            <div className="border border-white/5 p-5 mt-1">
              <p className="font-display text-white text-lg font-light mb-2">Want a custom reel?</p>
              <p className="text-white/30 text-xs leading-relaxed mb-4">A showreel tailored to your event type, on request.</p>
              <a href="#booking" className="btn-outline text-[10px] px-5 py-3 inline-flex" data-hover>Request Reel</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
