"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic2 } from "lucide-react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight"
        >
          <Mic2 className="w-5 h-5 text-clay" strokeWidth={1.5} />
          <span>
            Emcee <span className="italic text-clay">Bushu</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-soft hover:text-clay transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden md:inline-flex items-center rounded-full bg-ink text-paper px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] uppercase hover:bg-clay transition-colors duration-300"
        >
          Check Dates
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden overflow-hidden bg-paper border-b border-line"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center rounded-full bg-ink text-paper px-5 py-3 font-mono text-[11px] tracking-[0.14em] uppercase"
              >
                Check Dates
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
