"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  as?: "section" | "div";
  id?: string;
  className?: string;
  style?: CSSProperties;
  mode?: "rise" | "wipe" | "scale" | "stagger";
  "aria-label"?: string;
};

export default function Reveal({
  children,
  as: Tag = "section",
  id,
  className,
  style,
  mode = "rise",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const trigger = { trigger: el, start: "top 82%", once: true };

      if (mode === "wipe") {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.25, ease: "expo.out", scrollTrigger: trigger }
        );
      } else if (mode === "scale") {
        gsap.fromTo(
          el,
          { scale: 0.94, autoAlpha: 0, y: 40 },
          { scale: 1, autoAlpha: 1, y: 0, duration: 1.2, ease: "expo.out", scrollTrigger: trigger }
        );
      } else if (mode === "stagger") {
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(el.children, {
          y: 56,
          autoAlpha: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: trigger,
        });
      } else {
        gsap.fromTo(
          el,
          { y: 48, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.05, ease: "expo.out", scrollTrigger: trigger }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [mode]);

  return (
    <Tag ref={ref as any} id={id} className={className} style={{ ...style, visibility: "hidden" }} {...rest}>
      {children}
    </Tag>
  );
}