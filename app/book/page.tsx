import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Reserve a Date — Emcee Bushu",
  description: "Send Emcee Bushu a booking enquiry for your wedding, corporate event, or celebration.",
};

export default function BookPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="eyebrow text-lavender-600">Book Emcee Bushu 🎤</p>
          <h1 className="mt-4 font-display text-4xl text-plum md:text-5xl">
            Let's plan your <span className="italic text-lavender-600">unforgettable</span> event.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-plum/70">
            Fill in your details below and Bushu will get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-lavender-200/70 bg-cream-deep p-6 md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
