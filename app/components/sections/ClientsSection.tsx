"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clients } from "@/app/lib/data";

export default function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-16" style={{ background: "var(--beige)", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="gold-line" />
          <p className="eyebrow">Trusted By</p>
          <div className="gold-line" />
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-12 items-center">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 group"
            >
              <p
                className="text-sm font-medium tracking-widest whitespace-nowrap transition-colors duration-300 group-hover:text-[var(--gold)]"
                style={{ color: "rgba(0,0,0,0.2)" }}
              >
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
