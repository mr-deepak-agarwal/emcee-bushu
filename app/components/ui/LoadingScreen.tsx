"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); setTimeout(() => setVisible(false), 500); return 100; }
        return Math.min(p + Math.random() * 14 + 4, 100);
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loading-screen" exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            {/* Mic icon */}
            <div className="flex justify-center mb-6">
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                <rect x="10" y="3" width="8" height="13" rx="4" fill="#B8943F" opacity="0.9"/>
                <path d="M7 14c0 3.866 3.134 7 7 7s7-3.134 7-7" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14" y1="21" x2="14" y2="25" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="10" y1="25" x2="18" y2="25" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="font-display text-5xl text-white font-light tracking-[0.15em] mb-1">ARIA</p>
            <p className="eyebrow text-[9px]">Kapoor</p>
          </motion.div>
          <div className="mt-14 w-44 h-px relative overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="absolute left-0 top-0 h-full transition-all duration-100" style={{ width: `${Math.min(progress,100)}%`, background: "linear-gradient(90deg, #8A6A1E, #B8943F, #D4AF6A)" }} />
          </div>
          <motion.p className="mt-4 text-[9px] tracking-[0.3em] uppercase font-light" style={{ color: "rgba(255,255,255,0.2)" }}
            animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
            Setting the stage
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
