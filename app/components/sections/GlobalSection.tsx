"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mapPins } from "@/app/lib/data";

export default function GlobalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="global" className="section-pad" style={{ background: "var(--charcoal)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        
        <div className="text-center mb-16">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Global Presence
          </motion.p>
          <motion.h2
            className="font-display text-white leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            42+ Countries.{" "}
            <em className="gold-text not-italic">One Consistent Voice.</em>
          </motion.h2>
          <motion.p
            className="text-white/30 text-sm mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            From the boardrooms of Manhattan to the conference halls of Singapore, from luxury estates in 
            Tuscany to government summits in Nairobi — no stage is too large, no audience too diverse.
          </motion.p>
        </div>

        {/* World map with pins */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Map background - SVG world map outline */}
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: "50%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Simple continent outlines using divs as placeholder */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full opacity-10"
                style={{ fill: "none", stroke: "rgba(200,169,107,0.4)", strokeWidth: "0.5" }}
              >
                {/* North America */}
                <path d="M80,60 L200,50 L260,100 L270,180 L220,240 L180,260 L140,240 L100,200 L60,160 Z" />
                {/* South America */}
                <path d="M180,270 L230,260 L260,320 L250,400 L210,430 L180,400 L165,350 Z" />
                {/* Europe */}
                <path d="M430,50 L520,45 L540,100 L510,140 L460,150 L430,120 Z" />
                {/* Africa */}
                <path d="M450,160 L540,155 L560,260 L520,350 L470,360 L430,300 L420,220 Z" />
                {/* Asia */}
                <path d="M550,40 L800,35 L840,120 L800,200 L700,220 L600,180 L550,120 Z" />
                {/* Australia */}
                <path d="M750,300 L860,290 L880,370 L830,400 L760,390 L730,340 Z" />
              </svg>

              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(200,169,107,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.05) 1px, transparent 1px)`,
                backgroundSize: "10% 10%",
              }} />

              {/* Map pins */}
              {mapPins.map((pin, i) => (
                <motion.div
                  key={pin.name}
                  className="map-pin group"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--charcoal)] border border-[var(--gold)]/30 px-2 py-1 text-[9px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {pin.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Country tags */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {["India", "UAE", "UK", "USA", "Singapore", "Germany", "France", "Japan", "Kenya", "South Africa", "Switzerland", "Canada", "Thailand", "Australia", "Italy", "Netherlands", "Brazil", "Saudi Arabia", "Malaysia", "Maldives", "Sri Lanka", "+22 more"].map((country) => (
            <span
              key={country}
              className="text-[10px] tracking-widest uppercase px-3 py-1.5 border text-white/30 border-white/5 hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-colors duration-300"
            >
              {country}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
