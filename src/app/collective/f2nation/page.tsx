import type { Metadata } from "next";
import Image from "next/image";
import { HoverLink } from "@/components/HoverLink";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "F2Nation — The FirstFounders Community",
  description:
    "A curated community of 1,500+ founders, operators, builders and investors across Africa — sharing deal flow, making warm introductions, and building alongside each other in real time.",
};

type StatCell = { value: string; label: string };

const heroStats: StatCell[] = [
  { value: "1,500+", label: "Active members" },
  { value: "4+", label: "African countries" },
  { value: "Free", label: "To join" },
  { value: "Weekly", label: "Deal-flow drops" },
];

type Member = { icon: string; title: string; desc: string };

const members: Member[] = [
  {
    icon: "/images/f2nation/early-stage-founders.svg",
    title: "Early-stage founders",
    desc: "Building their first or second company — and looking for peers who have been there.",
  },
  {
    icon: "/images/f2nation/venture-builders.svg",
    title: "Venture builders & operators",
    desc: "Building inside studios and startups, sharing the operating playbooks that work.",
  },
  {
    icon: "/images/f2nation/angel-investors.svg",
    title: "Angel investors & LPs",
    desc: "Deploying capital across the ecosystem and sourcing the next wave of African AI.",
  },
  {
    icon: "/images/f2nation/corporate-innovation.svg",
    title: "Corporate innovation leads",
    desc: "Exploring Build-to-Transfer mandates and partnerships with the studio.",
  },
];

export default function F2NationPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
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
              Community
            </div>
            <h1 style={{ font: "400 clamp(44px,5.6vw,80px)/1.0 'Spectral',serif", letterSpacing: "-2px", marginBottom: 28 }}>
              F2Nation
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 540, marginBottom: 18 }}>
              A curated community of{" "}
              <strong style={{ fontWeight: 600, color: "#161412" }}>
                1,500+ founders, operators, builders and investors
              </strong>{" "}
              across Africa — sharing deal flow, making warm introductions, and building alongside each other in real
              time.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A443C", maxWidth: 540, marginBottom: 34 }}>
              F2Nation is not a newsletter list. It&apos;s an active peer network where the most ambitious builders on
              the continent share what&apos;s actually working — from fundraising tactics to GTM experiments to exit
              strategies.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <HoverLink
                href="mailto:community@firstfounders.cc"
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Join F2Nation
              </HoverLink>
              <HoverLink
                href="#"
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", border: "1px solid #161412" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                LinkedIn Community
              </HoverLink>
            </div>
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: 30,
                    borderRight: i % 2 === 0 ? "1px solid rgba(22,20,18,.16)" : undefined,
                    borderBottom: i < 2 ? "1px solid rgba(22,20,18,.16)" : undefined,
                  }}
                >
                  <div style={{ font: "400 38px 'Spectral',serif", color: "#33CCCC" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#6B6358", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO'S IN */}
      <section className="ff-px" style={{ padding: "90px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Who&apos;s in F2Nation
          </span>
        </div>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
          }}
        >
          {members.map((m) => (
            <div key={m.title} style={{ background: "#FFFFFF", padding: 38, display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={m.icon} alt={m.title} width={48} height={48} style={{ width: 48, height: 48, display: "block" }} />
              </div>
              <div>
                <h3 style={{ font: "400 23px 'Spectral',serif", marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
