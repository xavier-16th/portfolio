// root layout - wraps everything
// poppins font, navbar, footer, raindrop bg effect

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RaindropEffect from "@/components/RaindropEffect";

// loading poppins with different weights so i can use it everywhere
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// seo stuff - shows up in google and when you share links
export const metadata: Metadata = {
  title: {
    default: "Xavier Carrier | Portfolio",
    template: "%s | Xavier Carrier",
  },
  description:
    "Portfolio de Xavier Carrier — Développeur web passionné, spécialisé en React, Next.js et TypeScript. Découvrez mes projets, compétences et parcours.",
  keywords: [
    "Xavier Carrier",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "IIM",
    "full-stack",
  ],
  authors: [{ name: "Xavier Carrier" }],
  creator: "Xavier Carrier",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xavier-carrier.dev",
    siteName: "Xavier Carrier Portfolio",
    title: "Xavier Carrier | Portfolio",
    description:
      "Portfolio de Xavier Carrier — Développeur web passionné. Découvrez mes projets et compétences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// the actual layout shell that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Knewave&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <RaindropEffect />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
