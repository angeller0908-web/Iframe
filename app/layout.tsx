import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyAd } from "@/components/MobileStickyAd";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Fall Brainrots",
    template: "%s | Fall Brainrots"
  },
  description:
    "Play Fall Brainrots online for free in your browser. Run, jump, dodge obstacles, and race to the finish line.",
  openGraph: {
    type: "website",
    siteName: "Fall Brainrots"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyAd enabled={false} />
      </body>
    </html>
  );
}
