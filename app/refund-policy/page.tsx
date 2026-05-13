import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Cali K9\u00ae Refund Policy \u2014 understand our refund terms for dog training programs and services.",
  openGraph: {
    title: "Refund Policy | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Refund Policy \u2014 understand our refund terms for dog training programs and services.",
    url: "https://calik9.com/refund-policy",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-[68px]">
      {/* ── Hero ── */}
      <section className="bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-3">
            Legal
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.93] text-white mb-4">
            REFUND POLICY
          </h1>
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-white/50">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[800px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Overview */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              OVERVIEW
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              At Cali K9&reg;, we are committed to delivering exceptional results for every dog and family we work with. We stand behind our training programs and instructors. Please read this policy carefully before enrolling in any program or purchasing any service.
            </p>
          </div>

          {/* Deposits */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              DEPOSITS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All deposits paid to secure a training slot are non-refundable. Deposits are used to reserve your place in our program and compensate our team for pre-training consultation and scheduling work.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Deposit Transfer
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If you need to reschedule, deposits may be transferred to a future start date one time, provided you notify us at least 7 days before your scheduled start date. Transfers are subject to availability.
            </p>
          </div>

          {/* Program Payments */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              PROGRAM PAYMENTS
            </h2>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Before Training Begins
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If you cancel before your program start date and have paid beyond the deposit, the following applies:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cancellation 14+ days before start: full refund of program fees (excluding deposit)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cancellation 7&ndash;13 days before start: 50% refund of program fees (excluding deposit)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cancellation less than 7 days before start: no refund of program fees
              </li>
            </ul>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              After Training Begins
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Once a program has begun &mdash; including Board &amp; Train intake, the first private session, or access to online course materials &mdash; no refunds will be issued. All sales are final once services have commenced.
            </p>
          </div>

          {/* Board & Train Programs */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              BOARD &amp; TRAIN PROGRAMS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Board &amp; Train programs require full payment or a payment plan agreement prior to drop-off. After your dog is dropped off and training begins, no refunds will be issued for any reason, including early pick-up.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If your dog is asked to leave the program early due to health concerns or safety issues beyond your control, Cali K9&reg; will work with you on a prorated credit toward future services at our discretion.
            </p>
          </div>

          {/* Online Training Programs */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              ONLINE TRAINING PROGRAMS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Digital products and online course access are non-refundable once access has been granted. If you experience a technical issue preventing access, contact us within 72 hours and we will resolve the issue promptly.
            </p>
          </div>

          {/* Merchandise */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              MERCHANDISE
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Physical products purchased through Cali K9&reg; may be returned within 14 days of delivery if unused and in original packaging. Return shipping costs are the responsibility of the buyer. Custom or personalized items are non-refundable.
            </p>
          </div>

          {/* Medical Exceptions */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              MEDICAL EXCEPTIONS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If your dog experiences a documented medical emergency that prevents participation in a program, please contact us immediately. We will review medical documentation on a case-by-case basis and may offer a credit toward a future program. We are not required to issue a cash refund under medical exceptions but will make every reasonable effort to work with you.
            </p>
          </div>

          {/* Contact Block */}
          <div className="bg-off border-l-[3px] border-blue-500 rounded-lg p-7 mt-13">
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-1">
              <strong className="text-ink">Questions about our Refund Policy?</strong>
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75]">
              Contact us at{" "}
              <Link href="/contact-us" className="text-blue-500 font-semibold no-underline hover:underline">
                our contact page
              </Link>{" "}
              or reach out to our team directly. We are happy to clarify any aspect of this policy before you enroll.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
