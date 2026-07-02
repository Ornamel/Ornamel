"use client";

import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";

function CTAButton({
  href,
  variant = "outline",
  children,
}: {
  href: string;
  variant?: "gold" | "white" | "outline";
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  const base: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 600,
    padding: "16px 30px",
  };
  let style: React.CSSProperties;
  if (variant === "gold") {
    style = { ...base, background: hover ? "#FFFFFF" : "#FFBC00", color: "#0D102F" };
  } else if (variant === "white") {
    style = { ...base, background: hover ? "rgba(255,255,255,.86)" : "#FFFFFF", color: "#0D102F" };
  } else {
    style = {
      ...base,
      border: "1px solid rgba(244,241,234,.6)",
      color: "#FFFFFF",
      background: hover ? "rgba(244,241,234,.1)" : "transparent",
    };
  }
  return (
    <Link href={href} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </Link>
  );
}

export default function SiteCTA() {
  return (
    <section className="ff-px" style={{ background: "#0D102F", color: "#FFFFFF", paddingTop: 100, paddingBottom: 100, fontFamily: "'Archivo',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
        <div style={{ font: "600 12px 'Space Grotesk',sans-serif", letterSpacing: 2.5, textTransform: "uppercase", color: "#33CCCC", marginBottom: 22 }}>
          Ready when you are
        </div>
        <h2 style={{ font: "400 clamp(36px,4.5vw,60px)/1.05 'Spectral',serif", letterSpacing: "-1.4px", marginBottom: 20 }}>
          Ready to build for Africa&apos;s <span style={{ fontStyle: "italic", color: "#33CCCC" }}>AI economy?</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(244,241,234,.78)", maxWidth: 620, margin: "0 auto 40px" }}>
          Apply as a founder, join as talent, or partner with us as an investor or corporate client. We&apos;re here to
          build boldly, build better, and build for tomorrow.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <CTAButton href={routes.studioFounders} variant="gold">
            Apply as a Founder
          </CTAButton>
          <CTAButton href={routes.studioTalent} variant="white">
            Join as Talent
          </CTAButton>
          <CTAButton href={routes.studioInvestors}>Partner with Us</CTAButton>
        </div>
      </div>
    </section>
  );
}
