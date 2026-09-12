"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  delay?: number;
  scrub?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export default function SplitHeading({
  children,
  as: Tag = "h2",
  delay = 0,
  scrub = false,
  style,
  className,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(el, {
        type: "lines,chars",
        linesClass: "split-line",
      });

      gsap.set(el, { autoAlpha: 1 });

      gsap.from(split.chars, {
        yPercent: 118,
        rotateX: -55,
        opacity: 0,
        duration: 1.05,
        ease: "expo.out",
        stagger: { each: 0.014, from: "start" },
        delay,
        scrollTrigger: scrub
          ? { trigger: el, start: "top 85%", once: true }
          : undefined,
      });

      // the marker swipe draws left to right after the text lands
      const marker = el.querySelector<HTMLElement>("[data-marker]");
      if (marker) {
        gsap.fromTo(
          marker,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.75,
            ease: "power4.inOut",
            delay: delay + 0.45,
            scrollTrigger: scrub
              ? { trigger: el, start: "top 85%", once: true }
              : undefined,
          }
        );
      }

      return () => split.revert();
    }, ref);

    return () => ctx.revert();
  }, [delay, scrub]);

  return (
    <Tag ref={ref} className={className} style={{ ...style, visibility: "hidden" }}>
      {children}
    </Tag>
  );
}