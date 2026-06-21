import Link from "next/link";
import { events, testimonials, site } from "@/lib/data";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Stats from "@/components/Stats";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      {/* Hero — layered spotlight + stage backdrop */}
      <section className="relative overflow-hidden bg-plum px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div aria-hidden className="spotlight animate-drift absolute -top-40 left-[10%] h-[30rem] w-[30rem] rounded-full opacity-70" />
        <div
          aria-hidden
          className="absolute -top-24 right-[5%] h-[26rem] w-[26rem] rounded-full opacity-60 [animation-delay:3s]"
          style={{ background: "radial-gradient(closest-side, rgba(201,166,107,0.35), transparent 70%)", filter: "blur(10px)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="eyebrow animate-rise text-gold">✦ Available for worldwide booking ✦</p>
            <h1 className="animate-rise mt-5 font-display text-6xl leading-[0.98] text-cream [animation-delay:80ms] md:text-8xl">
              Your energy.
              <br />
              <span className="italic text-lavender-300">Your stage.</span>
            </h1>
            <p className="animate-rise mt-7 max-w-md text-lg text-cream/70 [animation-delay:160ms]">
              Bushu is the MC and choreographer who turns weddings, corporate
              nights, and celebrations into moments people replay for years —
              in Goa, the UK, and worldwide.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:240ms]">
              <Link href="/book" className="focus-ring rounded-full bg-gold px-9 py-4 text-sm font-bold text-plum transition-transform hover:-translate-y-0.5">
                Book Me 🎤
              </Link>
              <Link href="/events" className="focus-ring rounded-full border-[1.5px] border-cream/40 px-9 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream/10">
                See Events
              </Link>
            </div>
          </div>

          <div className="animate-rise relative aspect-[4/5] overflow-hidden rounded-[2rem] [animation-delay:200ms]">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 via-lavender-500 to-plum" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,246,240,0.25),transparent_55%)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-plum/60 p-4 backdrop-blur-sm">
              <p className="font-display text-lg italic text-cream">"I bring the vibe."</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gold">Emcee Bushu</p>
            </div>
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

      <Stats />

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
      <Packages />
      <InstagramFeed />
      <FAQ />

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
