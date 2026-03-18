"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const pathname = usePathname();
  const { openCart, totalQuantity } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as Element).closest(".nav-has-dropdown")) {
        setProgramsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const CartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );

  const isProgram = pathname === "/vip" || pathname === "/eval";

  return (
    <>
      <nav className="site-nav">
        {/* LEFT: logo + links */}
        <div className="nav-left">
          <Link href="/" className="nav-brand">
            <Image src="/logo.avif" alt="Cali K9" width={46} height={46} style={{ borderRadius: "6px" }} />
            <span className="nav-brand-name">CALI K9</span>
          </Link>

          <ul className="nav-links">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Programs dropdown */}
            <li className="nav-has-dropdown">
              <button
                className={isProgram ? "active" : ""}
                onClick={() => setProgramsOpen((v) => !v)}
              >
                Programs
                <span className={`nav-chevron${programsOpen ? " open" : ""}`}>▾</span>
              </button>
              <div className={`nav-dropdown${programsOpen ? " open" : ""}`}>
                <Link href="/vip" className={pathname === "/vip" ? "active" : ""} onClick={() => setProgramsOpen(false)}>
                  <span className="drop-icon">★</span> VIP Training
                </Link>
                <Link href="/eval" className={pathname === "/eval" ? "active" : ""} onClick={() => setProgramsOpen(false)}>
                  <span className="drop-icon">→</span> Dog Evaluation
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT: cart + CTA + mobile toggle */}
        <div className="nav-right">
          <button onClick={openCart} className="nav-cart-btn" aria-label="Open cart">
            <CartIcon />
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </button>
          <Link href="/eval" className="nav-book">Book Evaluation</Link>
          <button className="nav-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${mobileOpen ? "open" : ""}`}>
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/vip", label: "VIP Training" },
          { href: "/eval", label: "Dog Evaluation" },
          { href: "/shop", label: "Shop" },
          { href: "/eval", label: "Book Evaluation", cta: true },
        ].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`${pathname === l.href ? "active" : ""} ${l.cta ? "book-mobile" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
