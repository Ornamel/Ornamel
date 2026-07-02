import type { Metadata } from "next";
import { Spectral, Archivo, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FirstFounders (F2) — The Venture-Building & Human Capital Engine of Africa",
  description:
    "FirstFounders co-builds the AI companies Africa hasn't built yet — and the people who run them. Two mandates, one build machine: Vertical AI and Industrial Data Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spectral.variable} ${archivo.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "'Archivo',sans-serif", color: "#161412", overflowX: "hidden", backgroundColor: "#FFFFFF" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('sr-ready')",
          }}
        />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <ScrollReveal />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
