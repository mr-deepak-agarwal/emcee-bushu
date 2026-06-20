import Link from "next/link";
import { events, testimonials, site } from "@/lib/data";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <>
      {/* Hero — spotlight signature element */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          aria-hidden
          className="spotlight animate-drift absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow animate-rise text-lavender-600">Available for worldwide booking</p>
          <h1 className="animate-rise mt-5 font-display text-5xl leading-[1.05] text-plum [animation-delay:80ms] md:text-7xl">
            Your energy.
            <br />
            <span className="italic text-lavender-600">Your stage.</span>
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-xl text-lg text-plum/70 [animation-delay:160ms]">
            Bushu is an MC and choreographer who turns weddings, corporate
            nights, and celebrations into moments people actually remember —
            in Goa, the UK, and beyond.
          </p>
          <div className="animate-rise mt-9 flex flex-col items-center justify-center gap-4 [animation-delay:240ms] sm:flex-row">
            <Link href="/book" className="focus-ring btn-primary rounded-full px-8 py-3.5 text-sm font-semibold">
              Book Me 🎤
            </Link>
            <Link href="/events" className="focus-ring btn-ghost rounded-full px-8 py-3.5 text-sm font-semibold">
              See Events
            </Link>
          </div>
        </div>
      </section>

      {/* Announcer ticker */}
      <div className="overflow-hidden border-y border-lavender-200/60 bg-lavender-600 py-3">
        <div className="marquee-track">
          {[...events, ...events].map((e, i) => (
            <span
              key={i}
              className="mx-6 shrink-0 font-body text-sm font-semibold uppercase tracking-[0.2em] text-cream/90"
            >
              {e.title} ✦
            </span>
          ))}
        </div>
      </div>

      {/* What this means */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-lavender-600">No more booking through DMs</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-plum md:text-4xl">
              A professional page for the MC who's already booked solid.
            </h2>
            <p className="mt-5 text-plum/70">
              Corporate planners can see your services at a glance. Couples
              can check your availability without a back-and-forth chat. And
              every enquiry lands straight in your inbox — organised,
              instant, and impossible to miss.
            </p>
          </div>
          <div className="rounded-3xl bg-blush/60 p-8">
            <ul className="space-y-4 text-plum/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lavender-600">✦</span>
                Live booking form with instant email + WhatsApp alert
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lavender-600">✦</span>
                Auto-reply so every client hears back in seconds
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lavender-600">✦</span>
                Built mobile-first for the way your audience finds you
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Event highlights */}
      <section className="bg-cream-deep px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl text-plum md:text-4xl">
              Every occasion, <span className="italic text-lavender-600">every beat.</span>
            </h2>
            <Link href="/events" className="focus-ring hidden text-sm font-semibold text-lavender-600 hover:underline md:block">
              View all events →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {events.slice(0, 6).map((e) => (
              <div key={e.title} className="rounded-2xl border border-lavender-200/70 bg-cream p-6 transition-shadow hover:shadow-lg hover:shadow-lavender-200/50">
                <span className="text-3xl">{e.icon}</span>
                <h3 className="mt-3 font-display text-xl text-plum">{e.title}</h3>
                <p className="mt-2 text-sm text-plum/65">{e.blurb}</p>
              </div>
            ))}
          </div>
          <Link href="/events" className="focus-ring mt-8 block text-center text-sm font-semibold text-lavender-600 hover:underline md:hidden">
            View all events →
          </Link>
        </div>
      </section>

      <Testimonials items={testimonials} />
      <InstagramFeed />

      {/* CTA */}
      <section className="px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl text-plum md:text-4xl">
          Ready to make your event <span className="italic text-lavender-600">unforgettable?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-plum/70">
          Tell me your date and what you're planning — I'll reply within 24 hours.
        </p>
        <Link href="/book" className="focus-ring btn-primary mt-8 inline-block rounded-full px-9 py-4 text-sm font-semibold">
          Book Me 🎤
        </Link>
      </section>
    </>
  );
}
