"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { marqueeItems } from "@/lib/content";

export default function VelocityMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 26,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const v = self.getVelocity();
          const boost = gsap.utils.clamp(-6, 6, v / 320);
          gsap.to(tween, {
            timeScale: boost === 0 ? 1 : boost,
            duration: 0.35,
            overwrite: true,
          });
          gsap.to(tween, { timeScale: 1, duration: 1.2, delay: 0.4, overwrite: false });
        },
      });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marquee">
      <div ref={track} className="marquee__track" style={{ animation: "none" }}>
        {[0, 1].map((g) => (
          <span key={g} className="marquee__group" aria-hidden={g === 1}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${g}-${i}`}>{item}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}