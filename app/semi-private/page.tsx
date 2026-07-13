import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";
import FormEmbed from "@/components/FormEmbed";

export const metadata: Metadata = {
  title: "Semi-Private Dog Training | Cali K9\u00ae",
  description:
    "Semi-private dog training sessions with 2-3 dogs per session. More personal than group, more affordable than private. Starting at $597.",
  openGraph: {
    title: "Semi-Private Dog Training | Cali K9\u00ae",
    description:
      "Semi-private dog training sessions with 2-3 dogs per session. More personal than group, more affordable than private. Starting at $597.",
    url: "https://calik9.com/semi-private",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
  { name: "Kendrick Lamar", image: "/images/celebs/kendrick-lamar.jpeg" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Jason Derulo", image: "/images/celebs/jason-derulo.png" },
];

export default function SemiPrivatePage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="7x1YEgvownKWmvaE2XKw"
            formName="Semi Private Training"
            title="Book Semi-Private Training"
            height={830}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              In-Person Semi Private Dog Training
            </PackageHeading>
          </>
        }
      >
        {/* Ideal-for checklist */}
        <div className="mb-7">
          <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/45 mb-3">
            This package is ideal for dogs that:
          </div>
          {[
            "Need more focused attention than group class",
            "Benefit from controlled socialization with 1-2 other dogs",
            "Are ready for real-world distractions in a small setting",
            "Have owners who want hands-on coaching at a great value",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85 mb-2"
            >
              <span className="text-green-500 text-xl">&#10003;</span>
              {item}
            </div>
          ))}
        </div>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Package Options ── */}
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-4">
          What is included:
        </div>

        <div className="grid grid-cols-2 gap-6 mb-9 max-[480px]:grid-cols-1">
          {/* 5-Session option */}
          <div className="bg-white/5 border border-white/[0.12] rounded-[10px] p-6">
            <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/45 mb-2">
              5 Sessions
            </div>
            <div className="font-display text-[clamp(42px,5vw,56px)] text-white leading-none mb-2">
              $597
            </div>
            <ul className="list-none p-0 m-0 grid grid-cols-1">
              {[
                "5 semi-private training sessions",
                "2-3 dogs per session (max)",
                "Certified Cali K9 trainer",
                "Custom training focus per session",
                "Scheduling flexibility",
              ].map((item, i) => (
                <li
                  key={i}
                  className="font-body text-[15px] text-white/70 leading-normal py-1.5 pl-6 relative border-b border-white/[0.06] last:border-b-0"
                >
                  <span className="absolute left-0 text-green-500 font-bold text-base">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 10-Session option */}
          <div className="bg-white/5 border border-white/[0.12] rounded-[10px] p-6">
            <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-green-500 mb-2">
              Best Value
            </div>
            <div className="font-display text-[clamp(42px,5vw,56px)] text-white leading-none mb-2">
              $997
            </div>
            <ul className="list-none p-0 m-0 grid grid-cols-1">
              {[
                "10 semi-private training sessions",
                "Everything in the 5-Session Package",
                "Priority scheduling",
                "Email support between sessions",
              ].map((item, i) => (
                <li
                  key={i}
                  className="font-body text-[15px] text-white/70 leading-normal py-1.5 pl-6 relative border-b border-white/[0.06] last:border-b-0"
                >
                  <span className="absolute left-0 text-green-500 font-bold text-base">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Steph Curry Testimonial ── */}
        <div className="flex gap-6 items-start mb-9 max-md:flex-col max-md:gap-4">
          <Image
            src="/images/celebs/steph-curry.png"
            alt="Stephen Curry"
            width={72}
            height={72}
            className="shrink-0 w-[72px] h-[72px] rounded-full object-cover object-top"
          />
          <div>
            <p className="font-body text-[15px] italic text-white/70 leading-relaxed mb-2">
              &ldquo;Jas took care of my boys. He got them straight. They listen
              to me now. They got the best dog trainer right here.&rdquo;
            </p>
            <div className="font-ui text-base font-bold tracking-[1px] uppercase text-white/50">
              Stephen Curry &mdash; NBA Champion, Golden State Warriors
            </div>
          </div>
        </div>

        {/* ── Celebrity Mini Grid ── */}
        <div className="mb-9">
          <CelebMiniGrid celebs={MINI_CELEBS} />
        </div>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Description ── */}
        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Semi-private sessions are held in-person with 2-3 dogs per session,
          giving your dog a more focused training experience than group class at
          a fraction of the cost of private training. Each session is led by a
          Certified Cali K9 Trainer who tailors the work to your dog&rsquo;s
          specific needs while building real-world skills alongside other dogs.
        </p>

        {/* ── Disclaimer ── */}
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/45 mb-3">
          Please Note
        </div>
        <ul className="list-none p-0 m-0 mb-4">
          {[
            "All dogs must be current on core vaccinations prior to their first session.",
            "Handler must attend all sessions \u2014 your presence and participation are essential.",
            "Not suitable for dogs with active dog-to-dog aggression. Contact us if unsure.",
            "Sessions are held at our Bay Area, Los Angeles, Miami, and New York facilities.",
          ].map((item) => (
            <li
              key={item}
              className="font-body text-sm text-white/55 leading-relaxed py-1 pl-5 relative"
            >
              <span className="absolute left-0 text-white/30">
                &#8226;
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="font-body text-sm text-white/70 mt-2">
          Not sure if semi-private is right for your dog?{" "}
          <Link
            href="/evaluation-with-behavior-specialist"
            className="text-blue-400 font-semibold hover:underline"
          >
            Book an Evaluation
          </Link>{" "}
          and we&rsquo;ll point you in the right direction.
        </p>
      </ServiceHero>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9\u00ae to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/newclientservices" }}
      />
    </main>
  );
}
