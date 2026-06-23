"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/app/lib/data";

/* ── Premium SVG icons per service ── */
const ServiceIcons: Record<string, React.FC<{ size?: number }>> = {
  "Corporate Events": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="22" height="17" rx="1.5"/>
      <path d="M9 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
      <line x1="14" y1="14" x2="14" y2="20"/>
      <line x1="11" y1="17" x2="17" y2="17"/>
    </svg>
  ),
  "International Conferences": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="11"/>
      <path d="M3 14h22M14 3c-3 3-5 6.5-5 11s2 8 5 11M14 3c3 3 5 6.5 5 11s-2 8-5 11"/>
    </svg>
  ),
  "Award Ceremonies": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h10l-2 8H11L9 3z"/>
      <path d="M7 3H4l3 8M21 3h3l-3 8"/>
      <path d="M11 11c0 3.866 3.134 3 3 6 0-3-3-2.134-3-6z" fill="currentColor" fillOpacity="0.15"/>
      <ellipse cx="14" cy="17" rx="3" ry="2"/>
      <line x1="14" y1="19" x2="14" y2="23"/>
      <line x1="10" y1="25" x2="18" y2="25"/>
    </svg>
  ),
  "Product Launches": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3L24 13 14 23 4 13z"/>
      <circle cx="14" cy="13" r="3"/>
      <line x1="14" y1="3" x2="14" y2="7"/>
    </svg>
  ),
  "Government & Diplomatic": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="25" x2="25" y2="25"/>
      <rect x="5" y="13" width="4" height="12"/>
      <rect x="12" y="9" width="4" height="16"/>
      <rect x="19" y="16" width="4" height="9"/>
      <path d="M14 3l11 6H3z"/>
    </svg>
  ),
  "Luxury Weddings": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 24S5 18 5 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9c0 7-9 13-9 13z"/>
      <path d="M14 8v6M11 11h6" strokeWidth="1"/>
    </svg>
  ),
  "Destination Events": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20c3-4 6-6 11-6s8 2 11 6"/>
      <circle cx="14" cy="9" r="5"/>
      <path d="M14 4V3M14 15v1M19 9h1M9 9H8M17.5 5.5l.7-.7M9.8 13.2l-.7.7M17.5 12.5l.7.7M9.8 5.8l-.7-.7"/>
    </svg>
  ),
  "Panel Moderation": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="4"/>
      <circle cx="20" cy="8" r="4"/>
      <path d="M4 20v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2"/>
      <line x1="14" y1="14" x2="14" y2="20"/>
      <line x1="11" y1="17" x2="17" y2="17"/>
    </svg>
  ),
  "Virtual & Hybrid Events": ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="24" height="16" rx="2"/>
      <line x1="8" y1="25" x2="20" y2="25"/>
      <line x1="14" y1="21" x2="14" y2="25"/>
      <circle cx="14" cy="13" r="3"/>
      <path d="M10 13a4 4 0 0 1 8 0"/>
    </svg>
  ),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" style={{ background: "#B8943F" }} />
              <p className="eyebrow">What I Do</p>
            </motion.div>
            <motion.h2
              className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Signature{" "}
              <em className="gold-text not-italic">Services</em>
            </motion.h2>
          </div>
          <motion.p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--warm-gray)" }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            Every event type demands a unique language. I speak them all — fluently, instinctively, memorably.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(184,148,63,0.06)]">
          {services.map((service, i) => {
            const Icon = ServiceIcons[service.title] ?? ServiceIcons["Corporate Events"];
            return (
              <motion.div
                key={service.title}
                className="service-card p-8 bg-[var(--ivory)] group"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.06 }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-7 transition-colors duration-400"
                  style={{ color: "var(--warm-gray)" }}
                >
                  <div className="group-hover:text-[#B8943F] transition-colors duration-400" style={{ color: "inherit" }}>
                    <Icon size={26} />
                  </div>
                </div>

                <h3 className="font-display text-xl font-medium mb-3 group-hover:text-[#B8943F] transition-colors duration-400"
                  style={{ color: "var(--charcoal)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}>
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 font-medium"
                      style={{ background: "rgba(184,148,63,0.06)", color: "var(--warm-gray)", border: "1px solid rgba(184,148,63,0.1)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
