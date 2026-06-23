"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "@/app/lib/data";

export default function FAQSection() {
  const [open, setOpen] = useState<number|null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="section-pad" style={{ background: "var(--ivory)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="gold-line" />
            <p className="eyebrow">FAQs</p>
            <span className="gold-line" />
          </motion.div>
          <motion.h2 className="font-display leading-[0.95]"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, color: "var(--charcoal)" }}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Common <em className="gold-text not-italic">Questions</em>
          </motion.h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div key={i} className="border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}>
              <button className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(open===i ? null : i)} data-hover>
                <span className="font-medium text-sm pr-8 transition-colors duration-300 group-hover:text-[#B8943F]"
                  style={{ color: open===i ? "#B8943F" : "var(--charcoal)" }}>
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300"
                  style={{ borderColor: open===i ? "#B8943F" : "rgba(0,0,0,0.1)", color: open===i ? "#B8943F" : "var(--warm-gray)" }}>
                  {open===i
                    ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    : <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  }
                </span>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                    exit={{ height:0, opacity:0 }} transition={{ duration: 0.35 }} style={{ overflow:"hidden" }}>
                    <p className="pb-6 text-sm leading-relaxed" style={{ color: "var(--warm-gray)", lineHeight: 1.9 }}>{faq.a}</p>
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
