const stats = [
  { value: "150+", label: "Events Hosted" },
  { value: "5+", label: "Years on Stage" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "Read-the-room Energy" },
];

export default function Stats() {
  return (
    <section className="bg-plum px-6 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl text-gold md:text-5xl">{s.value}</p>
            <p className="eyebrow mt-2 text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
