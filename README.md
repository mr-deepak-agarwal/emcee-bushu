# Emcee Bushu — Website

Next.js 14 (App Router) + Tailwind site for Emcee Bushu (MC & choreographer).
Lavender / cream design system, 4 pages, and a booking form that emails via Resend.

## Pages
- `/` — Home (hero, event ticker, highlights, testimonials, Instagram, CTA)
- `/events` — Full list of event types
- `/about` — Bio + brand pillars
- `/book` — Booking enquiry form

## 1. Install

```bash
npm install
```

## 2. Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
RESEND_API_KEY=re_xxx        # from resend.com → API Keys
OWNER_EMAIL=bookings@emceebushu.com   # where new enquiries land
FROM_EMAIL="Emcee Bushu Website <bookings@emceebushu.com>"
```

**Resend setup (5 min):**
1. Create a free account at https://resend.com
2. Add and verify the client's real domain under **Domains** (add the DNS records they give you — usually 3 TXT/CNAME records at the domain registrar). Until verified, you can only send from `onboarding@resend.dev` to your own Resend account email — fine for testing, not for production.
3. Once verified, set `FROM_EMAIL` to an address on that domain, e.g. `bookings@emceebushu.com`.
4. Generate an API key under **API Keys** and put it in `RESEND_API_KEY`.

The booking form (`/book`) posts to `app/api/book/route.ts`, which:
- Emails the owner (`OWNER_EMAIL`) with all enquiry details, with the client's email set as Reply-To
- Sends an auto-reply to the client's email confirming receipt
- Has a hidden honeypot field (`company`) for basic spam filtering

## 3. Run locally

```bash
npm run dev
```

## 4. Swap in real content

- **Images**: drop real photos into `public/images/` and update `lib/data.ts` (`galleryImages`) plus the gradient block in `app/about/page.tsx`.
- **Instagram feed**: `components/InstagramFeed.tsx` currently shows a styled placeholder grid linking to the profile. For a live feed, the easiest route is a no-code embed service like Behold.so or SnapWidget (paste their embed script in), or Meta's Instagram Basic Display API if you want it fully native.
- **Contact details / WhatsApp number**: all in `lib/data.ts` under `site`.
- **Domain**: update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` and `public/robots.txt` once the real domain is live.

## 5. Deploy

Push to GitHub, import into Vercel, add the same environment variables in
Project Settings → Environment Variables, and deploy. No other config needed.

## Notes

- Built on Next.js 14.2.35 (patched) — don't downgrade, earlier 14.2.x has a known CVE.
- Tailwind tokens (lavender/cream palette, fonts) live in `tailwind.config.ts` and `app/globals.css`.
- Fonts: Fraunces (display) + Plus Jakarta Sans (body), loaded via `next/font/google` — requires network access at build time, which Vercel has by default.
