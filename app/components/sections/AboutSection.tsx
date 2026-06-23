"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  return (
    <section id="about" className="section-pad" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>

        <motion.p className="eyebrow mb-4" {...fadeUp(0)}>
          The Story
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Main text */}
          <div className="lg:col-span-6">
            <motion.h2
              className="font-display leading-tight mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "var(--charcoal)" }}
              {...fadeUp(0.1)}
            >
              A Voice That Commands Rooms.{" "}
              <em className="gold-text not-italic">A Presence That Defines Events.</em>
            </motion.h2>

            <motion.div
              className="space-y-5 text-sm leading-[1.9]"
              style={{ color: "var(--warm-gray)" }}
              {...fadeUp(0.2)}
            >
              <p>
                Aria Kapoor is not simply a host — she is an experience architect. With over 18 years on
                global stages across 42 countries, she has mastered the art of commanding attention,
                holding energy, and shaping narratives that resonate long after an event concludes.
              </p>
              <p>
                Her journey began at All India Radio at the age of 19, where she discovered her gift for
                crafting intimacy through voice. What followed was an extraordinary ascent — from national
                television anchoring to keynote facilitation for the world&rsquo;s most influential institutions.
              </p>
              <p>
                She has shared stages with Nobel laureates, heads of state, CEOs of Fortune 100 companies,
                and cultural icons. Yet her most consistent gift is making every person in the room —
                whether five hundred or fifty thousand — feel personally seen.
              </p>
            </motion.div>

            <motion.div className="mt-10 flex gap-8" {...fadeUp(0.3)}>
              <div>
                <p className="font-display text-4xl font-light" style={{ color: "var(--gold)" }}>18+</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--warm-gray)" }}>Years on Stage</p>
              </div>
              <div className="w-px bg-black/10" />
              <div>
                <p className="font-display text-4xl font-light" style={{ color: "var(--gold)" }}>42+</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--warm-gray)" }}>Countries Hosted</p>
              </div>
              <div className="w-px bg-black/10" />
              <div>
                <p className="font-display text-4xl font-light" style={{ color: "var(--gold)" }}>800+</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--warm-gray)" }}>Events Hosted</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial image layout */}
          <div className="lg:col-span-6">
            <motion.div className="grid grid-cols-2 gap-4" {...fadeUp(0.3)}>
              {/* Main large image */}
              <div
                className="col-span-2 aspect-[16/9] overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B1B1B, #2d2d2d)" }}
              >
                <p className="text-white/15 text-xs tracking-widest uppercase text-center">
                  Featured Event Photo<br />(Replace with real image)
                </p>
              </div>

              {/* Two smaller images */}
              <div
                className="aspect-square overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--beige), var(--ivory))" }}
              >
                <p className="text-black/15 text-[10px] tracking-widest uppercase text-center px-2">Portrait Photo</p>
              </div>

              <div
                className="aspect-square overflow-hidden relative flex flex-col items-center justify-center p-6 text-center"
                style={{ background: "var(--charcoal)" }}
              >
                <p className="font-display text-white text-lg font-light leading-snug italic">
                  &ldquo;I don&rsquo;t just host events. I hold their heart.&rdquo;
                </p>
                <div className="gold-line mt-4 mx-auto" />
                <p className="eyebrow mt-3">Aria Kapoor</p>
              </div>
            </motion.div>

            {/* Hosting style tags */}
            <motion.div className="mt-6 flex flex-wrap gap-2" {...fadeUp(0.4)}>
              {["Bilingual (EN/HI)", "Protocol-Sensitive", "Teleprompter-Free", "Improv-Trained", "LGBTQ+ Inclusive", "Multilingual Events"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-widest uppercase px-3 py-1.5 border"
                  style={{ borderColor: "rgba(200,169,107,0.2)", color: "var(--warm-gray)" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
