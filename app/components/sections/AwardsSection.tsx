"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { awards } from "@/app/lib/data";
import { Award } from "lucide-react";

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-pad" style={{ background: "var(--ivory)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Recognition
            </motion.p>
            <motion.h2
              className="font-display leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Awards &{" "}
              <em className="gold-text not-italic">Recognition</em>
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed mt-5"
              style={{ color: "var(--warm-gray)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              A track record of excellence acknowledged by the world&rsquo;s most discerning organizations in events, media, and culture.
            </motion.p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative pl-6">
              {/* Timeline line */}
              <motion.div
                className="timeline-line"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              />

              <div className="space-y-0">
                {awards.map((award, i) => (
                  <motion.div
                    key={award.title}
                    className="flex gap-6 pb-10 relative group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[22px] w-3 h-3 rounded-full border-2 border-[var(--gold)] bg-[var(--ivory)] group-hover:bg-[var(--gold)] transition-colors duration-300 mt-1.5"
                    />

                    <div className="flex gap-6 items-start">
                      <p
                        className="font-display text-2xl font-light flex-shrink-0 w-12"
                        style={{ color: "var(--gold)" }}
                      >
                        {award.year}
                      </p>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Award size={13} style={{ color: "var(--gold)" }} />
                          <h3 className="font-medium text-sm" style={{ color: "var(--charcoal)" }}>
                            {award.title}
                          </h3>
                        </div>
                        <p className="text-xs" style={{ color: "var(--warm-gray)" }}>
                          {award.org}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
