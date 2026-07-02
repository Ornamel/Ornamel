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

export default function VsopEnrollPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [why, setWhy] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!(fullName && email && linkedin && why);

  const submit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section style={{ padding: "124px 24px 90px", maxWidth: 760, margin: "0 auto" }}>
        <HoverLink
          href={routes.programVsop}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to VSOP
        </HoverLink>
        <h1
          style={{
            font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif",
            letterSpacing: "-1.2px",
            color: "#161412",
            marginBottom: 16,
          }}
        >
          Enroll in VSOP
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A443C", maxWidth: 600, marginBottom: 40 }}>
          Tell us a little about yourself. We review on a rolling basis and will be in touch within 5 business days.
        </p>

        <div style={{ border: "1px solid rgba(22,20,18,.14)", borderRadius: 14, overflow: "hidden", background: "#F5F6F8" }}>
          <div style={{ background: "#0D102F", color: "#FFFFFF", padding: "28px 36px" }}>
            <div style={{ font: "700 19px 'Archivo',sans-serif", letterSpacing: "-.3px" }}>
              Venture Studio Operators Program
            </div>
            <div style={{ font: "400 14px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)", marginTop: 6 }}>
              Takes 2 minutes · No fees
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: "64px 24px", textAlign: "center" }}>
              <div style={{ font: "400 40px 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>
                Enrollment received.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 440, margin: "0 auto 30px" }}>
                Thanks for enrolling in VSOP. Our team will review your details and reach out within 5 business days.
              </p>
              <HoverLink
                href={routes.programVsop}
                style={{
                  font: "600 14px 'Archivo',sans-serif",
                  padding: "14px 28px",
                  background: "#0D102F",
                  color: "#FFFFFF",
                  display: "inline-block",
                }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Back to VSOP
              </HoverLink>
            </div>
          ) : (
            <div style={{ padding: 36 }}>
              <div style={{ marginBottom: 22 }}>
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
              <div style={{ marginBottom: 22 }}>
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
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>
                  Why do you want to be a venture builder?
                  <Required />
                </label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  placeholder="Tell us what draws you to building ventures, and what you'd bring as an operator."
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical", font: "400 15px/1.55 'Archivo',sans-serif", padding: "14px 15px" }}
                />
              </div>
              <button
                onClick={submit}
                disabled={!canSubmit}
                style={{
                  minWidth: 160,
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
                Submit
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
