"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Curtain() {
  const [show, setShow] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only media query check, must run after mount; not external-system sync
      setSkip(true);
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1700);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex">
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-ink flex items-center justify-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display italic text-paper text-2xl md:text-3xl flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-spotlight-soft animate-pulse" />
              Emcee Bushu
            </motion.span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
