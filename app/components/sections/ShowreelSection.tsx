"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const reels = [
  { title: "Corporate & Conference", duration: "2:34", thumb: "corporate" },
  { title: "Luxury Weddings", duration: "1:58", thumb: "wedding" },
  { title: "Award Ceremonies", duration: "2:12", thumb: "awards" },
  { title: "International Events", duration: "3:01", thumb: "international" },
];

export default function ShowreelSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showreel" className="section-pad dark-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="mb-12">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            In Action
          </motion.p>
          <motion.h2
            className="font-display text-white leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The{" "}
            <em className="gold-text not-italic">Showreel</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main video player */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative aspect-video bg-[#111] overflow-hidden group cursor-none"
              onClick={() => setPlaying(!playing)}
              data-hover
            >
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)" }}>
                <div className="text-center text-white/10">
                  <p className="text-xs tracking-widest uppercase">Video Thumbnail</p>
                  <p className="text-xs mt-1">{reels[active].title}</p>
                </div>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-110 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10 transition-all duration-400"
                  whileHover={{ scale: 1.15 }}
                >
                  <Play size={18} fill="white" className="text-white ml-1" />
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display text-white text-xl font-light">{reels[active].title}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{reels[active].duration}</p>
              </div>
            </div>
          </motion.div>

          {/* Reel list */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {reels.map((reel, i) => (
              <div
                key={reel.title}
                className={`flex gap-4 p-4 border transition-all duration-300 cursor-none ${
                  active === i
                    ? "border-[var(--gold)]/40 bg-[var(--gold)]/5"
                    : "border-white/5 hover:border-white/15"
                }`}
                onClick={() => setActive(i)}
                data-hover
              >
                {/* Thumb */}
                <div
                  className="w-20 h-14 flex-shrink-0 relative flex items-center justify-center"
                  style={{ background: "#1a1a1a" }}
                >
                  <Play size={12} fill="rgba(200,169,107,0.6)" className="text-[var(--gold)]/60" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-sm font-medium">{reel.title}</p>
                  <p className="text-white/30 text-xs mt-1 tracking-widest">{reel.duration}</p>
                </div>
              </div>
            ))}

            <div className="border border-white/5 p-5 mt-2">
              <p className="font-display text-white text-lg font-light mb-2">
                Want the full reel?
              </p>
              <p className="text-white/30 text-xs leading-relaxed mb-4">
                A curated showreel tailored to your event type is available on request.
              </p>
              <a href="#booking" className="btn-outline text-xs px-4 py-2.5 inline-flex" data-hover>
                Request Reel
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
