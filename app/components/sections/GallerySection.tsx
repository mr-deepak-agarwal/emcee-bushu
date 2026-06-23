"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["all", "corporate", "wedding", "conference", "awards"];

const galleryItems = [
  { id: 1, category: "corporate", cols: 2, rows: 1, label: "Corporate Summit, Singapore" },
  { id: 2, category: "wedding", cols: 1, rows: 2, label: "Royal Wedding, Udaipur" },
  { id: 3, category: "conference", cols: 1, rows: 1, label: "Global Conference, Dubai" },
  { id: 4, category: "awards", cols: 1, rows: 1, label: "Industry Awards, Mumbai" },
  { id: 5, category: "corporate", cols: 1, rows: 1, label: "Annual Meet, London" },
  { id: 6, category: "conference", cols: 2, rows: 1, label: "UN Side Event, Geneva" },
  { id: 7, category: "wedding", cols: 1, rows: 1, label: "Destination Wedding, Bali" },
  { id: 8, category: "awards", cols: 1, rows: 1, label: "Film Awards, Mumbai" },
];

const gradients = [
  "linear-gradient(135deg, #1a1a2e, #16213e)",
  "linear-gradient(135deg, #2d1b1b, #3d2424)",
  "linear-gradient(135deg, #1b2d1b, #243d24)",
  "linear-gradient(135deg, #2d2d1b, #3d3d24)",
  "linear-gradient(135deg, #1b1b2d, #24243d)",
  "linear-gradient(135deg, #2d1b2d, #3d243d)",
  "linear-gradient(135deg, #1a2a2a, #1a3a3a)",
  "linear-gradient(135deg, #2a1a2a, #3a1a3a)",
];

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="section-pad" style={{ background: "var(--beige)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Media Gallery
            </motion.p>
            <motion.h2
              className="font-display leading-tight"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300, color: "var(--charcoal)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Moments{" "}
              <em className="gold-text not-italic">on Stage</em>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300"
                data-hover
                style={{
                  borderColor: filter === cat ? "var(--gold)" : "rgba(0,0,0,0.1)",
                  color: filter === cat ? "var(--gold)" : "var(--warm-gray)",
                  background: filter === cat ? "rgba(200,169,107,0.05)" : "transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3" style={{ gridAutoRows: "140px" }}>
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="gallery-item relative group cursor-none overflow-hidden"
                style={{
                  gridColumn: `span ${Math.min(item.cols, 2)}`,
                  gridRow: `span ${item.rows}`,
                  background: gradients[item.id % gradients.length],
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(item.id)}
                data-hover
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn size={20} className="text-white opacity-60" />
                </div>
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[9px] tracking-wider">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-3xl w-full px-6" onClick={(e) => e.stopPropagation()}>
              <div
                className="aspect-video w-full"
                style={{ background: gradients[(lightbox - 1) % gradients.length] }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white/20 text-xs tracking-widest uppercase">
                    {galleryItems.find((g) => g.id === lightbox)?.label}
                  </p>
                </div>
              </div>
              <button
                className="absolute -top-10 right-6 text-white/40 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
                data-hover
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
