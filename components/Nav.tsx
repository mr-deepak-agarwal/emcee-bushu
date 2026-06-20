"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book Me" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lavender-200/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl italic tracking-tight text-plum">
          Emcee Bushu
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-plum/80 transition-colors hover:text-lavender-600"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="focus-ring btn-primary rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Book Me
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-lavender-300 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[1.5px] w-5 bg-plum transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span className={`h-[1.5px] w-5 bg-plum transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-[1.5px] w-5 bg-plum transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-lavender-200/60 bg-cream px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg px-2 py-3 text-base font-medium text-plum/85"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
