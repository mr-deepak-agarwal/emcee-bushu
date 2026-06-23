"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { events } from "@/app/lib/data";

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="events" className="section-pad dark-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>

        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" />
              <p className="eyebrow">Portfolio</p>
            </motion.div>
            <motion.h2 className="font-display text-white leading-[0.95]"
              style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Featured <em className="gold-text not-italic">Events</em>
            </motion.h2>
          </div>
          <motion.a href="#booking" className="btn-outline hidden md:inline-flex" data-hover
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            Enquire Now
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {events.map((event, i) => (
            <motion.div key={event.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              data-hover>
              <div className="aspect-[4/3] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${event.color}, #030303)` }}>
                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "linear-gradient(135deg, transparent 40%, rgba(184,148,63,0.06) 100%)" }} />
                {/* Bottom gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-white/30 border border-white/8 px-2 py-1">
                  {event.year}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-white text-lg font-light leading-snug mb-3">{event.title}</h3>
                  <div className="flex items-center gap-4 text-white/35 text-[9px] tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-8-7.5-8-12a8 8 0 0 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2"/></svg>
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      {event.audience}
                    </span>
                  </div>
                  {/* Hover reveal */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-500 ease-out">
                    <p className="text-[#B8943F] text-[9px] tracking-widest uppercase mt-3 pt-3 border-t border-white/8">
                      {event.client}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
