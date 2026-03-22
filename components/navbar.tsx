"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Route links (full page navigation)
const ROUTE_LINKS = [
  { href: "/projects", label: "Projects" },
];

// Anchor links (scroll on home page, redirect + scroll from other pages)
const ANCHOR_LINKS = [
  { href: "/#about",      label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills",     label: "Skills" },
  { href: "/#contact",    label: "Contact" },
];

const ALL_LINKS = [...ANCHOR_LINKS, ...ROUTE_LINKS];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("/#")) return;

    const id = href.replace("/#", "");

    // If already on home page — smooth scroll, no navigation
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-sm"
      style={{
        background: "rgba(245,242,237,0.92)",
        borderColor: "rgba(26,26,24,0.08)",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 h-14">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold italic"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2d5a3d",
          }}
        >
          AV.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {ALL_LINKS.map((link) => {
            const isActive =
              link.href.startsWith("/#")
                ? false // anchor links are never "active" by pathname
                : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-3 py-1.5 rounded-full text-[0.68rem] tracking-[0.12em] uppercase transition-all duration-200"
                style={{
                  background: isActive ? "#2d5a3d" : "transparent",
                  color: isActive ? "#fff" : "#7a7060",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#eeeae3";
                    e.currentTarget.style.color = "#1a1a18";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#7a7060";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav */}
        <MobileMenu links={ALL_LINKS} isHome={isHome} />
      </div>
    </header>
  );
}

// ── Mobile dropdown ──────────────────────────────────────────────────────────

function MobileMenu({
  links,
  isHome,
}: {
  links: { href: string; label: string }[];
  isHome: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setOpen(false);
    if (!href.startsWith("/#") || !isHome) return;
    e.preventDefault();
    const id = href.replace("/#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-base w-8 h-8 flex items-center justify-center rounded"
        style={{ color: "#2d5a3d" }}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          className="absolute right-0 top-10 w-44 rounded-md py-2 border"
          style={{
            background: "#f5f2ed",
            borderColor: "rgba(26,26,24,0.1)",
            boxShadow: "0 8px 24px rgba(26,26,24,0.08)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-colors"
              style={{ color: "#7a7060" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2d5a3d";
                e.currentTarget.style.background = "#e8f0eb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7a7060";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// React import needed for useState in the sub-component
import React from "react";