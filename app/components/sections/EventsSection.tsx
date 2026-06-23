"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { events } from "@/app/lib/data";
import { MapPin, Users } from "lucide-react";

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-pad dark-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        
        <div className="mb-16">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="font-display text-white leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Featured{" "}
            <em className="gold-text not-italic">Events</em>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className={`group relative overflow-hidden cursor-none ${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-hover
            >
              {/* Background */}
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${event.color}, #0a0a1a)` }}
              >
                {/* Placeholder for event photo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-6xl">📸</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--gold)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-white/40 border border-white/10 px-2 py-1">
                  {event.year}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-white text-lg font-medium mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-white/40 text-[10px] tracking-wider uppercase">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={9} />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={9} />
                      {event.audience}
                    </span>
                  </div>

                  {/* Slide up on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500">
                    <p className="text-[var(--gold)] text-[10px] tracking-widest uppercase mt-3 pt-3 border-t border-white/10">
                      Client: {event.client}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="#booking" className="btn-outline inline-flex" data-hover>
            Enquire for Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
