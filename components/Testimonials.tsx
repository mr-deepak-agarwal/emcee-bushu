type Testimonial = { quote: string; name: string; role: string };

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-center text-lavender-600">In their words</p>
        <h2 className="mt-3 text-center font-display text-3xl text-plum md:text-4xl">
          Clients who've had her on stage.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-lavender-200/70 bg-cream-deep p-7">
              <blockquote className="font-display text-lg italic leading-snug text-plum/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-plum">{t.name}</span>
                <span className="block text-plum/55">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
