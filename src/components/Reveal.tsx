"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "section" | "div";
  id?: string;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
};

export default function Reveal({
  children,
  as: Tag = "section",
  id,
  className,
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={`reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
