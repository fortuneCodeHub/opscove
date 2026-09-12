"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function MagneticButton({ href, children, className, style }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.38);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.38);
      };
      const leave = () => { xTo(0); yTo(0); };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      };
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <a ref={ref} href={href} className={className} style={style}>
      {children}
    </a>
  );
}