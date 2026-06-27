import { AtSign, MessageCircle, Mic2, Video } from "lucide-react";
import SpinBadge from "./SpinBadge";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-paper/10 pb-16">
          <h3 className="font-display text-6xl md:text-7xl leading-[0.98] max-w-2xl font-medium">
            I bring the vibe.{" "}
            <span className="italic text-spotlight-soft">
              You make the memories.
            </span>
          </h3>
          <div className="flex items-center gap-6 flex-shrink-0">
            <SpinBadge size={110} bg="bg-spotlight-soft" fg="text-ink" />
            <a
              href="#book"
              className="inline-flex items-center w-fit rounded-full bg-paper text-ink px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-spotlight-soft transition-colors duration-300"
            >
              Book Bushu
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-xl font-semibold"
          >
            <Mic2 className="w-5 h-5 text-spotlight-soft" strokeWidth={1.5} />
            Emcee <span className="italic text-spotlight-soft">Bushu</span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/rhythmic_slave"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
            >
              <AtSign className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/447466660294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://youtu.be/oZh46T3eEyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
            >
              <Video className="w-4 h-4" />
            </a>
          </div>

          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-paper/40">
            © 2026 Emcee Bushu — Goa, India
          </p>
        </div>
      </div>
    </footer>
  );
}
