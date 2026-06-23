"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from "../ui/SocialIcons";

const contacts = [
  { label:"Email", value:"hello@ariakapoor.com", href:"mailto:hello@ariakapoor.com",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { label:"India", value:"+91 98100 XXXXX", href:"tel:+919810000000",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.84 19.79 19.79 0 0 1 1.42 4.2 2 2 0 0 1 3.4 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { label:"Dubai / International", value:"+971 50 XXX XXXX", href:"tel:+97150000000",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label:"WhatsApp", value:"Message on WhatsApp", href:"https://wa.me/919810000000",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--beige)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="gold-line" />
            <p className="eyebrow">Reach Out</p>
            <span className="gold-line" />
          </motion.div>
          <motion.h2 className="font-display leading-[0.95]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300, color: "var(--charcoal)" }}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Let&rsquo;s <em className="gold-text not-italic">Connect</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {contacts.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" data-hover
              className="group p-6 bg-white border border-transparent hover:border-[#B8943F]/25 transition-all duration-400 block"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i*0.07 }}>
              <div className="text-[#B8943F] mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">{c.icon}</div>
              <p className="text-[9px] tracking-[0.18em] uppercase mb-1.5" style={{ color: "var(--warm-gray)" }}>{c.label}</p>
              <p className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>{c.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div className="flex justify-center gap-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          {[InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon].map((Icon, i) => (
            <a key={i} href="#" data-hover
              className="w-10 h-10 flex items-center justify-center border border-black/8 hover:border-[#B8943F] hover:text-[#B8943F] transition-all duration-300"
              style={{ color: "var(--warm-gray)" }}>
              <Icon size={14} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
