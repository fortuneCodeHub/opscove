"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = (match[1].split(".")[1] || "").length;
    const obj = { n: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: target,
        duration: 1.8,
        ease: "expo.out",
        onUpdate: () => { el.textContent = obj.n.toFixed(decimals) + suffix; },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [value]);

  return <span ref={ref}>0</span>;
}