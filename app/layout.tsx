import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aria Kapoor | International Anchor, Emcee & Event Host",
  description:
    "Aria Kapoor is a world-class international anchor, emcee, moderator, and corporate event host. 18+ years, 42+ countries, 800+ events. Book for corporate conferences, award ceremonies, luxury weddings, and global summits.",
  keywords: [
    "international anchor",
    "professional emcee",
    "corporate event host",
    "conference moderator",
    "luxury wedding host",
    "event presenter India",
    "global stage personality",
  ],
  openGraph: {
    title: "Aria Kapoor | International Anchor & Emcee",
    description: "Creating unforgettable experiences across global stages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aria Kapoor",
              jobTitle: "Professional Anchor, Emcee & Event Host",
              url: "https://ariakapoor.com",
              sameAs: [
                "https://instagram.com/ariakapoor",
                "https://linkedin.com/in/ariakapoor",
              ],
              knowsAbout: [
                "Event Hosting",
                "Corporate Conferences",
                "Award Ceremonies",
                "Panel Moderation",
                "Luxury Weddings",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
