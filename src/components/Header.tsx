"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#delivery", label: "Delivery" },
  { href: "#proof", label: "Proof" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="shell header__bar">
        <a href="#top" aria-label="OpsCove Solutions, home" style={{ display: "block", lineHeight: 1 }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-archivo-black)",
              fontSize: 22,
              letterSpacing: "-.045em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ borderBottom: "5px solid var(--lime)", paddingBottom: 1 }}>Ops</span>cove
          </span>
          <span
            style={{
              display: "block",
              marginTop: 4,
              fontSize: 9.5,
              letterSpacing: ".34em",
              textTransform: "uppercase",
              color: "#56564e",
              fontWeight: 600,
            }}
          >
            Solutions
          </span>
        </a>

        <nav aria-label="Primary" className="header__nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#book" className="btn btn--lime" style={{ fontSize: 14.5, padding: "12px 22px" }}>
            Book a call
          </a>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`header__mobile${open ? " is-open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
