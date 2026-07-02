import Image from "next/image";
import { HoverLink } from "@/components/HoverLink";
import { routes } from "@/lib/routes";

const wrap: React.CSSProperties = { maxWidth: 1280, margin: "0 auto" };

function HeroStat({ value, label, top }: { value: string; label: string; top?: boolean }) {
  return (
    <div style={top ? undefined : { borderTop: "1px solid rgba(22,20,18,.12)", paddingTop: 24 }}>
      <div style={{ font: "400 46px 'Spectral',serif", color: "#FFBC00", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.45, marginTop: 8 }}>{label}</div>
    </div>
  );
}

function StatCell({
  value,
  unit,
  label,
  last,
}: {
  value: string;
  unit: string;
  label: string;
  last?: boolean;
}) {
  return (
    <div style={{ padding: "40px 36px", borderRight: last ? undefined : "1px solid rgba(22,20,18,.16)" }}>
      <div style={{ font: "400 40px 'Spectral',serif", color: "#161412" }}>
        {value}
        <span style={{ fontSize: ".55em", color: "#FFBC00", verticalAlign: "super" }}>{unit}</span>
      </div>
      <div style={{ font: "500 13px 'Space Grotesk',sans-serif", color: "#6B6358", marginTop: 10, lineHeight: 1.45 }}>
        {label}
      </div>
    </div>
  );
}

const marqueeItems = [
  "AI Vertical SaaS",
  "Industrial Data Infrastructure",
  "Build to Transfer",
  "Build to Exit",
  "Human Capital Engine",
  "Talent That Runs It",
];

function MarqueeRow({ hidden }: { hidden?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        font: "500 14px 'Space Grotesk',sans-serif",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#FFFFFF",
        whiteSpace: "nowrap",
      }}
      aria-hidden={hidden}
    >
      {marqueeItems.map((item) => (
        <span key={item} style={{ display: "contents" }}>
          <span style={{ padding: "0 34px" }}>{item}</span>
          <span style={{ color: "#FFBC00" }}>◆</span>
        </span>
      ))}
    </div>
  );
}

function ProblemStat({ value, unit, label, shaded, last }: { value: string; unit: string; label: string; shaded?: boolean; last?: boolean }) {
  return (
    <div
      style={{
        padding: 34,
        borderRight: last ? undefined : "1px solid rgba(255,255,255,.16)",
        borderBottom: "1px solid rgba(255,255,255,.16)",
        background: shaded ? "rgba(255,255,255,.05)" : undefined,
      }}
    >
      <div style={{ font: "400 54px 'Spectral',serif", lineHeight: 1 }}>
        {value}
        <span style={{ fontSize: ".5em", color: "#FFBC00" }}>{unit}</span>
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.5, marginTop: 12 }}>{label}</div>
    </div>
  );
}

function SchematicArrow({ color }: { color: string }) {
  return <div style={{ display: "flex", alignItems: "center", color, fontWeight: 700 }}>→</div>;
}

function SchematicBox({
  title,
  sub,
  active,
  accent,
}: {
  title: string;
  sub: string;
  active?: boolean;
  accent: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        border: `1px solid ${active ? accent : "#161412"}`,
        background: active ? `${accent}14` : undefined,
        padding: "16px 10px",
        textAlign: "center",
      }}
    >
      <div style={{ font: "600 12px 'Space Grotesk',sans-serif", color: active ? accent : undefined }}>{title}</div>
      <div style={{ fontSize: 10, color: active ? accent : "#6B6358", marginTop: 4 }}>{sub}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 500, padding: "6px 13px", border: "1px solid rgba(22,20,18,.28)" }}>
      {children}
    </span>
  );
}

function FeatureRow({ children, accent, last }: { children: React.ReactNode; accent: string; last?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        padding: "14px 0",
        borderBottom: last ? undefined : "1px solid rgba(255,255,255,.14)",
        fontSize: 14,
        color: "rgba(255,255,255,.72)",
      }}
    >
      <span style={{ color: accent }}>→</span>
      {children}
    </div>
  );
}

function TalentStep({ n, title, body, accent }: { n: string; title: string; body: string; accent: string }) {
  return (
    <div>
      <div style={{ font: "400 38px 'Spectral',serif", color: accent, lineHeight: 1, marginBottom: 14 }}>{n}</div>
      <div style={{ font: "600 15px 'Space Grotesk',sans-serif", marginBottom: 8 }}>{title}</div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A443C" }}>{body}</p>
    </div>
  );
}

function TalentStat({ value, unit, label, last }: { value: string; unit: string; label: string; last?: boolean }) {
  return (
    <div style={{ padding: "32px 36px", borderRight: last ? undefined : "1px solid rgba(22,20,18,.16)" }}>
      <div style={{ font: "400 36px 'Spectral',serif" }}>
        {value}
        <span style={{ fontSize: ".5em", color: "#FFBC00" }}>{unit}</span>
      </div>
      <div style={{ fontSize: 13, color: "#6B6358", marginTop: 8, lineHeight: 1.45 }}>{label}</div>
    </div>
  );
}

type PortfolioCompany = {
  logo: string;
  accent: string;
  category: string;
  name: string;
  desc: string;
  stats: { value: string; label: string }[];
  status: string;
};

const portfolioCompanies: PortfolioCompany[] = [
  {
    logo: "/images/portfolio/pocketlawyers.png",
    accent: "#33CCCC",
    category: "AI Vertical SaaS · LegalTech",
    name: "Pocket Lawyers",
    desc: "AI platform equipping legal practitioners to run virtual law firms across Africa — improving turnaround and access to justice. Africa's first fully integrated AI legal platform.",
    stats: [
      { value: "$2.5M", label: "Valuation" },
      { value: "3,200", label: "Users" },
      { value: "3.5×", label: "MOIC" },
    ],
    status: "Active · Nigeria · Kenya · Uganda · Ghana",
  },
  {
    logo: "/images/portfolio/payafta.png",
    accent: "#FFBC00",
    category: "Industrial Data · Trade & Payments",
    name: "PayAfta",
    desc: "Online escrow platform for safe, verifiable transactions across African markets — capturing the trade-and-payments data moat with AI fraud detection and automated dispute resolution built in.",
    stats: [
      { value: "$2.5M", label: "Valuation" },
      { value: "100+", label: "Transactions" },
    ],
    status: "Active · Beta Feb 2026",
  },
  {
    logo: "/images/portfolio/korin.png",
    accent: "#33CCCC",
    category: "AI Vertical SaaS · Creative",
    name: "Korin AI",
    desc: "Africa's first AI music-generation lab — original music with authentic African elements from simple text prompts. WSA Award winner and proof of Vertical AI built for African creative markets.",
    stats: [
      { value: "$2.5M", label: "Valuation" },
      { value: "1,400+", label: "Users" },
    ],
    status: "Active · WSA Award Winner",
  },
  {
    logo: "/images/portfolio/aavenu.png",
    accent: "#33CCCC",
    category: "AI Vertical SaaS · EventTech",
    name: "Aavenu",
    desc: "Africa's first event 3D-simulation company — immersive virtual event environments and spatial experiences that let organisers, brands and audiences engage with events in three dimensions.",
    stats: [{ value: "$3.5M", label: "Valuation" }],
    status: "Active · Nigeria · United States · Rwanda · Paris",
  },
];

function PortfolioCard({ company }: { company: PortfolioCompany }) {
  return (
    <div style={{ background: "#0D102F", color: "#FFFFFF", padding: 44 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <div
          style={{
            width: 54,
            height: 54,
            flexShrink: 0,
            background: "#FFFFFF",
            borderRadius: 6,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={company.logo} alt={company.name} width={54} height={54} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        </div>
        <div>
          <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1, textTransform: "uppercase", color: company.accent, marginBottom: 4 }}>
            {company.category}
          </div>
          <div style={{ font: "400 28px 'Spectral',serif", letterSpacing: "-.4px" }}>{company.name}</div>
        </div>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", marginBottom: 28 }}>{company.desc}</p>
      <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,.14)" }}>
        {company.stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              padding: i === 0 ? "18px 0" : "18px 0 18px 22px",
              borderRight: i === company.stats.length - 1 ? undefined : "1px solid rgba(255,255,255,.14)",
            }}
          >
            <div style={{ font: "400 24px 'Spectral',serif" }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 3 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 20,
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,.14)",
          fontSize: 12,
          color: "rgba(255,255,255,.55)",
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: company.accent }} />
        {company.status}
      </div>
    </div>
  );
}

function TeamCard({
  photo,
  accent,
  name,
  role,
  bio,
}: {
  photo: string;
  accent: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div style={{ background: "#FFFFFF", padding: 44, display: "flex", gap: 32, alignItems: "flex-start" }}>
      <div
        style={{
          width: 108,
          height: 140,
          flexShrink: 0,
          border: "1px solid rgba(22,20,18,.2)",
          overflow: "hidden",
        }}
      >
        <Image src={photo} alt={name} width={108} height={140} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div>
        <h4 style={{ font: "400 26px 'Spectral',serif", letterSpacing: "-.4px", marginBottom: 6 }}>{name}</h4>
        <div style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: ".5px", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
          {role}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4A443C" }}>{bio}</p>
      </div>
    </div>
  );
}

const awards = [
  { logo: "/images/awards/bd.png", title: "2022 Business Day", sub: "Top Fastest Growing Company in Nigeria" },
  { logo: "/images/awards/culturati.png", title: "2022 Culturati", sub: "Business Builder of The Year" },
  { logo: "/images/awards/ceo.png", title: "UK CEO Monthly Magazine", sub: "2022 Builder of The Year" },
  { logo: "/images/awards/lbs.png", title: "2023 Lagos Business School", sub: "Case Study Feature" },
  { logo: "/images/awards/gen.png", title: "2023 Global Entrepreneurship", sub: "Network Recognition Award" },
  { logo: "/images/awards/top10.png", title: "Top 10 Magazine Excellence Award", sub: "Startup Builder of the Year 2022" },
];

const partners = [
  { logo: "/images/partners/morrow.png", name: "Morrow Sodali", height: 28 },
  { logo: "/images/partners/venture.png", name: "Venture Studios", height: 40 },
  { logo: "/images/partners/lsetf.png", name: "Lagos State Employment Trust Fund", height: 36 },
  { logo: "/images/partners/pawen.png", name: "PAWEN", height: 40 },
  { logo: "/images/partners/remostart.png", name: "RemoStart", height: 36 },
  { logo: "/images/partners/datamellon.png", name: "Datamellon", height: 32 },
];

function CollectiveCard({
  label,
  accent,
  num,
  title,
  children,
  ctaHref,
  ctaLabel,
  ctaSolid,
}: {
  label: string;
  accent: string;
  num: string;
  title: string;
  children: React.ReactNode;
  ctaHref: string;
  ctaLabel: string;
  ctaSolid?: boolean;
}) {
  return (
    <div style={{ background: "#FFFFFF", padding: "40px 34px", display: "flex", flexDirection: "column", minHeight: 380 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 22 }}>
        <span style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: accent }}>{label}</span>
        <span style={{ font: "400 30px 'Spectral',serif", color: "rgba(13,16,47,.22)", lineHeight: 1 }}>{num}</span>
      </div>
      <h3 style={{ font: "400 26px/1.1 'Spectral',serif", letterSpacing: "-.5px", marginBottom: 16 }}>{title}</h3>
      {children}
      <HoverLink
        href={ctaHref}
        style={{
          fontSize: 14,
          fontWeight: 600,
          padding: "13px 22px",
          background: ctaSolid ? "#0D102F" : "transparent",
          color: ctaSolid ? "#FFFFFF" : "#161412",
          border: ctaSolid ? undefined : "1px solid #161412",
          display: "inline-flex",
          alignSelf: "flex-start",
          marginTop: 28,
        }}
        hoverStyle={ctaSolid ? { background: "#1C2150" } : { background: "#161412", color: "#FFFFFF" }}
      >
        {ctaLabel}
      </HoverLink>
    </div>
  );
}

const ctaRouter = [
  { n: "01", title: "I'm a Founder", body: "Apply to F2VS and co-build your AI venture with our team.", href: routes.studioFounders },
  { n: "02", title: "I Need a Venture Built", body: "Start a Build-to-Transfer brief for your organisation.", href: routes.startVenture },
  { n: "03", title: "I'm a Builder", body: "Join the AMALI Fellowship and train inside live AI ventures.", href: routes.studioTalent },
  { n: "04", title: "I'm an Investor", body: "Back Africa's AI venture-building engine — request the LP deck.", href: routes.studioInvestors },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto", background: "#FFFFFF" }}>
        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1.28fr .72fr", gap: 64, alignItems: "end", paddingBottom: 64 }}>
          <div>
            <div
              style={{
                font: "600 12px 'Space Grotesk',sans-serif",
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "#33CCCC",
                marginBottom: 30,
              }}
            >
              The Venture-Building &amp; Human Capital Engine of Africa
            </div>
            <h1 style={{ font: "400 clamp(38px,7vw,72px)/1.02 'Spectral',serif", letterSpacing: "-2px", marginBottom: 30 }}>
              We co-build the AI companies Africa <span style={{ fontStyle: "italic", color: "#33CCCC" }}>hasn&apos;t built yet</span> — and the
              people who run them.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4A443C", maxWidth: 560, marginBottom: 38 }}>
              Two mandates, one build machine — domain-specific <strong style={{ fontWeight: 600, color: "#161412" }}>Vertical AI</strong> and the{" "}
              <strong style={{ fontWeight: 600, color: "#161412" }}>Industrial Data Infrastructure</strong> beneath it — each built alongside the
              talent trained to run it, all the way to acquisition or exit.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <HoverLink
                href={routes.studioFounders}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", background: "#0D102F", color: "#FFFFFF" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Join as a Founder
              </HoverLink>
              <HoverLink
                href={routes.buildToTransfer}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", border: "1px solid #161412", background: "#33CCCC" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                Start a Venture Brief
              </HoverLink>
              <HoverLink
                href={routes.programAmali}
                style={{ fontSize: 15, fontWeight: 600, padding: "16px 30px", border: "1px solid #161412" }}
                hoverStyle={{ background: "#161412", color: "#FFFFFF" }}
              >
                Join as a Builder
              </HoverLink>
            </div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(22,20,18,.16)", paddingLeft: 36, display: "flex", flexDirection: "column", gap: 28 }}>
            <HeroStat value="$1.8T" label="Africa AI economy opportunity" top />
            <HeroStat value="6.5×" label="Average MOIC across portfolio" />
            <HeroStat value="230M" label="Jobs requiring digital skills by 2030" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "96px 56px" }}>
        <div style={wrap}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
            <span style={{ width: 26, height: 1, background: "rgba(244,241,234,.5)" }} />
            <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase", color: "rgba(244,241,234,.6)" }}>
              Mission
            </span>
          </div>
          <p style={{ font: "400 clamp(30px,3.4vw,46px)/1.32 'Spectral',serif", letterSpacing: "-.5px", maxWidth: 1040 }}>
            FirstFounders is the venture-building and human capital engine for Africa&apos;s AI economy. We don&apos;t just invest in AI companies —
            we <span style={{ fontStyle: "italic", color: "#33CCCC" }}>design, build and scale them</span> from zero to one, while{" "}
            <span style={{ fontStyle: "italic", color: "#33CCCC" }}>training the builders</span> who run them.
          </p>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="ff-px" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
        <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid rgba(22,20,18,.16)", borderTop: "none" }}>
          <StatCell value="$1.8" unit="T" label="AI economy opportunity — Africa's target market" />
          <StatCell value="6.5" unit="×" label="Average MOIC across our portfolio" />
          <StatCell value="230" unit="M" label="Jobs requiring digital skills by 2030" />
          <StatCell value="$1" unit="M+" label="Invested in early-stage African startups" last />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#0D102F", overflow: "hidden", padding: "16px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "ffmarquee 26s linear infinite" }}>
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>

      {/* PROBLEM */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "110px 56px" }}>
        <div className="ff-stack" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34 }}>
              <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
                Africa has a bridge problem
              </span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,54px)/1.08 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 28 }}>
              The data is here.
              <br />
              The markets are here.
              <br />
              <span style={{ fontStyle: "italic", color: "#33CCCC" }}>The AI isn&apos;t.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.72)", maxWidth: 540, marginBottom: 22 }}>
              Africa&apos;s professional-services and industrial sectors generate colossal operational data every day — but almost none of it has
              been captured, structured, or turned into AI assets. The window to build the infrastructure is open now.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.72)", maxWidth: 540, marginBottom: 36 }}>
              38,000 lawyers for 1.4 billion people. West Africa&apos;s $150B freight network running on WhatsApp voice notes. Nigeria&apos;s $120B
              agricultural sector with zero AI infrastructure. These are the most valuable untouched data moats on earth.
            </p>
            <HoverLink
              href="#focus"
              style={{ fontSize: 15, fontWeight: 600, padding: "15px 28px", background: "#FFFFFF", color: "#0D102F", display: "inline-block" }}
              hoverStyle={{ background: "rgba(255,255,255,.86)" }}
            >
              See our focus areas
            </HoverLink>
          </div>
          <div style={{ paddingTop: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid rgba(255,255,255,.16)" }}>
              <ProblemStat value="12" unit="M" label="Young Africans enter the workforce every year" />
              <ProblemStat value="3" unit="M" label="Find formal employment — leaving 9M without pathways" shaded last />
              <ProblemStat value="60" unit="%" label="Of African firms cite a skills shortage as a key barrier to growth" shaded />
              <ProblemStat value="230" unit="M" label="Jobs will require digital skills in Africa by 2030" last />
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="ff-px" style={{ padding: "110px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 72,
            alignItems: "end",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(22,20,18,.16)",
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>AI Focus Areas</span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
              Where we deploy our
              <br />
              venture-building <span style={{ fontStyle: "italic", color: "#33CCCC" }}>machine</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4A443C" }}>
            The 2026 AI investment consensus points at two categories of outsized opportunity:{" "}
            <strong style={{ color: "#161412", fontWeight: 600 }}>Vertical AI</strong> that owns the data moat, and{" "}
            <strong style={{ color: "#161412", fontWeight: 600 }}>Industrial AI</strong> that deploys inside legacy physical infrastructure. We
            build both — from Africa, for the world — and we train the teams that run them.
          </p>
        </div>

        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(22,20,18,.16)", border: "1px solid rgba(22,20,18,.16)" }}>
          {/* PILLAR 1 */}
          <div style={{ background: "#FFFFFF", padding: 48 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#33CCCC" }}>
                01 — Primary Focus
              </span>
              <span style={{ font: "400 44px 'Spectral',serif", color: "rgba(13,16,47,.22)", lineHeight: 1 }}>01</span>
            </div>
            <h3 style={{ font: "400 34px/1.08 'Spectral',serif", letterSpacing: "-.6px", marginBottom: 18 }}>AI Vertical SaaS</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A443C", marginBottom: 28 }}>
              Domain-specific AI that owns a workflow forever. Domain data + deep workflow integration = a moat no general-purpose AI can cross.
              Africa&apos;s professional-services sectors — legal, healthcare, compliance, agri-trade — are pre-digital, under-served, and
              massively underpriced relative to their value.
            </p>
            <div style={{ border: "1px solid rgba(22,20,18,.16)", padding: 24, marginBottom: 28, background: "rgba(13,16,47,.025)" }}>
              <div style={{ font: "600 10px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#6B6358", marginBottom: 18 }}>
                The Vertical Moat
              </div>
              <div style={{ display: "flex", alignItems: "stretch", gap: 10 }}>
                <SchematicBox title="Domain Data" sub="proprietary corpus" accent="#33CCCC" />
                <SchematicArrow color="#33CCCC" />
                <SchematicBox title="Workflow AI" sub="embedded layer" accent="#33CCCC" active />
                <SchematicArrow color="#33CCCC" />
                <SchematicBox title="Owned Outcome" sub="M&A target" accent="#33CCCC" />
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(22,20,18,.14)", paddingTop: 20, marginBottom: 24 }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Tag>Legal AI</Tag>
              <Tag>Healthcare AI</Tag>
              <Tag>Compliance AI</Tag>
              <Tag>Agri-Trade Docs</Tag>
            </div>
          </div>
          {/* PILLAR 2 */}
          <div style={{ background: "#FFFFFF", padding: 48 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#33CCCC" }}>
                02 — Primary Focus
              </span>
              <span style={{ font: "400 44px 'Spectral',serif", color: "rgba(13,16,47,.22)", lineHeight: 1 }}>02</span>
            </div>
            <h3 style={{ font: "400 34px/1.08 'Spectral',serif", letterSpacing: "-.6px", marginBottom: 18 }}>AI Industrial Data Infrastructure</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A443C", marginBottom: 28 }}>
              Africa doesn&apos;t have legacy industrial systems — it has pre-digital ones. Every truck dispatch, crop cycle, grid fault and
              factory batch generates operational data, but almost none of it is captured. 2025 was about compute constraints. 2026 is about data
              constraints.
            </p>
            <div style={{ border: "1px solid rgba(22,20,18,.16)", padding: 24, marginBottom: 28, background: "rgba(255,188,0,.03)" }}>
              <div style={{ font: "600 10px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#6B6358", marginBottom: 18 }}>
                Capture · Structure · Monetise
              </div>
              <div style={{ display: "flex", alignItems: "stretch", gap: 10 }}>
                <SchematicBox title="Capture" sub="freight · agri · grid" accent="#FFBC00" />
                <SchematicArrow color="#FFBC00" />
                <SchematicBox title="Structure" sub="AI-ready assets" accent="#FFBC00" active />
                <SchematicArrow color="#FFBC00" />
                <SchematicBox title="Monetise" sub="irreplaceable moat" accent="#FFBC00" />
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(22,20,18,.14)", paddingTop: 20, marginBottom: 24 }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Tag>AgriData Stack</Tag>
              <Tag>FreightBrain</Tag>
              <Tag>GridIntel</Tag>
              <Tag>FactoryOS</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "110px 56px" }}>
        <div style={wrap}>
          <div
            className="ff-stack"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: 72,
              alignItems: "end",
              paddingBottom: 48,
              borderBottom: "1px solid rgba(255,255,255,.16)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
                <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
                <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>How We Build</span>
              </div>
              <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
                Two mandates.
                <br />
                One <span style={{ fontStyle: "italic", color: "#33CCCC" }}>build machine.</span>
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.72)" }}>
              We operate across two build mandates — equity-backed co-building for founders, and paid venture delivery for enterprises. Both run
              on the same F2 machine: engineering, design, legal, GTM, an active M&amp;A desk — and a talent pipeline trained to run what we
              build.
            </p>
          </div>

          <div
            className="ff-stack"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "rgba(255,255,255,.16)",
              border: "1px solid rgba(255,255,255,.16)",
              borderTop: "none",
            }}
          >
            {/* mandate 1 */}
            <div style={{ background: "#0D102F", color: "#FFFFFF", padding: 48 }}>
              <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 10 }}>
                Mandate 01
              </div>
              <h3 style={{ font: "400 38px/1.04 'Spectral',serif", letterSpacing: "-.8px", marginBottom: 8 }}>Build to Transfer</h3>
              <div style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 1.2, textTransform: "uppercase", color: "#33CCCC", marginBottom: 24 }}>
                For corporations, government &amp; DFIs
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 30 }}>
                We design, build and deliver a fully operational AI company — product, team, legal entity, GTM engine — then hand complete
                ownership to you, with a trained team in place to run it. You commission it. We build it. You own it.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}>
                <FeatureRow accent="#33CCCC">100% client ownership at transfer</FeatureRow>
                <FeatureRow accent="#33CCCC">Embedded operating team trained &amp; transferred with the build</FeatureRow>
                <FeatureRow accent="#33CCCC">Fixed build fee · 50/40/10 payment schedule</FeatureRow>
                <FeatureRow accent="#33CCCC" last>
                  Timeline: 10–12 months average delivery
                </FeatureRow>
              </div>
              <HoverLink
                href={routes.buildToTransfer}
                style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", border: "1px solid rgba(255,255,255,.4)", background: "#FFBC00", color: "#0D102F", display: "inline-block", marginTop: 30 }}
                hoverStyle={{ background: "#FFFFFF", color: "#0D102F" }}
              >
                Start a Venture Brief
              </HoverLink>
            </div>
            {/* mandate 2 */}
            <div style={{ background: "#0D102F", color: "#FFFFFF", padding: 48 }}>
              <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 10 }}>
                Mandate 02 · F2VS Programme
              </div>
              <h3 style={{ font: "400 38px/1.04 'Spectral',serif", letterSpacing: "-.8px", marginBottom: 8 }}>Build to Exit</h3>
              <div style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 1.2, textTransform: "uppercase", color: "#33CCCC", marginBottom: 24 }}>
                For AI founders with bold ideas
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 30 }}>
                We co-build with founders — 30% equity, $250k capital, a full embedded team, and 36 months of operational support — driving
                toward M&amp;A at Pre-Series A, with our buyer-led M&amp;A desk engaged from day one and trained operators alongside you.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}>
                <FeatureRow accent="#33CCCC">30% equity · $250k initial investment</FeatureRow>
                <FeatureRow accent="#33CCCC">Full embedded team for 36 months</FeatureRow>
                <FeatureRow accent="#33CCCC">Active M&amp;A desk targeting $5M–$25M exits</FeatureRow>
                <FeatureRow accent="#33CCCC" last>
                  Open for applications — Cohort 1 now
                </FeatureRow>
              </div>
              <HoverLink
                href={routes.studioFounders}
                style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", background: "#FFBC00", color: "#0D102F", display: "inline-block", marginTop: 30 }}
                hoverStyle={{ background: "rgba(255,255,255,.86)" }}
              >
                Apply as a Founder
              </HoverLink>
            </div>
          </div>

          {/* capital advisory strip */}
          <div
            className="ff-flex-col"
            style={{
              border: "1px solid rgba(255,255,255,.16)",
              borderTop: "none",
              padding: "44px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 48,
              flexWrap: "wrap",
              background: "#1A1847",
              color: "#FFFFFF",
            }}
          >
            <div>
              <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#33CCCC", marginBottom: 10 }}>
                Capital Raising Advisory
              </div>
              <h3 style={{ font: "400 30px/1.1 'Spectral',serif", letterSpacing: "-.6px", marginBottom: 12 }}>We help you close the round.</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(244,241,234,.7)", maxWidth: 620 }}>
                Investment readiness · deck structuring · investor mapping · deal structuring · term-sheet advisory. Standalone or bundled with
                any build mandate.
              </p>
            </div>
            <HoverLink
              href={routes.talkToTeam}
              style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", border: "1px solid #FFFFFF", background: "#FFBC00", color: "#0D102F", flexShrink: 0 }}
              hoverStyle={{ background: "#FFFFFF", color: "#0D102F" }}
            >
              Talk to the Team
            </HoverLink>
          </div>
        </div>
      </section>

      {/* TALENT */}
      <section id="talent" className="ff-px" style={{ padding: "110px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 72,
            alignItems: "end",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(22,20,18,.16)",
            marginBottom: 56,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
                The Human Capital Engine
              </span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
              We don&apos;t just build the ventures.
              <br />
              We build the <span style={{ fontStyle: "italic", color: "#33CCCC" }}>people who run them.</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4A443C" }}>
            Every venture is built alongside the talent that will operate it. Through the AMALI Fellowship and the F2 talent pipeline, we train
            African AI builders inside live ventures — so that when a company is transferred or exits, a capable, embedded team goes with it.
          </p>
        </div>

        <div style={{ border: "1px solid rgba(22,20,18,.16)", background: "rgba(13,16,47,.03)", padding: "44px 48px", marginBottom: 8 }}>
          <div style={{ font: "600 10px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "#6B6358", marginBottom: 28 }}>
            Talent moves with the venture — from training to exit
          </div>
          <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            <TalentStep n="01" title="Train" accent="#33CCCC" body="AMALI Fellowship recruits and trains African AI builders, designers and operators." />
            <TalentStep n="02" title="Embed" accent="#33CCCC" body="Fellows join live F2 ventures as part of the embedded build team from day one." />
            <TalentStep n="03" title="Run" accent="#33CCCC" body="They take operating ownership of the workflow, growing into the team that runs it." />
            <TalentStep
              n="04"
              title="Transfer / Exit"
              accent="#FFBC00"
              body="At acquisition or transfer, the trained team goes with the company — value that compounds."
            />
          </div>
        </div>
        <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid rgba(22,20,18,.16)", borderTop: "none" }}>
          <TalentStat value="230" unit="M" label="Jobs needing digital skills by 2030" />
          <TalentStat value="9" unit="M" label="Young Africans / year without formal pathways" />
          <TalentStat value="100" unit="%" label="Of ventures built with an embedded, trained team" last />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 36, flexWrap: "wrap" }}>
          <HoverLink
            href={routes.programAmali}
            style={{ fontSize: 15, fontWeight: 600, padding: "15px 28px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
            hoverStyle={{ background: "#1C2150" }}
          >
            Apply as a Talent
          </HoverLink>
          <span style={{ fontSize: 14, color: "#6B6358" }}>Join the AMALI Fellowship and train inside live AI ventures.</span>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "110px 56px" }}>
        <div style={wrap}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 40,
              paddingBottom: 48,
              borderBottom: "1px solid rgba(255,255,255,.16)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
                <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
                <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Portfolio</span>
              </div>
              <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
                Ventures we&apos;ve
                <br />
                built and <span style={{ fontStyle: "italic", color: "#33CCCC" }}>backed</span>
              </h2>
            </div>
            <HoverLink
              href={routes.portfolio}
              style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", border: "1px solid #33CCCC", color: "#33CCCC" }}
              hoverStyle={{ background: "#33CCCC", color: "#0D102F" }}
            >
              View All
            </HoverLink>
          </div>

          <div
            className="ff-stack"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "rgba(255,255,255,.16)",
              border: "1px solid rgba(255,255,255,.16)",
              borderTop: "none",
            }}
          >
            {portfolioCompanies.map((c) => (
              <PortfolioCard key={c.name} company={c} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="ff-px" style={{ padding: "110px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(22,20,18,.16)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Meet the Builders</span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
              The people behind
              <br />
              the <span style={{ fontStyle: "italic", color: "#33CCCC" }}>machine</span>
            </h2>
          </div>
          <HoverLink
            href={routes.about}
            style={{ fontSize: 14, fontWeight: 600, padding: "14px 26px", border: "1px solid #0D102F", color: "#33CCCC" }}
            hoverStyle={{ background: "#0D102F", color: "#FFFFFF" }}
          >
            Connect
          </HoverLink>
        </div>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
            borderTop: "none",
          }}
        >
          <TeamCard
            photo="/images/team/david-lanre-messan.png"
            accent="#33CCCC"
            name="David Lanre Messan"
            role="Founding Partner · Chief Venture Builder"
            bio="18+ years of venture-building. $600k+ personal capital deployed into African tech; 6.5× MOIC track record. Leads venture strategy, founder selection and M&A relationships — architect of the two-vertical AI thesis."
          />
          <TeamCard
            photo="/images/team/kemeshi-samuel.png"
            accent="#FFBC00"
            name="Kemeshi Samuel"
            role="Co-Founding Partner · CMO"
            bio="Deep expertise in operational strategy, marketing leadership and ecosystem development. Leads brand, community, talent pipeline and partnerships — co-architect of the AMALI Fellowship and F2VS Programme."
          />
        </div>
      </section>

      {/* COLLECTIVE */}
      <section id="collective" className="ff-px" style={{ padding: "110px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 72,
            alignItems: "end",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(22,20,18,.16)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>The Collective</span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px" }}>
              More than a studio —
              <br />
              an <span style={{ fontStyle: "italic", color: "#33CCCC" }}>ecosystem.</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4A443C" }}>
            The FirstFounders Collective is the wider gravity around the build machine — the community, insights, gatherings and academy that
            connect founders, builders, operators and capital across the continent.
          </p>
        </div>

        <div
          className="ff-stack-tablet"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
            borderTop: "none",
          }}
        >
          <CollectiveCard label="Community" accent="#33CCCC" num="01" title="F2Nation" ctaHref={routes.collectiveF2Nation} ctaLabel="Join F2Nation" ctaSolid>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", flex: 1 }}>
              The community of founders, builders and operators powering Africa&apos;s AI economy — peer support, deal flow, and the network
              behind every venture.
            </p>
          </CollectiveCard>
          <CollectiveCard label="Insights" accent="#33CCCC" num="02" title="The AI Economy Report" ctaHref={routes.insightsResources} ctaLabel="Download">
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", flex: 1 }}>
              Research, market maps and investment theses on Africa&apos;s AI economy — the data behind our two-vertical playbook, published for
              the ecosystem.
            </p>
          </CollectiveCard>
          <CollectiveCard label="Event" accent="#33CCCC" num="03" title="The F2 Builders Summit" ctaHref={routes.collectiveEvents} ctaLabel="RSVP" ctaSolid>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", flex: 1 }}>
              Demo days, founder dinners and the annual F2 Summit — where ventures, talent and capital meet in person across the continent.
            </p>
          </CollectiveCard>
          <CollectiveCard label="Academy" accent="#33CCCC" num="04" title="F2 Academy" ctaHref={routes.programAmali} ctaLabel="Enrol">
            <>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A443C", marginBottom: 18 }}>
                Structured AI training that turns African talent into the builders and operators who run F2 ventures — across two programs:
              </p>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ borderTop: "1px solid rgba(22,20,18,.14)", paddingTop: 10 }}>
                  <div style={{ font: "600 13px 'Space Grotesk',sans-serif", marginBottom: 2 }}>AMALI Fellowship</div>
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: "#6B6358" }}>Trains AI builders embedded inside live ventures.</div>
                </div>
                <div style={{ borderTop: "1px solid rgba(22,20,18,.14)", paddingTop: 10 }}>
                  <div style={{ font: "600 13px 'Space Grotesk',sans-serif", marginBottom: 2 }}>VSOP</div>
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: "#6B6358" }}>
                    Venture Studio Operators Program — develops the operators who scale and run them.
                  </div>
                </div>
              </div>
            </>
          </CollectiveCard>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "110px 56px" }}>
        <div style={wrap}>
          <div style={{ maxWidth: 760, marginBottom: 56 }}>
            <h2 style={{ font: "400 clamp(40px,5vw,68px)/1.04 'Spectral',serif", letterSpacing: "-1.5px", marginBottom: 24 }}>
              Build for Africa&apos;s <span style={{ fontStyle: "italic", color: "#33CCCC" }}>AI economy.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(244,241,234,.8)" }}>
              Whether you&apos;re a founder with a bold AI idea, a builder ready to enter the AI economy, or an investor backing Africa&apos;s
              next chapter — your place in this story starts here.
            </p>
          </div>
          <div
            className="ff-stack-tablet"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 1,
              background: "rgba(244,241,234,.18)",
              border: "1px solid rgba(244,241,234,.18)",
              marginBottom: 48,
            }}
          >
            {ctaRouter.map((c) => (
              <HoverLink key={c.n} href={c.href} style={{ background: "#0D102F", padding: "34px 28px", display: "block" }} hoverStyle={{ background: "#0D102F" }}>
                <div style={{ font: "400 32px 'Spectral',serif", color: "#33CCCC", marginBottom: 14 }}>{c.n}</div>
                <h4 style={{ font: "600 16px 'Space Grotesk',sans-serif", marginBottom: 8 }}>{c.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(244,241,234,.65)" }}>{c.body}</p>
              </HoverLink>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <HoverLink
              href={routes.studioFounders}
              style={{ fontSize: 16, fontWeight: 600, padding: "17px 34px", background: "#FFFFFF", color: "#33CCCC" }}
              hoverStyle={{ background: "#fff" }}
            >
              Apply Now
            </HoverLink>
            <HoverLink
              href={routes.talkToTeam}
              style={{ fontSize: 16, fontWeight: 600, padding: "17px 34px", border: "1px solid rgba(244,241,234,.6)", color: "#FFFFFF" }}
              hoverStyle={{ background: "rgba(244,241,234,.1)" }}
            >
              Talk to the Team
            </HoverLink>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="ff-px" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 56px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2.5, textTransform: "uppercase" }}>Partners</span>
        </div>
        <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 52, maxWidth: 760 }}>
          The institutions building <span style={{ fontStyle: "italic", color: "#33CCCC" }}>alongside us</span>
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "40px 56px" }}>
          {partners.map((p) => (
            <Image key={p.name} src={p.logo} alt={p.name} width={160} height={p.height} style={{ height: p.height, width: "auto", display: "block" }} />
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="ff-px" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 56px 110px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>Awards &amp; Recognition</span>
        </div>
        <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 52, maxWidth: 760 }}>
          Recognised for the work we <span style={{ fontStyle: "italic", color: "#33CCCC" }}>put in</span>
        </h2>
        <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid rgba(22,20,18,.16)" }}>
          {awards.map((a, i) => (
            <div
              key={a.title}
              style={{
                padding: "40px 36px",
                borderRight: (i + 1) % 3 === 0 ? undefined : "1px solid rgba(22,20,18,.16)",
                borderBottom: i < 3 ? "1px solid rgba(22,20,18,.16)" : undefined,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 90, display: "flex", alignItems: "center", marginBottom: 28 }}>
                <Image src={a.logo} alt={a.title} width={200} height={90} style={{ maxHeight: 90, maxWidth: 200, width: "auto", height: "auto", display: "block" }} />
              </div>
              <div style={{ marginTop: "auto" }}>
                <div style={{ font: "600 15px 'Archivo'", color: "#161412", marginBottom: 4 }}>{a.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358" }}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
