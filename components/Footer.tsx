import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-lavender-200/60 bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl italic text-plum">Emcee Bushu</p>
          <p className="mt-3 max-w-xs text-sm text-plum/70">
            MC &amp; choreographer hosting weddings, corporate events, and
            celebrations across the UK, Goa, and worldwide.
          </p>
        </div>

        <div>
          <p className="eyebrow text-lavender-600">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-plum/75">
            <li><Link className="focus-ring hover:text-lavender-600" href="/">Home</Link></li>
            <li><Link className="focus-ring hover:text-lavender-600" href="/events">Events</Link></li>
            <li><Link className="focus-ring hover:text-lavender-600" href="/about">About</Link></li>
            <li><Link className="focus-ring hover:text-lavender-600" href="/book">Reserve a Date</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-lavender-600">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-plum/75">
            <li>
              <a className="focus-ring hover:text-lavender-600" href={site.instagram} target="_blank" rel="noopener noreferrer">
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a className="focus-ring hover:text-lavender-600" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="focus-ring hover:text-lavender-600" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-lavender-200/60 px-6 py-5 text-center text-xs text-plum/50">
        © {new Date().getFullYear()} Emcee Bushu. Site by{" "}
        <a className="focus-ring underline" href="https://codeq.tech" target="_blank" rel="noopener noreferrer">codeq</a>.
      </div>
    </footer>
  );
}
