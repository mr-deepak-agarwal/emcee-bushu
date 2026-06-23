"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clients } from "@/app/lib/data";

export default function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 overflow-hidden" style={{ background: "var(--ivory)", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <motion.div className="flex items-center gap-5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="gold-line" />
          <p className="eyebrow">Trusted By</p>
          <span className="gold-line" />
        </motion.div>
      </div>
      <div className="overflow-hidden select-none">
        <div className="marquee-track gap-16">
          {doubled.map((c, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#B8943F]"
                style={{ color: "rgba(0,0,0,0.18)" }}>{c}</p>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(184,148,63,0.3)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
