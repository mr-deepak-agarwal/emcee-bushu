"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../ui/DarkModeToggle";

const navLinks = [
  { label:"About", href:"#about" },
  { label:"Services", href:"#services" },
  { label:"Events", href:"#events" },
  { label:"Showreel", href:"#showreel" },
  { label:"Gallery", href:"#gallery" },
  { label:"Contact", href:"#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ background: scrolled ? "rgba(8,8,8,0.92)" : "transparent", backdropFilter: scrolled ? "blur(24px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" data-hover className="flex flex-col leading-none">
          <span className="font-display text-lg text-white font-light tracking-[0.2em]">ARIA</span>
          <span className="text-[8px] tracking-[0.35em] uppercase" style={{ color: "#B8943F" }}>Kapoor</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} data-hover
              className="text-white/40 hover:text-white text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "#B8943F" }} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <a href="#booking" className="hidden md:flex btn-primary text-[9px] px-6 py-3" data-hover>Book Now</a>
          <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)} data-hover>
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(8,8,8,0.98)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="text-white/50 hover:text-white text-sm tracking-[0.18em] uppercase transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#booking" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
