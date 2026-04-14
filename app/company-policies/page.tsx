import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Policies",
  description:
    "Cali K9\u00ae Company Policies \u2014 cancellation, rescheduling, liability, and general business policies for all training programs.",
  openGraph: {
    title: "Company Policies | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Company Policies \u2014 cancellation, rescheduling, liability, and general business policies for all training programs.",
    url: "https://calik9.com/company-policies",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function CompanyPoliciesPage() {
  return (
    <div className="pt-[calc(var(--banner-h,0px)+68px)]">
      {/* ── Hero ── */}
      <section className="bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-3">
            Legal
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.93] text-white mb-4">
            COMPANY POLICIES
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
              These Company Policies govern the operational and business practices of Cali K9&reg; and apply to all clients, participants, and visitors engaging with our services. By booking or purchasing any Cali K9&reg; program, you agree to these policies in full.
            </p>
          </div>

          {/* Scheduling & Appointments */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              SCHEDULING &amp; APPOINTMENTS
            </h2>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Booking
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All appointments and program slots must be booked in advance. Walk-in services are not available. Scheduling is subject to trainer availability and program capacity.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Cancellations
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We require at least 48 hours notice for cancellation of any scheduled private session. Cancellations made with less than 48 hours notice will forfeit the session fee. Recurring no-shows may result in termination of your program without refund.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Rescheduling
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You may reschedule a session up to twice per program without penalty, provided you give at least 48 hours notice. Additional rescheduling requests are subject to a $25 rescheduling fee per session and trainer availability.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Trainer Cancellations
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If Cali K9&reg; must cancel a scheduled session due to unforeseen circumstances, we will notify you as soon as possible and offer a complimentary reschedule at no additional cost to you.
            </p>
          </div>

          {/* Client Conduct */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              CLIENT CONDUCT
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              We expect all clients to treat our staff, trainers, and facility with respect. Cali K9&reg; reserves the right to terminate services immediately, without refund, if any client:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Engages in abusive, threatening, or harassing behavior toward staff or other clients
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Physically or verbally mistreats any animal in our care or facility
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Provides false information about their dog&#39;s health or behavior history
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Refuses to follow trainer instructions that are necessary for safety
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Violates any applicable local, state, or federal law on our premises
              </li>
            </ul>
          </div>

          {/* Owner Participation */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              OWNER PARTICIPATION
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Training a dog is a partnership. Cali K9&reg; programs are designed to transform your dog&#39;s behavior &mdash; but lasting results require follow-through at home. For all programs (except Board &amp; Train), clients are expected to:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Attend all scheduled sessions on time and prepared
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Practice techniques between sessions as directed by your trainer
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Communicate openly about progress, setbacks, or concerns
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Complete any assigned homework or video reviews
              </li>
            </ul>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              For Board &amp; Train clients: a mandatory owner education session is included at pick-up. Failure to attend the pick-up session may impact your dog&#39;s long-term results. This session cannot be waived.
            </p>
          </div>

          {/* Photography & Media */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              PHOTOGRAPHY &amp; MEDIA
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; may photograph or video-record dogs and training sessions for educational, marketing, or social media purposes. By enrolling in any program, you grant Cali K9&reg; a non-exclusive license to use media featuring your dog. Your dog&#39;s name and your personal identifying information will not be published without your explicit consent.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If you prefer that your dog not be photographed, please notify us in writing before your program begins.
            </p>
          </div>

          {/* Liability */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              LIABILITY
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; takes every precaution to ensure the safety of dogs and people in our programs. However, dog training involves inherent risks. By engaging our services, you acknowledge that:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                You are solely responsible for any injury or damage caused by your dog to other animals, people, or property
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cali K9&reg; is not liable for injuries that occur as a result of your dog&#39;s known or undisclosed behavior issues
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Cali K9&reg; is not responsible for veterinary costs related to pre-existing conditions that manifest during training
              </li>
            </ul>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All clients are required to sign a liability waiver prior to the start of any in-person program.
            </p>
          </div>

          {/* Results */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              RESULTS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              While Cali K9&reg; has an outstanding track record with over 3,500 dogs trained, individual results vary based on the dog&#39;s history, temperament, health, and owner follow-through. We do not guarantee specific behavioral outcomes. What we do guarantee is that our team will give every dog their full effort, expertise, and care.
            </p>
          </div>

          {/* Changes to Policies */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              CHANGES TO POLICIES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; reserves the right to update these policies at any time. Clients will be notified of material changes. Continued use of our services after notice of a policy change constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Contact Block */}
          <div className="bg-off border-l-[3px] border-blue-500 rounded-lg p-7 mt-13">
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-1">
              <strong className="text-ink">Questions about our Company Policies?</strong>
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75]">
              Contact us at{" "}
              <Link href="/contact" className="text-blue-500 font-semibold no-underline hover:underline">
                our contact page
              </Link>
              . We are happy to walk you through any policy before you commit to a program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
