"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { services } from "@/lib/content";

const previews = [
  "/images/voice-bay.jpg",
  "/images/helpdesk.jpg",
  "/images/step-scale.jpg",
  "/images/team-lead.jpg",
  "/images/step-pilot.jpg",
];

export default function ServiceRows() {
  const list = useRef<HTMLUListElement>(null);
  const float = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useLayoutEffect(() => {
    const el = list.current;
    const card = float.current;
    if (!el || !card) return;

    const ctx = gsap.context(() => {
      // rows fan in on scroll
      gsap.from(el.children, {
        yPercent: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });

      const xTo = gsap.quickTo(card, "x", { duration: 0.55, ease: "power3" });
      const yTo = gsap.quickTo(card, "y", { duration: 0.55, ease: "power3" });
      const rTo = gsap.quickTo(card, "rotate", { duration: 0.7, ease: "power3" });

      let lastX = 0;
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        xTo(e.clientX - r.left + 26);
        yTo(e.clientY - r.top - 90);
        rTo(gsap.utils.clamp(-11, 11, (e.clientX - lastX) * 0.7));
        lastX = e.clientX;
      };

      el.addEventListener("mousemove", move);
      return () => el.removeEventListener("mousemove", move);
    }, list);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const card = float.current;
    if (!card) return;
    gsap.to(card, {
      autoAlpha: active >= 0 ? 1 : 0,
      scale: active >= 0 ? 1 : 0.82,
      duration: 0.45,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <div style={{ position: "relative" }}>
      <ul
        ref={list}
        style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid rgba(14,14,12,.16)" }}
      >
        {services.map((row, i) => (
          <li
            key={row.num}
            className="svc-row"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
          >
            <div style={{ display: "flex", gap: "clamp(16px,2.5vw,36px)", alignItems: "baseline", minWidth: 0 }}>
              <span className="svc-row__num" style={{ fontFamily: "var(--font-archivo-black)" }}>{row.num}</span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-archivo-black)",
                  fontSize: "clamp(1.4rem,2.8vw,2.1rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-.035em",
                }}
              >
                {row.title}
              </h3>
            </div>
            <p style={{ margin: 0, maxWidth: "56ch", fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              {row.body}
            </p>
          </li>
        ))}
      </ul>

      <div
        ref={float}
        aria-hidden="true"
        className="svc-float"
        style={{ opacity: 0 }}
      >
        {previews.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="320px"
            style={{ objectFit: "cover", opacity: active === i ? 1 : 0, transition: "opacity .3s" }}
          />
        ))}
      </div>
    </div>
  );
}