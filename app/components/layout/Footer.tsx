import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from "../ui/SocialIcons";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div>
            <p className="font-display text-3xl text-white font-light tracking-[0.2em] mb-1">ARIA</p>
            <p className="eyebrow text-[8px] mb-5">Kapoor</p>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              International Anchor · Emcee · Moderator · Corporate Host. Creating unforgettable experiences across global stages.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[9px] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Navigation</p>
            <div className="grid grid-cols-2 gap-y-2.5">
              {["About","Services","Events","Showreel","Testimonials","Gallery","Awards","Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-[11px] transition-colors duration-300 hover:text-[#B8943F]"
                  style={{ color: "rgba(255,255,255,0.25)" }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-[9px] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Get in Touch</p>
            <div className="space-y-2.5 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              <p>hello@ariakapoor.com</p>
              <p>+91 98100 XXXXX</p>
              <p>+971 50 XXX XXXX (Dubai)</p>
            </div>
            <div className="flex gap-2.5 mt-6">
              {[InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center border transition-all duration-300 hover:border-[#B8943F] hover:text-[#B8943F]"
                  style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)" }}>
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hr-gold mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          <p>© {new Date().getFullYear()} Aria Kapoor. All rights reserved.</p>
          <p>Crafted by <a href="https://codeq.tech" className="hover:opacity-70 transition-opacity" style={{ color: "#B8943F" }}>codeq</a></p>
        </div>
      </div>
    </footer>
  );
}
