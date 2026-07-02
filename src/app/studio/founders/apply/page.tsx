"use client";

import { useState } from "react";
import { HoverLink } from "@/components/HoverLink";
import { routes } from "@/lib/routes";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(22,20,18,.18)",
  borderRadius: 8,
  padding: "13px 15px",
  font: "400 15px 'Archivo',sans-serif",
  color: "#161412",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 120,
  resize: "vertical",
  font: "400 15px/1.55 'Archivo',sans-serif",
  padding: "14px 15px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  font: "600 13px 'Archivo',sans-serif",
  color: "#161412",
  marginBottom: 8,
};

function Required() {
  return <span style={{ color: "#E5484D" }}> *</span>;
}

function Optional() {
  return <span style={{ fontWeight: 400, color: "#9a9286" }}> (Optional)</span>;
}

function SelectArrow() {
  return (
    <span
      style={{
        position: "absolute",
        right: 15,
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        color: "#6B6358",
        fontSize: 11,
      }}
    >
      ▼
    </span>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%",
  appearance: "none",
  WebkitAppearance: "none",
  background: "#fff",
  border: "1px solid rgba(22,20,18,.18)",
  borderRadius: 8,
  padding: "13px 38px 13px 15px",
  font: "400 15px 'Archivo',sans-serif",
  color: "#161412",
  cursor: "pointer",
};

function RadioRow({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: "15px 16px",
        border: `1px solid ${selected ? "#33CCCC" : "rgba(22,20,18,.16)"}`,
        borderRadius: 6,
        background: "#fff",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 5,
          border: `1px solid ${selected ? "#33CCCC" : "rgba(22,20,18,.3)"}`,
          background: selected ? "#33CCCC" : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, opacity: selected ? 1 : 0 }}>✓</span>
      </span>
      <span style={{ font: "500 14px 'Archivo',sans-serif", color: "#161412" }}>{label}</span>
    </div>
  );
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: 24,
        border: `1px solid ${selected ? "#33CCCC" : "rgba(22,20,18,.2)"}`,
        background: selected ? "rgba(51,204,204,.07)" : "#fff",
        font: "500 14px 'Archivo',sans-serif",
        color: "#161412",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </div>
  );
}

const FOUNDED_OPTS = ["Yes — tell us about it in the Builder Story section", "No — this will be my first venture"];
const APPLYING_OPTS = [
  "I have a specific idea I am already working on",
  "I have an idea I want to develop during the programme",
];
const PATH_OPTS = ["Fintech", "AI", "DeepTech", "Vertical SaaS"];
const FOCUS_OPTS = [
  "Financial inclusion",
  "Health & wellness",
  "Education & skills",
  "SME & trade",
  "Agriculture & food",
  "Housing & property",
  "Logistics & mobility",
  "Youth employment",
  "Other",
];
const ROLE_OPTS = [
  "UI/UX Designer",
  "Product Manager",
  "Software Engineer",
  "Data Scientist / ML",
  "Partnership / Sales",
  "Marketing / Growth",
  "Finance / Operations",
  "Legal / Compliance",
  "Domain Expert",
  "Other",
];
const AVAILABILITY_OPTS = [
  "Yes, fully available",
  "Available with some scheduling constraints",
  "I need remote / hybrid participation",
];
const EQUITY_OPTS = ["Yes — I understand and agree", "I want to discuss this before committing", "No — I do not agree"];

const TITLES = ["Basic Info", "Your Building Story", "Your Idea", "Your Community", "Skills & Background", "Submission"];
const EYEBROWS = [
  "BASIC INFO",
  "YOUR BUILDER STORY",
  "YOUR IDEA",
  "YOUR COMMUNITY",
  "TECHNICAL CAPABILITY & BACKGROUND",
  "SUBMISSION MATERIALS",
];
const INTROS = [
  "Tell us who you are and where to reach you.",
  "We want to understand how you think and build. Be specific — the best answers are about one real thing, not a general overview.",
  "How ready are you to proceed?",
  "F2VS is rooted in solving real problems for real people in Africa. We want to understand your lived connection to the problem you're working on.",
  "Tell us about your skills and professional background relevant to building a technology product.",
  "Upload your supporting materials and share how you found us.",
];

export default function F2vsApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateCity, setStateCity] = useState("");
  const [workEligibility, setWorkEligibility] = useState("");
  const [foundedStartup, setFoundedStartup] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [website, setWebsite] = useState("");

  // Step 2
  const [story1, setStory1] = useState("");
  const [story2, setStory2] = useState("");
  const [story3, setStory3] = useState("");
  const [applyingAs, setApplyingAs] = useState("");

  // Step 3
  const [startupPath, setStartupPath] = useState("");
  const [idea, setIdea] = useState("");
  const [doneBefore, setDoneBefore] = useState("");
  const [whyFF, setWhyFF] = useState("");

  // Step 4
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  const [communityConnection, setCommunityConnection] = useState("");
  const [drives, setDrives] = useState("");

  // Step 5
  const [skills, setSkills] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [equityAgree, setEquityAgree] = useState("");

  // Step 6
  const [resumeName, setResumeName] = useState("");
  const [pitchName, setPitchName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [connection, setConnection] = useState("");
  const [gender, setGender] = useState("");
  const [background, setBackground] = useState("");
  const [anythingElse, setAnythingElse] = useState("");

  const toggle = (arr: string[], setArr: (v: string[]) => void, v: string) => {
    setArr(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };

  const canContinue = (): boolean => {
    switch (step) {
      case 1:
        return !!(firstName && lastName && email && phone && stateCity && workEligibility && foundedStartup && linkedin);
      case 2:
        return !!(story1 && story2 && story3 && applyingAs);
      case 3:
        return !!(startupPath && idea && doneBefore && whyFF);
      case 4:
        return !!(focusAreas.length && communityConnection && drives);
      case 5:
        return !!(skills && roles.length && availability && equityAgree);
      case 6:
        return !!(resumeName && howHeard);
      default:
        return false;
    }
  };

  const can = canContinue();

  const next = () => {
    if (!can) return;
    if (step < 6) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const continueStyle: React.CSSProperties = {
    minWidth: 150,
    padding: "14px 26px",
    border: "none",
    borderRadius: 2,
    font: "600 14px 'Archivo',sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    cursor: can ? "pointer" : "not-allowed",
    background: can ? "#0D102F" : "#c7c9d6",
    color: "#fff",
  };

  return (
    <div>
      <section style={{ padding: "124px 24px 90px", maxWidth: 980, margin: "0 auto" }}>
        <HoverLink
          href={routes.studioFounders}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to the F2VS Program
        </HoverLink>
        <h1
          style={{
            font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif",
            letterSpacing: "-1.2px",
            color: "#161412",
            marginBottom: 18,
          }}
        >
          Ready to build your AI venture?
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A443C", maxWidth: 620, marginBottom: 44 }}>
          We are building and backing ideas of founders we select from scratch. Complete this application to be
          considered for the next F2VS cohort.
        </p>

        <div style={{ border: "1px solid rgba(22,20,18,.14)", borderRadius: 14, overflow: "hidden", background: "#F5F6F8" }}>
          <div
            style={{
              background: "#0D102F",
              color: "#FFFFFF",
              padding: "30px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ font: "700 20px 'Archivo',sans-serif", letterSpacing: "-.3px", marginBottom: 8 }}>
                F2VS Programme Application · 2026 Cohort
              </div>
              <div style={{ font: "400 15px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)" }}>
                Step {step} of 6 · {TITLES[step - 1]}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, paddingTop: 8 }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 20,
                    height: 3,
                    borderRadius: 2,
                    background: i <= step ? "#FFBC00" : "rgba(255,255,255,.22)",
                  }}
                />
              ))}
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: "72px 24px", textAlign: "center" }}>
              <div style={{ font: "400 42px 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>
                Application received.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 480, margin: "0 auto 30px" }}>
                Thank you for applying to the F2VS 2026 cohort. We review on a rolling basis and will be in touch
                within 5 business days.
              </p>
              <HoverLink
                href={routes.studioFounders}
                style={{
                  font: "600 14px 'Archivo',sans-serif",
                  padding: "14px 28px",
                  background: "#0D102F",
                  color: "#FFFFFF",
                  display: "inline-block",
                }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Back to the F2VS Program
              </HoverLink>
            </div>
          ) : (
            <div style={{ padding: 40 }}>
              <div style={{ marginBottom: 30 }}>
                <div
                  style={{
                    font: "700 12px 'Space Grotesk',sans-serif",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: "#33CCCC",
                    marginBottom: 10,
                  }}
                >
                  {EYEBROWS[step - 1]}
                </div>
                <div style={{ font: "600 16px/1.4 'Archivo',sans-serif", color: "#161412" }}>{INTROS[step - 1]}</div>
              </div>

              {step === 1 && (
                <>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        First Name
                        <Required />
                      </label>
                      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="e.g Aminna" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Last Name
                        <Required />
                      </label>
                      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="e.g Osei" style={inputStyle} />
                    </div>
                  </div>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        Email Address
                        <Required />
                      </label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@mail.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Phone Number
                        <Required />
                      </label>
                      <div style={{ display: "flex", border: "1px solid rgba(22,20,18,.18)", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "0 14px",
                            borderRight: "1px solid rgba(22,20,18,.14)",
                            font: "500 15px 'Archivo',sans-serif",
                            color: "#161412",
                          }}
                        >
                          <span
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: "linear-gradient(90deg,#0a8a4f 0 33%,#fff 33% 66%,#0a8a4f 66%)",
                              flexShrink: 0,
                            }}
                          />
                          +234
                        </div>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="000 000 0000"
                          style={{ flex: 1, border: "none", padding: "13px 15px", font: "400 15px 'Archivo',sans-serif", color: "#161412", background: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        State / City
                        <Required />
                      </label>
                      <input value={stateCity} onChange={(e) => setStateCity(e.target.value)} placeholder="e.g. Ikeja, Lagos" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Work Eligibility
                        <Required />
                      </label>
                      <div style={{ position: "relative" }}>
                        <select value={workEligibility} onChange={(e) => setWorkEligibility(e.target.value)} style={selectStyle}>
                          <option value="">Select</option>
                          <option>Nigerian citizen</option>
                          <option>Work authorization in Nigeria</option>
                          <option>Require relocation support</option>
                          <option>Other / elsewhere in Africa</option>
                        </select>
                        <SelectArrow />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Have you founded a startup before?
                      <Required />
                    </label>
                    <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {FOUNDED_OPTS.map((o) => (
                        <RadioRow key={o} label={o} selected={foundedStartup === o} onClick={() => setFoundedStartup(o)} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>
                      LinkedIn Profile
                      <Required />
                    </label>
                    <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/yourprofile" style={inputStyle} />
                  </div>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        Portfolio / GitHub
                        <Optional />
                      </label>
                      <input value={portfolio} onChange={(e) => setPortfolio(e.target.value)} placeholder="https://" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Personal website
                        <Optional />
                      </label>
                      <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://" style={inputStyle} />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      1. Tell us about something you originated and built
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      Where did the idea come from? What was the first thing you did to make it real? Could be a
                      company, community initiative, or side project — anything you built from scratch.
                    </div>
                    <textarea
                      value={story1}
                      onChange={(e) => setStory1(e.target.value)}
                      placeholder="e.g. I noticed that small traders in Tejuoso market couldn't access credit because they had no formal transaction records. I started by interviewing 20 traders, then built a simple spreadsheet to track daily sales…"
                      style={textareaStyle}
                    />
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      2. Walk us through how you tested it
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      What did you actually do? Who did you talk to? What did you build? What did you learn that
                      changed your approach?
                    </div>
                    <textarea
                      value={story2}
                      onChange={(e) => setStory2(e.target.value)}
                      placeholder="e.g. I ran a manual pilot with 5 traders for 8 weeks, recording transactions on WhatsApp. I learned that voice notes were more reliable than text for illiterate users."
                      style={textareaStyle}
                    />
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      3. What was your specific role?
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      Did you originate the idea? Did you join later? Did you have decision-making authority?
                    </div>
                    <textarea
                      value={story3}
                      onChange={(e) => setStory3(e.target.value)}
                      placeholder="e.g. I originated the idea and led the team solo for 6 months. I made all product and business decisions."
                      style={textareaStyle}
                    />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      I am applying as…
                      <Required />
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {APPLYING_OPTS.map((o) => (
                        <RadioRow key={o} label={o} selected={applyingAs === o} onClick={() => setApplyingAs(o)} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Startup path
                      <Required />
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {PATH_OPTS.map((p) => (
                        <Chip key={p} label={p} selected={startupPath === p} onClick={() => setStartupPath(p)} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      4. Describe the idea or problem you are bringing
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      What is it? (1–2 sentences) Who is the core user? What specific problem do they face? Why is
                      technology the right lever for this in the Nigerian / African context?
                    </div>
                    <textarea
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      placeholder="e.g. I am building an AI-powered credit scoring tool for market traders in Lagos who are excluded from formal lending because they lack bank statements."
                      style={textareaStyle}
                    />
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      5. What have you already done on this idea before applying?
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      Tell us about user conversations, early prototypes, or research. If you&apos;ve done nothing
                      yet, explain what held you back — honesty is valued over polish.
                    </div>
                    <textarea
                      value={doneBefore}
                      onChange={(e) => setDoneBefore(e.target.value)}
                      placeholder="e.g. I have spoken to 12 traders in Alaba market and 3 microfinance loan officers. I built a simple Excel sheet prototype."
                      style={textareaStyle}
                    />
                  </div>
                  <div>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      6. Why do you want to build this at FirstFounders, and why now?
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      What does FirstFounders specifically offer that you need? What makes now the right time for
                      this venture in the African market?
                    </div>
                    <textarea
                      value={whyFF}
                      onChange={(e) => setWhyFF(e.target.value)}
                      placeholder="e.g. I need a co-building partner, not just a mentor. The regulatory shift from the new CBN open banking guidelines creates a 12-month window."
                      style={textareaStyle}
                    />
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 2 }}>
                      Focus area
                      <Required />
                    </label>
                    <div style={{ fontSize: 13, color: "#6B6358", marginBottom: 10 }}>Select all that apply.</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {FOCUS_OPTS.map((f) => (
                        <Chip key={f} label={f} selected={focusAreas.includes(f)} onClick={() => toggle(focusAreas, setFocusAreas, f)} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      7. Describe your direct connection to the community this idea serves
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      What did you witness, experience, or work through? Why is this problem urgent and personal to
                      you? We want real lived experience — not a pitch narrative.
                    </div>
                    <textarea
                      value={communityConnection}
                      onChange={(e) => setCommunityConnection(e.target.value)}
                      placeholder="e.g. My mother ran a provision store in Mushin for 12 years. I watched her lose stock every year because she had no way to insure her goods or access emergency working capital."
                      style={textareaStyle}
                    />
                  </div>
                  <div>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      What drives you?
                      <Required />
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", margin: "4px 0 10px" }}>
                      Not your elevator pitch — the real reason you wake up and want to build this.
                    </div>
                    <textarea value={drives} onChange={(e) => setDrives(e.target.value)} placeholder="Tell us what genuinely drives you." style={textareaStyle} />
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412" }}>
                      8. Describe your experience and skills related to building a technical product
                      <Required />
                    </div>
                    <textarea
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      placeholder="e.g. I am a product manager with 4 years at a Lagos-based fintech. I have shipped 3 product features and understand the API infrastructure of Paystack and Flutterwave."
                      style={{ ...textareaStyle, marginTop: 10 }}
                    />
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 2 }}>
                      Professional role
                      <Required />
                    </label>
                    <div style={{ fontSize: 13, color: "#6B6358", marginBottom: 10 }}>Select all that apply.</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {ROLE_OPTS.map((r) => (
                        <Chip key={r} label={r} selected={roles.includes(r)} onClick={() => toggle(roles, setRoles, r)} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Are you available for the 3-week Venture Lab programme?
                      <Required />
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {AVAILABILITY_OPTS.map((o) => (
                        <RadioRow key={o} label={o} selected={availability === o} onClick={() => setAvailability(o)} />
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#FFF7E0",
                      border: "1px solid #FFE08A",
                      borderRadius: 8,
                      padding: "16px 18px",
                      marginBottom: 14,
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      color: "#5a4a12",
                    }}
                  >
                    On equity: we are building and backing ideas of founders we select from scratch; hence we take
                    30% equity. This is in exchange for a full engineering team, office space, 3 years of operations,
                    and $250k in capital.
                  </div>
                  <div>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Do you agree with this equity split?
                      <Required />
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {EQUITY_OPTS.map((o) => (
                        <RadioRow key={o} label={o} selected={equityAgree === o} onClick={() => setEquityAgree(o)} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        Resume / CV
                        <Required />
                      </label>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          border: "1px dashed rgba(22,20,18,.3)",
                          borderRadius: 8,
                          padding: "14px 15px",
                          cursor: "pointer",
                          background: "#fff",
                          font: "400 14px 'Archivo',sans-serif",
                          color: "#6B6358",
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => setResumeName(e.target.files && e.target.files[0] ? e.target.files[0].name : "")}
                          style={{ display: "none" }}
                        />
                        <span style={{ color: "#33CCCC", fontSize: 15 }}>⤓</span>
                        <span>{resumeName || "Click to upload resume (PDF or Docx · Max 5MB)"}</span>
                      </label>
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Pitch deck
                        <Optional />
                      </label>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          border: "1px dashed rgba(22,20,18,.3)",
                          borderRadius: 8,
                          padding: "14px 15px",
                          cursor: "pointer",
                          background: "#fff",
                          font: "400 14px 'Archivo',sans-serif",
                          color: "#6B6358",
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => setPitchName(e.target.files && e.target.files[0] ? e.target.files[0].name : "")}
                          style={{ display: "none" }}
                        />
                        <span style={{ color: "#33CCCC", fontSize: 15 }}>⤓</span>
                        <span>{pitchName || "Click to upload pitch deck (PDF · Max 5MB)"}</span>
                      </label>
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ ...labelStyle, marginBottom: 2 }}>
                      Video introduction
                      <Optional />
                    </label>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6358", marginBottom: 10 }}>
                      A 3-minute video about your idea or MVP. Simple recording — no production needed. Paste a
                      public link (YouTube, Google Drive, Loom).
                    </div>
                    <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://" style={inputStyle} />
                  </div>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        How did you hear about FirstFounders?
                        <Required />
                      </label>
                      <div style={{ position: "relative" }}>
                        <select value={howHeard} onChange={(e) => setHowHeard(e.target.value)} style={selectStyle}>
                          <option value="">Select source</option>
                          <option>LinkedIn</option>
                          <option>X / Twitter</option>
                          <option>Referral from a friend</option>
                          <option>An F2 alum or team member</option>
                          <option>Event or conference</option>
                          <option>Search / press</option>
                          <option>Other</option>
                        </select>
                        <SelectArrow />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Existing connection to FirstFounders?
                        <Optional />
                      </label>
                      <div style={{ position: "relative" }}>
                        <select value={connection} onChange={(e) => setConnection(e.target.value)} style={selectStyle}>
                          <option value="">Select</option>
                          <option>None</option>
                          <option>I know a team member</option>
                          <option>I know an alum</option>
                          <option>I attended an event</option>
                          <option>Prior applicant</option>
                        </select>
                        <SelectArrow />
                      </div>
                    </div>
                  </div>
                  <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label style={labelStyle}>
                        Gender
                        <Optional />
                      </label>
                      <div style={{ position: "relative" }}>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
                          <option value="">Select</option>
                          <option>Woman</option>
                          <option>Man</option>
                          <option>Non-binary</option>
                          <option>Prefer not to say</option>
                        </select>
                        <SelectArrow />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Background
                        <Optional />
                      </label>
                      <div style={{ position: "relative" }}>
                        <select value={background} onChange={(e) => setBackground(e.target.value)} style={selectStyle}>
                          <option value="">Select</option>
                          <option>Technical / Engineering</option>
                          <option>Product / Design</option>
                          <option>Business / Commercial</option>
                          <option>Domain specialist</option>
                          <option>Other</option>
                        </select>
                        <SelectArrow />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Anything else you want us to know?
                      <Optional />
                    </label>
                    <textarea
                      value={anythingElse}
                      onChange={(e) => setAnythingElse(e.target.value)}
                      placeholder="Additional context, constraints, or anything the form didn't capture."
                      style={{ ...inputStyle, minHeight: 110, resize: "vertical", font: "400 15px/1.55 'Archivo',sans-serif", padding: "14px 15px" }}
                    />
                  </div>
                </>
              )}

              {/* NAV */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 34 }}>
                {step > 1 && (
                  <button
                    onClick={back}
                    style={{
                      padding: "14px 26px",
                      background: "#fff",
                      border: "1px solid rgba(22,20,18,.45)",
                      borderRadius: 2,
                      font: "600 14px 'Archivo',sans-serif",
                      color: "#161412",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    ← Back
                  </button>
                )}
                <div style={{ flex: 1 }} />
                <button onClick={next} disabled={!can} style={continueStyle}>
                  {step === 6 ? "Submit Application" : "Continue"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
