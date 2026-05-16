"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="SEATOP AI home">
          <span className="brand-mark-wrap" aria-hidden="true">
            <img className="brand-mark-img" src="/assets/seatop-mark.png" alt="" />
          </span>
          <img className="brand-wordmark" src="/assets/seatop-wordmark.png" alt="SEATOP AI" />
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
              <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}

            <div className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
              <button className="nav-drop-btn" type="button" onClick={() => setDropdownOpen((value) => !value)} aria-expanded={dropdownOpen}>
                Solutions <span aria-hidden="true">⌄</span>
              </button>
              <div className="dropdown-menu">
                {solutionItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </motion.nav>
        </AnimatePresence>

        <div className="nav-actions">
          <Link className="btn btn-primary btn-small" href="/contact">
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
