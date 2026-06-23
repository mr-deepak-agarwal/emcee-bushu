"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { mapPins } from "@/app/lib/data";

const countries = ["India","UAE","UK","USA","Singapore","Germany","France","Japan","Kenya","South Africa","Switzerland","Canada","Thailand","Australia","Italy","Netherlands","Brazil","Saudi Arabia","Malaysia","Maldives","Sri Lanka","Bahrain","Qatar","Oman","Nigeria","Egypt","Turkey","Greece","Spain","New Zealand","+12 more"];

export default function GlobalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const bgY = useTransform(scrollYProgress, [0,1], [-30, 30]);

  return (
    <section id="global" className="section-pad overflow-hidden" style={{ background: "var(--charcoal)" }}>
      <motion.div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref} style={{ y: bgY }}>

        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="gold-line" />
            <p className="eyebrow">Global Presence</p>
            <span className="gold-line" />
          </motion.div>
          <motion.h2 className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            42+ Countries.{" "}
            <em className="gold-text not-italic">One Consistent Voice.</em>
          </motion.h2>
          <motion.p className="text-white/30 text-sm mt-5 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            From Manhattan boardrooms to Singapore conference halls, Tuscan estates to Nairobi government summits — no stage too large, no audience too diverse.
          </motion.p>
        </div>

        {/* Map */}
        <motion.div className="relative w-full"
          initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="relative w-full overflow-hidden"
            style={{ paddingBottom: "48%", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="absolute inset-0">
              {/* Grid */}
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(184,148,63,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(184,148,63,0.04) 1px, transparent 1px)", backgroundSize: "10% 10%" }} />
              {/* Continent SVG */}
              <svg viewBox="0 0 1000 480" className="absolute inset-0 w-full h-full" style={{ fill:"none", stroke:"rgba(184,148,63,0.2)", strokeWidth:"0.6" }}>
                <path d="M80,70 L210,55 L270,110 L280,190 L230,250 L185,270 L145,248 L105,210 L65,165 Z"/>
                <path d="M185,278 L238,265 L265,330 L255,415 L215,445 L182,415 L168,358 Z"/>
                <path d="M430,58 L530,50 L552,108 L518,148 L462,155 L432,122 Z"/>
                <path d="M452,162 L545,158 L568,268 L528,358 L475,368 L434,308 L422,225 Z"/>
                <path d="M555,42 L810,38 L848,128 L808,210 L705,228 L605,186 L555,122 Z"/>
                <path d="M755,308 L868,298 L888,378 L838,408 L762,398 L732,348 Z"/>
              </svg>
              {/* Pins */}
              {mapPins.map((pin, i) => (
                <motion.div key={pin.name} className="map-pin group"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04, type: "spring", stiffness: 200 }}>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 text-[8px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ background: "#111", border: "1px solid rgba(184,148,63,0.3)" }}>
                    {pin.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Country tags */}
        <motion.div className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          {countries.map(c => (
            <span key={c} className="text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 transition-colors duration-300 hover:text-[#B8943F]"
              style={{ color: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}>
              {c}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
