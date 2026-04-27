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
        {/* ── Cali K9 Training Membership ($197/mo) ── */}
        <PackageHeading as="h2">Cali K9 Training Membership</PackageHeading>

        <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-3">
          In-Person + Zoom &middot; $197/mo
        </p>

        <p className="font-body text-lg text-white/85 leading-relaxed mb-3">
          Everything your dog needs. Structure, coaching, and real-world results.
        </p>
        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          This isn&rsquo;t just a class. This is a full system that combines
          in-person training + live coaching so you never feel stuck, confused,
          or inconsistent again.
        </p>

        {/* Weekly Group Classes */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Weekly Group Classes (In-Person)
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Structured training sessions using the Cali K9 system",
              "Real-world socialization around dogs, people, and distractions",
              "Hands-on corrections from trainers in real time",
              "Build obedience, control, and confidence step-by-step",
              "Safe exposure for reactive or high-energy dogs",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Zoom Coaching */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Weekly Zoom Coaching (Included)
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Live coaching from anywhere during the week",
              "Ask questions and troubleshoot your exact issues",
              "Get step-by-step guidance between classes",
              "Stay consistent even when you can’t make it in person",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Complete Training System */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-1">
            Complete Training System
          </h3>
          <p className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-400 mb-3">
            This is the real value
          </p>
          <ul className="list-none p-0 m-0">
            {[
              "You’re not guessing what to do — you’re following a proven plan",
              "In-person = execution and reps",
              "Zoom = strategy and correction",
              "This combination accelerates results faster than either alone",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Consistency = Results */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Consistency = Results
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "No more starting over every few weeks",
              "Built-in accountability keeps you locked in",
              "Your dog improves because you stay consistent",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Confidence + Control */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Confidence for You, Control for Your Dog
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Learn how to think like a trainer",
              "Stop relying on treats alone",
              "Build real leadership and communication",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Community + Environment */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Community + Environment
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Train around other dog owners who are working",
              "Positive pressure = faster growth",
              "Your dog learns to behave in real-life situations",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Line */}
        <blockquote className="border-l-2 border-blue-400 pl-5 my-8">
          <p className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-400 mb-2">
            Bottom Line
          </p>
          <p className="font-body text-base italic text-white/75 leading-relaxed mb-1">
            If you just train once in a while&hellip; nothing changes.
          </p>
          <p className="font-body text-base italic font-semibold text-white leading-relaxed">
            If you plug into a system like this&hellip; everything changes.
          </p>
        </blockquote>

        {/* Best For */}
        <div className="mb-7">
          <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white leading-[1.15] mb-3">
            Best For
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Owners who want structure + guidance + real-world results",
              "Dogs with obedience issues, leash pulling, reactivity, or lack of control",
              "Anyone serious about building a well-trained, reliable dog",
            ].map((b) => (
              <li key={b} className="font-body text-[15px] text-white/75 leading-normal py-1.5 pl-6 relative">
                <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

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
