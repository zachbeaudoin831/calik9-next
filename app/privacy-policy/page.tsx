import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cali K9\u00ae Privacy Policy \u2014 how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Privacy Policy \u2014 how we collect, use, and protect your personal information.",
    url: "https://calik9.com/privacy-policy",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[calc(var(--banner-h,0px)+68px)]">
      {/* ── Hero ── */}
      <section className="bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-3">
            Legal
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.93] text-white mb-4">
            PRIVACY POLICY
          </h1>
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-white/50">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[800px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Introduction */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              INTRODUCTION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. Please read this policy carefully.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              By using our website or services, you consent to the practices described in this policy. If you do not agree, please discontinue use of our website and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              INFORMATION WE COLLECT
            </h2>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Information You Provide
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We collect information you voluntarily provide when you:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Fill out a contact or evaluation request form
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Enroll in a training program or make a purchase
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Subscribe to our email list or newsletter
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Communicate with us by phone, email, or chat
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Create an account on our platform
              </li>
            </ul>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              This may include your name, email address, phone number, mailing address, payment information, and information about your dog (breed, age, behavior history).
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Information Collected Automatically
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              When you visit our website, we may automatically collect certain technical information including:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                IP address and general location data
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Browser type and device information
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Pages visited, time spent on pages, and referring URLs
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cookies and similar tracking technologies
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Provide, manage, and improve our training services
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Process payments and send booking confirmations
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Communicate with you about your program, schedule, and progress
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Send marketing communications (with your consent, where required)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Respond to inquiries and provide customer support
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Comply with legal obligations
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Analyze usage trends to improve our website and services
              </li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              SHARING YOUR INFORMATION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Service Providers
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Third-party vendors who assist us in operating our website and delivering services &mdash; such as payment processors, email service providers, scheduling tools, and analytics providers. These parties are contractually required to protect your information and may only use it as directed by us.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Legal Requirements
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect the rights, property, or safety of Cali K9&reg;, our clients, or the public.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Business Transfers
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of that transaction. You will be notified via email or a prominent notice on our website of any such change.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              COOKIES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files placed on your device. You can instruct your browser to refuse all cookies or to notify you when a cookie is being set. However, some features of our website may not function properly without cookies.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We use cookies for purposes including session management, remembering your preferences, and understanding how visitors use our site (analytics).
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              DATA RETENTION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </div>

          {/* Your Rights & Choices */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              YOUR RIGHTS &amp; CHOICES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                <strong>Access:</strong> Request a copy of the personal data we hold about you
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                <strong>Correction:</strong> Request correction of inaccurate or incomplete data
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                <strong>Deletion:</strong> Request deletion of your personal data, subject to legal obligations
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time using the link in any email we send
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                <strong>Data Portability:</strong> Request a machine-readable copy of your data where applicable
              </li>
            </ul>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              California residents may have additional rights under the California Consumer Privacy Act (CCPA). To exercise any of these rights, contact us using the information below.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              CHILDREN&#39;S PRIVACY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately and we will delete it.
            </p>
          </div>

          {/* Security */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              SECURITY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We implement industry-standard technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              CHANGES TO THIS POLICY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy regularly.
            </p>
          </div>

          {/* Contact Block */}
          <div className="bg-off border-l-[3px] border-blue-500 rounded-lg p-7 mt-13">
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-1">
              <strong className="text-ink">Questions about our Privacy Policy?</strong>
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75]">
              To exercise your rights or ask about how we handle your data, contact us at{" "}
              <Link href="/contact" className="text-blue-500 font-semibold no-underline hover:underline">
                our contact page
              </Link>
              . We take data privacy seriously and will respond promptly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
