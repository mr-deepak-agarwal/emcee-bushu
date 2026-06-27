"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-32 md:py-44 bg-nude/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ WHAT SHE DOES ]
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.0] font-medium">
            Two crafts.{" "}
            <span className="italic text-clay">One stage presence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              whileHover={{ y: -6 }}
              className={`group relative rounded-[2px] border p-8 md:p-10 transition-colors duration-500 cursor-default overflow-hidden ${
                active === i ? "bg-ink border-ink" : "bg-paper-2 border-line"
              }`}
            >
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30 transition-opacity duration-500"
                style={{
                  background: active === i ? "var(--color-spotlight)" : "transparent",
                }}
              />

              <p
                className={`font-mono text-xs tracking-[0.2em] mb-6 transition-colors duration-500 relative ${
                  active === i ? "text-spotlight-soft" : "text-clay"
                }`}
              >
                {service.tag}
              </p>

              <h3
                className={`font-display text-4xl md:text-5xl italic mb-5 transition-colors duration-500 relative font-medium ${
                  active === i ? "text-paper" : "text-ink"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`leading-relaxed mb-8 transition-colors duration-500 relative ${
                  active === i ? "text-paper/70" : "text-ink-soft"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 relative">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-3 text-sm transition-colors duration-500 ${
                      active === i ? "text-paper/80" : "text-ink-soft"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        active === i ? "text-spotlight-soft" : "text-clay"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="relative overflow-hidden rounded-[2px]">
                <motion.div
                  animate={{ scale: active === i ? 1.06 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PlaceholderImage
                    variant={active === i ? "clay" : "nude"}
                    label={service.title}
                    aspect="aspect-[16/9]"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
