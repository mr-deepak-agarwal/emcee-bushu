import Link from "next/link";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata = {
  title: "About — Emcee Bushu",
  description: "Meet Emcee Bushu, MC and choreographer hosting events across Goa, the UK, and worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-plum px-6 pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold">About Bushu</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-cream md:text-6xl">
              I don't just host events —{" "}
              <span className="italic text-lavender-300">I create experiences.</span>
            </h1>
            <p className="mt-6 text-cream/70">
              I'm Bushu — an MC and choreographer who's spent years on stages
              across Goa and the UK, reading rooms and turning ordinary
              evenings into the ones people talk about for years.
            </p>
            <p className="mt-4 text-cream/70">
              Every event gets the same energy: prepared, present, and tuned
              to the crowd in front of me — whether that's two hundred
              wedding guests or a boardroom of executives.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 via-lavender-500 to-plum" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,246,240,0.25),transparent_55%)]" />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-cream p-7">
            <span className="text-2xl">🎤</span>
            <h3 className="mt-3 font-display text-xl text-plum">Engaging presence</h3>
            <p className="mt-2 text-sm text-plum/65">
              A stage presence that pulls a room in within the first minute and keeps it there.
            </p>
          </div>
          <div className="rounded-2xl bg-cream p-7">
            <span className="text-2xl">🤝</span>
            <h3 className="mt-3 font-display text-xl text-plum">Connects every crowd</h3>
            <p className="mt-2 text-sm text-plum/65">
              From kids to corporate execs — energy calibrated to whoever's in the room.
            </p>
          </div>
          <div className="rounded-2xl bg-cream p-7">
            <span className="text-2xl">💃</span>
            <h3 className="mt-3 font-display text-xl text-plum">Also a choreographer</h3>
            <p className="mt-2 text-sm text-plum/65">
              Personalised first-dance and group choreography, traditional, contemporary, or fusion.
            </p>
          </div>
        </div>
      </section>

      <InstagramFeed />

      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-plum md:text-4xl">
          I bring the vibe. <span className="italic text-lavender-600">You make the memories.</span>
        </h2>
        <Link href="/book" className="focus-ring btn-primary mt-7 inline-block rounded-full px-9 py-4 text-sm font-semibold">
          Book Me 🎤
        </Link>
      </section>
    </>
  );
}
