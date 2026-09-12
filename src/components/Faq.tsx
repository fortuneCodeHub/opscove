"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq({ defaultOpen = 0 }: { defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderTop: "1px solid rgba(14,14,12,.16)" }}>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="faq__row">
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="faq__btn"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className="faq__icon"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className="faq__panel"
              style={{ maxHeight: isOpen ? 460 : 0, opacity: isOpen ? 1 : 0 }}
            >
              <p
                style={{
                  margin: 0,
                  padding: "0 44px 26px 0",
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                  maxWidth: "62ch",
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
