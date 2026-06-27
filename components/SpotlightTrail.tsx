"use client";

import { useEffect, useRef, useState } from "react";

function getIsEligible() {
  if (typeof window === "undefined") return false;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return isFinePointer && !prefersReduced;
}

export default function SpotlightTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled] = useState(getIsEligible);

  useEffect(() => {
    if (!enabled) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block mix-blend-multiply">
      <div
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-[0.10] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-spotlight) 0%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-clay/40"
      />
    </div>
  );
}
