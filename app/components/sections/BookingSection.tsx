"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const eventTypes = ["Corporate Conference","Award Ceremony","Product Launch","Government Event","Luxury Wedding","Destination Event","Panel Moderation","Virtual Event","Other"];
const budgets = ["₹1L–₹3L","₹3L–₹5L","₹5L–₹10L","₹10L–₹20L","$5K–$15K","$15K–$30K","$30K+","Prefer not to say"];

export default function BookingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:"",company:"",email:"",phone:"",eventType:"",eventDate:"",location:"",audience:"",budget:"",message:"" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-pad dark-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
              <span className="gold-line" />
              <p className="eyebrow">Booking Inquiry</p>
            </motion.div>
            <motion.h2 className="font-display text-white leading-[0.95] mb-6"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Let&rsquo;s Create Something <em className="gold-text not-italic">Extraordinary</em>
            </motion.h2>
            <motion.p className="text-white/35 text-sm leading-relaxed mb-10"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              Every event is unique. Share your vision and receive a bespoke proposal within 24 hours.
            </motion.p>

            <motion.div className="space-y-3"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
              {[
                { icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8943F" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label:"Schedule a Call", sub:"20-min discovery call", href:"https://calendly.com/your-link" },
                { icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8943F" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label:"WhatsApp", sub:"Quick inquiries", href:"https://wa.me/919810000000" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" data-hover
                  className="flex items-center gap-4 p-4 border border-white/6 hover:border-[#B8943F]/30 transition-all duration-300 group block">
                  {item.icon}
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-white/25 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div className="lg:col-span-8"
            initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            {submitted ? (
              <motion.div className="h-full flex flex-col items-center justify-center text-center py-20"
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="w-14 h-14 border border-[#B8943F]/40 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8943F" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="font-display text-white text-3xl font-light mb-3">Inquiry Received</p>
                <p className="text-white/35 text-sm max-w-xs leading-relaxed">
                  Thank you. I&rsquo;ll personally review your event details and respond within 24 hours.
                </p>
                <span className="gold-line mt-8 mx-auto block" />
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label:"Full Name *", name:"name", type:"text", placeholder:"Your full name" },
                  { label:"Company / Organisation", name:"company", type:"text", placeholder:"Company name" },
                  { label:"Email Address *", name:"email", type:"email", placeholder:"your@email.com" },
                  { label:"Phone / WhatsApp *", name:"phone", type:"tel", placeholder:"+91 or international" },
                ].map(f => (
                  <div key={f.name}>
                    <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">{f.label}</label>
                    <input type={f.type} name={f.name} placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]} onChange={handleChange}
                      className="luxury-input luxury-input-dark" />
                  </div>
                ))}
                <div>
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Event Type *</label>
                  <select name="eventType" value={form.eventType} onChange={handleChange}
                    className="luxury-input luxury-input-dark bg-transparent appearance-none"
                    style={{ color: form.eventType ? "#F7F4EF" : "rgba(255,255,255,0.3)" }}>
                    <option value="" disabled>Select event type</option>
                    {eventTypes.map(t => <option key={t} value={t} style={{ background:"#111" }}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Event Date</label>
                  <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} className="luxury-input luxury-input-dark" />
                </div>
                <div>
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Location</label>
                  <input type="text" name="location" placeholder="City, Country" value={form.location} onChange={handleChange} className="luxury-input luxury-input-dark" />
                </div>
                <div>
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Expected Audience Size</label>
                  <input type="text" name="audience" placeholder="e.g. 500 guests" value={form.audience} onChange={handleChange} className="luxury-input luxury-input-dark" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange}
                    className="luxury-input luxury-input-dark bg-transparent appearance-none"
                    style={{ color: form.budget ? "#F7F4EF" : "rgba(255,255,255,0.3)" }}>
                    <option value="" disabled>Select budget range</option>
                    {budgets.map(b => <option key={b} value={b} style={{ background:"#111" }}>{b}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[9px] tracking-[0.2em] uppercase text-white/25 block mb-2">Tell Me About Your Event</label>
                  <textarea name="message" rows={4} placeholder="Share your event vision, theme, requirements..."
                    value={form.message} onChange={handleChange}
                    className="luxury-input luxury-input-dark resize-none" style={{ paddingTop:12 }} />
                </div>
                <div className="md:col-span-2">
                  <button onClick={handleSubmit} disabled={loading} className="btn-primary" data-hover>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Submit Inquiry
                      </span>
                    )}
                  </button>
                  <p className="text-white/18 text-[10px] mt-3 tracking-wide">Response within 24 hours · All inquiries are confidential</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
