import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For Founders — Build to Exit | FirstFounders (F2)",
  description:
    "Don't just join a startup. Build one. F2VS provides $250k strategic capital, a dedicated tech team, infrastructure, and 36 months of operational hand-holding.",
};

type Offer = { n: string; title: string; desc: string };

const offers: Offer[] = [
  { n: "01", title: "Venture creation programme", desc: "Discover, learn and validate your idea through the Venture Lab — covering digital entrepreneurship, AI ventures, market research and pitch creation." },
  { n: "02", title: "$250,000 strategic capital", desc: "Pre-seed to seed funding deployed as resources directly into your build — not a lump sum sitting in a bank account." },
  { n: "03", title: "Dedicated engineering team", desc: "A trained, ready-to-build team of engineers, designers and operators — assigned to your venture from Day 1 and with you for 36 months." },
  { n: "04", title: "Legal, finance & HR infrastructure", desc: "Company registration, IP protection, financial setup and accounting handled by our in-house team so you focus on building." },
  { n: "05", title: "Network & M&A pipeline", desc: "Connections to customers, partners and follow-on investors. Our M&A desk proactively facilitates acquisition discussions from Month 18." },
];

const terms = [
  { k: "Founder(s)", v: "52%" },
  { k: "FirstFounders", v: "30%" },
  { k: "Seed investor pool", v: "10%" },
  { k: "ESOP", v: "8%" },
  { k: "Capital deployed", v: "$250,000" },
  { k: "Support duration", v: "36 months" },
  { k: "Target exit range", v: "$5M — $25M" },
];

type Persona = { letter: string; accent: string; title: string; body: string };

const personas: Persona[] = [
  { letter: "T", accent: "#33CCCC", title: "Technical Founders", body: "Engineers and technologists with deep expertise in AI, data, or related fields. You have the technical vision — we'll help you build the business around it." },
  { letter: "D", accent: "#FFBC00", title: "Domain Experts", body: "Industry insiders who understand the problems worth solving in legal, healthcare, agriculture, or logistics. You bring the domain knowledge — we'll help you build the solution." },
  { letter: "F", accent: "#33CCCC", title: "First-Time Founders", body: "Ambitious builders with strong skills but limited networks. You've got the talent — we'll provide the platform." },
];

export default function StudioFoundersPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            gap: 64,
            alignItems: "end",
            paddingBottom: 64,
            borderBottom: "1px solid rgba(22,20,18,.16)",
          }}
        >
          <div>
            <div
              style={{
                font: "600 12px 'Space Grotesk',sans-serif",
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "#33CCCC",
                marginBottom: 28,
              }}
            >
              For Founders · Build to Exit
            </div>
            <h1 style={{ font: "400 clamp(40px,5.2vw,76px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              Don&apos;t just join a startup. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>Build one.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 540, marginBottom: 34 }}>
              We provide $250k strategic capital, a dedicated tech team, the infrastructure, and 36 months of operational
              hand-holding. You provide the ambition.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <HoverLink
                href={routes.f2vsApply}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Apply to the F2VS Program
              </HoverLink>
              <HoverLink
                href={routes.insightsResources}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", border: "1px solid #161412" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                Download Brochure
              </HoverLink>
            </div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(22,20,18,.16)", paddingLeft: 32 }}>
            <div style={{ font: "400 56px 'Spectral',serif", color: "#33CCCC", lineHeight: 1, marginBottom: 8 }}>30%</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>
              Equity taken by FirstFounders in exchange for the full build — capital, team, infrastructure, and the road to
              exit.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET + EQUITY */}
      <section className="ff-px" style={{ padding: "90px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            {offers.map((o, i) => (
              <div
                key={o.n}
                style={{
                  display: "flex",
                  gap: 22,
                  padding: "22px 0",
                  borderBottom: i === offers.length - 1 ? undefined : "1px solid rgba(22,20,18,.14)",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ font: "400 22px 'Spectral',serif", color: "#33CCCC", flexShrink: 0, width: 28 }}>{o.n}</div>
                <div>
                  <h4 style={{ font: "600 16px 'Archivo',sans-serif", marginBottom: 6 }}>{o.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ padding: 34, borderBottom: "1px solid rgba(22,20,18,.16)" }}>
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                  marginBottom: 8,
                }}
              >
                Cap Table at Build
              </div>
              <h3 style={{ font: "400 26px 'Spectral',serif", letterSpacing: "-.4px" }}>The deal structure</h3>
            </div>
            {terms.map((t) => (
              <div
                key={t.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 34px",
                  borderBottom: "1px solid rgba(22,20,18,.12)",
                }}
              >
                <span style={{ fontSize: 14, color: "#4A443C" }}>{t.k}</span>
                <span style={{ font: "600 15px 'Space Grotesk',sans-serif", color: "#161412" }}>{t.v}</span>
              </div>
            ))}
            <div style={{ padding: "24px 34px", background: "#0D102F", color: "#FFFFFF" }}>
              <p style={{ fontSize: 13, lineHeight: 1.6, fontStyle: "italic", fontFamily: "'Spectral',serif" }}>
                &quot;You&apos;re a builder at heart, ready to get your hands dirty, and drive a company to exit. You make quick
                decisions, embrace feedback, and bounce back from setbacks with relentless optimism.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ font: "400 clamp(32px,4vw,50px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
            Who we&apos;re <span style={{ fontStyle: "italic", color: "#33CCCC" }}>looking for.</span>
          </h2>
          <div
            className="ff-stack-tablet"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              background: "rgba(255,255,255,.16)",
              border: "1px solid rgba(255,255,255,.16)",
            }}
          >
            {personas.map((p) => (
              <div key={p.letter} style={{ background: "#0D102F", color: "#FFFFFF", padding: 40, minHeight: 260 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    border: `1px solid ${p.accent}`,
                    color: p.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    font: "400 20px 'Spectral',serif",
                    marginBottom: 24,
                  }}
                >
                  {p.letter}
                </div>
                <h3 style={{ font: "400 24px 'Spectral',serif", marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
