import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";
import FormEmbed from "@/components/FormEmbed";

export const metadata: Metadata = {
  title: "Zoom Group | Cali K9\u00ae",
  description:
    "Monthly Zoom coaching for existing Cali K9 clients. 4 live sessions per month with certified trainers for $97/month.",
  openGraph: {
    title: "Zoom Group | Cali K9\u00ae",
    description:
      "Monthly Zoom coaching for existing Cali K9 clients. 4 live sessions per month with certified trainers for $97/month.",
    url: "https://calik9.com/zoom-group-class",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Jason Derulo", image: "/images/celebs/jason-derulo.png" },
];

export default function ZoomGroupPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="cwARHdUU73yIpW7KMhp9"
            formName="Zoom Group"
            title="Join Zoom Group — $97/mo"
            height={830}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              <em
                style={{ WebkitTextFillColor: "var(--color-white, #fff)", fontStyle: "italic" }}
              >
                Cali K9
              </em>{" "}
              Zoom Group $97/mo
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Get expert guidance from anywhere. Live weekly Zoom group training
              sessions led by certified Cali K9 trainers &mdash; real-time
              feedback to keep your dog&rsquo;s training sharp.
            </p>
          </>
        }
      >
        {/* What's included */}
        <div className="mb-7">
          <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/45 mb-3">
            What is included every month:
          </div>
          <div className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85 mb-2">
            <span className="text-green-500 text-xl">&#10003;</span> 4 live
            Zoom coaching calls per month (weekly)
          </div>
          <div className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85 mb-2">
            <span className="text-green-500 text-xl">&#10003;</span> Access to
            Cali K9 app &amp; community
          </div>
        </div>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Disclaimer */}
        <div className="bg-white/[0.06] border border-white/10 rounded-lg px-6 py-5">
          <p className="font-body text-sm text-white/55 leading-relaxed">
            This membership is a recurring monthly subscription at $97/month. You
            can cancel anytime from your account. No cancellation fees. Sessions
            are held weekly on Zoom with a certified Cali K9 trainer.
          </p>
        </div>

        {/* Clients only note */}
        <p className="font-body text-[15px] italic text-white/50 mt-7 leading-relaxed">
          This program is available to existing Cali K9 clients only. If you
          haven&rsquo;t trained with us yet,{" "}
          <Link
            href="https://go.calik9.com/evaluation-with-jas"
            className="text-white/70 underline hover:text-white/90"
          >
            start with an evaluation
          </Link>
          .
        </p>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Stephen Curry testimonial */}
        <div className="flex items-start gap-5 max-[480px]:flex-col max-[480px]:items-center max-[480px]:text-center">
          <Image
            src="/images/celebs/steph-curry.png"
            alt="Stephen Curry"
            width={72}
            height={72}
            className="w-[72px] h-[72px] rounded-full object-cover object-top flex-shrink-0 border-2 border-white/20"
          />
          <div>
            <p className="font-body text-base italic text-white/75 leading-relaxed mb-2">
              &ldquo;Jas took care of my boys. He got them straight. They listen
              to me now. They got the best dog trainer right here.&rdquo;
            </p>
            <div className="font-ui text-base font-bold tracking-[1px] uppercase text-white/90">
              Stephen Curry
            </div>
            <div className="font-ui text-base text-white/45 tracking-[0.5px]">
              NBA Champion &middot; Golden State Warriors
            </div>
          </div>
        </div>

        {/* Celebrity photo grid (4 across) */}
        <div className="mt-9">
          <CelebMiniGrid celebs={MINI_CELEBS} />
        </div>
      </ServiceHero>

      {/* Celebrity Social Proof */}
      <CelebGrid />

      {/* Final CTA */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9\u00ae to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation \u2192", href: "https://go.calik9.com/evaluation-with-jas" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/newclientservices" }}
      />
    </main>
  );
}
