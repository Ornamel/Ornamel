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

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  padding: "13px 38px 13px 15px",
  cursor: "pointer",
};

function Required() {
  return <span style={{ color: "#E5484D" }}> *</span>;
}

function SelectField({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        <Required />
      </label>
      <div style={{ position: "relative" }}>
        <select value={value} onChange={(e) => onChange(e.target.value)} style={selectStyle}>
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B6358", fontSize: 11 }}>
          ▼
        </span>
      </div>
    </div>
  );
}

export default function TalkToTeamPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [sector, setSector] = useState("");
  const [revenue, setRevenue] = useState("");
  const [raise, setRaise] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!(name && email && phone && business && sector && revenue && raise);

  const submit = () => {
    if (canSubmit) setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Archivo',sans-serif", color: "#161412", background: "#FFFFFF", overflowX: "hidden" }}>
      <section className="ff-px" style={{ padding: "124px 24px 90px", maxWidth: 760, margin: "0 auto" }}>
        <HoverLink
          href={routes.home}
          style={{ fontSize: 13, color: "#6B6358", display: "inline-block", marginBottom: 24 }}
          hoverStyle={{ color: "#33CCCC" }}
        >
          ← Back to home
        </HoverLink>
        <h1 style={{ font: "800 clamp(34px,4.6vw,52px)/1.04 'Archivo',sans-serif", letterSpacing: "-1.2px", color: "#161412", marginBottom: 16 }}>
          Talk to the team
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A443C", maxWidth: 600, marginBottom: 40 }}>
          Tell us about your business and what you&apos;re raising. We&apos;ll review and reach out within 2 business days.
        </p>

        <div style={{ border: "1px solid rgba(22,20,18,.14)", borderRadius: 14, overflow: "hidden", background: "#F5F6F8" }}>
          <div style={{ background: "#0D102F", color: "#FFFFFF", padding: "28px 36px" }}>
            <div style={{ font: "700 19px 'Archivo',sans-serif", letterSpacing: "-.3px" }}>Let&apos;s start a conversation</div>
            <div style={{ font: "400 14px 'Archivo',sans-serif", color: "rgba(255,255,255,.62)", marginTop: 6 }}>Takes 2 minutes · Confidential</div>
          </div>

          {submitted ? (
            <div style={{ padding: "64px 24px", textAlign: "center" }}>
              <div style={{ font: "400 40px 'Spectral',serif", color: "#33CCCC", marginBottom: 16 }}>Message received.</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A443C", maxWidth: 440, margin: "0 auto 30px" }}>
                Thanks for reaching out. Our team will review your details and get back to you within 2 business days.
              </p>
              <HoverLink
                href={routes.home}
                style={{ font: "600 14px 'Archivo',sans-serif", padding: "14px 28px", background: "#0D102F", color: "#FFFFFF", display: "inline-block" }}
                hoverStyle={{ background: "#1C2150" }}
              >
                Back to home
              </HoverLink>
            </div>
          ) : (
            <div style={{ padding: 36 }}>
              <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                <div>
                  <label style={labelStyle}>
                    Name
                    <Required />
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Aminna Osei" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>
                    Email
                    <Required />
                  </label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@mail.com" style={inputStyle} />
                </div>
              </div>
              <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                <div>
                  <label style={labelStyle}>
                    Phone
                    <Required />
                  </label>
                  <div style={{ display: "flex", border: "1px solid rgba(22,20,18,.18)", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 14px", borderRight: "1px solid rgba(22,20,18,.14)", font: "500 15px 'Archivo',sans-serif", color: "#161412" }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "linear-gradient(90deg,#0a8a4f 0 33%,#fff 33% 66%,#0a8a4f 66%)", flexShrink: 0 }} />
                      +234
                    </div>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="000 000 0000" style={{ flex: 1, border: "none", padding: "13px 15px", font: "400 15px 'Archivo',sans-serif", color: "#161412", background: "transparent", outline: "none" }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>
                    Business Name
                    <Required />
                  </label>
                  <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Sterling Microfinance" style={inputStyle} />
                </div>
              </div>
              <div className="ff-stack-tablet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                <SelectField
                  label="Sector"
                  value={sector}
                  onChange={setSector}
                  placeholder="Select sector"
                  options={["Fintech", "Healthtech", "Agritech", "Logistics & Mobility", "E-commerce & Retail", "Education", "Energy & Climate", "SaaS / Enterprise", "Other"]}
                />
                <SelectField
                  label="Annual Revenue"
                  value={revenue}
                  onChange={setRevenue}
                  placeholder="Select range"
                  options={["Pre-revenue", "Under $50K", "$50K – $250K", "$250K – $1M", "$1M – $5M", "$5M+"]}
                />
              </div>
              <div style={{ marginBottom: 28 }}>
                <SelectField
                  label="How much do you want to raise?"
                  value={raise}
                  onChange={setRaise}
                  placeholder="Select target"
                  options={["Under $100K", "$100K – $500K", "$500K – $1M", "$1M – $3M", "$3M – $10M", "$10M+", "Not sure yet"]}
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
