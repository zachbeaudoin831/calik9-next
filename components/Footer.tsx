import Link from "next/link";
import Image from "next/image";

const TRAINING_LINKS = [
  { href: "/newclientservices", label: "All Services" },
  { href: "/evaluation-with-behavior-specialist", label: "Evaluation" },
  { href: "/board-and-train", label: "Board & Train" },
  { href: "/online-training-program2", label: "Online Program" },
];

const COMPANY_LINKS = [
  { href: "/about-us", label: "About Jas" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/business-coaching", label: "Trainer Coaching" },
  { href: "/contact-us", label: "Contact" },
];

const LOCATIONS = [
  "Bay Area, CA",
  "Los Angeles, CA",
  "Miami, FL",
  "New York, NY",
  "Online Worldwide",
];

const POLICIES = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/health-policy", label: "Health Policy" },
  { href: "/company-policies", label: "Company Policies" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D111C] text-white/70 pt-16 pb-[60px]">
      <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
        {/* Grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 max-[1024px]:grid-cols-[1.4fr_1fr_1fr] max-[1024px]:gap-8 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <Image
                src="/images/logo.webp"
                alt="Cali K9® logo"
                width={350}
                height={54}
                className="h-11 w-auto block brightness-0 invert"
              />
            </div>
            <span className="font-ui text-xs font-bold uppercase tracking-[3px] text-white/50 block mb-2">
              Elite Dog Training
            </span>
            <p className="font-body text-[13px] italic text-white/50">
              As seen on Netflix&rsquo;s <em>Canine Intervention</em>
            </p>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-ui text-[13px] font-bold uppercase tracking-[4px] text-white mb-4">
              Training
            </h3>
            <ul className="list-none">
              {TRAINING_LINKS.map((l) => (
                <li key={l.href} className="py-1.5">
                  <Link
                    href={l.href}
                    className="font-body text-sm text-white/60 no-underline hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-ui text-[13px] font-bold uppercase tracking-[4px] text-white mb-4">
              Company
            </h3>
            <ul className="list-none">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href} className="py-1.5">
                  <Link
                    href={l.href}
                    className="font-body text-sm text-white/60 no-underline hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-ui text-[13px] font-bold uppercase tracking-[4px] text-white mb-4">
              Locations
            </h3>
            <ul className="list-none">
              {LOCATIONS.map((loc) => (
                <li key={loc} className="py-1.5 font-body text-sm text-white/60">
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 text-center">
          <p className="font-ui text-xs uppercase tracking-[1px] text-white/60">
            &copy; {new Date().getFullYear()} Cali K9&reg;. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="mt-2.5 flex flex-wrap justify-center gap-x-4 gap-y-1"
          >
            {POLICIES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="font-ui text-xs uppercase tracking-[1px] text-white/50 no-underline hover:text-white/70 transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
