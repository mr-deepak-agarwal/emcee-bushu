"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const f = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  return (
    <section id="about" className="section-pad" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-6">
            <motion.div className="flex items-center gap-3 mb-6" {...f(0)}>
              <span className="gold-line" />
              <p className="eyebrow">The Story</p>
            </motion.div>

            <motion.h2 className="font-display leading-[0.93] mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300, color: "var(--charcoal)" }}
              {...f(0.1)}>
              A Voice That Commands Rooms.{" "}
              <em className="gold-text not-italic">A Presence That Defines Events.</em>
            </motion.h2>

            <motion.div className="space-y-5 text-sm leading-[1.95]" style={{ color: "var(--warm-gray)" }} {...f(0.2)}>
              <p>Aria Kapoor is not simply a host — she is an experience architect. With over 18 years on global stages across 42 countries, she has mastered the art of commanding attention, holding energy, and shaping narratives that resonate long after an event concludes.</p>
              <p>Her journey began at All India Radio at the age of 19, where she discovered her gift for crafting intimacy through voice. What followed was an extraordinary ascent — from national television anchoring to keynote facilitation for the world's most influential institutions.</p>
              <p>She has shared stages with Nobel laureates, heads of state, CEOs of Fortune 100 companies, and cultural icons. Yet her most consistent gift is making every person in the room — whether five hundred or fifty thousand — feel personally seen.</p>
            </motion.div>

            <motion.div className="mt-12 grid grid-cols-3 gap-0" {...f(0.3)}>
              {[["18+","Years on Stage"],["42+","Countries"],["800+","Events"]].map(([num, label], i) => (
                <div key={i} className={`py-6 ${i > 0 ? "pl-6 border-l border-black/8" : ""}`}>
                  <p className="font-display text-4xl font-light" style={{ color: "#B8943F" }}>{num}</p>
                  <p className="text-[10px] tracking-widest uppercase mt-1.5" style={{ color: "var(--warm-gray)" }}>{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-2" {...f(0.35)}>
              {["Bilingual EN/HI","Protocol-Sensitive","Teleprompter-Free","Improv-Trained","LGBTQ+ Inclusive"].map(tag => (
                <span key={tag} className="text-[9px] tracking-[0.15em] uppercase px-3 py-1.5"
                  style={{ border: "1px solid rgba(184,148,63,0.18)", color: "var(--warm-gray)" }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: editorial image layout with parallax */}
          <div className="lg:col-span-6">
            <motion.div className="grid grid-cols-2 gap-3" {...f(0.25)}>
              {/* Tall main image */}
              <motion.div style={{ y: imgY }}
                className="col-span-1 row-span-2 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3 }}>
                <div className="h-full min-h-[340px] flex items-center justify-center"
                  style={{ background: "linear-gradient(160deg, #1a1208, #0e0e0e)" }}>
                  <p className="text-white/10 text-[9px] tracking-widest uppercase text-center px-4">Portrait Photo<br />(Replace)</p>
                </div>
              </motion.div>

              {/* Top-right image */}
              <motion.div className="relative overflow-hidden aspect-square"
                initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}>
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--beige), var(--ivory))" }}>
                  <p className="text-black/12 text-[9px] tracking-widest uppercase text-center px-2">Event Photo</p>
                </div>
              </motion.div>

              {/* Bottom-right quote card */}
              <motion.div className="aspect-square flex flex-col items-center justify-center p-6 text-center"
                style={{ background: "var(--charcoal)" }}
                initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.5 }}>
                <p className="font-display text-white text-base font-light leading-snug italic">
                  &ldquo;I don&rsquo;t just host events. I hold their heart.&rdquo;
                </p>
                <span className="gold-line mt-4 mx-auto" />
                <p className="eyebrow mt-3 text-[8px]">Aria Kapoor</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
