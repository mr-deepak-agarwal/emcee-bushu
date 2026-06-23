"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { awards } from "@/app/lib/data";

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" className="section-pad" style={{ background: "var(--ivory)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-4">
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" />
              <p className="eyebrow">Recognition</p>
            </motion.div>
            <motion.h2 className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Awards &{" "}
              <em className="gold-text not-italic">Recognition</em>
            </motion.h2>
            <motion.p className="text-sm leading-relaxed mt-5" style={{ color: "var(--warm-gray)" }}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              A track record acknowledged by the world&rsquo;s most discerning organisations in events, media, and culture.
            </motion.p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative pl-7">
              <motion.div className="timeline-line"
                initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                style={{ transformOrigin: "top" }} />

              {awards.map((award, i) => (
                <motion.div key={award.title}
                  className="flex gap-6 pb-9 relative group"
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}>
                  {/* Timeline dot */}
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full border-2 mt-1.5 transition-colors duration-300 group-hover:bg-[#B8943F]"
                    style={{ borderColor: "#B8943F", background: "var(--ivory)" }} />

                  <p className="font-display text-2xl font-light flex-shrink-0 w-14 pt-0.5" style={{ color: "#B8943F" }}>
                    {award.year}
                  </p>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8943F" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                      <h3 className="font-medium text-sm" style={{ color: "var(--charcoal)" }}>{award.title}</h3>
                    </div>
                    <p className="text-xs" style={{ color: "var(--warm-gray)" }}>{award.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
