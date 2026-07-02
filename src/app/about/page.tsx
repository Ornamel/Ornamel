import type { Metadata } from "next";
import Image from "next/image";
import SiteCTA from "@/components/SiteCTA";

export const metadata: Metadata = {
  title: "About — FirstFounders (F2)",
  description:
    "FirstFounders is the venture-building and human capital engine of Africa — combining capital, expertise and talent development to build category-defining AI companies.",
};

const wrap: React.CSSProperties = { maxWidth: 1280, margin: "0 auto" };

type Value = {
  num: string;
  title: string;
  body: string;
  span?: boolean;
};

const values: Value[] = [
  {
    num: "01 / 05",
    title: "Build, Don't Bet",
    body: "We don't place bets on ideas. We build companies from the ground up, with the people, capital and expertise they need to succeed. Every venture is manufactured, not hoped for.",
  },
  {
    num: "02 / 05",
    title: "Talent is Infrastructure",
    body: "Skills training isn't basic — it's the foundation of every venture we build. The best technology is built by people who've been given the chance to learn by doing.",
  },
  {
    num: "03 / 05",
    title: "Africa First, Globally Competitive",
    body: "We build for African markets first, but to global standards. Our companies compete with the best in the world — and win.",
  },
  {
    num: "04 / 05",
    title: "Learn-Build-Earn",
    body: "Education should generate income, not debt. Everyone who joins our studio earns while they learn — making the model sustainable and replicable at scale.",
  },
  {
    num: "05 / 05",
    title: "Institutionalising Venture-Building",
    body: "Collaborating with stakeholders to shape the future of venture creation and talent development — making great company-building a repeatable system, not a rare event.",
    span: true,
  },
];

function ValueCard({ value }: { value: Value }) {
  return (
    <div
      style={{
        background: "#0D102F",
        color: "#FFFFFF",
        padding: 38,
        minHeight: 240,
        gridColumn: value.span ? "span 2" : undefined,
        display: value.span ? "flex" : undefined,
        flexDirection: value.span ? "column" : undefined,
        justifyContent: value.span ? "center" : undefined,
      }}
    >
      <div style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, color: "#FFBC00", marginBottom: 22 }}>
        {value.num}
      </div>
      <h3 style={{ font: "400 25px/1.12 'Spectral',serif", marginBottom: 14 }}>{value.title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", maxWidth: value.span ? 560 : undefined }}>
        {value.body}
      </p>
    </div>
  );
}

function TeamMember({
  photo,
  accent,
  name,
  role,
  bio,
}: {
  photo?: string;
  accent: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="ff-flex-col" style={{ background: "#FFFFFF", padding: 44, display: "flex", gap: 32, alignItems: "flex-start" }}>
      {photo ? (
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
      ) : (
        <div
          style={{
            width: 108,
            height: 140,
            flexShrink: 0,
            border: "1px solid rgba(22,20,18,.2)",
            backgroundColor: "#F5F6F8",
            backgroundImage:
              "repeating-linear-gradient(45deg,rgba(13,16,47,.05) 0,rgba(13,16,47,.05) 1px,transparent 1px,transparent 8px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 12,
          }}
        >
          <span style={{ font: "500 10px 'Space Grotesk',monospace", letterSpacing: 1, textTransform: "uppercase", color: "#6B6358" }}>photo</span>
        </div>
      )}
      <div>
        <h4 style={{ font: "400 26px 'Spectral',serif", letterSpacing: "-.4px", marginBottom: 6 }}>{name}</h4>
        <div
          style={{
            font: "600 12px 'Space Grotesk',sans-serif",
            letterSpacing: ".5px",
            textTransform: "uppercase",
            color: accent,
            marginBottom: 18,
          }}
        >
          {role}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4A443C" }}>{bio}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="ff-px" style={{ padding: "140px 56px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ paddingBottom: 64, borderBottom: "1px solid rgba(22,20,18,.16)" }}>
          <div
            style={{
              font: "600 12px 'Space Grotesk',sans-serif",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#33CCCC",
              marginBottom: 28,
            }}
          >
            About FirstFounders
          </div>
          <h1
            style={{
              font: "400 clamp(44px,5.6vw,80px)/1.02 'Spectral',serif",
              letterSpacing: "-2px",
              maxWidth: 1000,
              marginBottom: 32,
            }}
          >
            Africa building Africa&apos;s digital economy, <span style={{ fontStyle: "italic", color: "#33CCCC" }}>one builder at a time.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4A443C", maxWidth: 640 }}>
            We&apos;re a venture studio that combines capital, expertise and talent development to build category-defining
            companies across two AI mandates — <strong style={{ fontWeight: 600, color: "#161412" }}>Vertical SaaS</strong> and{" "}
            <strong style={{ fontWeight: 600, color: "#161412" }}>Industrial Data Infrastructure</strong>. We are the architects
            of tomorrow&apos;s ventures — democratising entrepreneurship, scaling talent infrastructure, and institutionalising
            venture-building on the continent.
          </p>
        </div>
      </section>

      {/* THE BRIDGE */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
              <span style={{ width: 26, height: 1, background: "#161412" }} />
              <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
                About FirstFounders
              </span>
            </div>
            <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.06 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 28 }}>
              The bridge
              <br />
              <span style={{ fontStyle: "italic", color: "#33CCCC" }}>we&apos;re building.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A443C", marginBottom: 20 }}>
              Africa doesn&apos;t have a talent problem. It has a bridge problem. Universities teach theory; companies want
              experience. And millions of ambitious young Africans are caught in between — qualified on paper but overlooked in
              practice.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A443C", marginBottom: 20 }}>
              We built FirstFounders to be that bridge — where founders can build boldly, build better, and build for tomorrow.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A443C" }}>
              Our model is simple: for every company we launch, alongside expert in-house venture builders, we hire and train a
              cohort of young Africans in the exact skillset required. When the company spins out, the talent stays in the
              ecosystem. Some join the next venture. Some become founders themselves. Over time, we&apos;re not just building a
              portfolio — we&apos;re building a generation of talent who build the ventures that shape the continent&apos;s
              economy.
            </p>
          </div>
          <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
            <div style={{ padding: 32, borderBottom: "1px solid rgba(22,20,18,.16)", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 64, height: 64, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/images/icons/mission.svg" alt="Mission" width={64} height={64} style={{ width: 64, height: 64, display: "block" }} />
              </div>
              <div>
                <div style={{ font: "400 22px 'Spectral',serif", marginBottom: 8 }}>Mission</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>
                  To build and invest in category-defining technology companies while creating pathways for young Africans to
                  move from learning to earning.
                </p>
              </div>
            </div>
            <div style={{ padding: 32, borderBottom: "1px solid rgba(22,20,18,.16)", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 64, height: 64, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/images/icons/vision.svg" alt="Vision" width={64} height={64} style={{ width: 64, height: 64, display: "block" }} />
              </div>
              <div>
                <div style={{ font: "400 22px 'Spectral',serif", marginBottom: 8 }}>Vision</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A443C" }}>
                  To build acquireable companies that sustain job creation and economic growth in Africa.
                </p>
              </div>
            </div>
            <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
              <div style={{ padding: "28px 24px", borderRight: "1px solid rgba(22,20,18,.16)" }}>
                <div style={{ font: "400 38px 'Spectral',serif", color: "#33CCCC" }}>10+</div>
                <div style={{ fontSize: 12, color: "#6B6358", marginTop: 6 }}>Ventures built</div>
              </div>
              <div style={{ padding: "28px 24px", borderRight: "1px solid rgba(22,20,18,.16)" }}>
                <div style={{ font: "400 38px 'Spectral',serif", color: "#33CCCC" }}>6</div>
                <div style={{ fontSize: 12, color: "#6B6358", marginTop: 6 }}>Active in market</div>
              </div>
              <div style={{ padding: "28px 24px" }}>
                <div style={{ font: "400 38px 'Spectral',serif", color: "#33CCCC" }}>60+</div>
                <div style={{ fontSize: 12, color: "#6B6358", marginTop: 6 }}>Jobs created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "100px 56px" }}>
        <div style={wrap}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <span style={{ width: 26, height: 1, background: "rgba(255,255,255,.4)" }} />
            <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
              What We Believe
            </span>
          </div>
          <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 52 }}>
            Five core <span style={{ fontStyle: "italic", color: "#33CCCC" }}>values.</span>
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
            {values.map((v) => (
              <ValueCard key={v.num} value={v} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ff-px" style={{ padding: "100px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <span style={{ width: 26, height: 1, background: "#161412" }} />
          <span style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Meet the Builders
          </span>
        </div>
        <h2 style={{ font: "400 clamp(34px,4vw,52px)/1.04 'Spectral',serif", letterSpacing: "-1.2px", marginBottom: 48 }}>
          The <span style={{ fontStyle: "italic", color: "#33CCCC" }}>team.</span>
        </h2>
        <div
          className="ff-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(22,20,18,.16)",
            border: "1px solid rgba(22,20,18,.16)",
          }}
        >
          <TeamMember
            photo="/images/team/david-lanre-messan.png"
            accent="#33CCCC"
            name="David Lanre Messan"
            role="Founding Partner · Chief Venture Builder"
            bio="18+ years of venture-building. $600k+ personal capital deployed into African tech; 6.5× MOIC track record. Leads venture strategy, founder selection and M&A relationships — architect of the two-vertical AI thesis."
          />
          <TeamMember
            photo="/images/team/kemeshi-samuel.png"
            accent="#FFBC00"
            name="Kemeshi Samuel"
            role="Co-Founding Partner · CMO"
            bio="Deep expertise in operational strategy, marketing leadership and ecosystem development. Leads brand, community, talent pipeline and partnerships — co-architect of the AMALI Fellowship and VSOP."
          />
          <TeamMember
            photo="/images/team/ngozi-nwabueze.jpg"
            accent="#33CCCC"
            name="Ngozi Nwabueze, Esq"
            role="Partner · Head of Legal"
            bio="16+ years advising over 450 Clients; structured/advised Startups and Investors to raise and invest over $2M."
          />
          <TeamMember
            photo="/images/team/idris-eboade.jpg"
            accent="#FFBC00"
            name="Idris Eboade"
            role="Investment Director"
            bio="Over 5 years in venture building and fundraising, securing $150K+ in grants for telecom expansion."
          />
          <TeamMember
            photo="/images/team/jinad-david.jpg"
            accent="#33CCCC"
            name="Jinad David"
            role="Chief Technology Officer"
            bio="Senior Software Engineer and Engineering Lead with 8+ years' experience."
          />
          <TeamMember
            photo="/images/team/oluwatobi-oyeniji.jpg"
            accent="#FFBC00"
            name="Oluwatobi Oyeniji"
            role="Chief Finance Officer"
            bio="Over 5+ years leading finance, accounting, and business performance."
          />
          <TeamMember
            photo="/images/team/sunday-omohwovo.jpg"
            accent="#33CCCC"
            name="Sunday Omohwovo"
            role="Chief Product Officer"
            bio="Over 5+ years designing impactful digital products and experiences."
          />
        </div>
      </section>

      <SiteCTA />
    </div>
  );
}
