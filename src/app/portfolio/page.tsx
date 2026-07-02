import type { Metadata } from "next";
import Image from "next/image";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "Portfolio | FirstFounders",
  description:
    "6 active portfolio companies. $1M+ invested. 6.5× average MOIC. Over 10 ventures built in total — across AI Vertical SaaS and Industrial Data Infrastructure.",
};

const NAVY = "#0D102F";
const GOLD = "#FFBC00";

type Company = {
  mono: string;
  logo?: string;
  color: string;
  tag: string;
  name: string;
  desc: string;
  m1v: string;
  m1l: string;
  m2v: string;
  m2l: string;
  status: string;
};

const companies: Company[] = [
  {
    mono: "PL",
    logo: "/images/portfolio/pocketlawyers.png",
    color: NAVY,
    tag: "AI Vertical SaaS · LegalTech",
    name: "PocketLawyers",
    desc: "AI-powered platform equipping legal practitioners to operate virtual law firms across Africa, improving service turnaround and access to justice.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "3,200",
    m2l: "Users",
    status: "Active · Nigeria · Kenya · Uganda · Ghana",
  },
  {
    mono: "PA",
    logo: "/images/portfolio/payafta.png",
    color: GOLD,
    tag: "Industrial Data · Trade & Payments",
    name: "PayAfta",
    desc: "Online escrow payment platform enabling safe, verifiable transactions between buyers and sellers across African markets — capturing the trade-and-payments data moat.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "100+",
    m2l: "Transactions",
    status: "Active · Beta Feb 2026",
  },
  {
    mono: "KO",
    logo: "/images/portfolio/korin.png",
    color: NAVY,
    tag: "AI Vertical SaaS · Music",
    name: "Korin",
    desc: "Africa's first AI music generation lab — generating original music with authentic African elements through simple text prompts.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "1,400+",
    m2l: "Users",
    status: "Active · WSA Award Winner",
  },
  {
    mono: "FL",
    logo: "/images/portfolio/fleekstar.png",
    color: NAVY,
    tag: "AI Vertical SaaS · MarTech",
    name: "Fleekstar",
    desc: "AI-powered social marketing platform providing real-time data and insights into customer behaviour for African brands and businesses.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "4,000+",
    m2l: "Users",
    status: "Active · Multi-industry traction",
  },
  {
    mono: "ID",
    logo: "/images/portfolio/idx.png",
    color: GOLD,
    tag: "Industrial Data · Identity",
    name: "IDx",
    desc: "Security tool for verified, reusable digital identities — enabling users to authenticate once and transact anywhere without compromising privacy.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "35%",
    m2l: "Studio Equity",
    status: "Build Phase · AWS Infrastructure Ready",
  },
  {
    mono: "AL",
    color: NAVY,
    tag: "AI Vertical SaaS · Sales Automation",
    name: "Alimi",
    desc: "Agentic AI that captures, qualifies and nurtures leads 24/7 directly in WhatsApp — the intelligent bridge between social discovery and the closed deal.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "13,000+",
    m2l: "Waitlist",
    status: "Active · Beta June 2026",
  },
  {
    mono: "CL",
    color: NAVY,
    tag: "AI Vertical SaaS · Product Building",
    name: "Clymb",
    desc: "AI-powered venture ideation and MVP building platform — structured AI-guided ideation, rapid prototyping and full product delivery as a managed engagement.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "Beta",
    m2l: "Status",
    status: "Active · Multi-industry traction",
  },
  {
    mono: "AV",
    logo: "/images/portfolio/aavenu.png",
    color: NAVY,
    tag: "AI Vertical SaaS · EventTech",
    name: "Aavenu",
    desc: "Africa's first event 3D simulation company — immersive virtual event environments and spatial experiences, from concept to execution.",
    m1v: "$3.5M",
    m1l: "Valuation",
    m2v: "4",
    m2l: "Markets",
    status: "Build Phase · Nigeria · United States · Rwanda · Paris",
  },
  {
    mono: "SA",
    color: NAVY,
    tag: "AI Vertical SaaS · Music Streaming",
    name: "Satton",
    desc: "AI-powered music streaming platform where anyone can create, stream and earn from music — removing the gatekeepers between African talent and income.",
    m1v: "$2.5M",
    m1l: "Valuation",
    m2v: "Nigeria",
    m2l: "Market",
    status: "Build Phase · Nigeria",
  },
];

function CompanyCard({ c }: { c: Company }) {
  return (
    <div style={{ background: "#FFFFFF", padding: 38, minHeight: 340, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
        {c.logo ? (
          <div
            style={{
              width: 48,
              height: 48,
              flexShrink: 0,
              background: "#FFFFFF",
              border: "1px solid rgba(22,20,18,.16)",
              borderRadius: 6,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={c.logo} alt={c.name} width={48} height={48} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
        ) : (
          <div
            style={{
              width: 48,
              height: 48,
              flexShrink: 0,
              border: "1px solid rgba(22,20,18,.2)",
              backgroundColor: "#F5F6F8",
              backgroundImage:
                "repeating-linear-gradient(45deg,rgba(13,16,47,.05) 0,rgba(13,16,47,.05) 1px,transparent 1px,transparent 7px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ font: "500 8px 'Space Grotesk',monospace", letterSpacing: 0.5, textTransform: "uppercase", color: "#6B6358" }}>logo</span>
          </div>
        )}
        <div>
          <div style={{ font: "600 10px 'Space Grotesk',sans-serif", letterSpacing: 1, textTransform: "uppercase", color: c.color, marginBottom: 4 }}>
            {c.tag}
          </div>
          <div style={{ font: "400 24px 'Spectral',serif", letterSpacing: "-.4px" }}>{c.name}</div>
        </div>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A443C", flex: 1 }}>{c.desc}</p>
      <div style={{ display: "flex", borderTop: "1px solid rgba(22,20,18,.14)", marginTop: 22 }}>
        <div style={{ flex: 1, padding: "16px 0", borderRight: "1px solid rgba(22,20,18,.14)" }}>
          <div style={{ font: "400 21px 'Spectral',serif" }}>{c.m1v}</div>
          <div style={{ fontSize: 10, color: "#6B6358", marginTop: 3 }}>{c.m1l}</div>
        </div>
        <div style={{ flex: 1, padding: "16px 0 16px 18px" }}>
          <div style={{ font: "400 21px 'Spectral',serif" }}>{c.m2v}</div>
          <div style={{ fontSize: 10, color: "#6B6358", marginTop: 3 }}>{c.m2l}</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 16,
          paddingTop: 14,
          borderTop: "1px solid rgba(22,20,18,.14)",
          fontSize: 11,
          color: "#6B6358",
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
        {c.status}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 56 }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            Portfolio
          </div>
          <h1 style={{ font: "400 clamp(44px,5.6vw,80px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
            Companies we&apos;ve <span style={{ fontStyle: "italic", color: "#33CCCC" }}>built.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4A443C", maxWidth: 600 }}>
            6 active portfolio companies. $1M+ invested. 6.5× average MOIC. Over 10 ventures built in total — across
            AI Vertical SaaS and Industrial Data Infrastructure. This is just the beginning.
          </p>
        </div>
        <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid rgba(22,20,18,.16)" }}>
          <div style={{ padding: "30px 32px", borderRight: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ font: "400 34px 'Spectral',serif" }}>
              $1M<span style={{ fontSize: ".5em", color: "#FFBC00" }}>+</span>
            </div>
            <div style={{ fontSize: 12, color: "#6B6358", marginTop: 8 }}>Invested to date</div>
          </div>
          <div style={{ padding: "30px 32px", borderRight: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ font: "400 34px 'Spectral',serif" }}>
              6.5<span style={{ fontSize: ".5em", color: "#FFBC00" }}>×</span>
            </div>
            <div style={{ fontSize: 12, color: "#6B6358", marginTop: 8 }}>Average MOIC</div>
          </div>
          <div style={{ padding: "30px 32px", borderRight: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ font: "400 34px 'Spectral',serif" }}>6</div>
            <div style={{ fontSize: 12, color: "#6B6358", marginTop: 8 }}>Active in market</div>
          </div>
          <div style={{ padding: "30px 32px" }}>
            <div style={{ font: "400 34px 'Spectral',serif" }}>
              10<span style={{ fontSize: ".5em", color: "#FFBC00" }}>+</span>
            </div>
            <div style={{ fontSize: 12, color: "#6B6358", marginTop: 8 }}>Ventures built</div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="ff-px" style={{ padding: "64px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack-tablet"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
          }}
        >
          {companies.map((c) => (
            <CompanyCard key={c.name} c={c} />
          ))}
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
