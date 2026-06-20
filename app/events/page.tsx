import Link from "next/link";
import { events } from "@/lib/data";

export const metadata = {
  title: "Events — Emcee Bushu",
  description: "Weddings, corporate events, baptisms, galas and more — every occasion Emcee Bushu hosts.",
};

export default function EventsPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-16 text-center md:pt-24">
        <p className="eyebrow text-lavender-600">What I host</p>
        <h1 className="mt-4 font-display text-4xl text-plum md:text-6xl">
          Every occasion. <span className="italic text-lavender-600">Every beat.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-plum/70">
          From intimate baptisms to black-tie galas — here's the full range,
          each hosted with the same care and read-the-room energy.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {events.map((e) => (
            <div
              key={e.title}
              className="flex flex-col rounded-2xl border border-lavender-200/70 bg-cream-deep p-7 transition-shadow hover:shadow-lg hover:shadow-lavender-200/50"
            >
              <span className="text-3xl">{e.icon}</span>
              <h2 className="mt-4 font-display text-2xl text-plum">{e.title}</h2>
              <p className="mt-2 flex-1 text-sm text-plum/65">{e.blurb}</p>
              <Link
                href="/book"
                className="focus-ring mt-5 text-sm font-semibold text-lavender-600 hover:underline"
              >
                Book for {e.title.toLowerCase()} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 text-center">
        <h2 className="font-display text-3xl text-plum md:text-4xl">
          Planning something <span className="italic text-lavender-600">different?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-plum/70">
          If it's not on this list, ask anyway — chances are I've hosted it.
        </p>
        <Link href="/book" className="focus-ring btn-primary mt-7 inline-block rounded-full px-9 py-4 text-sm font-semibold">
          Book Me 🎤
        </Link>
      </section>
    </>
  );
}
