import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "Blog — Insights from FirstFounders",
  description:
    "Dispatches, analysis and frameworks from the FirstFounders team — on venture building, African AI, and the future of work.",
};

const filters = ["All", "Venture Strategy", "Vertical SaaS", "Industrial Data", "Human Capital", "M&A"];

type Post = { cat: string; title: string; desc: string; meta: string };

const posts: Post[] = [
  {
    cat: "Vertical SaaS",
    title: "Why Vertical AI Owns the Workflow — and the Moat",
    desc: "Domain data plus deep workflow integration creates a defensibility general-purpose AI can't cross. Lessons from Pocket Lawyers.",
    meta: "May 2026 · 6 min",
  },
  {
    cat: "Industrial Data",
    title: "2025 Was a Compute Story. 2026 Is a Data Story.",
    desc: "Africa's operational data moats — freight, agriculture, energy, manufacturing — are the most valuable untouched assets on earth.",
    meta: "April 2026 · 7 min",
  },
  {
    cat: "Human Capital",
    title: "Talent as Infrastructure: The Learn-Build-Earn Model",
    desc: "Closing the gap between 12M annual workforce entrants and 3M formal jobs by embedding talent directly into ventures.",
    meta: "May 2026 · 5 min",
  },
  {
    cat: "M&A",
    title: "The Pre-Series A Exit: Why M&A-First Beats the IPO Dream",
    desc: "How a buyer-led M&A desk and 24–36 month exit windows reshape returns for an African venture studio.",
    meta: "March 2026 · 6 min",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
            paddingBottom: 36,
            borderBottom: "1px solid rgba(22,20,18,.16)",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <div
              style={{
                font: "600 12px 'Space Grotesk',sans-serif",
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "#33CCCC",
                marginBottom: 28,
              }}
            >
              Articles &amp; Blog
            </div>
            <h1 style={{ font: "400 clamp(40px,5.2vw,76px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 24 }}>
              From the <span style={{ fontStyle: "italic", color: "#33CCCC" }}>build floor.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C" }}>
              Dispatches, analysis and frameworks from the FirstFounders team — on venture building, African AI, and
              the future of work.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <span
                key={f}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "9px 16px",
                  border: "1px solid rgba(22,20,18,.28)",
                  color: "#4A443C",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="ff-px" style={{ padding: "56px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-stack" style={{ border: "1px solid #161412", display: "grid", gridTemplateColumns: ".9fr 1.1fr" }}>
          <div
            style={{
              background: "#0D102F",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              padding: 48,
            }}
          >
            <span style={{ font: "400 clamp(50px,9vw,96px) 'Spectral',serif", color: "rgba(51,204,204,.5)" }}>F2</span>
          </div>
          <div style={{ padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                }}
              >
                Venture Strategy
              </span>
              <span style={{ fontSize: 11, color: "#FFBC00", fontWeight: 600 }}>· Featured</span>
            </div>
            <h2 style={{ font: "400 clamp(26px,2.8vw,38px)/1.12 'Spectral',serif", letterSpacing: "-.6px", marginBottom: 16 }}>
              Build to Transfer &amp; Build to Exit: FirstFounders&apos; Two-Mandate Strategy for Africa&apos;s AI
              Economy
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#4A443C", marginBottom: 24 }}>
              Why we consolidated around two focused mandates — and what it means for founders, corporates, and
              investors seeking capital-efficient, outcome-driven venture building in Africa.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", color: "#6B6358" }}>
                FirstFounders Research · May 2026 · 8 min read
              </span>
              <HoverLink
                href="#"
                style={{ fontSize: 13, fontWeight: 600, padding: "11px 22px", border: "1px solid #161412" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                Read
              </HoverLink>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="ff-px" style={{ padding: "32px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
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
          {posts.map((p) => (
            <div key={p.title} style={{ background: "#FFFFFF", padding: 38, display: "flex", flexDirection: "column", minHeight: 240 }}>
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                  marginBottom: 16,
                }}
              >
                {p.cat}
              </div>
              <h3 style={{ font: "400 24px/1.2 'Spectral',serif", letterSpacing: "-.4px", marginBottom: 14 }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C", flex: 1 }}>{p.desc}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  marginTop: 24,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(22,20,18,.14)",
                }}
              >
                <span style={{ font: "600 12px 'Space Grotesk',sans-serif", color: "#6B6358" }}>{p.meta}</span>
                <HoverLink href="#" style={{ fontSize: 13, fontWeight: 600, color: "#33CCCC" }} hoverStyle={{ color: "#1C2150" }}>
                  Read
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
