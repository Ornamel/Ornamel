"use client";

import { useState } from "react";
import { HoverLink } from "@/components/HoverLink";
import { routes } from "@/lib/routes";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(22,20,18,.22)",
  padding: "13px 15px",
  font: "400 15px 'Archivo',sans-serif",
  color: "#161412",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  font: "600 12px 'Space Grotesk',sans-serif",
  letterSpacing: ".5px",
  marginBottom: 8,
};

function Required() {
  return <span style={{ color: "#FFBC00" }}> *</span>;
}

export default function StartVentureBriefPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!(name && org && email && sector && problem && solution && budget && timeline && goal);

  const submit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="ff-px" style={{ padding: "130px 56px 90px", maxWidth: 920, margin: "0 auto" }}>
        <HoverLink
          href={routes.startVenture}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back
        </HoverLink>
        <h1
          style={{
            font: "400 clamp(36px,4.6vw,60px)/1.04 'Spectral',serif",
            letterSpacing: "-1.5px",
            marginBottom: 14,
          }}
        >
          Venture Brief Intake Form
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", marginBottom: 40, maxWidth: 560 }}>
          Tell us about the venture you want to build. We review every brief and reply within 5 business days.
        </p>

        {submitted ? (
          <div style={{ border: "1px solid rgba(22,20,18,.16)", padding: "64px 40px", textAlign: "center" }}>
            <div style={{ font: "400 40px 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>
              Brief received.
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 460, margin: "0 auto" }}>
              Thank you — your venture brief is with our build team. We&apos;ll review it and reach out within 5
              business days to discuss the path forward.
            </p>
          </div>
        ) : (
          <>
            <div style={{ border: "1px solid rgba(22,20,18,.16)" }}>
              {/* Contact */}
              <div style={{ padding: "36px 40px", borderBottom: "1px solid rgba(22,20,18,.16)" }}>
                <h2 style={{ font: "400 24px 'Spectral',serif", marginBottom: 24 }}>Contact Information</h2>
                <div style={{ marginBottom: 22 }}>
                  <label style={labelStyle}>
                    Full Name
                    <Required />
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" style={inputStyle} />
                </div>
                <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
                  <div>
                    <label style={labelStyle}>
                      Organization
                      <Required />
                    </label>
                    <input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Company / organisation" style={inputStyle} />
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
                      placeholder="you@company.com"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Venture Details */}
              <div style={{ padding: "36px 40px", borderBottom: "1px solid rgba(22,20,18,.16)" }}>
                <h2 style={{ font: "400 24px 'Spectral',serif", marginBottom: 24 }}>Venture Details</h2>
                <div style={{ marginBottom: 22 }}>
                  <label style={labelStyle}>
                    Sector Focus
                    <Required />
                  </label>
                  <select value={sector} onChange={(e) => setSector(e.target.value)} style={inputStyle}>
                    <option value="">Select a focus</option>
                    <option>AI Vertical SaaS</option>
                    <option>AI Industrial Data Infrastructure</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div style={{ marginBottom: 22 }}>
                  <label style={labelStyle}>
                    The Problem
                    <Required />
                  </label>
                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="What specific market gap or challenge are you looking to solve?"
                    style={{ ...inputStyle, minHeight: 110, resize: "vertical", font: "400 15px/1.5 'Archivo',sans-serif" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Solution Overview
                    <Required />
                  </label>
                  <textarea
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="A brief description of the product or service you envision."
                    style={{ ...inputStyle, minHeight: 110, resize: "vertical", font: "400 15px/1.5 'Archivo',sans-serif" }}
                  />
                </div>
              </div>

              {/* Budget & Timeline */}
              <div style={{ padding: "36px 40px", borderBottom: "1px solid rgba(22,20,18,.16)" }}>
                <h2 style={{ font: "400 24px 'Spectral',serif", marginBottom: 24 }}>Budget &amp; Timeline</h2>
                <div className="ff-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
                  <div>
                    <label style={labelStyle}>
                      Build Budget
                      <Required />
                    </label>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)} style={inputStyle}>
                      <option value="">Select budget range</option>
                      <option>Under $100k</option>
                      <option>$100k — $250k</option>
                      <option>$250k — $500k</option>
                      <option>$500k+</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Desired Timeline
                      <Required />
                    </label>
                    <input
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="How soon to MVP?"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Partnership Goal */}
              <div style={{ padding: "36px 40px" }}>
                <h2 style={{ font: "400 24px 'Spectral',serif", marginBottom: 24 }}>Partnership Goal</h2>
                <div>
                  <label style={labelStyle}>
                    What are you looking for?
                    <Required />
                  </label>
                  <select value={goal} onChange={(e) => setGoal(e.target.value)} style={inputStyle}>
                    <option value="">Select partnership type</option>
                    <option>Build to Transfer — you own it at the end</option>
                    <option>Build to Exit — co-build toward M&amp;A</option>
                    <option>Capital raising advisory</option>
                    <option>Still exploring</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={submit}
              disabled={!canSubmit}
              style={{
                width: "100%",
                marginTop: 24,
                padding: 18,
                background: canSubmit ? "#14110E" : "#c7c9d6",
                color: "#FFFFFF",
                border: "none",
                font: "600 15px 'Archivo',sans-serif",
                cursor: canSubmit ? "pointer" : "not-allowed",
              }}
            >
              Submit Venture Brief
            </button>
          </>
        )}
      </section>
    </div>
  );
}
