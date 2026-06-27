"use client";

export default function SpinBadge({
  text = "NOW BOOKING · WORLDWIDE 2026 · ",
  size = 140,
  className = "",
  bg = "bg-clay",
  fg = "text-paper",
}: {
  text?: string;
  size?: number;
  className?: string;
  bg?: string;
  fg?: string;
}) {
  const id = "spin-badge-path";
  const repeated = text.repeat(2);

  return (
    <div
      className={`relative ${bg} ${fg} rounded-full flex items-center justify-center animate-[spin-slow_14s_linear_infinite] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <path
            id={id}
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="uppercase" fill="currentColor">
          <textPath href={`#${id}`} startOffset="0%">
            <tspan style={{ fontSize: "8.2px", letterSpacing: "0.05em" }}>
              {repeated}
            </tspan>
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] rounded-full bg-ink flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-spotlight-soft">
          <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M5 11a7 7 0 0 0 14 0M12 18v3M9 22h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
