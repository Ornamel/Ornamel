import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For Investors — FirstFounders (F2)",
  description:
    "FirstFounders converts Africa's talent arbitrage into venture returns — a 4.9× gross MOIC target and 35–45% target IRR through an M&A-first venture-building engine.",
};

type Point = { n: string; title: string; desc: string };

const points: Point[] = [
  { n: "01", title: "4.9× gross MOIC target", desc: "Projected $98M+ distribution on a $20M equity pool, driven by 35 exits across 50 portfolio companies over five years." },
  { n: "02", title: "DPI from Month 30", desc: "M&A-first strategy means capital returns start at Pre-Series A — not at IPO in 10 years. 35–45% target IRR." },
  { n: "03", title: "De-risked by grants", desc: "$10M grant pool funds R&D and talent development — ensuring only validated, high-traction MVPs receive equity capital." },
  { n: "04", title: "Studio efficiency", desc: "Where it takes $500k to build 1 startup in traditional venture, we build 2 with the same amount. Early-stage deals represent 72.8% of African startup volume." },
  { n: "05", title: "Proven track record", desc: "6.5× MOIC. BusinessDay Top Fastest Growing Company. Lagos Business School case study. 20+ companies built." },
];

const fund = [
  { k: "Total fund size", v: "$30M" },
  { k: "Equity pool", v: "$20M" },
  { k: "Grant pool", v: "$10M" },
  { k: "Companies to build", v: "50 over 5 years" },
  { k: "Investment per company", v: "$250,000" },
  { k: "Target exits", v: "35 M&A exits" },
  { k: "Gross distribution", v: "~$98M" },
];

export default function StudioInvestorsPage() {
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
              For Investors
            </div>
            <h1 style={{ font: "400 clamp(40px,5.2vw,76px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              Capture the talent <span style={{ fontStyle: "italic", color: "#33CCCC" }}>arbitrage.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 540, marginBottom: 34 }}>
              600 million young people enter Africa&apos;s workforce by 2040. That&apos;s not a social problem to solve —
              it&apos;s a talent arbitrage to capture. FirstFounders is the vehicle that converts it into venture returns.
            </p>
            <HoverLink
              href={routes.studioInvestorsDeck}
              style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
              hoverStyle={{ background: "#1C2150" }}
            >
              Request Investor Deck
            </HoverLink>
          </div>
          <div style={{ borderLeft: "1px solid rgba(22,20,18,.16)", paddingLeft: 32 }}>
            <div style={{ font: "400 56px 'Spectral',serif", color: "#FFBC00", lineHeight: 1, marginBottom: 8 }}>35–45%</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>
              Target IRR — higher than traditional VC due to the speed of our M&amp;A-first exits.
            </p>
          </div>
        </div>
      </section>

      {/* THESIS + FUND TABLE */}
      <section className="ff-px" style={{ padding: "90px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            {points.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: "flex",
                  gap: 22,
                  padding: "24px 0",
                  borderBottom: i === points.length - 1 ? undefined : "1px solid rgba(22,20,18,.14)",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ font: "400 22px 'Spectral',serif", color: "#33CCCC", flexShrink: 0, width: 28 }}>{p.n}</div>
                <div>
                  <h4 style={{ font: "600 16px 'Archivo',sans-serif", marginBottom: 6 }}>{p.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)", background: "rgba(13,16,47,.025)" }}>
            <div style={{ padding: 34, borderBottom: "1px solid rgba(22,20,18,.16)" }}>
              <div style={{ font: "400 48px 'Spectral',serif", color: "#33CCCC", marginBottom: 6 }}>4.9×</div>
              <p style={{ fontSize: 14, color: "#4A443C" }}>
                Gross MOIC target — projected $98M+ distribution on a $20M equity pool, driven by 35 exits across 50 portfolio
                companies over five years.
              </p>
            </div>
            {fund.map((f) => (
              <div
                key={f.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 34px",
                  borderBottom: "1px solid rgba(22,20,18,.12)",
                }}
              >
                <span style={{ fontSize: 14, color: "#4A443C" }}>{f.k}</span>
                <span style={{ font: "600 14px 'Space Grotesk',sans-serif", color: "#161412" }}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
