"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsapSetup } from "@/lib/gsap";

type Shape = "mic" | "note" | "star" | "ring" | "ticket";

function ShapeSVG({ shape }: { shape: Shape }) {
  switch (shape) {
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 22h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "note":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 18V4l12-2v14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 1l3 7.5L22 10l-6 5 1.5 8L12 19l-5.5 4L8 15l-6-5 7-1.5L12 1z" />
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
        </svg>
      );
    case "ticket":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M14 6v12" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
        </svg>
      );
  }
}

export type FloatItem = {
  shape: Shape;
  top: string;
  left: string;
  size: number;
  speed: number;
  color?: string;
  rotateSpeed?: number;
};

export default function ParallaxField({
  items,
  className = "",
}: {
  items: FloatItem[];
  className?: string;
}) {
  useGsapSetup();
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const triggers: ScrollTrigger[] = [];

    layerRefs.current.forEach((el, i) => {
      if (!el) return;
      const item = items[i];
      const tween = gsap.to(el, {
        y: () => -120 * item.speed,
        rotate: item.rotateSpeed ? 360 * item.rotateSpeed : 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            color: item.color ?? "var(--color-clay)",
            opacity: 0.35,
          }}
        >
          <ShapeSVG shape={item.shape} />
        </div>
      ))}
    </div>
  );
}
