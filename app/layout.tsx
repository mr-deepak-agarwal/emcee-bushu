import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emceebushu.com"),
  title: "Emcee Bushu — MC & Choreographer | Weddings, Corporate & Events",
  description:
    "Emcee Bushu is a professional MC and choreographer hosting weddings, corporate events, and celebrations across the UK, Goa, and worldwide. Book her for your next event.",
  openGraph: {
    title: "Emcee Bushu — Your Energy. Your Stage.",
    description:
      "Professional MC and choreographer available for worldwide booking. Weddings, corporate events, galas, and more.",
    type: "website",
  },
  keywords: [
    "emcee Goa",
    "MC for weddings Goa",
    "event host Goa",
    "wedding emcee UK",
    "corporate MC",
    "Emcee Bushu",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-body bg-cream text-plum antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
