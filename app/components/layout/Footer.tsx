import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from "../ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-display text-3xl text-white font-light tracking-widest mb-2">ARIA</p>
            <p className="eyebrow mb-4">Kapoor</p>
            <p className="text-xs leading-relaxed text-white/30 max-w-xs">
              International Anchor · Emcee · Moderator · Corporate Host. Creating unforgettable experiences across global stages.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5 text-white/60">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Services", "Events", "Showreel", "Testimonials", "Gallery", "Awards", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-xs hover:text-[var(--gold)] transition-colors duration-300 py-1">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5 text-white/60">Get in Touch</p>
            <div className="space-y-3 text-xs">
              <p>hello@ariakapoor.com</p>
              <p>+91 98100 XXXXX</p>
              <p>+971 50 XXX XXXX (Dubai)</p>
            </div>
            <div className="flex gap-3 mt-6">
              {[InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hr-gold mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[11px]">
          <p>© {new Date().getFullYear()} Aria Kapoor. All rights reserved.</p>
          <p>Crafted by <a href="https://codeq.tech" className="text-[var(--gold)] hover:opacity-80 transition-opacity">codeq</a></p>
        </div>
      </div>
    </footer>
  );
}
