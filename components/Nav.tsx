"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const pathname = usePathname();
  const { openCart, totalQuantity } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/vip", label: "VIP Training" },
    { href: "/eval", label: "Book Eval", cta: true },
  ];

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="nav-brand">
          <Image src="/logo.svg" alt="Cali K9" width={46} height={46} />
          <span className="nav-brand-name">CALI K9</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              {l.external ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={l.cta ? "nav-book" : ""}>
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className={`${pathname === l.href ? "active" : ""} ${l.cta ? "nav-book" : ""}`}>
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <button onClick={openCart} className="nav-cart-btn" aria-label="Open cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
            </button>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button onClick={openCart} className="nav-cart-btn nav-cart-mobile" aria-label="Open cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </button>
          <button className="nav-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${mobileOpen ? "open" : ""}`}>
        {links.map((l) =>
          l.external ? (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
              className={l.cta ? "book-mobile" : ""} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ) : (
            <Link key={l.href} href={l.href}
              className={`${pathname === l.href ? "active" : ""} ${l.cta ? "book-mobile" : ""}`}
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
