import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Start a Venture — FirstFounders",
  description:
    "Leverage FirstFounders' expertise, infrastructure, and talent pipeline to build your next AI venture — Vertical SaaS or Industrial Data Infrastructure. Share your brief with us to begin.",
};

type WhyCard = { n: string; accent: string; title: string; body: string };

const whyCards: WhyCard[] = [
  {
    n: "01",
    accent: "rgba(13,16,47,.25)",
    title: "Reduced Risk",
    body: "We use a proven, data-driven methodology — the F2 scoring matrix and kill-or-build frameworks — to validate ideas before scaling. We build companies, we don't bet on them.",
  },
  {
    n: "02",
    accent: "rgba(255,188,0,.28)",
    title: "Embedded Talent",
    body: "Skip the setup. We provide the legal, HR and operational framework — plus a trained, embedded team that runs the venture and transfers with it.",
  },
  {
    n: "03",
    accent: "rgba(13,16,47,.25)",
    title: "Expert Builders",
    body: "Access a vetted pool of engineers and operators who understand the African market — and 18+ years of venture-building expertise behind every build.",
  },
];

export default function StartVenturePage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 64, borderBottom: "1px solid rgba(22,20,18,.16)", maxWidth: 820 }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            Build With Us · Start a Venture Brief
          </div>
          <h1 style={{ font: "400 clamp(42px,5.4vw,78px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
            Turn your vision into a <span style={{ fontStyle: "italic", color: "#33CCCC" }}>market-ready venture.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 600, marginBottom: 34 }}>
            Leverage FirstFounders&apos; expertise, infrastructure, and talent pipeline to build your next AI venture —
            Vertical SaaS or Industrial Data Infrastructure. Share your brief with us to begin.
          </p>
          <HoverLink
            href={routes.startVentureBrief}
            style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
            hoverStyle={{ background: "#1C2150" }}
          >
            Start a Venture Brief
          </HoverLink>
        </div>
      </section>

      {/* WHY */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Why Build With Our Studio
          </span>
        </div>
        <h2 style={{ font: "400 clamp(32px,4vw,50px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
          A venture factory, <span style={{ fontStyle: "italic", color: "#33CCCC" }}>not a vendor.</span>
        </h2>
        <div
          className="ff-stack-tablet"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
          }}
        >
          {whyCards.map((c) => (
            <div key={c.n} style={{ background: "#FFFFFF", padding: 44, minHeight: 280 }}>
              <div style={{ font: "400 40px 'Spectral',serif", color: c.accent, marginBottom: 24 }}>{c.n}</div>
              <h3 style={{ font: "400 26px 'Spectral',serif", marginBottom: 14 }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO MANDATES STRIP */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div
          className="ff-stack"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(255,255,255,.16)",
            border: "1px solid rgba(255,255,255,.16)",
          }}
        >
          <div style={{ background: "#0D102F", color: "#FFFFFF", padding: 44 }}>
            <div
              style={{
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#33CCCC",
                marginBottom: 12,
              }}
            >
              Mandate 01
            </div>
            <h3 style={{ font: "400 30px 'Spectral',serif", letterSpacing: "-.5px", marginBottom: 12 }}>Build to Transfer</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 20 }}>
              For corporations, government &amp; DFIs. We design, build and deliver a fully operational AI company,
              then hand complete ownership to you — with a trained team in place to run it.
            </p>
            <HoverLink href={routes.buildToTransfer} style={{ fontSize: 14, fontWeight: 600, color: "#33CCCC" }} hoverStyle={{ color: "#1C2150" }}>
              Explore Build to Transfer
            </HoverLink>
          </div>
          <div style={{ background: "#0D102F", color: "#FFFFFF", padding: 44 }}>
            <div
              style={{
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#FFBC00",
                marginBottom: 12,
              }}
            >
              Mandate 02
            </div>
            <h3 style={{ font: "400 30px 'Spectral',serif", letterSpacing: "-.5px", marginBottom: 12 }}>Build to Exit</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 20 }}>
              For founders with bold AI ideas. We co-build with 30% equity, $250k capital and a full embedded team —
              driving toward M&amp;A at Pre-Series A.
            </p>
            <HoverLink href={routes.studioFounders} style={{ fontSize: 14, fontWeight: 600, color: "#33CCCC" }} hoverStyle={{ color: "#1C2150" }}>
              For founders
            </HoverLink>
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
