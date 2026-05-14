import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Contact Cali K9\u00ae Dog Training",
  description:
    "Contact Cali K9\u00ae \u2014 reach our San Jose and Los Angeles locations. Call, email, or send a message. Elite dog training since 2009.",
  openGraph: {
    title: "Contact Cali K9\u00ae Dog Training",
    description:
      "Contact Cali K9\u00ae \u2014 reach our San Jose and Los Angeles locations. Call, email, or send a message. Elite dog training since 2009.",
    url: "https://calik9.com/contact-us",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

/* ── Data ── */

const LOCATIONS = [
  {
    city: "San Jose",
    brand: "Cali K9\u00ae Bay Area",
    phone: "(408)\u00a0770\u20117556",
    phoneHref: "tel:4087707556",
  },
  {
    city: "Los Angeles",
    brand: "Cali K9\u00ae LA",
    phone: "(818)\u00a0740\u20117681",
    phoneHref: "tel:8187407681",
  },
  {
    city: "Miami",
    brand: "Cali K9\u00ae Miami",
  },
  {
    city: "New York",
    brand: "Cali K9\u00ae New York",
  },
];

const BUSINESS_HOURS = [
  { day: "Tue \u2013 Sat", time: "11am \u2013 8pm" },
  { day: "Sunday (San Jose)", time: "11am \u2013 5pm" },
  { day: "Monday", time: "Closed", closed: true },
];

const TRAINING_HOURS = [
  { day: "Tue \u2013 Sat", time: "11am \u2013 8pm" },
  { day: "Sunday (San Jose)", time: "11am \u2013 5pm" },
  { day: "Monday", time: "Closed", closed: true },
];

/* ── SVG icons ── */

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 5.66 5.66l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneSmallIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 5.66 5.66l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ── Page ── */

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              We&rsquo;re Here To Help
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Bay Area &middot; Los Angeles &middot; Miami &middot; New York
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            GET IN <span className="text-white/40">TOUCH.</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-9">
            Questions about programs, pricing, or your dog&rsquo;s specific
            needs? Reach out &mdash; we respond within 24 hours.
          </p>
          <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
            <Link
              href="/evaluation-with-behavior-specialist"
              className="btn btn-white btn-lg max-[768px]:w-full max-[768px]:justify-center"
            >
              Book Evaluation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ── */}
      <section
        className="bg-white py-10 border-b border-black/[0.07]"
        aria-label="Quick contact information"
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex flex-wrap gap-6 max-sm:flex-col max-sm:gap-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <PhoneIcon className="text-blue-500" />
              </div>
              <div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted mb-1">
                  Phone
                </div>
                <div className="font-body text-lg font-semibold text-blue-500">
                  <a
                    href="tel:5108900298"
                    className="text-blue-500 hover:text-blue-700 no-underline"
                  >
                    (510)&nbsp;890&#8209;0298
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <EmailIcon className="text-blue-500" />
              </div>
              <div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted mb-1">
                  Email
                </div>
                <div className="font-body text-lg font-semibold text-blue-500">
                  <a
                    href="mailto:Training@calik9.com"
                    className="text-blue-500 hover:text-blue-700 no-underline"
                  >
                    Training@calik9.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <ClockIcon className="text-blue-500" />
              </div>
              <div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted mb-1">
                  Response Time
                </div>
                <div className="font-body text-lg font-semibold text-blue-500">
                  Within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + LOCATIONS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-gradient-to-br from-blue-700 to-blue-500">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-10 items-start">
            {/* Left: Form */}
            <div>
              <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 mb-3">
                Send A Message
              </p>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-2">
                WE&rsquo;D LOVE
                <br />
                TO HEAR FROM YOU
              </h2>
              <div className="w-12 h-[3px] bg-blue-400 mb-8" />
              <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl overflow-hidden p-6">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/3I6L1xOWC6xU3z91ibrd"
                  id="inline-3I6L1xOWC6xU3z91ibrd"
                  data-layout={"{'id':'INLINE'}"}
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="ZT: Website/contact us Form - New"
                  data-height="800"
                  data-layout-iframe-id="inline-3I6L1xOWC6xU3z91ibrd"
                  data-form-id="3I6L1xOWC6xU3z91ibrd"
                  title="ZT: Website/contact us Form - New"
                  loading="lazy"
                  className="w-full border-none rounded-sm block overflow-hidden"
                  style={{ height: "800px" }}
                />
              </div>
            </div>

            {/* Right: Locations + Hours */}
            <div>
              <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 mb-3">
                Our Locations
              </p>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-2">
                FIND US
              </h2>
              <div className="w-12 h-[3px] bg-blue-400 mb-8" />

              {/* Location cards */}
              <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-6 mb-8">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.city}
                    className="bg-white/[0.07] border border-white/[0.15] rounded-xl px-6 py-7 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="font-display text-[22px] text-white leading-none mb-1.5">
                      {loc.city}
                    </div>
                    <div className="font-ui text-xs font-bold tracking-[3px] uppercase text-white/40 mb-4">
                      {loc.brand}
                    </div>
                    {loc.phone && (
                      <div className="flex gap-2.5 items-start">
                        <PhoneSmallIcon className="text-blue-400 shrink-0 mt-0.5" />
                        <div className="font-body text-sm text-white/70 leading-relaxed">
                          <a
                            href={loc.phoneHref}
                            className="text-blue-400 hover:underline no-underline"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-6">
                {/* Business Hours */}
                <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-6">
                  <div className="font-ui text-sm font-bold tracking-[3px] uppercase text-blue-400 mb-3.5">
                    Business Hours
                  </div>
                  {BUSINESS_HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-4 font-body text-sm text-white/70 py-1.5 border-b border-white/[0.08] last:border-b-0"
                    >
                      <span className={h.closed ? "text-white/30 italic" : ""}>
                        {h.day}
                      </span>
                      <span className={h.closed ? "text-white/30 italic" : ""}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Training Hours */}
                <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-6">
                  <div className="font-ui text-sm font-bold tracking-[3px] uppercase text-blue-400 mb-3.5">
                    Training Hours
                  </div>
                  {TRAINING_HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-4 font-body text-sm text-white/70 py-1.5 border-b border-white/[0.08] last:border-b-0"
                    >
                      <span className={h.closed ? "text-white/30 italic" : ""}>
                        {h.day}
                      </span>
                      <span className={h.closed ? "text-white/30 italic" : ""}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Not Sure Where To Start?"
        heading="BOOK YOUR EVALUATION"
        description="Don't know which program fits your dog? Schedule an evaluation \u2014 we'll find the right fit for your dog."
        primaryCta={{ label: "Schedule Evaluation \u2192", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View All Programs", href: "/newclientservices" }}
        dark
      />

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
