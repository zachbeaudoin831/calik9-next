import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cali K9\u00ae Terms of Service \u2014 the agreement governing your use of our website and training services.",
  openGraph: {
    title: "Terms of Service | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Terms of Service \u2014 the agreement governing your use of our website and training services.",
    url: "https://calik9.com/terms-of-service",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-[68px]">
      {/* ── Hero ── */}
      <section className="bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-3">
            Legal
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.93] text-white mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-white/50">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[800px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Agreement to Terms */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              AGREEMENT TO TERMS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Cali K9&reg; website and all related training services, programs, and products offered by Cali K9&reg; (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing our website or purchasing any service, you agree to be bound by these Terms. If you do not agree, do not use our services.
            </p>
          </div>

          {/* Services */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              SERVICES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; offers professional dog training services including but not limited to Board &amp; Train programs, private training sessions, group classes, online training programs, and trainer mentorship. Full descriptions of current services and pricing are available on our Services page.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Service Changes
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We reserve the right to modify, suspend, or discontinue any service at any time. We will provide reasonable notice where possible. We are not liable to you or any third party for any modification, suspension, or discontinuation of services.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Program Enrollment
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Enrollment in any program is confirmed upon receipt of full payment or the required deposit. Enrollment does not begin until payment is processed and confirmed in writing by Cali K9&reg;.
            </p>
          </div>

          {/* Payments */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              PAYMENTS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All fees are due as specified at the time of enrollment. Prices are quoted in U.S. dollars. We accept major credit cards and other payment methods as displayed at checkout. Payment plans, where available, must be agreed upon in writing prior to program start.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Late Payments
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Failure to make scheduled payments may result in suspension or termination of services. Any outstanding balance must be paid in full before services resume.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Taxes
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You are responsible for any applicable taxes associated with your purchase. Tax will be collected where required by law.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              INTELLECTUAL PROPERTY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All content on the Cali K9&reg; website &mdash; including text, images, video, training methodologies, course materials, and the Cali K9&reg; name and logo &mdash; is the exclusive intellectual property of Cali K9&reg; and is protected by applicable copyright and trademark laws.
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                You may not reproduce, distribute, modify, or create derivative works from any Cali K9&reg; content without express written permission
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Online course materials are licensed to you personally and may not be shared, resold, or redistributed
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                The &ldquo;Cali K9&reg;&rdquo; name and logo are registered trademarks &mdash; unauthorized use is prohibited
              </li>
            </ul>
          </div>

          {/* User Conduct */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              USER CONDUCT
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              When interacting with our website, staff, or services, you agree not to:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Provide false, misleading, or fraudulent information
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Use our website or services for any unlawful purpose
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Attempt to gain unauthorized access to any part of our systems or accounts
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Harass, threaten, or harm our staff, trainers, or other clients
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Post defamatory, offensive, or fraudulent reviews or content about Cali K9&reg;
              </li>
            </ul>
          </div>

          {/* Disclaimer of Warranties */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              DISCLAIMER OF WARRANTIES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; While we deliver industry-leading training with a proven track record, we make no warranties, express or implied, regarding specific behavioral outcomes for any individual dog.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We do not warrant that our website will be available without interruption, that errors will be corrected, or that the website is free of viruses or other harmful components.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              LIMITATION OF LIABILITY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              To the maximum extent permitted by applicable law, Cali K9&reg; shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability to you shall not exceed the amount you paid for the specific service giving rise to the claim in the 30 days preceding the incident.
            </p>
          </div>

          {/* Indemnification */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              INDEMNIFICATION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You agree to indemnify and hold harmless Cali K9&reg;, its founders, trainers, employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: your use of our services, your violation of these Terms, your dog&#39;s actions or behavior, or your violation of any third-party rights.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              GOVERNING LAW
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Alameda County, California.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              CHANGES TO TERMS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We reserve the right to update these Terms at any time. We will post the updated Terms on this page with a revised &ldquo;Last Updated&rdquo; date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Contact Block */}
          <div className="bg-off border-l-[3px] border-blue-500 rounded-lg p-7 mt-13">
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-1">
              <strong className="text-ink">Questions about our Terms of Service?</strong>
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75]">
              Contact us at{" "}
              <Link href="/contact-us" className="text-blue-500 font-semibold no-underline hover:underline">
                our contact page
              </Link>
              . We are happy to clarify anything before you engage our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
