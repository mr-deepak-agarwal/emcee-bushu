"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🎤",
    title: "Engaging presence",
    blurb: "A stage presence that pulls a room in within the first minute and keeps it there.",
    from: "from-lavender-300",
    to: "to-lavender-600",
    glow: "shadow-lavender-400/40",
  },
  {
    icon: "🤝",
    title: "Connects every crowd",
    blurb: "From kids to corporate execs — energy calibrated to whoever's in the room.",
    from: "from-gold",
    to: "to-[#9c7a3a]",
    glow: "shadow-gold/40",
  },
  {
    icon: "💃",
    title: "Also a choreographer",
    blurb: "Personalised first-dance and group choreography, traditional, contemporary, or fusion.",
    from: "from-blush",
    to: "to-[#c98f7e]",
    glow: "shadow-[#c98f7e]/40",
  },
];

export default function PillarCards() {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-3">
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
          className="group relative overflow-hidden rounded-3xl border border-lavender-200/50 bg-cream p-8 transition-shadow duration-300 hover:shadow-2xl"
        >
          {/* decorative corner glow */}
          <div
            aria-hidden
            className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.from} ${p.to} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`}
          />

          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.from} ${p.to} text-2xl shadow-lg ${p.glow}`}
          >
            {p.icon}
          </motion.span>

          <h3 className="relative mt-5 font-display text-xl text-plum">{p.title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-plum/65">{p.blurb}</p>

          <div
            aria-hidden
            className={`relative mt-6 h-px w-10 bg-gradient-to-r ${p.from} ${p.to} transition-all duration-300 group-hover:w-16`}
          />
        </motion.div>
      ))}
    </div>
  );
}
