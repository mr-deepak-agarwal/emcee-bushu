"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { eventTypes } from "@/lib/content";

function TiltCard({
  tag,
  title,
  items,
  index,
}: {
  tag: string;
  title: string;
  items: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = py * -10;
    const rotateY = px * 10;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`
    );
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("")}
      style={{ transform, transition: "transform 0.25s ease-out" }}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-paper-2 border border-line rounded-[2px] p-8 md:p-10 min-h-[280px] flex flex-col justify-between hover:border-clay hover:shadow-[0_30px_60px_rgba(43,36,32,0.12)] transition-[border-color,box-shadow] duration-300"
    >
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-clay mb-4">{tag}</p>
        <h3 className="font-display text-4xl italic font-medium mb-6">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-ink-soft text-sm border-t border-line pt-2 first:border-t-0 first:pt-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section id="events" className="relative py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ PERFECT FOR EVERY OCCASION ]
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.0] font-medium">
            Whatever the room,{" "}
            <span className="italic text-clay">she fits the room.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {eventTypes.map((event, i) => (
            <TiltCard key={event.title} index={i} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
