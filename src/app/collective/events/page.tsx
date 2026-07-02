import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "Ecosystem Events — FirstFounders",
  description:
    "From intimate founder dinners to pan-African investor summits — FirstFounders convenes the people building Africa's AI economy.",
};

type FlagshipDetail = { label: string; value: string; gold?: boolean };

const flagshipDetails: FlagshipDetail[] = [
  { label: "Format", value: "In-person · Lagos" },
  { label: "Attendees", value: "150–200 curated" },
  { label: "Cadence", value: "Annual · Q4" },
  { label: "Next edition", value: "October 2026", gold: true },
];

type SeriesItem = { cadence: string; accent: string; title: string; desc: string };

const series: SeriesItem[] = [
  {
    cadence: "Monthly",
    accent: "#33CCCC",
    title: "Founder Dinners",
    desc: "Intimate, invite-only tables of 12 — where portfolio founders and guests trade the unfiltered truth of building.",
  },
  {
    cadence: "Quarterly",
    accent: "#FFBC00",
    title: "Demo Days",
    desc: "Where F2 ventures meet capital — live product demos in front of a curated room of angels, LPs and acquirers.",
  },
  {
    cadence: "Ongoing",
    accent: "#33CCCC",
    title: "Builder Meetups",
    desc: "AMALI fellows, alumni and the wider F2Nation community gathering to learn, ship and hire across the ecosystem.",
  },
];

export default function EventsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 56, borderBottom: "1px solid rgba(22,20,18,.16)", maxWidth: 760 }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            Ecosystem Events
          </div>
          <h1 style={{ font: "400 clamp(44px,5.6vw,80px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 28 }}>
            Where the ecosystem <span style={{ fontStyle: "italic", color: "#33CCCC" }}>convenes.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C" }}>
            From intimate founder dinners to pan-African investor summits — FirstFounders convenes the people building
            Africa&apos;s AI economy. Every event is designed to generate real connections, not just content.
          </p>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="ff-px" style={{ padding: "80px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Flagship Event · Annual
          </span>
        </div>
        <div className="ff-stack" style={{ border: "1px solid #161412", display: "grid", gridTemplateColumns: "1.55fr .45fr" }}>
          <div style={{ padding: 48, borderRight: "1px solid #161412" }}>
            <h2 style={{ font: "400 clamp(30px,3.6vw,44px)/1.06 'Spectral',serif", letterSpacing: "-1px", marginBottom: 18 }}>
              The African Ecosystem Mixer
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A443C", marginBottom: 32, maxWidth: 620 }}>
              Africa&apos;s most intentional gathering of venture builders, studio operators, founders and investors.
              Not a conference — a structured mixer designed to generate real warm introductions, deal-flow
              conversations, and partnership mandates across the continent.
            </p>
            <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(22,20,18,.16)" }}>
              {flagshipDetails.map((d) => (
                <div key={d.label} style={{ padding: "20px 0" }}>
                  <div
                    style={{
                      font: "600 10px 'Space Grotesk',sans-serif",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "#6B6358",
                      marginBottom: 8,
                    }}
                  >
                    {d.label}
                  </div>
                  <div style={{ fontSize: 13, color: d.gold ? "#FFBC00" : "#161412", fontWeight: d.gold ? 600 : 400 }}>
                    {d.value}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <HoverLink
                href="mailto:events@firstfounders.cc"
                style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Register Interest
              </HoverLink>
              <HoverLink
                href="mailto:events@firstfounders.cc"
                style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", border: "1px solid #161412" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                Sponsor the Event
              </HoverLink>
            </div>
          </div>
          <div
            style={{
              background: "#0D102F",
              color: "#FFFFFF",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ font: "400 56px 'Spectral',serif", color: "#33CCCC", lineHeight: 1 }}>Oct</div>
            <div style={{ font: "400 38px 'Spectral',serif", margin: "6px 0 14px" }}>2026</div>
            <div
              style={{
                font: "600 11px 'Space Grotesk',sans-serif",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "rgba(244,241,234,.7)",
              }}
            >
              Lagos, Nigeria
            </div>
          </div>
        </div>
      </section>

      {/* SERIES */}
      <section className="ff-px" style={{ padding: "0 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
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
          {series.map((s) => (
            <div key={s.title} style={{ background: "#FFFFFF", padding: 36, minHeight: 200 }}>
              <div
                style={{
                  font: "600 11px 'Space Grotesk',sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: s.accent,
                  marginBottom: 16,
                }}
              >
                {s.cadence}
              </div>
              <h3 style={{ font: "400 24px 'Spectral',serif", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
