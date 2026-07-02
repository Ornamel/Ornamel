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

const labelStyle: React.CSSProperties = {
  display: "block",
  font: "600 13px 'Archivo',sans-serif",
  color: "#161412",
  marginBottom: 8,
};

function Required() {
  return <span style={{ color: "#E5484D" }}> *</span>;
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

type OrgType = "corporate" | "government" | "dfi" | "diaspora";
type ReasonType = "capability" | "speed" | "subsidiary" | "mandate";
type BudgetTier = "early" | "lean" | "standard" | "full" | "complex" | "undefined";
type BeginWhen = "1m" | "1-3m" | "3-6m" | "6m+";
type AfterBuild = "independent" | "advisory" | "coown" | "deciding";

const ORG: { v: OrgType; t: string; d: string; score: number }[] = [
  { v: "corporate", t: "Corporate / enterprise", d: "Bank, telco, institution", score: 20 },
  { v: "government", t: "Government / parastatal", d: "Agency, ministry, SOE", score: 18 },
  { v: "dfi", t: "DFI / foundation", d: "Development or impact investor", score: 20 },
  { v: "diaspora", t: "Diaspora / private investor", d: "Individual or family office", score: 8 },
];

const REASON: { v: ReasonType; t: string; d: string }[] = [
  { v: "capability", t: "Build capability we lack", d: "No in-house tech team" },
  { v: "speed", t: "Speed to market", d: "Faster than building in-house" },
  { v: "subsidiary", t: "Create a standalone subsidiary", d: "Separate entity" },
  { v: "mandate", t: "Fulfils programme mandate", d: "Grant or regulatory requirement" },
];

const BUD: { v: BudgetTier; t: string; amt: string; d: string; score: number }[] = [
  { v: "early", t: "Early exploration", amt: "$10,000", d: "Scoping only", score: 5 },
  { v: "lean", t: "Lean build", amt: "$10K – $30K", d: "MVP deployment", score: 10 },
  { v: "standard", t: "Standard scope", amt: "$100K – $150K", d: "Full product build", score: 20 },
  { v: "full", t: "Full studio build", amt: "$250K – $500K", d: "Complete company", score: 28 },
  { v: "complex", t: "Complex or phased", amt: "$750K – $1M", d: "Enterprise scale", score: 30 },
  { v: "undefined", t: "Not yet defined", amt: "Need guidance", d: "We'll help scope it", score: 0 },
];

const BEGIN: { v: BeginWhen; t: string; score: number }[] = [
  { v: "1m", t: "Within 1 month", score: 10 },
  { v: "1-3m", t: "1 – 3 months", score: 8 },
  { v: "3-6m", t: "3 – 6 months", score: 5 },
  { v: "6m+", t: "6+ months out", score: 2 },
];

const HAVE = [
  "Approved internal mandate",
  "Budget allocated",
  "Internal champion / sponsor",
  "Market research done",
  "Legal / regulatory clarity",
  "None of the above",
];

const AFTER: { v: AfterBuild; t: string; d: string; score: number }[] = [
  { v: "independent", t: "Operated fully independently", d: "Full ownership, no FF role", score: 10 },
  { v: "advisory", t: "With advisory support", d: "FirstFounders advisory seat", score: 10 },
  { v: "coown", t: "Open to co-ownership", d: "FF holds minority equity", score: 8 },
  { v: "deciding", t: "Still deciding", d: "Need guidance", score: 4 },
];

const TITLES = ["About you", "Your build mandate", "Readiness & resources", "Fit & expectations"];
const EYEBROWS = ["ABOUT YOU", "YOUR BUILD MANDATE", "READINESS & RESOURCES", "FIT & EXPECTATIONS"];
const INTROS = [
  "Who are you and where are you from?",
  "What do you want to build and why?",
  "How ready are you to proceed?",
  "A few final questions",
];

const qualifySteps = [
  "Expect a calendar invite within 2 business days",
  "Bring a brief or initial product spec if you have one",
  "We'll confirm scope, milestones and pricing on the call",
  "If aligned, a Statement of Work is issued within 5 days",
];

const notQualifySteps = [
  "We'll send you our Build to Transfer readiness guide",
  "Reach out once your mandate is approved and budget confirmed",
  "Our Capital Raising Advisory may be a better starting point",
  "Follow us at firstfounders.cc",
];

function cardStyle(sel: boolean): React.CSSProperties {
  return {
    padding: "16px 18px",
    border: `1px solid ${sel ? "#33CCCC" : "rgba(22,20,18,.16)"}`,
    borderRadius: 8,
    background: sel ? "rgba(51,204,204,.08)" : "#fff",
    cursor: "pointer",
  };
}

function chipStyle(sel: boolean): React.CSSProperties {
  return {
    padding: "14px 18px",
    border: `1px solid ${sel ? "#33CCCC" : "rgba(22,20,18,.16)"}`,
    borderRadius: 8,
    background: sel ? "rgba(51,204,204,.06)" : "#fff",
    cursor: "pointer",
    font: "500 14px 'Archivo',sans-serif",
    color: "#161412",
    textAlign: "center",
  };
}

export default function BuildToTransferQualifyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [scorePct, setScorePct] = useState(0);

  const [fullName, setFullName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [orgType, setOrgType] = useState<OrgType | "">("");

  const [productType, setProductType] = useState("");
  const [describe, setDescribe] = useState("");
  const [reason, setReason] = useState<ReasonType | "">("");
  const [targetMarket, setTargetMarket] = useState("");

  const [budgetTier, setBudgetTier] = useState<BudgetTier | "">("");
  const [beginWhen, setBeginWhen] = useState<BeginWhen | "">("");
  const [haveInPlace, setHaveInPlace] = useState<string[]>([]);

  const [afterBuild, setAfterBuild] = useState<AfterBuild | "">("");
  const [studioBefore, setStudioBefore] = useState("");
  const [anythingElse, setAnythingElse] = useState("");

  const toggleHave = (item: string) => {
    if (item === "None of the above") {
      setHaveInPlace(["None of the above"]);
      return;
    }
    setHaveInPlace((prev) => {
      const arr = prev.filter((x) => x !== "None of the above");
      return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
    });
  };

  const computeScore = () => {
    const orgScore = ORG.find((o) => o.v === orgType)?.score ?? 0;
    const budScore = BUD.find((b) => b.v === budgetTier)?.score ?? 0;
    const beginScore = BEGIN.find((b) => b.v === beginWhen)?.score ?? 0;
    const haveScore = Math.min(haveInPlace.filter((h) => h !== "None of the above").length * 4, 20);
    const afterScore = AFTER.find((a) => a.v === afterBuild)?.score ?? 0;
    return Math.round(((orgScore + budScore + beginScore + haveScore + afterScore) / 90) * 100);
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return !!(fullName && org && email && orgType);
      case 2:
        return !!(productType && describe && reason && targetMarket);
      case 3:
        return !!(budgetTier && beginWhen);
      case 4:
        return !!afterBuild;
      default:
        return false;
    }
  };

  const can = canContinue();
  const live = computeScore();

  let liveLabel: string;
  let liveDesc: string;
  let ringColor: string;
  if (live >= 60) {
    liveLabel = "Strong fit — ready to talk";
    liveDesc = "Your mandate aligns with what Build to Transfer delivers.";
    ringColor = "#33CCCC";
  } else if (live >= 40) {
    liveLabel = "Developing fit";
    liveDesc = "Getting there — a discovery call will help us pressure-test scope.";
    ringColor = "#FFBC00";
  } else {
    liveLabel = "Early stage — let's talk first";
    liveDesc = "Your mandate may need further development. Submit to get guidance.";
    ringColor = "#FFBC00";
  }

  const tier = BUD.find((b) => b.v === budgetTier);
  const selectedTierText = tier ? `${tier.t} — ${tier.amt}` : "Not yet defined — Need guidance";

  const next = () => {
    if (!canContinue()) return;
    if (step < 4) {
      setStep(step + 1);
    } else {
      setScorePct(computeScore());
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

  const reset = () => {
    setSubmitted(false);
    setStep(1);
    setScorePct(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const qualify = submitted && scorePct >= 60;
  const notQualify = submitted && scorePct < 60;

  const headerTitle = submitted ? "Your fit assessment" : "Build to Transfer — Intake Form";
  const stepSub = `Step ${step} of 4 — ${TITLES[step - 1]}`;

  return (
    <div>
      <section style={{ padding: "124px 24px 90px", maxWidth: 980, margin: "0 auto" }}>
        <HoverLink
          href={routes.buildToTransfer}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to Build-to-Transfer
        </HoverLink>
        <h1
          style={{
            font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif",
            letterSpacing: "-1.2px",
            color: "#161412",
            marginBottom: 16,
          }}
        >
          Self-qualify before your discovery call
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A443C", maxWidth: 640, marginBottom: 44 }}>
          Tell us about your mandate. 3 minutes. We&apos;ll assess fit and reach out within 2 business days.
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
                {headerTitle}
              </div>
              {!submitted && (
                <div style={{ font: "400 15px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)" }}>{stepSub}</div>
              )}
            </div>
            <div style={{ display: "flex", gap: 8, paddingTop: 8 }}>
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 20,
                    height: 3,
                    borderRadius: 2,
                    background: submitted || i <= step ? "#FFBC00" : "rgba(255,255,255,.22)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ============ RESULT ============ */}
          {submitted ? (
            <div style={{ padding: 40 }}>
              {qualify && (
                <>
                  <div style={{ background: "#0D102F", color: "#FFFFFF", borderRadius: 10, padding: 40 }}>
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        background: "#FFBC00",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 26,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D102F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </div>
                    <h2 style={{ font: "700 26px 'Archivo',sans-serif", letterSpacing: "-.4px", marginBottom: 12 }}>
                      Strong fit — ready for a discovery call
                    </h2>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.78)", maxWidth: 680, marginBottom: 30 }}>
                      Your mandate, budget and timeline align with what Build to Transfer delivers. A FirstFounders
                      founding partner will reach out within 2 business days.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        background: "rgba(255,255,255,.07)",
                        borderRadius: 8,
                        padding: "18px 20px",
                        marginBottom: 30,
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 8,
                          background: "#FFBC00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D102F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2h8l4 4v16H6z" />
                          <path d="M9 10h6M9 14h6M9 18h4" />
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            font: "700 11px 'Space Grotesk',sans-serif",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,.55)",
                            marginBottom: 4,
                          }}
                        >
                          Selected tier
                        </div>
                        <div style={{ font: "700 17px 'Archivo',sans-serif", color: "#FFBC00" }}>{selectedTierText}</div>
                      </div>
                    </div>
                    <div
                      style={{
                        font: "700 11px 'Space Grotesk',sans-serif",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.55)",
                        marginBottom: 14,
                      }}
                    >
                      Next steps
                    </div>
                    <ul style={{ listStyle: "disc", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                      {qualifySteps.map((x) => (
                        <li key={x} style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,.9)" }}>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 30 }}>
                    <HoverLink
                      href={routes.home}
                      style={{
                        padding: "15px 28px",
                        background: "#0D102F",
                        color: "#fff",
                        borderRadius: 2,
                        font: "600 14px 'Archivo',sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                      hoverStyle={{ background: "#1C2150" }}
                    >
                      Back to home page
                    </HoverLink>
                  </div>
                </>
              )}

              {notQualify && (
                <>
                  <div style={{ background: "#FCEEEC", borderRadius: 10, padding: 40 }}>
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        background: "rgba(229,72,77,.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 26,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5484D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6M12 16.5h.01" />
                      </svg>
                    </div>
                    <h2 style={{ font: "700 26px 'Archivo',sans-serif", letterSpacing: "-.4px", color: "#E5484D", marginBottom: 12 }}>
                      Not quite ready — but let&apos;s stay in touch
                    </h2>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 680, marginBottom: 30 }}>
                      Your mandate may benefit from further development. The right first step is probably a strategy
                      session rather than a build contract.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        background: "#fff",
                        borderRadius: 8,
                        padding: "18px 20px",
                        marginBottom: 30,
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 8,
                          background: "#FFBC00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D102F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2h8l4 4v16H6z" />
                          <path d="M9 10h6M9 14h6M9 18h4" />
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            font: "700 11px 'Space Grotesk',sans-serif",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            color: "#9a9286",
                            marginBottom: 4,
                          }}
                        >
                          Selected tier
                        </div>
                        <div style={{ font: "700 17px 'Archivo',sans-serif", color: "#E5484D" }}>{selectedTierText}</div>
                      </div>
                    </div>
                    <div
                      style={{
                        font: "700 11px 'Space Grotesk',sans-serif",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#9a9286",
                        marginBottom: 14,
                      }}
                    >
                      Next steps
                    </div>
                    <ul style={{ listStyle: "disc", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                      {notQualifySteps.map((x) => (
                        <li key={x} style={{ fontSize: 15, lineHeight: 1.5, color: "#161412" }}>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, gap: 16 }}>
                    <button
                      onClick={reset}
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
                      ← Retake assessment
                    </button>
                    <HoverLink
                      href={routes.home}
                      style={{
                        padding: "15px 28px",
                        background: "#0D102F",
                        color: "#fff",
                        borderRadius: 2,
                        font: "600 14px 'Archivo',sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                      hoverStyle={{ background: "#1C2150" }}
                    >
                      Back to home page
                    </HoverLink>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div style={{ padding: 40 }}>
              <div style={{ marginBottom: 30 }}>
                <div
                  style={{
                    font: "700 12px 'Space Grotesk',sans-serif",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#33CCCC",
                    marginBottom: 10,
                  }}
                >
                  {EYEBROWS[step - 1]}
                </div>
                <div style={{ font: "600 16px/1.4 'Archivo',sans-serif", color: "#161412" }}>{INTROS[step - 1]}</div>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>
                      Full Name
                      <Required />
                    </label>
                    <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g Aminna Osei" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>
                      Organization
                      <Required />
                    </label>
                    <input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="e.g. Sterling Bank Nigeria" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>
                      Email Address
                      <Required />
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@mail.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Organization Type
                      <Required />
                    </label>
                    <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {ORG.map((c) => (
                        <div key={c.v} onClick={() => setOrgType(c.v)} style={cardStyle(orgType === c.v)}>
                          <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412", marginBottom: 3 }}>{c.t}</div>
                          <div style={{ fontSize: 12.5, color: "#6B6358" }}>{c.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>
                      Product / company type
                      <Required />
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        style={{
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
                        }}
                      >
                        <option value="">Select the closest description</option>
                        <option>Fintech / lending subsidiary</option>
                        <option>AI Vertical SaaS</option>
                        <option>Marketplace / platform</option>
                        <option>Internal AI tooling / automation</option>
                        <option>Data / infrastructure venture</option>
                        <option>Healthtech / insurtech</option>
                        <option>Other</option>
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>
                      Describe what you want built
                      <Required />
                    </label>
                    <textarea
                      value={describe}
                      onChange={(e) => setDescribe(e.target.value)}
                      placeholder="e.g. A digital lending subsidiary for our bank targeting SME borrowers in tier-2 cities — to be operated independently after handover."
                      style={{ ...inputStyle, minHeight: 120, resize: "vertical", font: "400 15px/1.55 'Archivo',sans-serif", padding: "14px 15px" }}
                    />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Primary reason for commissioning
                      <Required />
                    </label>
                    <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {REASON.map((c) => (
                        <div key={c.v} onClick={() => setReason(c.v)} style={cardStyle(reason === c.v)}>
                          <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412", marginBottom: 3 }}>{c.t}</div>
                          <div style={{ fontSize: 12.5, color: "#6B6358" }}>{c.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Target market and geography
                      <Required />
                    </label>
                    <input
                      value={targetMarket}
                      onChange={(e) => setTargetMarket(e.target.value)}
                      placeholder="e.g. SME, Lagos and Abuja initially — nationwide within 18 months"
                      style={inputStyle}
                    />
                  </div>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      Select your budget tier
                      <Required />
                    </label>
                    <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {BUD.map((c) => (
                        <div key={c.v} onClick={() => setBudgetTier(c.v)} style={cardStyle(budgetTier === c.v)}>
                          <div style={{ font: "500 13px 'Archivo',sans-serif", color: "#6B6358", marginBottom: 2 }}>{c.t}</div>
                          <div style={{ font: "700 16px 'Archivo',sans-serif", color: "#161412", marginBottom: 2 }}>{c.amt}</div>
                          <div style={{ fontSize: 12.5, color: "#6B6358" }}>{c.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      When do you want to begin?
                      <Required />
                    </label>
                    <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                      {BEGIN.map((c) => (
                        <div key={c.v} onClick={() => setBeginWhen(c.v)} style={chipStyle(beginWhen === c.v)}>
                          {c.t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      What do you already have in place?{" "}
                      <span style={{ fontWeight: 400, color: "#9a9286" }}>Select all</span>
                    </label>
                    <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                      {HAVE.map((h) => {
                        const sel = haveInPlace.includes(h);
                        return (
                          <div
                            key={h}
                            onClick={() => toggleHave(h)}
                            style={{
                              display: "flex",
                              gap: 10,
                              alignItems: "center",
                              padding: "13px 14px",
                              border: `1px solid ${sel ? "#33CCCC" : "rgba(22,20,18,.16)"}`,
                              borderRadius: 8,
                              background: "#fff",
                              cursor: "pointer",
                            }}
                          >
                            <span
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                border: `1px solid ${sel ? "#33CCCC" : "rgba(22,20,18,.3)"}`,
                                background: sel ? "#33CCCC" : "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, opacity: sel ? 1 : 0 }}>✓</span>
                            </span>
                            <span style={{ font: "500 13.5px 'Archivo',sans-serif", color: "#161412" }}>{h}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>
                      After the build, what happens to the company?
                      <Required />
                    </label>
                    <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {AFTER.map((c) => (
                        <div key={c.v} onClick={() => setAfterBuild(c.v)} style={cardStyle(afterBuild === c.v)}>
                          <div style={{ font: "600 14px 'Archivo',sans-serif", color: "#161412", marginBottom: 3 }}>{c.t}</div>
                          <div style={{ fontSize: 12.5, color: "#6B6358" }}>{c.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>Worked with a venture studio before?</label>
                    <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                      {["Yes", "No", "Exploring"].map((v) => (
                        <div key={v} onClick={() => setStudioBefore(v)} style={chipStyle(studioBefore === v)}>
                          {v}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ ...labelStyle, marginBottom: 10 }}>Anything else we should know?</label>
                    <textarea
                      value={anythingElse}
                      onChange={(e) => setAnythingElse(e.target.value)}
                      placeholder="Context, constraints, timelines, key stakeholders — anything that helps us prepare."
                      style={{ ...inputStyle, minHeight: 110, resize: "vertical", font: "400 15px/1.55 'Archivo',sans-serif", padding: "14px 15px" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "center",
                      border: "1px solid rgba(22,20,18,.16)",
                      borderRadius: 8,
                      padding: "16px 18px",
                      background: "#fff",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: `conic-gradient(${ringColor} ${live}%, rgba(22,20,18,.12) 0)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          font: "700 13px 'Archivo',sans-serif",
                          color: "#161412",
                        }}
                      >
                        {live}%
                      </div>
                    </div>
                    <div>
                      <div style={{ font: "700 15px 'Archivo',sans-serif", color: "#161412", marginBottom: 2 }}>{liveLabel}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.45, color: "#6B6358" }}>{liveDesc}</div>
                    </div>
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
                <button
                  onClick={next}
                  disabled={!can}
                  style={{
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
                  }}
                >
                  {step === 4 ? "Submit & See Fit Score" : "Continue"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
