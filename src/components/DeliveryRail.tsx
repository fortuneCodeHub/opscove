"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { steps } from "@/lib/content";

export default function DeliveryRail() {
  const section = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sec = section.current;
    const track = rail.current;
    if (!sec || !track) return;
    if (window.innerWidth < 900) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth + 120;

      const railTween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.6}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".rail-card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotate: 4, scale: 0.9 },
          {
            rotate: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: railTween,
              start: "left 90%",
              end: "left 45%",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section} style={{ overflow: "hidden", background: "var(--bg-alt)" }}>
      <div className="shell" style={{ paddingTop: "clamp(88px,10vw,148px)" }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-archivo-black)",
            fontSize: "clamp(2.1rem,5vw,3.6rem)",
            lineHeight: 1.04,
            letterSpacing: "-.04em",
            maxWidth: "15ch",
          }}
        >
          How a team starts and scales
        </h2>
      </div>

      <div
        ref={rail}
        style={{
          display: "flex",
          gap: "clamp(24px,3vw,48px)",
          padding: "clamp(48px,6vw,80px) var(--gutter) clamp(88px,10vw,148px)",
          width: "max-content",
        }}
      >
        {steps.map((step) => (
          <article
            key={step.num}
            className="rail-card step-card"
            style={{ width: "min(84vw, 420px)", flex: "0 0 auto" }}
          >
            <div style={{ position: "relative", height: 260, background: "#dcdcd6" }}>
              <Image src={step.image} alt={step.alt} fill sizes="420px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "24px 26px 30px" }}>
              <span style={{ fontFamily: "var(--font-archivo-black)", fontSize: 13, letterSpacing: ".1em", color: "var(--lime-deep)" }}>
                {step.num}
              </span>
              <h3 style={{ margin: "10px 0", fontSize: "1.35rem", letterSpacing: "-.025em", fontWeight: 700 }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--ink-soft)" }}>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}