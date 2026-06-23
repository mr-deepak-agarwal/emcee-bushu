"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["all","corporate","wedding","conference","awards"];
const items = [
  { id:1, cat:"corporate", col:2, row:1, label:"Corporate Summit, Singapore", bg:"linear-gradient(135deg,#0f0f1a,#1a1208)" },
  { id:2, cat:"wedding", col:1, row:2, label:"Royal Wedding, Udaipur", bg:"linear-gradient(135deg,#1a0f0f,#0a0808)" },
  { id:3, cat:"conference", col:1, row:1, label:"Global Conference, Dubai", bg:"linear-gradient(135deg,#0f1a10,#080d08)" },
  { id:4, cat:"awards", col:1, row:1, label:"Industry Awards, Mumbai", bg:"linear-gradient(135deg,#1a180f,#0d0c08)" },
  { id:5, cat:"corporate", col:1, row:1, label:"Annual Meet, London", bg:"linear-gradient(135deg,#0f0f1a,#0a0a14)" },
  { id:6, cat:"conference", col:2, row:1, label:"UN Side Event, Geneva", bg:"linear-gradient(135deg,#0f1a18,#08100e)" },
  { id:7, cat:"wedding", col:1, row:1, label:"Destination Wedding, Bali", bg:"linear-gradient(135deg,#1a0f18,#0d080c)" },
  { id:8, cat:"awards", col:1, row:1, label:"Film Awards, Mumbai", bg:"linear-gradient(135deg,#1a1208,#100d08)" },
];

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number|null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const filtered = filter==="all" ? items : items.filter(g => g.cat===filter);

  return (
    <section id="gallery" className="section-pad" style={{ background: "var(--beige)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" />
              <p className="eyebrow">Gallery</p>
            </motion.div>
            <motion.h2 className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Moments <em className="gold-text not-italic">on Stage</em>
            </motion.h2>
          </div>
          <motion.div className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} data-hover
                className="text-[9px] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-300"
                style={{
                  borderColor: filter===cat ? "#B8943F" : "rgba(0,0,0,0.1)",
                  color: filter===cat ? "#B8943F" : "var(--warm-gray)",
                  background: filter===cat ? "rgba(184,148,63,0.04)" : "transparent",
                }}>
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2" style={{ gridAutoRows: "140px" }}>
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                className="gallery-item relative group"
                style={{ gridColumn:`span ${Math.min(item.col,2)}`, gridRow:`span ${item.row}`, background: item.bg }}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightbox(item.id)} data-hover>
                <div className="absolute inset-0 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <p className="text-white text-[9px] tracking-wider">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <div className="relative max-w-3xl w-full px-6" onClick={e => e.stopPropagation()}>
              <div className="aspect-video w-full" style={{ background: items.find(g=>g.id===lightbox)?.bg }}>
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white/15 text-xs tracking-widest uppercase">{items.find(g=>g.id===lightbox)?.label}</p>
                </div>
              </div>
              <button className="absolute -top-10 right-6 text-white/30 hover:text-white transition-colors" onClick={() => setLightbox(null)} data-hover>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
