"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="SEATOP AI home">
          <Image className="brand-wordmark" src="/assets/seatop-wordmark.png" alt="SEATOP AI" width={220} height={80} priority />
        </Link>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`} aria-label="Main navigation">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}

          <div className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
            <button className="nav-drop-btn" type="button" onClick={() => setDropdownOpen((value) => !value)}>
              Solutions ▾
            </button>
            <div className="dropdown-menu">
              {solutionItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary btn-small" href="/contact">Get Started <span className="btn-icon">›</span></Link>
          <button className="mobile-toggle" aria-label="Open menu" onClick={() => setMobileOpen((value) => !value)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
