"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from "../ui/SocialIcons";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@ariakapoor.com", href: "mailto:hello@ariakapoor.com" },
  { icon: Phone, label: "India", value: "+91 98100 XXXXX", href: "tel:+919810000000" },
  { icon: Phone, label: "Dubai / International", value: "+971 50 XXX XXXX", href: "tel:+97150000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/919810000000" },
];

const socials = [
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
  { Icon: TwitterIcon, label: "Twitter/X", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--beige)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>Reach Out</motion.p>
          <motion.h2 className="font-display leading-tight" style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 300, color: "var(--charcoal)" }} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Let&rsquo;s <em className="gold-text not-italic">Connect</em>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group p-6 bg-white border border-transparent hover:border-[var(--gold)]/30 transition-all duration-400 block" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07 }} data-hover>
              <c.icon size={20} className="mb-4 transition-colors duration-300 group-hover:text-[var(--gold)]" style={{ color: "var(--warm-gray)" }} />
              <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--warm-gray)" }}>{c.label}</p>
              <p className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>{c.value}</p>
            </motion.a>
          ))}
        </div>
        <motion.div className="flex justify-center gap-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 flex items-center justify-center border border-black/10 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300" style={{ color: "var(--warm-gray)" }} data-hover>
              <s.Icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
