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
  title: "Board & Train Program | Cali K9®",
  description:
    "Residential board and train dog training. Four-week Board & Train and seven-week Elite Board & Train programs with certified Cali K9 trainers.",
  openGraph: {
    title: "Board & Train Program | Cali K9®",
    description:
      "Residential board and train dog training. Four-week Board & Train and seven-week Elite Board & Train programs with certified Cali K9 trainers.",
    url: "https://calik9.com/board-and-train",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Steph Curry", image: "/images/celebs/steph-curry.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
];

export default function BoardAndTrainPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="y6VSKPK4ruaCbRo0hZnM"
            formName="Board and Train"
            title="Book Board & Train"
            height={804}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">Board &amp; Train</PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Our most transformational program. 3 structured training sessions
              per day, 7 days a week.
            </p>

            <div className="hidden md:block space-y-4 mb-6">
              <p className="font-body text-base text-white/70 leading-relaxed">
                Drop your dog off with us and pick up a transformed animal. Our Board &amp; Train program immerses your dog in Jas Leverette&rsquo;s proven 5-Pillar Method &mdash; full-time, in our facility, with certified Cali K9 trainers guiding every session.
              </p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                No partial progress. No homework you have to figure out alone. While your dog lives and trains with us, we handle the heavy lifting &mdash; breaking through aggression, reactivity, anxiety, and deep-rooted behaviors that need consistent, expert hands to fix.
              </p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                You get your dog back obedient, confident, and ready for real life.
              </p>
            </div>
          </>
        }
      >
        {/* Celebrity mini grid */}
        <div className="mb-8">
          <CelebMiniGrid celebs={MINI_CELEBS} />
        </div>

        {/* Steph Curry testimonial */}
        <blockquote className="border-l-2 border-blue-400 pl-5 mb-8">
          <p className="font-body text-[15px] italic text-white/70 leading-relaxed mb-2">
            &ldquo;Jas took care of my boys. He got them straight. They listen
            to me now. They got the best dog trainer right here.&rdquo;
          </p>
          <cite className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/40 not-italic">
            Stephen Curry &mdash; NBA Champion, Golden State Warriors
          </cite>
        </blockquote>

        {/* ── Board & Train (4 weeks) ── */}
        <PackageHeading as="h2">Board &amp; Train</PackageHeading>

        <PackageList
          title="What's Included:"
          items={[
            { text: "Four weeks of intensive training", bold: true },
            "3 training sessions per day",
            "Weekly update calls",
            "Graduation handoff session with trainer",
            "4 follow-up semi-private classes",
            "4 follow-up group classes",
            "Live Zoom group training (1 year)",
            "Obedience",
            "Socialization",
            "Agility",
            "Behavior Modification",
            "Problem Solving Techniques",
          ]}
        />

        <PriceBlock
          price="$5,997"
          note="one-time · Payment plans available"
        />

        {/* Strong visual divide between the two packages */}
        <div className="my-12 flex items-center gap-4">
          <span className="flex-1 h-px bg-blue-400/40" />
          <span className="font-ui text-[11px] font-bold tracking-[3px] uppercase text-blue-300/80">
            Or Step Up
          </span>
          <span className="flex-1 h-px bg-blue-400/40" />
        </div>

        {/* ── Elite Board & Train (7 weeks) ── */}
        <PackageHeading as="h2">Elite Board &amp; Train</PackageHeading>

        <PackageList
          title="What's Included:"
          items={[
            { text: "Seven weeks of intensive training", bold: true },
            "3 training sessions per day",
            "Weekly update calls",
            "Graduation handoff session with trainer",
            "8 follow-up semi-private classes",
            "Follow-up group classes (1 year)",
            "Live Zoom group training (1 year)",
            "Obedience",
            "Socialization",
            "Agility",
            "Behavior Modification",
            "Problem Solving Techniques",
          ]}
        />

        <PriceBlock
          price="$9,997"
          note="one-time · Payment plans available"
        />
      </ServiceHero>

      {/* ── About the Program ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Program Details
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              ABOUT THE BOARD &amp; TRAIN PROGRAM
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {/* Important Notes */}
            <div className="bg-white border border-black/[0.06] rounded-xl p-6 h-full">
              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span>&#9888;&#65039;</span> Important Notes
              </h3>
              <ul className="list-none space-y-2">
                {[
                  "Dogs must be up to date on vaccinations including Bordetella (kennel cough)",
                  "Program duration may be extended based on your dog's needs — discussed during evaluation",
                  "Board & Train is available in Los Angeles, CA, Miami, FL, and New York, NY",
                  "Spots are limited — we only take a small number of dogs at a time to ensure quality",
                ].map((note) => (
                  <li
                    key={note}
                    className="font-body text-[15px] text-gray-muted leading-[1.6] pl-6 relative"
                  >
                    <span className="absolute left-0 text-[#F59E0B] font-bold">
                      &#9679;
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Continued Training */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 h-full">
              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span>&#127919;</span> For Continued Training
              </h3>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-3">
                After completing the Board &amp; Train program, we recommend
                continued reinforcement through our{" "}
                <Link
                  href="/online-training-program2"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  online training platform
                </Link>{" "}
                or private follow-up sessions. Maintaining structure at home is
                the key to long-term success.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7]">
                Our team is available for follow-up coaching calls, group Zoom
                sessions, and advanced training if you want to take your
                dog&rsquo;s skills even further.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white border border-black/[0.06] rounded-xl p-6 h-full">
              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span className="text-green-500">&#10003;</span> What&rsquo;s
                Included in Every Program
              </h3>
              <ul className="list-none space-y-2">
                {[
                  "3 professional training sessions per day",
                  "Weekly video updates and phone call",
                  "Graduation handoff session with your trainer",
                  "Access to online training community",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-gray-muted leading-[1.6] pl-6 relative"
                  >
                    <span className="absolute left-0 text-green-500 font-bold">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9® to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation →", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View Programs →", href: "/newclientservices" }}
      />
    </main>
  );
}
