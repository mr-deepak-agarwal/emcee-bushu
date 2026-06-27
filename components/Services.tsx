"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-32 bg-nude/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ WHAT SHE DOES ]
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Two crafts.{" "}
            <span className="italic text-clay">One stage presence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              className={`group relative rounded-[2px] border p-8 md:p-10 transition-colors duration-500 cursor-default ${
                active === i
                  ? "bg-ink border-ink"
                  : "bg-paper-2 border-line"
              }`}
            >
              <p
                className={`font-mono text-xs tracking-[0.2em] mb-6 transition-colors duration-500 ${
                  active === i ? "text-spotlight-soft" : "text-clay"
                }`}
              >
                {service.tag}
              </p>

              <h3
                className={`font-display text-3xl md:text-4xl italic mb-5 transition-colors duration-500 ${
                  active === i ? "text-paper" : "text-ink"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`leading-relaxed mb-8 transition-colors duration-500 ${
                  active === i ? "text-paper/70" : "text-ink-soft"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
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

              <PlaceholderImage
                variant={active === i ? "clay" : "nude"}
                label={service.title}
                aspect="aspect-[16/9]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
