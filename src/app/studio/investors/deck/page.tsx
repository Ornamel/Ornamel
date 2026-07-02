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

export default function InvestorsDeckPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!(fullName && email && org && phone && linkedin);

  const submit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section style={{ padding: "124px 24px 90px", maxWidth: 760, margin: "0 auto" }}>
        <HoverLink
          href={routes.studioInvestors}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to Investors
        </HoverLink>
        <h1
          style={{
            font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif",
            letterSpacing: "-1.2px",
            color: "#161412",
            marginBottom: 16,
          }}
        >
          Request the investor deck
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A443C", maxWidth: 600, marginBottom: 40 }}>
          Share your details and we&apos;ll send the FirstFounders LP deck. We respond to qualified requests within 2
          business days.
        </p>

        <div style={{ border: "1px solid rgba(22,20,18,.14)", borderRadius: 14, overflow: "hidden", background: "#F5F6F8" }}>
          <div style={{ background: "#0D102F", color: "#FFFFFF", padding: "28px 36px" }}>
            <div style={{ font: "700 19px 'Archivo',sans-serif", letterSpacing: "-.3px" }}>
              FirstFounders LP Deck · 2026 Fund
            </div>
            <div style={{ font: "400 14px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)", marginTop: 6 }}>
              $30M fund · 4.9× MOIC target · Confidential
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: "64px 24px", textAlign: "center" }}>
              <div style={{ font: "400 40px 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>
                Request received.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 440, margin: "0 auto 30px" }}>
                Thank you for your interest. Our investor relations team will review your request and share the deck
                within 2 business days.
              </p>
              <HoverLink
                href={routes.studioInvestors}
                style={{
                  font: "600 14px 'Archivo',sans-serif",
                  padding: "14px 28px",
                  background: "#0D102F",
                  color: "#FFFFFF",
                  display: "inline-block",
                }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Back to Investors
              </HoverLink>
            </div>
          ) : (
            <div style={{ padding: 36 }}>
              <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                <div>
                  <label style={labelStyle}>
                    Full Name
                    <Required />
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aminna Osei"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Email Address
                    <Required />
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@fund.com"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={labelStyle}>
                  Organisation
                  <Required />
                </label>
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. Sahel Capital"
                  style={inputStyle}
                />
              </div>
              <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 28 }}>
                <div>
                  <label style={labelStyle}>
                    Phone
                    <Required />
                  </label>
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
                </div>
                <div>
                  <label style={labelStyle}>
                    LinkedIn URL
                    <Required />
                  </label>
                  <input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                    style={inputStyle}
                  />
                </div>
              </div>
              <button
                onClick={submit}
                disabled={!canSubmit}
                style={{
                  minWidth: 180,
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
                Submit Request
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
