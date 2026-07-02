"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "block",
        fontSize: 13,
        color: hover ? "#FFFFFF" : "rgba(244,241,234,.6)",
        marginBottom: 11,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      style={{ display: "flex", opacity: hover ? 1 : 0.6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={icon} alt={label} width={20} height={20} style={{ width: 20, height: 20, display: "block" }} />
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer
      className="ff-px"
      style={{
        color: "#FFFFFF",
        paddingTop: 72,
        fontFamily: "'Archivo',sans-serif",
        overflow: "hidden",
        backgroundColor: "#0D102F",
      }}
    >
      <div
        className="ff-stack-tablet"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(244,241,234,.14)",
        }}
      >
        <div>
          <Image
            src="/logos/footer-logo.svg"
            alt="FirstFounders"
            height={56}
            width={254}
            style={{ height: 44, width: "auto", marginBottom: 16 }}
          />
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(244,241,234,.55)", maxWidth: 300, marginBottom: 22 }}>
            The venture-building &amp; human capital engine of Africa — building the AI ventures, talent and data
            infrastructure that will define Africa&apos;s next economy.
          </p>
          <div style={{ display: "flex", border: "1px solid rgba(244,241,234,.25)", maxWidth: 320 }}>
            <input
              placeholder="Email address"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontSize: 13,
                padding: "12px 14px",
                fontFamily: "'Archivo'",
              }}
            />
            <button
              style={{
                color: "#14110E",
                border: "none",
                font: "600 13px 'Archivo'",
                padding: "0 18px",
                cursor: "pointer",
                backgroundColor: "#33CCCC",
              }}
            >
              Subscribe&nbsp;
            </button>
          </div>
        </div>
        <div>
          <h5 style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(244,241,234,.4)", marginBottom: 18 }}>
            Studio
          </h5>
          <FooterLink href={routes.studioModel}>Our Model</FooterLink>
          <FooterLink href={routes.studioFounders}>For Founders</FooterLink>
          <FooterLink href={routes.studioInvestors}>For Investors</FooterLink>
        </div>
        <div>
          <h5 style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(244,241,234,.4)", marginBottom: 18 }}>
            Company
          </h5>
          <FooterLink href={routes.about}>About Us</FooterLink>
          <FooterLink href={routes.portfolio}>Portfolio</FooterLink>
          <FooterLink href={routes.collectiveF2Nation}>Collective</FooterLink>
          <FooterLink href={routes.insightsBlog}>Insights</FooterLink>
        </div>
        <div>
          <h5 style={{ font: "600 11px 'Space Grotesk',sans-serif", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(244,241,234,.4)", marginBottom: 18 }}>
            Contact
          </h5>
          <FooterLink href="mailto:hello@firstfounders.cc">hello@firstfounders.cc</FooterLink>
          <FooterLink href="mailto:build@firstfounders.cc">build@firstfounders.cc</FooterLink>
          <FooterLink href="mailto:investors@firstfounders.cc">investors@firstfounders.cc</FooterLink>
          <div style={{ display: "flex", gap: 16, marginTop: 7 }}>
            <SocialLink href="#" label="LinkedIn" icon="/images/social/linkedin.svg" />
            <SocialLink href="#" label="X" icon="/images/social/x.svg" />
            <SocialLink href="#" label="Instagram" icon="/images/social/instagram.svg" />
            <SocialLink href="#" label="Facebook" icon="/images/social/facebook.svg" />
            <SocialLink href="#" label="TikTok" icon="/images/social/tiktok.svg" />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "22px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 12,
          color: "rgba(244,241,234,.45)",
        }}
      >
        <span>© 2026 FirstFounders (F2) · RC 1718234 (Nigeria) · Corp ID 7236194 (Delaware, USA)</span>
        <span>
          Built in Lagos. <span style={{ color: "#33CCCC", fontWeight: 500 }}>Building for the world.</span>
        </span>
      </div>
      <div style={{ maxWidth: 1338, margin: "0 auto", overflow: "hidden" }}>
        <Image
          src="/logos/footer-wordmark.svg"
          alt="FirstFounders"
          width={1338}
          height={146}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </footer>
  );
}
