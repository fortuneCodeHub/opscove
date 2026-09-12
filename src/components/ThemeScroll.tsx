"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ThemeScroll() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-bg]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (!self.isActive) return;
            gsap.to(document.body, {
              backgroundColor: section.dataset.bg!,
              duration: 0.7,
              ease: "power2.out",
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}