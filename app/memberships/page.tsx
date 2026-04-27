import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Monthly Memberships | Cali K9®",
  description:
    "Cali K9® monthly memberships for existing clients — In-Person Group Classes ($197/mo) and live Zoom Coaching ($97/mo). Pick the cadence that fits your week.",
  openGraph: {
    title: "Monthly Memberships | Cali K9®",
    description:
      "In-Person Group Classes ($197/mo) and Zoom Coaching ($97/mo) — pick the cadence that fits your week.",
    url: "https://calik9.com/memberships",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function MembershipsPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="cwARHdUU73yIpW7KMhp9"
            formName="Memberships Cart"
            title="Select Membership"
            height={896}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              <em className="italic" style={{ WebkitTextFillColor: "white" }}>
                Cali K9
              </em>{" "}
              Monthly Memberships
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Stay consistent after your training program. Pick the cadence that
              fits your week &mdash; in-person Group Classes for structure and
              socialization, or live Zoom Coaching for guidance from anywhere.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6 -mt-3">
              Both memberships are recurring monthly subscriptions and you can
              cancel anytime.
            </p>
          </>
        }
      >
        {/* ── Group Classes ── */}
        <PackageHeading as="h2">Group Classes</PackageHeading>

        <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-3">
          In-Person &middot; $197/mo
        </p>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Stay consistent and structured. Four in-person group training sessions
          every month at a Cali K9 facility, with a certified trainer and a
          structured monthly curriculum.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "4 in-person group sessions per month", bold: true },
            "Certified Cali K9 trainer every session",
            "Structured monthly curriculum",
            "Community app access & training resources",
            "Max 8 dogs per class",
          ]}
        />

        <PriceBlock price="$197" note="per month · Cancel anytime" />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Zoom Coaching ── */}
        <PackageHeading as="h2">Zoom Coaching</PackageHeading>

        <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-3">
          Virtual &middot; $97/mo
        </p>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Get expert guidance from anywhere. Four live weekly Zoom coaching
          sessions per month with a certified Cali K9 trainer &mdash; real-time
          feedback to keep your dog&rsquo;s training sharp.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "4 live weekly Zoom calls per month", bold: true },
            "Certified Cali K9 trainer",
            "Real-time feedback and Q&A",
            "Cali K9 app & community access",
            "Cancel anytime",
          ]}
        />

        <PriceBlock price="$97" note="per month · Cancel anytime" />

        <p className="font-body text-[15px] italic text-white/50 mt-7 leading-relaxed">
          Memberships are available to existing Cali K9 clients. New?{" "}
          <Link
            href="/evaluation"
            className="text-white/70 underline hover:text-white/90"
          >
            start with an evaluation
          </Link>
          .
        </p>
      </ServiceHero>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Stay Consistent"
        heading="KEEP YOUR DOG'S TRAINING SHARP"
        description="Memberships are the easiest way for Cali K9 graduates to maintain progress, troubleshoot new challenges, and stay connected to the community."
        primaryCta={{ label: "View Programs →", href: "/services" }}
        secondaryCta={{ label: "Book Evaluation →", href: "/evaluation" }}
      />
    </main>
  );
}
