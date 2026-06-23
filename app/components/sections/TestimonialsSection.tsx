"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/lib/data";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-pad" style={{ background: "var(--charcoal)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-3">
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" />
              <p className="eyebrow">Testimonials</p>
            </motion.div>
            <motion.h2 className="font-display text-white leading-[0.95]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Words from <br />the <em className="gold-text not-italic">Stage</em>
            </motion.h2>

            <motion.div className="mt-8 flex gap-2"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
              <button onClick={() => setActive(a => (a-1+testimonials.length)%testimonials.length)}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8943F]/50 hover:text-[#B8943F] transition-all duration-300" data-hover>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => setActive(a => (a+1)%testimonials.length)}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8943F]/50 hover:text-[#B8943F] transition-all duration-300" data-hover>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </motion.div>

            <div className="flex gap-1.5 mt-4">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} data-hover
                  className="transition-all duration-400 h-px"
                  style={{ width: active===i ? 24 : 6, background: active===i ? "#B8943F" : "rgba(255,255,255,0.15)" }} />
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div className="lg:col-span-9"
            initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <AnimatePresence mode="wait">
              <motion.div key={active} className="testimonial-card"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}>
                {/* Quote mark */}
                <svg width="32" height="24" viewBox="0 0 32 24" fill="rgba(184,148,63,0.2)" className="mb-6">
                  <path d="M0 24V14.4C0 6.4 4.267 1.067 12.8 0l1.6 2.4C10.133 3.6 7.733 6.267 7.2 10.4H12V24H0zm16 0V14.4C16 6.4 20.267 1.067 28.8 0l1.6 2.4C26.133 3.6 23.733 6.267 23.2 10.4H28V24H16z"/>
                </svg>
                <p className="font-display text-white leading-relaxed mb-8 italic"
                  style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 300 }}>
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: "rgba(184,148,63,0.12)", color: "#B8943F" }}>
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonials[active].name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{testimonials[active].title} · {testimonials[active].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
