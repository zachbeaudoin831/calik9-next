import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Policy",
  description:
    "Cali K9\u00ae Health Policy \u2014 vaccination requirements and health standards for all dogs entering our training programs.",
  openGraph: {
    title: "Health Policy | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Health Policy \u2014 vaccination requirements and health standards for all dogs entering our training programs.",
    url: "https://calik9.com/health-policy",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function HealthPolicyPage() {
  return (
    <div className="pt-[calc(var(--banner-h,0px)+68px)]">
      {/* ── Hero ── */}
      <section className="bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-3">
            Legal
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.93] text-white mb-4">
            HEALTH POLICY
          </h1>
          <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-white/50">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[800px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Our Commitment */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              OUR COMMITMENT
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              The health and safety of every dog in our care is our top priority. Cali K9&reg; maintains strict health standards to protect all dogs in our programs &mdash; and the trainers who work with them. All clients are required to comply with the following requirements before any training services begin.
            </p>
            <div className="bg-[#FFF8E7] border-l-[3px] border-amber-400 rounded-lg py-5 px-7 mb-7">
              <p className="font-body text-[16px] text-[#6B4B00] leading-[1.75] mb-0">
                <strong>Important:</strong> Failure to provide required documentation before your scheduled start date may result in postponement of services without a refund of any scheduling fees.
              </p>
            </div>
          </div>

          {/* Required Vaccinations */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              REQUIRED VACCINATIONS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All dogs participating in any Cali K9&reg; program must be current on the following vaccinations, verified by a licensed veterinarian:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Rabies (required by law &mdash; must be current)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                DHPP / DA2PP (Distemper, Hepatitis, Parvovirus, Parainfluenza)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Bordetella (kennel cough) &mdash; required for Board &amp; Train and group programs
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Leptospirosis &mdash; strongly recommended for all dogs
              </li>
            </ul>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Proof of Vaccination
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You must provide a current vaccination certificate from a licensed veterinarian prior to the start of services. Digital records are accepted. Titer tests may be accepted in lieu of certain vaccines &mdash; contact us in advance if your dog has a documented medical reason for avoiding a specific vaccine.
            </p>
          </div>

          {/* Board & Train Health Requirements */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              BOARD &amp; TRAIN HEALTH REQUIREMENTS
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Dogs entering our Board &amp; Train program have additional health requirements to ensure the safety of all dogs in residence:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Up-to-date flea, tick, and heartworm prevention (documented or applied at drop-off)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Negative fecal test within 6 months of program start
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Free of visible signs of illness at drop-off (runny nose, vomiting, diarrhea, lethargy)
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Spayed or neutered dogs are accepted; intact dogs are evaluated on a case-by-case basis
              </li>
            </ul>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Health Screening at Drop-Off
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              All dogs undergo a brief health screening at drop-off. If a dog shows signs of illness or parasites at intake, we reserve the right to refuse boarding until the dog is cleared by a veterinarian. Any deposits paid will be held and applied to a rescheduled start date.
            </p>
          </div>

          {/* Illness During Training */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              ILLNESS DURING TRAINING
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If your dog becomes ill during a Board &amp; Train program, Cali K9&reg; will:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Notify you immediately upon noticing symptoms
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Seek veterinary care if the situation warrants it or if we cannot reach you within a reasonable time
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Document all care provided and share records with you
              </li>
            </ul>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Veterinary costs incurred due to illness during the program are the sole responsibility of the dog&#39;s owner. We strongly recommend that all clients carry pet health insurance.
            </p>
            <h3 className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-blue-500 mt-7 mb-2.5">
              Contagious Illness
            </h3>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              If a dog is diagnosed with a contagious illness during the program, they will be isolated and you will be contacted to arrange pick-up. No refund will be issued for the remaining unused portion of the program, but Cali K9&reg; will work with you to reschedule once your dog has fully recovered.
            </p>
          </div>

          {/* Aggression Disclosures */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              AGGRESSION DISCLOSURES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You must disclose any history of aggression toward people or other animals before your dog enters any program. Failure to disclose known aggression history is grounds for immediate removal from any program without refund and may result in liability for any injuries caused.
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              Cali K9&reg; specializes in working with reactive and aggressive dogs &mdash; honest disclosure helps us place your dog in the safest and most effective program for their needs.
            </p>
          </div>

          {/* Owner Responsibilities */}
          <div className="mb-13">
            <h2 className="font-display text-[32px] text-ink tracking-[0.04em] mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              OWNER RESPONSIBILITIES
            </h2>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-4">
              You confirm that, to the best of your knowledge, your dog:
            </p>
            <ul className="list-none mb-4">
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Is in good general health and fit for physical training
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Does not have any communicable disease or parasite infestation
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Has not been exposed to parvovirus, distemper, or other infectious diseases within 30 days
              </li>
              <li className="font-body text-[16px] text-gray-muted leading-[1.75] py-1.5 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-2 before:h-0.5 before:bg-blue-500">
                Has been cleared by a veterinarian for training activities if recovering from surgery or injury
              </li>
            </ul>
          </div>

          {/* Contact Block */}
          <div className="bg-off border-l-[3px] border-blue-500 rounded-lg p-7 mt-13">
            <p className="font-body text-[16px] text-gray-muted leading-[1.75] mb-1">
              <strong className="text-ink">Questions about our Health Policy?</strong>
            </p>
            <p className="font-body text-[16px] text-gray-muted leading-[1.75]">
              Contact us at{" "}
              <Link href="/contact" className="text-blue-500 font-semibold no-underline hover:underline">
                our contact page
              </Link>{" "}
              before your program starts. We want every dog to be set up for success from day one.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
