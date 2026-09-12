"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  strength?: number;
  style?: React.CSSProperties;
  fill?: boolean;
};

export default function ParallaxImage({ src, alt, sizes, priority, strength = 14, style, fill }: Props) {
  const wrap = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -strength, scale: 1.18 },
        {
          yPercent: strength,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      );

      // reveal wipe on first entry
      gsap.fromTo(
        el.parentElement,
        { clipPath: "inset(14% 14% 14% 14% round 24px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: el.parentElement, start: "top 88%", once: true },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={wrap} style={{ position: "absolute", inset: 0 }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
    </div>
  );
}