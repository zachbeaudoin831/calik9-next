import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import FormEmbed from "@/components/FormEmbed";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Board & Train Program | Cali K9®",
  description:
    "Intensive residential board and train dog training program in Los Angeles and Miami. Four-week Elite program with certified trainers.",
  openGraph: {
    title: "Board & Train Program | Cali K9®",
    description:
      "Intensive residential board and train dog training program in Los Angeles and Miami. Four-week Elite program with certified trainers.",
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

            <PackageHeading as="h1">Board &amp; Train in Los Angeles</PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Our most intensive program. Your dog lives with a certified Cali K9
              trainer and works the 5-Pillar System every single day. 3 structured
              training sessions per day, 7 days a week.
            </p>
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

        {/* ── Elite 4-Week Board & Train ── */}
        <PackageHeading as="h2">Elite Board &amp; Train</PackageHeading>

        <PackageList
          title="Elite Board & Train Includes:"
          items={[
            "Full-board residential training — dog lives with trainer",
            "3 sessions per day for 28 days (4 weeks)",
            "Cali K9 Starter Kit included",
            "Daily photo and video updates",
            "Graduation handoff session with your trainer",
            "60-day email follow-up support",
            "Mid-program review call with trainer",
          ]}
        />

        <p className="font-body text-sm text-white/50 italic mt-6">
          * A behavior evaluation is required before enrollment. This ensures we
          set the right expectations and design the right plan for your dog.
        </p>
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

          <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-8">
            {/* Left column */}
            <div>
              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span>&#127968;</span> Full-Board Residential Training
              </h3>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-4">
                Your dog moves into the trainer&rsquo;s home for the full program
                duration &mdash; no kennel, no cage facility. This is full-board
                residential training where your dog lives alongside a certified
                Cali K9 trainer and receives structured work every single day.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-4">
                The program is built on the Cali K9 5-Pillar System: leadership,
                communication, discipline, socialization, and maintenance. Each
                day includes 3 professional training sessions covering obedience,
                behavior modification, and real-world exposure.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-6">
                At the end of the program, you return for a graduation handoff
                session where you learn every command, routine, and technique
                your dog has been trained on &mdash; so you can maintain the
                results at home.
              </p>

              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span>&#9888;&#65039;</span> Important Notes
              </h3>
              <ul className="list-none space-y-2">
                {[
                  "A behavior evaluation is required before enrollment in any Board & Train program",
                  "Dogs must be up to date on vaccinations including Bordetella (kennel cough)",
                  "Program duration may be extended based on your dog's needs — discussed during evaluation",
                  "Board & Train is available in Los Angeles, CA and Miami, FL",
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

            {/* Right column */}
            <div className="space-y-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                  <span>&#127919;</span> For Continued Training
                </h3>
                <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-3">
                  After completing the Board &amp; Train program, we recommend
                  continued reinforcement through our{" "}
                  <Link
                    href="/online-training"
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

              <div>
                <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                  <span className="text-green-500">&#10003;</span> What&rsquo;s
                  Included in Every Program
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "3 professional training sessions per day",
                    "Daily photo & video updates sent to you",
                    "Cali K9 Starter Kit (leash, collar, training tools)",
                    "Graduation handoff session with your trainer",
                    "Post-program follow-up support via email",
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
        </div>
      </section>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9® to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation →", href: "/evaluation" }}
        secondaryCta={{ label: "View Programs →", href: "/services" }}
      />
    </main>
  );
}
