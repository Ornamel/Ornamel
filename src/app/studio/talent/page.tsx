import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For Talent — The Builders Programme | FirstFounders (F2)",
  description:
    "Join the studio not for a job — for a journey. Earn a stipend while you learn through the F2 Builders Programme and work on real AI products serving real users.",
};

type Offer = { n: string; title: string; desc: string };

const offers: Offer[] = [
  { n: "01", title: "Real product work", desc: "Ship real code, close real deals, and make decisions that matter — not internship busywork or training exercises." },
  { n: "02", title: "F2 Builders Programme", desc: "World-class curriculum in AI, engineering, product management and growth — with experienced builders as your mentors." },
  { n: "03", title: "Stipend from day one", desc: "You earn while you learn. As your skills grow, so does your compensation — up to $750/month during training." },
  { n: "04", title: "Four clear pathways", desc: "Studio Advancement, Portfolio Leadership, Founder Track, or Global Mobility. You choose the direction your career takes." },
];

const details = [
  { k: "Monthly stipend", v: "$750 / month" },
  { k: "Programme duration", v: "3–6 months + live project" },
  { k: "Path 1", v: "Studio Advancement" },
  { k: "Path 2", v: "Portfolio Leadership" },
  { k: "Path 3", v: "Founder Track" },
  { k: "Path 4", v: "Global Mobility" },
];

type Track = { title: string; desc: string };

const tracks: Track[] = [
  { title: "Engineering", desc: "Full-stack · Mobile · Backend · AI/ML" },
  { title: "Product & Design", desc: "PM · UX Research · UI Design" },
  { title: "Data Science", desc: "ML Engineering · Analytics · Data Eng" },
  { title: "Growth & Ops", desc: "Marketing · Sales · BizDev · Operations" },
  { title: "DevOps & Infrastructure", desc: "Cloud · Security · Platform Engineering" },
];

export default function StudioTalentPage() {
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
              For Talent · The Builders Programme
            </div>
            <h1 style={{ font: "400 clamp(38px,5vw,72px)/1.04 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              Join the studio not for a job — <span style={{ fontStyle: "italic", color: "#33CCCC" }}>for a journey.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 540, marginBottom: 34 }}>
              We&apos;ll teach you craft. You&apos;ll undergo dedicated skill development through the F2 Builders Programme and
              work on real AI products serving real users.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <HoverLink
                href={routes.programAmali}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Apply to F2 Builder
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
            <div style={{ font: "400 clamp(34px,7vw,56px) 'Spectral',serif", color: "#33CCCC", lineHeight: 1, marginBottom: 8 }}>1,000</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>
              Builders to be trained and deployed across F2 ventures over the next five years.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET + STIPEND */}
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
              <div style={{ font: "400 48px 'Spectral',serif", color: "#33CCCC", marginBottom: 6 }}>
                $750<span style={{ fontSize: ".4em", color: "#6B6358" }}> / mo</span>
              </div>
              <p style={{ fontSize: 14, color: "#4A443C" }}>You earn while you learn. As your skills grow, so does your compensation.</p>
            </div>
            {details.map((d) => (
              <div
                key={d.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 34px",
                  borderBottom: "1px solid rgba(22,20,18,.12)",
                }}
              >
                <span style={{ fontSize: 14, color: "#4A443C" }}>{d.k}</span>
                <span style={{ font: "600 14px 'Space Grotesk',sans-serif", color: "#161412" }}>{d.v}</span>
              </div>
            ))}
            <div style={{ padding: "24px 34px", background: "#0D102F", color: "#FFFFFF" }}>
              <p style={{ fontSize: 13, lineHeight: 1.6, fontStyle: "italic", fontFamily: "'Spectral',serif" }}>
                &quot;You choose the direction your career takes — Studio Advancement, Portfolio Leadership, Founder Track, or
                Global Mobility.&quot;
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
          <div style={{ border: "1px solid rgba(255,255,255,.16)" }}>
            <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
              {/* row 1: Engineering, Product & Design, Data Science — first two get right border, all three get bottom border */}
              {tracks.slice(0, 3).map((t, i) => (
                <div
                  key={t.title}
                  style={{
                    padding: "32px 36px",
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,.16)" : undefined,
                    borderBottom: "1px solid rgba(255,255,255,.16)",
                  }}
                >
                  <h4 style={{ font: "400 22px 'Spectral',serif", marginBottom: 8 }}>{t.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)" }}>{t.desc}</p>
                </div>
              ))}
              {/* row 2: Growth & Ops, DevOps & Infrastructure — first gets right border, no bottom border */}
              {tracks.slice(3).map((t, i) => (
                <div
                  key={t.title}
                  style={{
                    padding: "32px 36px",
                    borderRight: i === 0 ? "1px solid rgba(255,255,255,.16)" : undefined,
                  }}
                >
                  <h4 style={{ font: "400 22px 'Spectral',serif", marginBottom: 8 }}>{t.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
