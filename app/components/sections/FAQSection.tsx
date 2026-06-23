"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "@/app/lib/data";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-pad" style={{ background: "var(--ivory)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            FAQs
          </motion.p>
          <motion.h2
            className="font-display leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, color: "var(--charcoal)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Common{" "}
            <em className="gold-text not-italic">Questions</em>
          </motion.h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                data-hover
              >
                <span
                  className="font-medium text-sm pr-8 group-hover:text-[var(--gold)] transition-colors duration-300"
                  style={{ color: open === i ? "var(--gold)" : "var(--charcoal)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: open === i ? "var(--gold)" : "rgba(0,0,0,0.1)",
                    color: open === i ? "var(--gold)" : "var(--warm-gray)",
                  }}
                >
                  {open === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="pb-6 text-sm leading-relaxed"
                      style={{ color: "var(--warm-gray)" }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
