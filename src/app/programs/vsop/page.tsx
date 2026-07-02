import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "VSOP — Venture Studio Operators Program | FirstFounders",
  description:
    "VSOP is FirstFounders' professional development programme for experienced operators, executives and entrepreneurs who want to become certified venture builders and venture studio operators.",
};

const details = [
  "Format: Hybrid — cohort-based online + Lagos in-person",
  "Duration: 8 weeks · 3 hours/week",
  "Cohort size: 20 operators maximum",
  "Next intake: Q3 2026",
  "Certificate: VSOP Certified Venture Builder",
  "Alumni network access for life",
];

const modules = [
  {
    n: "01",
    title: "Venture Studio Fundamentals",
    desc: "How studios are structured, capitalised and operated. Studio P&L, portfolio construction, and the build-operate-exit model.",
  },
  {
    n: "02",
    title: "Idea Validation & Market Research",
    desc: "The F2 scoring matrix, kill-or-build decision frameworks, and the methodology for validating $1B+ TAM opportunities in African markets.",
  },
  {
    n: "03",
    title: "Build Operations & Talent Management",
    desc: "Running embedded teams, sprint governance, product-market fit measurement, and the talent flywheel that powers FirstFounders' studio model.",
  },
  {
    n: "04",
    title: "Fund Structuring & LP Relations",
    desc: "How to raise a studio fund, structure blended-finance vehicles, manage LP reporting, and build an M&A exit pipeline that generates distributions.",
  },
  {
    n: "05",
    title: "Capstone: Launch Your Own Studio",
    desc: "Graduate with a complete studio playbook, a pitch deck for your first fund, and a network of fellow operators across Africa.",
  },
];

export default function ProgramVsopPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr .85fr",
            gap: 64,
            alignItems: "start",
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
              Academy · VSOP
            </div>
            <h1 style={{ font: "400 clamp(38px,5vw,72px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              Venture Studio <span style={{ fontStyle: "italic", color: "#33CCCC" }}>Operators Program</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 560, marginBottom: 34 }}>
              VSOP is FirstFounders&apos; professional development programme for experienced operators, executives and
              entrepreneurs who want to become certified venture builders and venture studio operators. We train the
              next generation of Africa&apos;s studio infrastructure.
            </p>
            <HoverLink
              href={routes.programVsopEnroll}
              style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
              hoverStyle={{ background: "#1C2150" }}
            >
              Enroll Now
            </HoverLink>
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)", padding: 34, background: "rgba(13,16,47,.025)" }}>
            <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#33CCCC", marginBottom: 22 }}>
              Programme Details
            </div>
            {details.map((d) => (
              <div
                key={d}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "13px 0",
                  borderTop: "1px solid rgba(22,20,18,.12)",
                  fontSize: 14,
                  color: "#4A443C",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#33CCCC", flexShrink: 0 }}>→</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="ff-px" style={{ padding: "90px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Programme Highlights</span>
        </div>
        <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
          {modules.map((m, i) => (
            <div
              key={m.n}
              style={{
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                padding: "28px 40px",
                borderBottom: i === modules.length - 1 ? undefined : "1px solid rgba(22,20,18,.12)",
              }}
            >
              <div style={{ font: "400 30px 'Spectral',serif", color: "#33CCCC", lineHeight: 1, flexShrink: 0, width: 48 }}>{m.n}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ font: "600 18px 'Archivo',sans-serif", marginBottom: 6 }}>{m.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", maxWidth: 760 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
