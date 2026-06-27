import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightTrail from "@/components/SpotlightTrail";

export const metadata: Metadata = {
  title: "Emcee Bushu — Host. Perform. Unforgettable.",
  description:
    "Emcee Bushu is an international event host, MC and choreographer based in Goa, booking worldwide for weddings, corporate events and celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-body overflow-x-hidden">
        <SmoothScroll />
        <SpotlightTrail />
        {children}
      </body>
    </html>
  );
}
