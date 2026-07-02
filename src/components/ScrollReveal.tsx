"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveal: every <section> fades in and rises 64px as it enters the
 * viewport, and re-animates each time it re-enters. Driven by a `data-sr`
 * attribute plus a scroll/resize/raf loop. Respects reduced-motion. The
 * `sr-ready` class is added on <html> by a tiny blocking script in the
 * layout so sections are hidden before first paint (no flash); if JS is
 * off, `sr-ready` is never added and everything stays visible.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("sr-ready");

    const reduce = !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const set = (el: Element, on: boolean) => {
      if (on) {
        if (el.getAttribute("data-sr") !== "in") el.setAttribute("data-sr", "in");
      } else if (el.getAttribute("data-sr") === "in") {
        el.removeAttribute("data-sr");
      }
    };

    const update = () => {
      const vh = window.innerHeight || root.clientHeight;
      const sections = document.querySelectorAll("section");
      sections.forEach((el) => {
        if (reduce) {
          set(el, true);
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.height === 0) return;
        const inView = r.top < vh * 0.88 && r.bottom > vh * 0.1;
        set(el, inView);
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("load", update);

    update();
    // Brief poll to catch sections that mount slightly after navigation.
    let polls = 0;
    const iv = window.setInterval(() => {
      update();
      if (++polls > 20) window.clearInterval(iv);
    }, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", update);
      window.clearInterval(iv);
    };
  }, [pathname]);

  return null;
}
