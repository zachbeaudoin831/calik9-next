import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Online Dog Training Program | Cali K9\u00ae",
  description:
    "Cali K9\u00ae Online Training subscription tiers. Train from anywhere with the 5-Pillar System and live group coaching. Plans starting at $97/month.",
  openGraph: {
    title: "Online Dog Training Program | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Online Training subscription tiers with live group coaching. Plans starting at $97/month.",
    url: "https://calik9.com/online-training",
    images: [
      "https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dog Training Program | Cali K9\u00ae",
    description:
      "Cali K9\u00ae Online Training subscription tiers. Starting at $97/month.",
    images: [
      "https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp",
    ],
  },
};

export default function OnlineTrainingPage() {
  return (
    <main>
      {/* ── Hero: Two-column layout ── */}
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="1nO3eSfLEZPyIAJuJlpW"
            formName="Online Training Cart"
            title="Select Training Program"
            height={896}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              <em className="italic" style={{ WebkitTextFillColor: "white" }}>
                Cali K9 Online Training
              </em>
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Train from anywhere with Certified Cali K9 Coaches through structured
              online sessions and live group coaching.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6 -mt-3">
              Education-based coaching that teaches you how to lead your dog,
              not just manage problems &mdash; with three subscription tiers
              built for any commitment level.
            </p>
          </>
        }
      >
        {/* Hero video */}
        <video
          className="w-full h-auto rounded-lg mb-8 block bg-black"
          poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5ad18a327bf43ebed69d4.png"
          controls
          playsInline
          preload="metadata"
        >
          <source
            src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5accfa327bf440fed6993.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── Foundation Program ── */}
        <PackageHeading as="h2">Foundation Program</PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Train your dog the right way &mdash; without wasting time guessing.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "4 Complete Cali K9 Courses", bold: true },
            "Weekly Group Coaching",
            "Structured 5-Pillar System",
          ]}
        />

        <PriceBlock price="$97" note="per month &middot; Cancel anytime" />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Inner Circle VIP ── */}
        <PackageHeading as="h2">Inner Circle VIP</PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          The closest thing to training with me &mdash; without being there in
          person.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "Everything in Foundation", bold: true },
            "Weekly Live Training with Jas Leverette",
            "Advanced Coaching",
            "Priority Access",
          ]}
        />

        <PriceBlock price="$297" note="per month &middot; Cancel anytime" />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Executive Annual VIP ── */}
        <PackageHeading as="h2">Executive Annual VIP</PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Commit once, transform your dog for life.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "Everything in Inner Circle VIP", bold: true },
            "Training Kit Included",
            "Private Cali K9 Community",
            "Full Course Access",
          ]}
        />

        <PriceBlock
          offerLabel="BEST VALUE"
          price="$1,997"
          note="per year &middot; Save vs monthly"
        />
      </ServiceHero>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Start Training Today"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of dog owners who transformed their dog's behavior with the Cali K9 5-Pillar System. Train from anywhere, at your own pace, with expert coaching."
        primaryCta={{ label: "Start From $97/mo \u2192", href: "#main-content" }}
        secondaryCta={{ label: "Book Evaluation First \u2192", href: "/evaluation" }}
      />
    </main>
  );
}
