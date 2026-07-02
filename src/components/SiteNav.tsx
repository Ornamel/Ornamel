"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { routes, type NavSection } from "@/lib/routes";

function sectionForPath(pathname: string): NavSection {
  if (pathname === routes.about) return "about";
  if (pathname.startsWith("/studio")) return "studio";
  if (pathname.startsWith("/programs")) return "programs";
  if (pathname === routes.portfolio) return "portfolio";
  if (pathname.startsWith("/collective")) return "collective";
  if (pathname.startsWith("/insights")) return "insights";
  return "";
}

const linkStyle: React.CSSProperties = {
  position: "relative",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 14px",
  fontSize: 14,
  color: "#3c352c",
};

const triggerStyle: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: 5,
  padding: "0 14px",
  fontSize: 14,
  color: "#3c352c",
  cursor: "default",
};

const underline = (inset: { left: number; right: number }): React.CSSProperties => ({
  position: "absolute",
  left: inset.left,
  right: inset.right,
  bottom: 18,
  height: 1.5,
  background: "#0D102F",
});

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: 70,
  left: 0,
  minWidth: 260,
  background: "#FFFFFF",
  border: "1px solid #161412",
  padding: 8,
  boxShadow: "0 18px 40px rgba(22,20,18,.14)",
};

function DropdownItem({
  href,
  title,
  sub,
}: {
  href: string;
  title: string;
  sub: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "12px 14px",
        color: "#161412",
        background: hover ? "rgba(13,16,47,.07)" : "transparent",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ font: "600 14px 'Archivo'" }}>{title}</div>
      <div style={{ fontSize: 12, color: "#6B6358", marginTop: 2 }}>{sub}</div>
    </Link>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      style={{ ...linkStyle, color: hover ? "#33CCCC" : "#3c352c" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {active && <span style={underline({ left: 14, right: 14 })} />}
    </Link>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const active = sectionForPath(pathname || "");
  const [open, setOpen] = useState<NavSection | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const clear = () => setOpen(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(22,20,18,.12)",
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Archivo',sans-serif",
        backgroundColor: "#FFFFFF",
      }}
      className="ff-px"
    >
      <Link
        href={routes.home}
        style={{ display: "flex", alignItems: "center", gap: 10 }}
        onClick={() => setMobileOpen(false)}
      >
        <Image src="/logos/nav-logo.svg" alt="FirstFounders" height={56} width={254} style={{ height: 39, width: "auto" }} priority />
      </Link>

      <div className="ff-nav-links" style={{ alignItems: "center", gap: 4, height: "100%" }}>
        <NavLink href={routes.about} active={active === "about"}>
          About Us
        </NavLink>

        {/* Studio */}
        <div
          style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          onMouseEnter={() => setOpen("studio")}
          onMouseLeave={clear}
        >
          <span style={triggerStyle}>
            Studio<span style={{ fontSize: 20, opacity: 0.5 }}>▾</span>
            {active === "studio" && <span style={underline({ left: 14, right: 24 })} />}
          </span>
          {open === "studio" && (
            <div style={dropdownStyle}>
              <DropdownItem href={routes.studioModel} title="Our Model" sub="Build-to-Transfer & Build-to-Exit" />
              <DropdownItem href={routes.buildToTransfer} title="Build to Transfer" sub="We build it, you own it" />
              <DropdownItem href={routes.studioFounders} title="For Founders" sub="Co-build your AI venture" />
              <DropdownItem href={routes.studioInvestors} title="For Investors" sub="Back the engine" />
            </div>
          )}
        </div>

        {/* Programs */}
        <div
          style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          onMouseEnter={() => setOpen("programs")}
          onMouseLeave={clear}
        >
          <span style={triggerStyle}>
            Programs<span style={{ fontSize: 20, opacity: 0.5 }}>▾</span>
            {active === "programs" && <span style={underline({ left: 14, right: 24 })} />}
          </span>
          {open === "programs" && (
            <div style={dropdownStyle}>
              <DropdownItem href={routes.programAmali} title="AMALI Fellowship" sub="Paid fellowship for AI builders" />
              <DropdownItem href={routes.programVsop} title="VSOP" sub="Venture Studio Operators Program" />
            </div>
          )}
        </div>

        <NavLink href={routes.portfolio} active={active === "portfolio"}>
          Portfolio
        </NavLink>

        {/* Collective */}
        <div
          style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          onMouseEnter={() => setOpen("collective")}
          onMouseLeave={clear}
        >
          <span style={triggerStyle}>
            Collective<span style={{ fontSize: 20, opacity: 0.5 }}>▾</span>
            {active === "collective" && <span style={underline({ left: 14, right: 24 })} />}
          </span>
          {open === "collective" && (
            <div style={dropdownStyle}>
              <DropdownItem href={routes.collectiveF2Nation} title="F2Nation" sub="The community" />
              <DropdownItem href={routes.collectiveEvents} title="Events" sub="Where the ecosystem convenes" />
            </div>
          )}
        </div>

        {/* Insights */}
        <div
          style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          onMouseEnter={() => setOpen("insights")}
          onMouseLeave={clear}
        >
          <span style={triggerStyle}>
            Insights<span style={{ fontSize: 20, opacity: 0.5 }}>▾</span>
            {active === "insights" && <span style={underline({ left: 14, right: 24 })} />}
          </span>
          {open === "insights" && (
            <div style={dropdownStyle}>
              <DropdownItem href={routes.insightsBlog} title="Blog" sub="Dispatches from the build floor" />
              <DropdownItem href={routes.insightsResources} title="Resources" sub="White papers & reports" />
            </div>
          )}
        </div>
      </div>

      <div className="ff-nav-links" style={{ alignItems: "center" }}>
        <BuildWithUsButton />
      </div>

      {/* Mobile burger */}
      <button
        className="ff-nav-burger"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((v) => !v)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <span style={{ width: 22, height: 1.5, background: "#161412", transition: "transform .2s", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : undefined }} />
        <span style={{ width: 22, height: 1.5, background: "#161412", opacity: mobileOpen ? 0 : 1 }} />
        <span style={{ width: 22, height: 1.5, background: "#161412", transition: "transform .2s", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : undefined }} />
      </button>
    </nav>

      {/* Mobile panel */}
      <div
        className={`ff-nav-mobile-panel${mobileOpen ? " open" : ""}`}
        style={{
          position: "fixed",
          top: 70,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
          background: "#FFFFFF",
          overflowY: "auto",
          padding: "8px 24px 40px",
        }}
      >
        <MobileNavLink href={routes.about} active={active === "about"} onNavigate={() => setMobileOpen(false)}>
          About Us
        </MobileNavLink>
        <MobileAccordionGroup
          label="Studio"
          active={active === "studio"}
          items={[
            { href: routes.studioModel, title: "Our Model", sub: "Build-to-Transfer & Build-to-Exit" },
            { href: routes.buildToTransfer, title: "Build to Transfer", sub: "We build it, you own it" },
            { href: routes.studioFounders, title: "For Founders", sub: "Co-build your AI venture" },
            { href: routes.studioInvestors, title: "For Investors", sub: "Back the engine" },
          ]}
          onNavigate={() => setMobileOpen(false)}
        />
        <MobileAccordionGroup
          label="Programs"
          active={active === "programs"}
          items={[
            { href: routes.programAmali, title: "AMALI Fellowship", sub: "Paid fellowship for AI builders" },
            { href: routes.programVsop, title: "VSOP", sub: "Venture Studio Operators Program" },
          ]}
          onNavigate={() => setMobileOpen(false)}
        />
        <MobileNavLink href={routes.portfolio} active={active === "portfolio"} onNavigate={() => setMobileOpen(false)}>
          Portfolio
        </MobileNavLink>
        <MobileAccordionGroup
          label="Collective"
          active={active === "collective"}
          items={[
            { href: routes.collectiveF2Nation, title: "F2Nation", sub: "The community" },
            { href: routes.collectiveEvents, title: "Events", sub: "Where the ecosystem convenes" },
          ]}
          onNavigate={() => setMobileOpen(false)}
        />
        <MobileAccordionGroup
          label="Insights"
          active={active === "insights"}
          items={[
            { href: routes.insightsBlog, title: "Blog", sub: "Dispatches from the build floor" },
            { href: routes.insightsResources, title: "Resources", sub: "White papers & reports" },
          ]}
          onNavigate={() => setMobileOpen(false)}
        />
        <Link
          href={routes.buildToTransfer}
          onClick={() => setMobileOpen(false)}
          style={{
            display: "block",
            textAlign: "center",
            marginTop: 24,
            fontSize: 14,
            fontWeight: 600,
            padding: "15px 20px",
            color: "#FFFFFF",
            backgroundColor: "#0D102F",
          }}
        >
          Build With Us
        </Link>
      </div>
    </>
  );
}

function MobileNavLink({
  href,
  active,
  onNavigate,
  children,
}: {
  href: string;
  active: boolean;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        display: "block",
        padding: "18px 4px",
        borderBottom: "1px solid rgba(22,20,18,.12)",
        font: "600 16px 'Archivo',sans-serif",
        color: active ? "#33CCCC" : "#161412",
      }}
    >
      {children}
    </Link>
  );
}

function MobileAccordionGroup({
  label,
  active,
  items,
  onNavigate,
}: {
  label: string;
  active: boolean;
  items: { href: string; title: string; sub: string }[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(22,20,18,.12)" }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 4px",
          background: "transparent",
          border: "none",
          font: "600 16px 'Archivo',sans-serif",
          color: active ? "#33CCCC" : "#161412",
          cursor: "pointer",
        }}
      >
        {label}
        <span style={{ fontSize: 12, opacity: 0.6, transform: expanded ? "rotate(180deg)" : undefined }}>▾</span>
      </button>
      {expanded && (
        <div style={{ paddingBottom: 12 }}>
          {items.map((item) => (
            <Link key={item.title} href={item.href} onClick={onNavigate} style={{ display: "block", padding: "10px 4px" }}>
              <div style={{ font: "600 14px 'Archivo'", color: "#161412" }}>{item.title}</div>
              <div style={{ fontSize: 12, color: "#6B6358", marginTop: 2 }}>{item.sub}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function BuildWithUsButton() {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={routes.buildToTransfer}
      style={{
        fontSize: 13,
        fontWeight: 600,
        padding: "11px 20px",
        color: "#FFFFFF",
        backgroundColor: hover ? "#1C2150" : "#0D102F",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Build With Us
    </Link>
  );
}
