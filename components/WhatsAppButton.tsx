import { site } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hi%20Bushu%2C%20I%27d%20like%20to%20enquire%20about%20booking%20you%20for%20an%20event!`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Emcee Bushu on WhatsApp"
      className="focus-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lavender-600 text-cream shadow-lg shadow-lavender-600/30 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.04 3C9.4 3 4 8.36 4 15c0 2.32.65 4.49 1.78 6.34L4 29l7.86-1.74A11.93 11.93 0 0 0 16.04 27C22.68 27 28 21.64 28 15S22.68 3 16.04 3Zm6.92 16.7c-.3.84-1.5 1.58-2.6 1.8-.71.14-1.63.26-4.74-1.02-3.98-1.65-6.55-5.66-6.75-5.93-.2-.27-1.62-2.15-1.62-4.1 0-1.94.99-2.9 1.35-3.3.3-.33.79-.48 1.27-.48.15 0 .3 0 .43.01.38.02.57.04.82.65.31.78 1.07 2.72 1.16 2.92.1.2.16.43.03.69-.12.27-.18.43-.36.66-.18.22-.38.5-.55.67-.18.18-.37.38-.16.74.21.36.93 1.55 2 2.5 1.38 1.23 2.53 1.62 2.9 1.8.37.18.59.15.81-.09.22-.25.93-1.08 1.18-1.45.25-.37.5-.31.83-.18.34.12 2.14 1.01 2.5 1.2.37.18.61.27.7.43.1.16.1.92-.2 1.76Z" />
      </svg>
    </a>
  );
}
