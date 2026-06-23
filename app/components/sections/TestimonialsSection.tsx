"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/lib/data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-pad" style={{ background: "var(--ivory)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left label */}
          <div className="lg:col-span-3">
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="font-display leading-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Words from the{" "}
              <em className="gold-text not-italic">Stage</em>
            </motion.h2>

            <motion.div
              className="mt-8 flex gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={prev}
                className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                data-hover
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                data-hover
              >
                <ChevronRight size={16} />
              </button>
            </motion.div>

            {/* Dots */}
            <div className="flex gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  data-hover
                  style={{
                    width: active === i ? 24 : 6,
                    height: 2,
                    background: active === i ? "var(--gold)" : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Quote size={32} style={{ color: "var(--gold)", opacity: 0.3, marginBottom: 20 }} />
                
                <p
                  className="font-display leading-relaxed mb-8"
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 32px)",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: "var(--beige)", color: "var(--warm-gray)" }}
                  >
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "var(--charcoal)" }}>
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--warm-gray)" }}>
                      {testimonials[active].title} · {testimonials[active].company}
                    </p>
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
