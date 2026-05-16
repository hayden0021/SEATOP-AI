"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/ai-dropshipping", label: "AI Dropshipping" },
  { href: "/tastepilot", label: "TastePilot" },
  { href: "/contact", label: "Contact" },
];

const solutionItems = [
  { href: "/ai-agents", label: "AI Customer Engagement" },
  { href: "/ai-dropshipping", label: "AI Commerce & Storefront" },
  { href: "/tastepilot", label: "AI Food Discovery" },
  { href: "/contact", label: "Custom AI Project" },
];

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDropdownOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-shell">
        <Link className="brand logoWrapper" href="/" aria-label="SEATOP AI home" onClick={closeMenus}>
          <span className="brand-logo-wordmark">
            <Image src="/assets/darkmode-seatop-wordmark.png" alt="SEATOP AI logo" fill sizes="260px" priority />
          </span>
          <span className="brand-logo-mark">
            <Image src="/assets/darkmode-seatop-mark.png" alt="SEATOP AI logo" fill sizes="44px" priority />
          </span>
        </Link>

        <AnimatePresence>
          <motion.nav
            className={`nav-links ${mobileOpen ? "open" : ""}`}
            aria-label="Main navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={closeMenus}>
                {item.label}
              </Link>
            ))}

            <div ref={dropdownRef} className={`nav-dropdown ${dropdownOpen ? "open" : ""}`} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="nav-drop-btn" type="button" onClick={() => setDropdownOpen((value) => !value)} aria-expanded={dropdownOpen}>
                Solutions <span aria-hidden="true">⌄</span>
              </button>
              <div className="dropdown-menu">
                {solutionItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenus}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={closeMenus}>
              Contact
            </Link>
          </motion.nav>
        </AnimatePresence>

        <div className="nav-actions">
          <Link className="btn btn-primary btn-small" href="/contact" onClick={closeMenus}>
            Get Started <span className="btn-icon">›</span>
          </Link>
          <button className={`mobile-toggle ${mobileOpen ? "open" : ""}`} aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
