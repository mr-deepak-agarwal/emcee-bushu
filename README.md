# Emcee Bushu — Website

A high-energy, animated portfolio/booking site for Emcee Bushu (event host, MC
& choreographer), built with Next.js 16 (App Router), Tailwind CSS v4,
Framer Motion, and Lenis smooth scroll. Bookings are saved to Supabase.

## 1. Install dependencies

```bash
npm install
```

## 2. Connect Supabase (for the booking form)

1. Create a free project at https://supabase.com
2. In your Supabase project, go to **SQL Editor → New query**, paste the
   contents of `supabase-schema.sql` (in this folder), and run it. This
   creates the `bookings` table and locks it down so only the site can
   submit new inquiries — nobody but you can read them from the public site.
3. In Supabase, go to **Project Settings → API** and copy:
   - **Project URL**
   - **anon / public key**
4. Copy `.env.local.example` to `.env.local` and paste those values in:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Without this step, the booking form will show an error when submitted —
everything else on the site works fine regardless.

To view submitted bookings later: Supabase dashboard → **Table Editor →
bookings**.

## 3. Run it locally

```bash
npm run dev
```

Open http://localhost:3000

## 4. Swap in real photos

All images are currently styled placeholders (so the layout/animations are
easy to preview before real photography is ready). They're rendered by
`components/PlaceholderImage.tsx`. To swap in a real photo, replace a
`<PlaceholderImage ... />` usage with a Next.js `<Image>` component pointing
at a file placed in `/public`.

## 5. Update contact details

WhatsApp number and Instagram handle are currently placeholders pulled from
the brief — search for `wa.me` and `instagram.com` across `components/` to
update them with the real ones.

## 6. Deploy

Easiest path is Vercel:

```bash
npx vercel
```

Add the two `NEXT_PUBLIC_SUPABASE_*` environment variables in your Vercel
project settings (Settings → Environment Variables) so the live site can
talk to Supabase too.

## Project structure

- `app/page.tsx` — assembles all sections
- `components/` — one file per section (Hero, About, Services, Events,
  Gallery, Testimonials, Booking, Nav, Footer) plus shared bits
  (`SmoothScroll`, `SpotlightTrail`, `PlaceholderImage`)
- `lib/content.ts` — all site copy in one place, easy to edit without
  touching component code
- `lib/supabase.ts` — Supabase client setup
- `supabase-schema.sql` — run once in Supabase to create the bookings table
