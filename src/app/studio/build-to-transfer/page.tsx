import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Build to Transfer — FirstFounders (F2)",
  description:
    "Build-to-Transfer delivers a fully operational AI company — product, embedded team, legal entity and go-to-market engine — then hands you complete ownership.",
};

type Step = { n: string; title: string; desc: string; when: string };

const steps: Step[] = [
  {
    n: "01",
    title: "Discovery & Scoping",
    desc: "We assess the opportunity, validate the problem against our F2 scoring matrix, and define the venture's scope, success metrics and transfer terms.",
    when: "Weeks 1–4",
  },
  {
    n: "02",
    title: "Design & Architecture",
    desc: "Product design, technical architecture, data strategy and the legal entity are stood up — with your team involved from the first sprint.",
    when: "Weeks 5–10",
  },
  {
    n: "03",
    title: "Build & Embed",
    desc: "Our engineers and operators build the product and go-to-market engine while training the embedded team that will run it after transfer.",
    when: "Months 3–10",
  },
  {
    n: "04",
    title: "Transfer & Handover",
    desc: "Full ownership of the company, IP, infrastructure and trained team is transferred to you — with a structured 90-day post-handover support window.",
    when: "Months 10–12",
  },
];

const deliverables = [
  "A fully operational, legally incorporated AI company",
  "Production-grade product built to global standards",
  "A trained, embedded operating team transferred with the build",
  "Complete IP, data assets and infrastructure ownership",
  "Go-to-market engine and 90-day post-transfer support",
];

const idealFor = [
  { t: "Corporations", d: "Building an AI venture adjacent to your core business without distracting your in-house teams." },
  { t: "Government & public sector", d: "Standing up digital infrastructure and AI services with a clear ownership and accountability model." },
  { t: "DFIs & development partners", d: "Funding job-creating, acquireable ventures with measurable economic and talent outcomes." },
  { t: "Enterprises with a data moat", d: "Sitting on operational data you want captured, structured and turned into an AI asset." },
];

function StepRow({ step, last }: { step: Step; last?: boolean }) {
  return (
    <div
      className="ff-stack-tablet"
      style={{
        display: "grid",
        gridTemplateColumns: ".5fr 1.6fr .9fr",
        borderBottom: last ? undefined : "1px solid rgba(22,20,18,.12)",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "30px 36px", font: "400 36px 'Spectral',serif", color: "#33CCCC" }}>{step.n}</div>
      <div style={{ padding: "30px 36px", borderLeft: "1px solid rgba(22,20,18,.12)" }}>
        <h3 style={{ font: "600 18px 'Archivo',sans-serif", marginBottom: 6 }}>{step.title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>{step.desc}</p>
      </div>
      <div
        style={{
          padding: "30px 36px",
          borderLeft: "1px solid rgba(22,20,18,.12)",
          font: "600 11px 'Space Grotesk',sans-serif",
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "#FFBC00",
        }}
      >
        {step.when}
      </div>
    </div>
  );
}

export default function BuildToTransferPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr .75fr",
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
              Mandate 01 · For Corporations, Government &amp; DFIs
            </div>
            <h1 style={{ font: "400 clamp(40px,5.2vw,76px)/1.0 'Spectral',serif", letterSpacing: "-2px", marginBottom: 28 }}>
              Commission it. We build it. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>You own it.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 560, marginBottom: 34 }}>
              Build-to-Transfer delivers a fully operational AI company — product, embedded team, legal entity and
              go-to-market engine — then hands you complete ownership, with a trained team in place to run it from day one.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <HoverLink
                href={routes.buildToTransferQualify}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Book a Discovery Call
              </HoverLink>
            </div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(22,20,18,.16)", paddingLeft: 32, display: "flex", flexDirection: "column", gap: 26 }}>
            <div>
              <div style={{ font: "400 44px 'Spectral',serif", color: "#33CCCC", lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 13, color: "#6B6358", marginTop: 6, lineHeight: 1.45 }}>Client ownership at transfer</div>
            </div>
            <div style={{ borderTop: "1px solid rgba(22,20,18,.12)", paddingTop: 22 }}>
              <div style={{ font: "400 44px 'Spectral',serif", color: "#33CCCC", lineHeight: 1 }}>10–12</div>
              <div style={{ fontSize: 13, color: "#6B6358", marginTop: 6, lineHeight: 1.45 }}>Months average delivery</div>
            </div>
            <div style={{ borderTop: "1px solid rgba(22,20,18,.12)", paddingTop: 22 }}>
              <div style={{ font: "400 44px 'Spectral',serif", color: "#33CCCC", lineHeight: 1 }}>50/40/10</div>
              <div style={{ fontSize: 13, color: "#6B6358", marginTop: 6, lineHeight: 1.45 }}>Fixed-fee payment schedule</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>How It Works</span>
        </div>
        <h2 style={{ font: "400 clamp(32px,4vw,50px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
          Four phases, one <span style={{ fontStyle: "italic", color: "#33CCCC" }}>clean handover.</span>
        </h2>
        <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
          {steps.map((s, i) => (
            <StepRow key={s.n} step={s} last={i === steps.length - 1} />
          ))}
        </div>
      </section>

      {/* WHAT YOU GET + WHO IT'S FOR */}
      <section className="ff-px" style={{ background: "#FFFFFF", color: "#161412", padding: "100px 56px" }}>
        <div className="ff-stack" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
                What You Receive
              </span>
            </div>
            {deliverables.map((d, i) => (
              <div
                key={d}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom: i === deliverables.length - 1 ? undefined : "1px solid rgba(22,20,18,.14)",
                  fontSize: 15,
                  color: "#4A443C",
                  lineHeight: 1.5,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#33CCCC", flexShrink: 0 }}>→</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)", background: "#FFFFFF" }}>
            <div style={{ padding: 34, borderBottom: "1px solid rgba(22,20,18,.16)" }}>
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "#33CCCC",
                  marginBottom: 10,
                }}
              >
                Is this you?
              </div>
              <h3 style={{ font: "400 26px 'Spectral',serif", letterSpacing: "-.4px" }}>The ideal client</h3>
            </div>
            {idealFor.map((f, i) => (
              <div
                key={f.t}
                style={{ padding: "20px 34px", borderBottom: i === idealFor.length - 1 ? undefined : "1px solid rgba(22,20,18,.12)" }}
              >
                <div style={{ font: "600 15px 'Archivo',sans-serif", marginBottom: 4 }}>{f.t}</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#6B6358" }}>{f.d}</p>
              </div>
            ))}
            <div style={{ padding: "28px 34px" }}>
              <HoverLink
                href={routes.buildToTransferQualify}
                style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Check your fit in 2 minutes
              </HoverLink>
            </div>
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
