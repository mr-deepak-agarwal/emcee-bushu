"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { eventTypes } from "@/lib/content";

function MagneticCard({
  tag,
  title,
  items,
}: {
  tag: string;
  title: string;
  items: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative bg-paper-2 border border-line rounded-[2px] p-8 md:p-10 min-h-[280px] flex flex-col justify-between hover:border-clay hover:shadow-[0_20px_50px_rgba(43,36,32,0.08)] transition-[border-color,box-shadow] duration-300"
    >
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-clay mb-4">
          {tag}
        </p>
        <h3 className="font-display text-3xl italic mb-6">{title}</h3>
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
    <section id="events" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-5">
            [ PERFECT FOR EVERY OCCASION ]
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Whatever the room,{" "}
            <span className="italic text-clay">she fits the room.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventTypes.map((event) => (
            <MagneticCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
