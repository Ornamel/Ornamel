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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        {required ? <Required /> : <span style={{ fontWeight: 400, color: "#9a9286" }}> (Optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function AmaliApplyPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [track, setTrack] = useState("");
  const [city, setCity] = useState("");
  const [qual, setQual] = useState("");
  const [url, setUrl] = useState("");
  const [why, setWhy] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!(first && last && email && phone && track && city && qual && why && agree);

  const submit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="ff-px" style={{ padding: "124px 24px 90px", maxWidth: 980, margin: "0 auto" }}>
        <HoverLink
          href={routes.programAmali}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to AMALI
        </HoverLink>
        <h1
          style={{
            font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif",
            letterSpacing: "-1.2px",
            color: "#161412",
            marginBottom: 36,
          }}
        >
          Apply for F2 AMALI
        </h1>

        <div style={{ border: "1px solid rgba(22,20,18,.14)", borderRadius: 14, overflow: "hidden", background: "#F5F6F8" }}>
          <div className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", padding: "30px 40px" }}>
            <div style={{ font: "700 20px 'Archivo',sans-serif", letterSpacing: "-.3px", marginBottom: 8 }}>
              Cohort 1 · 2026 · 100 Spots
            </div>
            <div style={{ font: "400 15px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)" }}>
              Takes 5 minutes. We&apos;ll reply within 5 business days.
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: "72px 24px", textAlign: "center" }}>
              <div style={{ font: "400 clamp(26px,5vw,42px) 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>
                Application received.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 460, margin: "0 auto 30px" }}>
                Thank you — we&apos;ve got your application for Cohort 1. Our team reviews on a rolling basis and will
                be in touch within 5 business days.
              </p>
              <HoverLink
                href={routes.programAmali}
                style={{
                  font: "600 14px 'Archivo',sans-serif",
                  padding: "14px 28px",
                  background: "#0D102F",
                  color: "#FFFFFF",
                  display: "inline-block",
                }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Back to AMALI
              </HoverLink>
            </div>
          ) : (
            <div style={{ padding: 40 }}>
              <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <Field label="First Name" required>
                  <input
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="Your first name"
                    style={inputStyle}
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="Your last name"
                    style={inputStyle}
                  />
                </Field>
              </div>
              <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@mail.com"
                    style={inputStyle}
                  />
                </Field>
                <Field label="Phone Number" required>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid rgba(22,20,18,.18)",
                      borderRadius: 8,
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
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
                </Field>
              </div>
              <div style={{ marginBottom: 24 }}>
                <Field label="Track of Interest" required>
                  <div style={{ position: "relative" }}>
                    <select
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
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
                      <option value="">Select your track</option>
                      <option value="eng">AI Engineering</option>
                      <option value="pm">AI Product Management</option>
                      <option value="gtm">AI Growth &amp; GTM</option>
                    </select>
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
                  </div>
                </Field>
              </div>
              <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <Field label="City / State" required>
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Lagos" style={inputStyle} />
                </Field>
                <Field label="Highest Qualification" required>
                  <div style={{ position: "relative" }}>
                    <select
                      value={qual}
                      onChange={(e) => setQual(e.target.value)}
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
                      <option value="">Select</option>
                      <option>Self-taught / Portfolio</option>
                      <option>OND / HND</option>
                      <option>BSc</option>
                      <option>MSc or higher</option>
                    </select>
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
                  </div>
                </Field>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>LinkedIn, GitHub, or Portfolio URL</label>
                <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>
                  Why AMALI? What makes you the right Fellow?{" "}
                  <span style={{ fontWeight: 400, color: "#9a9286" }}>(max 200 words)</span>
                  <Required />
                </label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  placeholder="Tell us what drives you, what you've built or done that shows your ability, and what you want to build inside AMALI."
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical", font: "400 15px/1.55 'Archivo',sans-serif", padding: "14px 15px" }}
                />
              </div>
              <div
                onClick={() => setAgree(!agree)}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: 16,
                  border: `1px solid ${agree ? "#33CCCC" : "rgba(22,20,18,.18)"}`,
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
                    border: `1px solid ${agree ? "#33CCCC" : "rgba(22,20,18,.3)"}`,
                    background: agree ? "#33CCCC" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, opacity: agree ? 1 : 0 }}>✓</span>
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4A443C" }}>
                  I confirm I am available full-time from Q3 2026 and agree to FirstFounders&apos; privacy policy and
                  AMALI programme terms.
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
                <button
                  onClick={submit}
                  disabled={!canSubmit}
                  style={{
                    minWidth: 220,
                    padding: "15px 30px",
                    border: "none",
                    borderRadius: 2,
                    font: "600 15px 'Archivo',sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    cursor: canSubmit ? "pointer" : "not-allowed",
                    background: canSubmit ? "#0D102F" : "#c7c9d6",
                    color: "#fff",
                  }}
                >
                  Submit My Application
                </button>
              </div>
              <p style={{ textAlign: "center", fontSize: 13, color: "#6B6358", marginTop: 18 }}>
                Applications are reviewed on a rolling basis. No fees. No catch.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
