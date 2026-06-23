"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const micRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mic = micRef.current;
    const ring = ringRef.current;
    if (!mic || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mic.style.left = mouseX + "px";
      mic.style.top = mouseY + "px";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => ring.classList.add("hovering");
    const onLeave = () => ring.classList.remove("hovering");

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Mic SVG cursor */}
      <div ref={micRef} className="cursor-mic">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mic body */}
          <rect x="10" y="3" width="8" height="13" rx="4" fill="#B8943F" opacity="0.95"/>
          {/* Mic stand arc */}
          <path d="M7 14c0 3.866 3.134 7 7 7s7-3.134 7-7" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Mic pole */}
          <line x1="14" y1="21" x2="14" y2="25" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Base */}
          <line x1="10" y1="25" x2="18" y2="25" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Mic grille lines */}
          <line x1="10.5" y1="9" x2="17.5" y2="9" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
          <line x1="10.5" y1="12" x2="17.5" y2="12" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        </svg>
      </div>
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
