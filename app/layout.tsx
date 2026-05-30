import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Fall Brainrots \u2013 Play Unblocked Brainrot Games Free Online",
    template: "%s | Fall Brainrots \u2013 Unblocked Games"
  },
  description:
    "Play Fall Brainrots and other brainrot games online for free \u2014 no download, no install. Unblocked browser games you can play at school on any device including Chromebook.",
  keywords: [
    "brainrot games",
    "unblocked games",
    "play at school",
    "free online games",
    "no download games",
    "browser games",
    "HTML5 games",
    "Chromebook games",
    "meme games",
    "Italian brainrot",
    "parkour games unblocked",
    "Fall Brainrots"
  ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XS5W39GB97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XS5W39GB97');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
