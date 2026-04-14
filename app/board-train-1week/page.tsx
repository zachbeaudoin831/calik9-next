import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "1-Week Board & Train | Cali K9\u00ae",
  description:
    "Intensive 1-week board and train dog training program at the Cali K9\u00ae Los Angeles facility. 3 daily sessions for 7 days. $1,197.",
  openGraph: {
    title: "1-Week Board & Train | Cali K9\u00ae",
    description:
      "Intensive 1-week board and train dog training program at the Cali K9\u00ae Los Angeles facility. 3 daily sessions for 7 days. $1,197.",
    url: "https://calik9.com/board-train-1week",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Steph Curry", image: "/images/celebs/steph-curry.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
];

const SCHEDULE = [
  {
    icon: "\u2600\uFE0F",
    time: "Morning \u2014 7:00\u20139:00 AM",
    title: "Foundation Work",
    desc: "Commands, communication, and leash skills. Building the core language between your dog and their trainer.",
  },
  {
    icon: "\uD83C\uDF1E",
    time: "Afternoon \u2014 1:00\u20133:00 PM",
    title: "Behavior Modification",
    desc: "Triggers, reactivity, and impulse control. Targeting the specific behaviors that brought your dog here.",
  },
  {
    icon: "\uD83C\uDF0E",
    time: "Evening \u2014 5:00\u20137:00 PM",
    title: "Distraction Training",
    desc: "Real-world proofing in varied environments. Skills only stick when they hold under pressure.",
  },
  {
    icon: "\uD83D\uDCF7",
    time: "Every Evening",
    title: "Daily Updates",
    desc: "Photo and video updates sent directly to you so you can follow your dog's progress.",
  },
];

export default function BoardTrain1WeekPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="GtiGDcoxe0fG5ufwj7Km"
            formName="Evaluation Form"
            title="Book Your Evaluation to Get Started"
            height={896}
          />
        }
      >
        <StarsRow />

        <PackageHeading as="h1">
          1-Week Board &amp; Train &mdash; Los Angeles
        </PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          The most focused week of training your dog will ever experience. Your
          dog lives at our LA facility and trains with a certified Cali K9
          trainer 3 times a day, every day.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-[480px]:gap-2">
          {[
            { num: "21", label: "Sessions" },
            { num: "7", label: "Days" },
            { num: "3x", label: "Daily" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.06] border border-white/10 rounded-[10px] py-5 px-4 text-center max-[480px]:py-3.5 max-[480px]:px-2.5"
            >
              <div className="font-display text-[clamp(28px,4vw,44px)] text-white leading-none tracking-[1px] max-[480px]:text-[28px]">
                {stat.num}
              </div>
              <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/40 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Daily Schedule */}
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-4">
          Daily Training Schedule
        </div>
        <div className="mb-8">
          {SCHEDULE.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 py-3 border-b border-white/[0.06] last:border-b-0"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base bg-[rgba(106,159,255,0.12)] border border-[rgba(106,159,255,0.2)]">
                {item.icon}
              </div>
              <div>
                <div className="font-ui text-base font-bold tracking-[2px] uppercase text-blue-400 mb-0.5">
                  {item.time}
                </div>
                <div className="font-ui text-base font-bold text-white/90 mb-0.5">
                  {item.title}
                </div>
                <div className="font-body text-[13px] text-white/50 leading-normal">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* What's Included */}
        <PackageList
          title="Everything Included in 1 Week"
          items={[
            { text: "Full Residential Training \u2014 7 days at the LA facility", bold: true },
            { text: "3 Structured Sessions Per Day \u2014 21 total sessions", bold: true },
            { text: "Certified Cali K9 Trainer \u2014 dedicated to your dog", bold: true },
            { text: "Daily Photo & Video Updates", bold: true },
            { text: "Behavior Progress Journal", bold: true },
            { text: "Graduation Handoff Session with you", bold: true },
            { text: "2-Week Email Follow-Up Support", bold: true },
            { text: "Training Resources & Home Protocol Guide", bold: true },
          ]}
        />

        <PriceBlock price="$1,197" note="one-time \u00b7 Los Angeles facility only" />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Requirements */}
        <PackageList
          title="Requirements Before Enrollment"
          items={[
            { text: "Behavior evaluation required before being accepted into the program", bold: true },
            { text: "Up-to-date vaccinations \u2014 Bordetella (kennel cough) required", bold: true },
            { text: "Must be non-reactive to other dogs at the facility", bold: true },
            { text: "Handler must attend graduation day for the handoff session", bold: true },
          ]}
          twoColumn={false}
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Upsell */}
        <div className="mb-7">
          <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/45 mb-3">
            Need Longer Than a Week?
          </div>
          <div className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85 mb-2">
            <span className="text-green-500 text-xl">&#10003;</span>
            <Link
              href="/board-and-train"
              className="text-white/85 underline hover:text-white"
            >
              2-Week Board &amp; Train (LA)
            </Link>
          </div>
          <div className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85 mb-2">
            <span className="text-green-500 text-xl">&#10003;</span>
            <Link
              href="/board-and-train"
              className="text-white/85 underline hover:text-white"
            >
              4-Week Board &amp; Train (Miami)
            </Link>
          </div>
        </div>

        {/* Celebrity mini grid */}
        <div className="mt-9">
          <CelebMiniGrid celebs={MINI_CELEBS} />
        </div>
      </ServiceHero>

      {/* Celebrity Social Proof */}
      <CelebGrid />

      {/* Final CTA */}
      <CtaBlock
        eyebrow="Start Training Today"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="One focused week at the Cali K9 LA facility. 3 sessions a day, 7 days straight. Real results you can see."
        primaryCta={{ label: "Get Started \u2014 $1,197 \u2192", href: "#main-content" }}
        secondaryCta={{ label: "Book Evaluation First \u2192", href: "/evaluation" }}
      />
    </main>
  );
}
