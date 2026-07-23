"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { isLanderPath } from "@/lib/lander-routes";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/newclientservices", label: "Services", hasSub: true },
  { href: "/about-us", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
  { href: "/shop", label: "Shop" },
];

const SERVICE_LINKS = [
  { href: "/newclientservices", label: "All Services" },
  { href: "/newclientservices#new-clients", label: "New Clients" },
  { href: "/newclientservices#returning-clients", label: "Returning Clients" },
  { href: "/online-training-program2", label: "Online Training" },
  { href: "/business-coaching", label: "Coaching" },
];

export default function Nav() {
  const pathname = usePathname();
  const { openCart, totalQuantity } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const subRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isActive = (href: string) => pathname === href;
  // Distraction-free lander pages: logo + cart only, no menu/links.
  const isLander = isLanderPath(pathname);
  const isServicePage =
    pathname.startsWith("/newclientservices") ||
    pathname.startsWith("/returningclientservices") ||
    pathname.startsWith("/online-training-program2") ||
    pathname.startsWith("/in-person") ||
    pathname.startsWith("/group-class") ||
    pathname.startsWith("/board-and-train") ||
    pathname.startsWith("/vip-with-jas") ||
    pathname.startsWith("/semi-private") ||
    pathname.startsWith("/zoom-group-class") ||
    pathname.startsWith("/business-coaching") ||
    pathname.startsWith("/5pillars");

  return (
    <>
      <nav
        id="site-nav"
        aria-label="Main navigation"
        style={{ top: 'var(--banner-h, 0px)' }}
        className={`fixed left-0 right-0 h-[68px] bg-white border-b-2 border-blue-500 z-[1000] transition-[box-shadow,top] duration-[200ms,450ms] ease-[ease,cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center no-underline flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Cali K9® logo"
              width={350}
              height={54}
              className="h-8 w-auto block max-[480px]:h-7"
              priority
            />
          </Link>

          {/* Desktop links */}
          {!isLander && (
          <ul className="flex items-center gap-7 list-none max-[768px]:hidden">
            {NAV_LINKS.map((link) =>
              link.hasSub ? (
                <li key={link.href} ref={subRef} className="relative group">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-[5px] font-ui text-[13px] font-bold uppercase tracking-[2px] no-underline transition-colors ${
                      isServicePage ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-muted hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                    <span className="w-[5px] h-[5px] border-r-[1.5px] border-b-[1.5px] border-current rotate-45 -translate-y-[2px] opacity-70 transition-transform duration-[180ms] group-hover:rotate-[225deg] group-hover:translate-y-[2px] group-hover:opacity-100 flex-shrink-0" />
                  </Link>
                  {/* Dropdown */}
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-black/8 border-t-[10px] border-t-transparent rounded-xl shadow-[0_10px_36px_rgba(0,0,0,0.14)] py-1.5 min-w-[190px] list-none opacity-0 invisible pointer-events-none transition-[opacity,transform,visibility] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-2 scale-[0.96] origin-top group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 z-[200]">
                    {SERVICE_LINKS.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-[2px] no-underline whitespace-nowrap transition-colors ${
                            isActive(sub.href) ? "text-blue-500" : "text-ink hover:text-blue-500 hover:bg-blue-50"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-ui text-[13px] font-bold uppercase tracking-[2px] no-underline transition-colors ${
                      isActive(link.href)
                        ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                        : "text-gray-muted hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            {/* Evaluation CTA */}
            <li>
              <Link
                href="/evaluation-with-behavior-specialist"
                className="font-ui text-[13px] font-bold uppercase tracking-[2px] bg-blue-500 text-white border-2 border-blue-500 px-4 py-[7px] rounded-sm whitespace-nowrap hover:bg-blue-700 hover:border-blue-700 hover:-translate-y-px transition-all"
              >
                Evaluation
              </Link>
            </li>
          </ul>
          )}

          {/* Mobile: cart + hamburger grouped on right */}
          {!isLander && (
          <div className="hidden max-[768px]:flex items-center gap-2">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative bg-transparent border-none cursor-pointer p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              className="flex flex-col justify-center gap-[5px] w-11 h-11 bg-transparent border-none cursor-pointer p-2"
            >
              <span className={`block h-0.5 bg-ink rounded-sm transition-all ${drawerOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block h-0.5 bg-ink rounded-sm transition-all ${drawerOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-ink rounded-sm transition-all ${drawerOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
          )}

          {/* Desktop cart button */}
          {!isLander && (
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative bg-transparent border-none cursor-pointer p-2 max-[768px]:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>
          )}
        </div>
      </nav>

      {!isLander && (
      <>
      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[998] min-[769px]:hidden transition-[opacity,visibility] duration-300 ${
          drawerOpen ? "bg-black/30 opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-[68px] right-0 bottom-0 w-[min(320px,85vw)] bg-white border-l-2 border-blue-500 p-8 px-6 z-[999] overflow-y-auto min-[769px]:hidden transition-[transform,opacity] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          drawerOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block font-ui text-base font-bold uppercase tracking-[2px] py-3 border-b border-black/5 no-underline transition-colors ${
                  (link.hasSub ? isServicePage : isActive(link.href)) ? "text-blue-500" : "text-ink hover:text-blue-500"
                }`}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasSub && (
                <ul className="flex flex-col gap-0 list-none border-l-2 border-blue-500/20 pl-4 ml-2 mt-1">
                  {SERVICE_LINKS.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block font-ui text-xs font-bold uppercase tracking-[2px] text-gray-muted py-[7px] px-2 no-underline hover:text-blue-500 transition-colors"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/evaluation-with-behavior-specialist"
              className="block text-center font-ui text-[13px] font-bold uppercase tracking-[2px] bg-blue-500 text-white px-4 py-3 rounded-sm mt-4 no-underline hover:bg-blue-700 transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              Evaluation
            </Link>
          </li>
        </ul>
      </div>
      </>
      )}
    </>
  );
}
