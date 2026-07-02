import type { Metadata } from "next";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "Our Model — The Studio | FirstFounders (F2)",
  description:
    "Build-Operate-Exit: how FirstFounders builds ventures and talent together, from ideation through to exit — and how that differs from traditional VC and accelerators.",
};

type Phase = { n: string; title: string; when: string; desc: string };

const phases: Phase[] = [
  { n: "01", title: "Ideation", when: "Weeks 1–4", desc: "Market research, problem validation, concept development. Talent gets industry exposure and design-thinking training." },
  { n: "02", title: "Build", when: "Weeks 5–16", desc: "MVP development, product iteration and market testing. Talent develops hands-on engineering and product-management skills." },
  { n: "03", title: "Launch", when: "Weeks 17–24", desc: "Go-to-market, customer acquisition, fundraising. Talent learns growth marketing, sales and investor relations." },
  { n: "04", title: "Scale", when: "Month 7–12", desc: "Product-market fit, team building and operational excellence. Talent develops leadership and scaling capabilities." },
  { n: "05", title: "Operator Mode & Exit", when: "Month 12–36", desc: "Operational support, shared-resource access, partnership drive, expansion — and M&A at Pre-Series A." },
];

type Row = { dim: string; vc: string; acc: string; ff: string };

const rows: Row[] = [
  { dim: "Approach", vc: "Writes checks, waits", acc: "Runs 3–6 month programmes", ff: "Builds companies from inception to exit" },
  { dim: "Talent", vc: "Imports talent; founder's problem", acc: "Trains separately from building", ff: "Grows embedded talent inside every venture" },
  { dim: "Involvement", vc: "Board seats & quarterly reviews", acc: "Demo Day & programme support", ff: "Full lifecycle, hands-on, 36 months" },
  { dim: "Outcome", vc: "Financial returns only", acc: "Demo Day visibility", ff: "Companies + trained builders + returns" },
  { dim: "Exit path", vc: "Series A/B → IPO (8–12 yrs)", acc: "Founder's own journey", ff: "M&A at Pre-Series A (24–36 months)" },
  { dim: "Cost efficiency", vc: "$500k builds 1 startup", acc: "Programme fees, no guarantee", ff: "$500k builds 2 startups in our studio model" },
];

function PhaseRow({ phase, last }: { phase: Phase; last?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        padding: "24px 36px",
        borderBottom: last ? undefined : "1px solid rgba(255,255,255,.16)",
        background: "#0D102F",
      }}
    >
      <div style={{ font: "400 28px 'Spectral',serif", color: "#33CCCC", lineHeight: 1, flexShrink: 0, width: 44 }}>{phase.n}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 6, flexWrap: "wrap" }}>
          <h4 style={{ font: "600 17px 'Archivo',sans-serif" }}>{phase.title}</h4>
          <span style={{ font: "600 10px 'Space Grotesk',sans-serif", letterSpacing: 1, textTransform: "uppercase", color: "#FFBC00" }}>
            {phase.when}
          </span>
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>{phase.desc}</p>
      </div>
    </div>
  );
}

function ComparisonRow({ row, last }: { row: Row; last?: boolean }) {
  return (
    <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr 1.2fr", borderTop: "1px solid rgba(22,20,18,.12)" }}>
      <div style={{ padding: "20px 24px", font: "600 13px 'Archivo',sans-serif" }}>{row.dim}</div>
      <div style={{ padding: "20px 24px", fontSize: 13, color: "#6B6358", lineHeight: 1.5 }}>{row.vc}</div>
      <div style={{ padding: "20px 24px", fontSize: 13, color: "#6B6358", lineHeight: 1.5 }}>{row.acc}</div>
      <div
        style={{
          padding: "20px 24px",
          fontSize: 13,
          color: "#161412",
          lineHeight: 1.5,
          background: "rgba(13,16,47,.05)",
          fontWeight: 500,
          borderBottom: last ? undefined : undefined,
        }}
      >
        {row.ff}
      </div>
    </div>
  );
}

export default function StudioModelPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 64, borderBottom: "1px solid rgba(22,20,18,.16)" }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            The Studio
          </div>
          <h1 style={{ font: "400 clamp(40px,5vw,72px)/1.04 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
            Where we build.
            <br />
            <span style={{ fontStyle: "italic", color: "#33CCCC" }}>How we build.</span>
            <br />
            Who we build for.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 600 }}>
            High-impact AI sectors. A proven model. And a clear thesis for every stakeholder — founders, talent, and investors.
          </p>
        </div>
      </section>

      {/* SECTOR FOCUS */}
      <section className="ff-px" style={{ padding: "90px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Sector Focus · Where We Build
          </span>
        </div>
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
          <div style={{ background: "#FFFFFF", padding: 44 }}>
            <div style={{ font: "400 44px 'Spectral',serif", color: "#33CCCC", marginBottom: 6 }}>$1.8T</div>
            <div style={{ fontSize: 13, color: "#6B6358", marginBottom: 24 }}>Total African digital economy opportunity</div>
            <h3 style={{ font: "400 30px 'Spectral',serif", letterSpacing: "-.5px", marginBottom: 14 }}>AI Vertical SaaS</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A443C", marginBottom: 24 }}>
              Domain-specific AI that owns a workflow forever. Africa&apos;s professional-services sectors — legal, healthcare,
              compliance, agri-trade, creative — are pre-digital, under-served, and massively underpriced relative to their
              value.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>Legal AI</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>Healthcare AI</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>Compliance AI</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>Creative &amp; Agri-Trade</span>
            </div>
          </div>
          <div style={{ background: "#FFFFFF", padding: 44 }}>
            <div style={{ font: "400 44px 'Spectral',serif", color: "#FFBC00", marginBottom: 6 }}>$120B+</div>
            <div style={{ fontSize: 13, color: "#6B6358", marginBottom: 24 }}>
              Operational data moats across freight, agri &amp; energy
            </div>
            <h3 style={{ font: "400 30px 'Spectral',serif", letterSpacing: "-.5px", marginBottom: 14 }}>
              AI Industrial Data Infrastructure
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A443C", marginBottom: 24 }}>
              Africa doesn&apos;t have legacy industrial systems — it has pre-digital ones. Every truck dispatch, crop cycle,
              grid fault and factory batch generates operational data, but almost none of it is captured. We capture, structure
              and monetise it.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>AgriData Stack</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>FreightBrain</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>GridIntel</span>
              <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>Identity &amp; Trade</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MODEL: BUILD-OPERATE-EXIT */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
            <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Our Model</span>
          </div>
          <h2
            style={{
              font: "400 clamp(32px,4vw,50px)/1.06 'Spectral',serif",
              letterSpacing: "-1.2px",
              marginBottom: 14,
              maxWidth: 760,
            }}
          >
            We don&apos;t just write checks and run programs. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>We build.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginBottom: 48 }}>
            We build ventures and talent together — from ideation through to exit.
          </p>

          <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 0, border: "1px solid rgba(255,255,255,.4)" }}>
            <div
              style={{
                background: "#0D102F",
                padding: 44,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRight: "1px solid rgba(255,255,255,.4)",
              }}
            >
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                  marginBottom: 14,
                }}
              >
                The F2 Method
              </div>
              <h3 style={{ font: "400 34px/1.1 'Spectral',serif", letterSpacing: "-.6px" }}>
                Build-Operate-Exit:
                <br />
                phase by phase
              </h3>
            </div>
            <div>
              {phases.map((p, i) => (
                <PhaseRow key={p.n} phase={p} last={i === phases.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            How We&apos;re Different
          </span>
        </div>
        <h2 style={{ font: "400 clamp(32px,4vw,50px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
          Not a VC. Not an accelerator.
          <br />
          <span style={{ fontStyle: "italic", color: "#33CCCC" }}>A venture factory.</span>
        </h2>
        <div style={{ border: "1px solid rgba(22,20,18,.16)", overflow: "hidden" }}>
          <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr 1.2fr", background: "#14110E", color: "#FFFFFF" }}>
            <div style={{ padding: "20px 24px", font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1, textTransform: "uppercase" }}>
              Dimension
            </div>
            <div
              style={{
                padding: "20px 24px",
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "rgba(244,241,234,.65)",
              }}
            >
              Traditional VC
            </div>
            <div
              style={{
                padding: "20px 24px",
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "rgba(244,241,234,.65)",
              }}
            >
              Accelerator
            </div>
            <div
              style={{
                padding: "20px 24px",
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#33CCCC",
              }}
            >
              FirstFounders
            </div>
          </div>
          {rows.map((r) => (
            <ComparisonRow key={r.dim} row={r} />
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
