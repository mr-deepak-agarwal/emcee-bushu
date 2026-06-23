"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-4xl text-white font-light tracking-widest mb-1">
              ARIA
            </p>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Kapoor
            </p>
          </motion.div>

          <div className="mt-12 w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full"
              style={{ background: "var(--gold)", width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            className="mt-4 text-white/30 text-xs tracking-widest uppercase font-light"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Setting the stage
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
