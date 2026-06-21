import Link from "next/link";
import EventsGrid from "@/components/EventsGrid";

export const metadata = {
  title: "Events — Emcee Bushu",
  description: "Weddings, corporate events, baptisms, galas and more — every occasion Emcee Bushu hosts.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-plum px-6 pb-16 pt-20 text-center md:pt-28">
        <p className="eyebrow text-gold">What I host</p>
        <h1 className="mt-4 font-display text-5xl text-cream md:text-7xl">
          Every occasion. <span className="italic text-lavender-300">Every beat.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-cream/70">
          From intimate baptisms to black-tie galas — here's the full range,
          each hosted with the same care and read-the-room energy.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <EventsGrid />
      </section>

      <section className="px-6 pb-24 text-center">
        <h2 className="font-display text-3xl text-plum md:text-4xl">
          Planning something <span className="italic text-lavender-600">different?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-plum/70">
          If it's not on this list, ask anyway — chances are I've hosted it.
        </p>
        <Link href="/book" className="focus-ring btn-primary mt-7 inline-block rounded-full px-9 py-4 text-sm font-semibold">
          Reserve a Date 🎤
        </Link>
      </section>
    </>
  );
}
