"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, MessageCircle, Calendar } from "lucide-react";

const eventTypes = [
  "Corporate Conference", "Award Ceremony", "Product Launch", "Government Event",
  "Luxury Wedding", "Destination Event", "Panel Moderation", "Virtual Event", "Other"
];

const budgetRanges = [
  "₹1L – ₹3L", "₹3L – ₹5L", "₹5L – ₹10L", "₹10L – ₹20L", "$5K – $15K", "$15K – $30K", "$30K+", "Prefer not to say"
];

export default function BookingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    eventType: "", eventDate: "", location: "", audience: "", budget: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Replace with your API call / email service
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-pad dark-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              Booking Inquiry
            </motion.p>
            <motion.h2
              className="font-display text-white leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Let&rsquo;s Create Something{" "}
              <em className="gold-text not-italic">Extraordinary</em>
            </motion.h2>
            <motion.p
              className="text-white/40 text-sm leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Every event is unique. Share your vision and receive a bespoke proposal within 24 hours.
            </motion.p>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-white/10 hover:border-[var(--gold)]/40 transition-all duration-300 group"
                data-hover
              >
                <Calendar size={18} style={{ color: "var(--gold)" }} />
                <div>
                  <p className="text-white text-sm font-medium">Schedule a Call</p>
                  <p className="text-white/30 text-xs mt-0.5">Book a 20-min discovery call</p>
                </div>
              </a>
              <a
                href="https://wa.me/919810000000?text=Hi%20Aria%2C%20I%27d%20like%20to%20discuss%20an%20event%20hosting%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-white/10 hover:border-[var(--gold)]/40 transition-all duration-300 group"
                data-hover
              >
                <MessageCircle size={18} style={{ color: "var(--gold)" }} />
                <div>
                  <p className="text-white text-sm font-medium">WhatsApp</p>
                  <p className="text-white/30 text-xs mt-0.5">Quick inquiries via WhatsApp</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} style={{ color: "var(--gold)" }} className="mb-6" />
                <p className="font-display text-white text-3xl font-light mb-3">Inquiry Received</p>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. I&rsquo;ll personally review your event details and respond within 24 hours.
                </p>
                <div className="gold-line mt-8 mx-auto" />
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name" },
                  { label: "Company / Organisation", name: "company", type: "text", placeholder: "Company name" },
                  { label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone / WhatsApp *", name: "phone", type: "tel", placeholder: "+91 or international" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="luxury-input luxury-input-dark"
                    />
                  </div>
                ))}

                {/* Selects */}
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark bg-transparent"
                    style={{ color: form.eventType ? "var(--ivory)" : "rgba(255,255,255,0.35)" }}
                  >
                    <option value="" disabled>Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t} style={{ background: "#161616" }}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Event Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    value={form.location}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Expected Audience Size
                  </label>
                  <input
                    type="text"
                    name="audience"
                    placeholder="e.g. 500 guests"
                    value={form.audience}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark bg-transparent"
                    style={{ color: form.budget ? "var(--ivory)" : "rgba(255,255,255,0.35)" }}
                  >
                    <option value="" disabled>Select budget range</option>
                    {budgetRanges.map((b) => <option key={b} value={b} style={{ background: "#161616" }}>{b}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">
                    Tell Me About Your Event
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share your event vision, theme, special requirements, or any context that helps me understand the occasion..."
                    value={form.message}
                    onChange={handleChange}
                    className="luxury-input luxury-input-dark resize-none"
                    style={{ paddingTop: 12 }}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-primary w-full md:w-auto justify-center gap-3"
                    data-hover
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-charcoal/30 border-t-[var(--charcoal)] rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={14} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-white/20 text-[10px] mt-3 tracking-wide">
                    Response within 24 hours · All inquiries treated with confidentiality
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
