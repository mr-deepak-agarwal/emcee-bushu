"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
      data-hover
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </motion.button>
  );
}
