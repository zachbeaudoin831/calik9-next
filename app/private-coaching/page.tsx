import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Private Coaching | Cali K9®",
  description:
    "Private Coaching for returning Cali K9® clients — 4 or 8 private session top-ups. Stay sharp, keep progressing, and take your dog to the next level.",
  openGraph: {
    title: "Private Coaching | Cali K9®",
    description:
      "Private Coaching for returning Cali K9® clients — 4 or 8 private session top-ups starting at $1,097.",
    url: "https://calik9.com/private-coaching",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function PrivateCoachingPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <>
            <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/85 mb-3">
              Choose Your Package
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5 max-[480px]:grid-cols-1">
              <div className="bg-white/[0.06] border border-white/[0.15] rounded-md p-4">
                <div className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  4 Sessions
                </div>
                <div className="font-display text-[32px] text-white leading-none mb-1">$1,097</div>
                <p className="font-body text-[13px] text-white/60 leading-snug">
                  Stay sharp and keep progressing.
                </p>
              </div>
              <div className="bg-white/[0.06] border border-white/[0.15] rounded-md p-4">
                <div className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-green-500 mb-1">
                  Best Value
                </div>
                <div className="font-display text-[32px] text-white leading-none mb-1">$1,997</div>
                <p className="font-body text-[13px] text-white/60 leading-snug">
                  <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 block mb-0.5">
                    8 Sessions
                  </span>
                  Take your dog to the next level.
                </p>
              </div>
            </div>
            <FormEmbed
              formId="xYXyh92NznqxZjAZbL6e"
              formName="In Person Private Coaching Returning"
              title="Book Private Coaching"
              height={857}
            />
          </>
        }
        intro={
          <>
            <StarsRow />

            <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/20 text-white/80 font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-sm mb-3">
              Returning Clients
            </div>

            <PackageHeading as="h1">Private Coaching</PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Already completed Foundation, Transformation, or Executive? Top up
              your private sessions to stay sharp, keep progressing, or take your
              dog to the next level.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6 -mt-3">
              Each package picks up where your previous program left off &mdash;
              your trainer already knows your dog.
            </p>
          </>
        }
      >
        {/* ── 4 Sessions ── */}
        <PackageHeading as="h2">4 Sessions</PackageHeading>

        <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-3">
          Top-Up Package &middot; $1,097
        </p>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Stay sharp and keep progressing. Four private sessions to maintain
          your training, address new challenges, or sharpen specific
          behaviors.
        </p>

        <PriceBlock
          price="$1,097"
          note="one-time · Payment plans available"
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── 8 Sessions ── */}
        <div className="inline-flex items-center gap-2 bg-green-500/[0.18] border border-green-500/40 text-green-500 font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-sm mb-3">
          Best Value
        </div>

        <PackageHeading as="h2">8 Sessions</PackageHeading>

        <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-3">
          Extended Package &middot; $1,997
        </p>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Take your dog to the next level. Eight private sessions for deeper
          behavior work, advanced obedience, or off-leash refinement.
        </p>

        <PriceBlock
          price="$1,997"
          note="one-time · Payment plans available"
        />

        <p className="font-body text-[15px] italic text-white/50 mt-7 leading-relaxed">
          Private Coaching is for returning Cali K9 clients. New?{" "}
          <Link
            href="/in-person"
            className="text-white/70 underline hover:text-white/90"
          >
            Start with our Foundation, Transformation, or Executive program
          </Link>
          .
        </p>
      </ServiceHero>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Keep Building"
        heading="STAY SHARP, KEEP PROGRESSING"
        description="Private Coaching is the easiest way for Cali K9 graduates to maintain their training, troubleshoot new challenges, and keep advancing toward off-leash reliability."
        primaryCta={{ label: "View Programs →", href: "/services" }}
        secondaryCta={{ label: "Book Evaluation →", href: "/evaluation" }}
      />
    </main>
  );
}
