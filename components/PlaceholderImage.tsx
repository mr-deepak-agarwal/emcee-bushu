"use client";

import { Mic2 } from "lucide-react";
import clsx from "clsx";

type Props = {
  label?: string;
  variant?: "nude" | "ink" | "clay";
  className?: string;
  aspect?: string;
};

export default function PlaceholderImage({
  label,
  variant = "nude",
  className,
  aspect = "aspect-[4/5]",
}: Props) {
  const variants = {
    nude: "bg-gradient-to-br from-nude via-paper-2 to-nude-2",
    ink: "bg-gradient-to-br from-ink via-ink-soft to-ink",
    clay: "bg-gradient-to-br from-clay via-clay-dark to-ink",
  };

  const isDark = variant !== "nude";

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[2px]",
        aspect,
        variants[variant],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: isDark ? "#F7F2EC" : "#2B2420",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <Mic2
          className={clsx(
            "w-8 h-8",
            isDark ? "text-paper/40" : "text-ink/25"
          )}
          strokeWidth={1.25}
        />
        {label && (
          <span
            className={clsx(
              "font-mono text-[10px] tracking-[0.18em] uppercase text-center px-6",
              isDark ? "text-paper/50" : "text-ink/40"
            )}
          >
            {label}
          </span>
        )}
      </div>
      <div
        className={clsx(
          "absolute inset-0 border",
          isDark ? "border-paper/10" : "border-ink/10"
        )}
      />
    </div>
  );
}
