import { site } from "@/lib/data";

const placeholderTiles = Array.from({ length: 6 });

export default function InstagramFeed() {
  return (
    <section className="bg-cream-deep px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow text-lavender-600">Follow along</p>
        <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
          Fresh off the stage — {site.instagramHandle}
        </h2>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-3 inline-block text-sm font-semibold text-lavender-600 hover:underline"
        >
          View full profile →
        </a>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {placeholderTiles.map((_, i) => (
            <a
              key={i}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group relative aspect-square overflow-hidden rounded-xl bg-lavender-100"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lavender-200 to-blush text-2xl transition-transform group-hover:scale-105">
                📷
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-plum/45">
          Live Instagram embed connects here at launch — placeholder tiles shown for preview.
        </p>
      </div>
    </section>
  );
}
