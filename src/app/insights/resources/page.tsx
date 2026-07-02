import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "Resources — White Papers & Reports | FirstFounders",
  description:
    "Gated research and frameworks from the FirstFounders studio — available free with your email. Each report is built from real portfolio data and operational experience.",
};

type Report = { kicker: string; title: string; desc: string; meta: string };

const reports: Report[] = [
  {
    kicker: "Research Report · 2026",
    title: "The African Venture Studio Model: Capital Efficiency, M&A Exits, and the Case for Build-to-Transfer",
    desc: "How venture studios are redefining startup creation in Africa — and why the Build-to-Transfer mandate is unlocking a new asset class for institutional investors and corporates.",
    meta: "PDF · 24 pages · May 2026",
  },
  {
    kicker: "Fund Intelligence · 2026",
    title: "FirstFounders Fund I: LP Fact Sheet — $30M Blended Finance Vehicle",
    desc: "The complete investor summary for FirstFounders Fund I — fund structure, capital allocation, projected returns, 5-year exit model, and portfolio overview for prospective LPs.",
    meta: "PDF · 18 pages · May 2026",
  },
  {
    kicker: "Research Report · 2026",
    title: "Africa's AI Vertical SaaS & Industrial Data Opportunity: Where We're Building and Why",
    desc: "A deep-dive into FirstFounders' two core mandates — market sizing, funding trends, key players, and the specific build thesis for each through 2028.",
    meta: "PDF · 16 pages · April 2026",
  },
  {
    kicker: "Human Capital Report · 2026",
    title: "Talent as Infrastructure: The Learn-Build-Earn Model and Africa's Digital Workforce Gap",
    desc: "How FirstFounders is closing the gap between 12M annual workforce entrants and 3M formal jobs — and the economic case for embedding talent directly into ventures.",
    meta: "PDF · 24 pages · May 2026",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 56, borderBottom: "1px solid rgba(22,20,18,.16)", maxWidth: 720 }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            Downloadable Resources
          </div>
          <h1 style={{ font: "400 clamp(44px,5.6vw,80px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 28 }}>
            White papers <span style={{ fontStyle: "italic", color: "#33CCCC" }}>&amp; reports.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C" }}>
            Gated research and frameworks from the FirstFounders studio — available free with your email. Each report
            is built from real portfolio data and operational experience.
          </p>
        </div>
      </section>

      {/* REPORTS */}
      <section className="ff-px" style={{ padding: "64px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
          }}
        >
          {reports.map((r) => (
            <div key={r.title} style={{ background: "#FFFFFF", padding: 40, display: "flex", flexDirection: "column", minHeight: 300 }}>
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                  marginBottom: 18,
                }}
              >
                {r.kicker}
              </div>
              <h3 style={{ font: "400 26px/1.18 'Spectral',serif", letterSpacing: "-.4px", marginBottom: 16 }}>{r.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", flex: 1 }}>{r.desc}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  marginTop: 28,
                  paddingTop: 22,
                  borderTop: "1px solid rgba(22,20,18,.14)",
                }}
              >
                <span style={{ font: "600 12px 'Space Grotesk',sans-serif", color: "#6B6358" }}>{r.meta}</span>
                <HoverLink
                  href="mailto:insights@firstfounders.cc"
                  style={{ fontSize: 13, fontWeight: 600, padding: "11px 20px", background: "#0D102F", color: "#FFFFFF" }}
                  hoverStyle={{ background: "#1C2150" }}
                >
                  Download ↓
                </HoverLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
