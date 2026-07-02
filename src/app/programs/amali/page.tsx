import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "F2 AMALI Fellowship | FirstFounders",
  description:
    "AMALI places you inside a live AI company as a paid builder from your very first week. A 12-month paid fellowship run by FirstFounders Venture Studio.",
};

const wrap: React.CSSProperties = { maxWidth: 1280, margin: "0 auto" };

const phases = [
  { phase: "Phase 01", title: "Learn", desc: "12 weeks of curriculum — taught inside a live venture." },
  { phase: "Phase 02", title: "Build", desc: "Embedded on a real product, full-time." },
  { phase: "Phase 03", title: "Earn", desc: "Stipend, placement, equity moments." },
  { phase: "Phase 04", title: "Launch", desc: "Permanent role, founding, or your own venture path." },
];

const strong = [
  {
    t: "Prior startup, freelance or project experience",
    d: "Any field. We want people who have tried to build something — even if it didn't work out.",
  },
  {
    t: "Evidence of self-directed learning",
    d: "Online courses, side projects, GitHub repos, community involvement, writing — anything that shows you start on your own.",
  },
  {
    t: "Demonstrated resilience",
    d: "We will see you clearly: what is the hardest thing you've navigated? How did you handle it?",
  },
  {
    t: "Genuine interest in Africa's AI future",
    d: "Not AI for hype — AI for Africa. We want people who care about the ecosystem they are building inside.",
  },
];

const tracks = [
  {
    label: "Track 01 · 40 spots",
    accent: "#33CCCC",
    title: "AI Engineering",
    desc: "Build the technical infrastructure of Africa's next wave of AI products. You will write code, integrate AI models, and deploy real features to real users.",
    footer: "Python · LLM integration · Prompt engineering · API development. Have a coding foundation in any language.",
  },
  {
    label: "Track 02 · 30 spots",
    accent: "#33CCCC",
    title: "AI Product Management",
    desc: "Shape the direction of AI products from the inside. You will run user research, write specs, own roadmaps, and bridge the gap between users and builders.",
    footer: "User research · Product strategy · Sprint management · Stakeholder comms. Think analytically and communicate clearly.",
  },
  {
    label: "Track 03 · 30 spots",
    accent: "#33CCCC",
    title: "AI Growth & GTM",
    desc: "Take AI products to market. You will design and run the acquisition, community and commercial strategies that bring early users and revenue to portfolio ventures.",
    footer: "Growth strategy · Content & SEO · Community building · Sales. Be energetic, persuasive and data-driven.",
  },
];

function HeroStat({ value, label, last }: { value: string; label: string; last?: boolean }) {
  return (
    <div
      style={{
        padding: "26px 28px",
        borderRight: last ? undefined : "1px solid rgba(22,20,18,.16)",
      }}
    >
      <div style={{ font: "400 34px 'Spectral',serif", color: "#33CCCC" }}>{value}</div>
      <div style={{ fontSize: 12, color: "#6B6358", marginTop: 6 }}>{label}</div>
    </div>
  );
}

export default function ProgramAmaliPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 64, alignItems: "end", paddingBottom: 56 }}>
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
              F2 AMALI · The Fellowship
            </div>
            <h1 style={{ font: "400 clamp(40px,5.2vw,76px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              Get paid to build real AI. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>From week one.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 540, marginBottom: 34 }}>
              AMALI places you inside a live AI company as a paid builder from your very first week. No classroom. No
              internship. Real product work, real users, and a real salary — while you train with Africa&apos;s most
              experienced venture builders.
            </p>
            <HoverLink
              href={routes.programAmaliApply}
              style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
              hoverStyle={{ background: "#1C2150" }}
            >
              Apply
            </HoverLink>
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ borderRight: "1px solid rgba(22,20,18,.16)", borderBottom: "1px solid rgba(22,20,18,.16)" }}>
                <HeroStat value="12" label="Months of paid fellowship" last />
              </div>
              <div style={{ borderBottom: "1px solid rgba(22,20,18,.16)" }}>
                <HeroStat value="100" label="Spots · Cohort 1, 2026" last />
              </div>
              <div style={{ borderRight: "1px solid rgba(22,20,18,.16)" }}>
                <HeroStat value="₦80k" label="Monthly stipend from Day 1" last />
              </div>
              <div>
                <HeroStat value="90" label="Day job guarantee" last />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AMALI */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div className="ff-stack" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>What is AMALI</span>
            </div>
            <h2 style={{ font: "400 clamp(30px,3.6vw,46px)/1.08 'Spectral',serif", letterSpacing: "-1px", marginBottom: 22 }}>
              Not a course. Not an internship. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>A fellowship with teeth.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
              F2 AMALI — the African Model for AI Livelihood &amp; Innovation — is a 12-month paid fellowship run by
              FirstFounders Venture Studio. From your very first week, you are embedded inside a live AI company as a
              real team member with real deliverables.{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Spectral',serif", color: "#FFFFFF" }}>
                &quot;Africa doesn&apos;t have a talent problem. It has a bridge problem. AMALI is that bridge — and it pays
                you to cross it.&quot;
              </span>
            </p>
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,.16)" }}>
            <div style={{ padding: "26px 30px", background: "#1A1847", color: "#FFFFFF" }}>
              <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#33CCCC" }}>
                African Model for AI Livelihood &amp; Innovation
              </div>
            </div>
            {phases.map((p, i) => (
              <div
                key={p.phase}
                style={{
                  display: "flex",
                  gap: 22,
                  alignItems: "flex-start",
                  padding: "22px 30px",
                  borderBottom: i === phases.length - 1 ? undefined : "1px solid rgba(255,255,255,.12)",
                  background: "#0D102F",
                }}
              >
                <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1, color: "#FFBC00", flexShrink: 0, width: 70, paddingTop: 3 }}>
                  {p.phase}
                </div>
                <div>
                  <h4 style={{ font: "400 20px 'Spectral',serif", marginBottom: 4 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,.72)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE TRACKS */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Choose Your Track</span>
        </div>
        <h2 style={{ font: "400 clamp(32px,4vw,50px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
          Three paths. <span style={{ fontStyle: "italic", color: "#33CCCC" }}>One destination.</span>
        </h2>
        <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(22,20,18,.16)", border: "1px solid rgba(22,20,18,.16)" }}>
          {tracks.map((t) => (
            <div key={t.title} style={{ background: "#FFFFFF", padding: 40, minHeight: 300 }}>
              <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: t.accent, marginBottom: 18 }}>
                {t.label}
              </div>
              <h3 style={{ font: "400 26px/1.1 'Spectral',serif", marginBottom: 14 }}>{t.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", marginBottom: 20 }}>{t.desc}</p>
              <div style={{ borderTop: "1px solid rgba(22,20,18,.14)", paddingTop: 14, fontSize: 12, color: "#6B6358", lineHeight: 1.6 }}>
                {t.footer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div className="ff-stack" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <span style={{ width: 26, height: 1, background: "rgba(244,241,234,.5)" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase", color: "#FFFFFF" }}>
                Eligibility
              </span>
            </div>
            <h2 style={{ font: "400 clamp(30px,3.6vw,44px)/1.08 'Spectral',serif", letterSpacing: "-1px", marginBottom: 26 }}>
              We&apos;re looking for ability, <span style={{ fontStyle: "italic", color: "#33CCCC" }}>not just credentials.</span>
            </h2>
            <div style={{ borderTop: "1px solid rgba(244,241,234,.16)" }}>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(244,241,234,.12)", fontSize: 14, color: "rgba(244,241,234,.8)" }}>
                Aged 18–35 years old
              </div>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(244,241,234,.12)", fontSize: 14, color: "rgba(244,241,234,.8)" }}>
                Nigerian resident, Lagos-based preferred for Cohort 1; remote options available for select AI Engineering roles
              </div>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(244,241,234,.12)", fontSize: 14, color: "rgba(244,241,234,.8)" }}>
                Minimum OND / HND / BSc or equivalent demonstrated ability — self-taught candidates with strong portfolios actively encouraged
              </div>
              <div style={{ padding: "16px 0", fontSize: 14, color: "rgba(244,241,234,.8)" }}>Available full-time for the 12-month commitment</div>
            </div>
          </div>
          <div style={{ border: "1px solid rgba(244,241,234,.18)", padding: 40, background: "rgba(51,204,204,.04)", alignSelf: "start" }}>
            <h3 style={{ font: "400 24px 'Spectral',serif", marginBottom: 24 }}>What makes a strong applicant</h3>
            {strong.map((s) => (
              <div key={s.t} style={{ padding: "14px 0", borderTop: "1px solid rgba(244,241,234,.12)" }}>
                <div style={{ font: "600 14px 'Archivo',sans-serif", marginBottom: 4, color: "#33CCCC" }}>{s.t}</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(244,241,234,.7)" }}>{s.d}</p>
              </div>
            ))}
            <HoverLink
              href={routes.programAmaliApply}
              style={{ display: "inline-block", marginTop: 28, fontSize: 14, fontWeight: 600, padding: "14px 26px", background: "#33CCCC", color: "#14110E" }}
              hoverStyle={{ background: "#33CCCC" }}
            >
              Apply
            </HoverLink>
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
