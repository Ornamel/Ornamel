"use client";

import Link from "next/link";
import { useState } from "react";

type HoverLinkProps = {
  href: string;
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  children: React.ReactNode;
  external?: boolean;
};

/** Link that swaps in `hoverStyle` on mouse-over — mirrors the prototype's `style-hover` attribute. */
export function HoverLink({ href, style, hoverStyle, children, external }: HoverLinkProps) {
  const [hover, setHover] = useState(false);
  const merged = hover ? { ...style, ...hoverStyle } : style;
  const handlers = {
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} {...handlers}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...handlers}>
      {children}
    </Link>
  );
}

type HoverDivProps = {
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  children: React.ReactNode;
  as?: "div" | "span";
};

export function HoverBox({ style, hoverStyle, children, as = "div" }: HoverDivProps) {
  const [hover, setHover] = useState(false);
  const merged = hover ? { ...style, ...hoverStyle } : style;
  const Tag = as;
  return (
    <Tag style={merged} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </Tag>
  );
}
