"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/app/lib/data";

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              What I Do
            </motion.p>
            <motion.h2
              className="font-display leading-tight"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Signature{" "}
              <em className="gold-text not-italic">Services</em>
            </motion.h2>
          </div>
          <motion.p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--warm-gray)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every event type demands a unique language. I speak them all — fluently, instinctively, memorably.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card p-7 bg-white group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <div className="text-3xl mb-5">{service.icon}</div>
              
              <h3
                className="font-display text-xl font-medium mb-3 group-hover:text-[var(--gold)] transition-colors duration-300"
                style={{ color: "var(--charcoal)" }}
              >
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-widest uppercase px-2 py-1"
                    style={{ background: "var(--beige)", color: "var(--warm-gray)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gold bottom line on hover */}
              <div className="h-px w-0 group-hover:w-full mt-6 transition-all duration-500" style={{ background: "var(--gold)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
