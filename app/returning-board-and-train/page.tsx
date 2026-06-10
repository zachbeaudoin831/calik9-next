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
  title: "2-Week Board & Train (Returning Clients) | Cali K9®",
  description:
    "Returning Cali K9 clients: two-week intensive residential Board & Train program to reinforce and advance your dog's training. $2,997.",
  openGraph: {
    title: "2-Week Board & Train (Returning Clients) | Cali K9®",
    description:
      "Returning Cali K9 clients: two-week intensive residential Board & Train program to reinforce and advance your dog's training. $2,997.",
    url: "https://calik9.com/returning-board-and-train",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Steph Curry", image: "/images/celebs/steph-curry.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
];

export default function ReturningBoardAndTrainPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="XNqOx4mrwsWmS3c21fXO"
            formName="Returning Client B&T- Website"
            title="Book 2-Week Board & Train"
            height={825}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">2-Week Board &amp; Train</PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-4">
              Exclusively for returning Cali K9 clients. Two weeks of intensive
              residential training to reinforce the foundation you&rsquo;ve already built.
            </p>

            <div className="space-y-4 mb-6">
              <p className="font-body text-base text-white/70 leading-relaxed">
                Your dog already knows the language &mdash; now we sharpen it. The 2-Week Board &amp; Train is designed for dogs that have completed a Cali K9 program and are ready to take their skills to the next level. More advanced commands, refined behavior, and real-world reliability.
              </p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                3 structured training sessions per day, 7 days a week, with the same certified Cali K9 trainers. Whether you want to address a new behavior, advance obedience, or simply reset and reinforce &mdash; this program delivers.
              </p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                Drop your dog off. Pick up a sharper, more focused, more reliable companion.
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

        {/* ── 2-Week Board & Train ── */}
        <PackageHeading as="h2">2-Week Board &amp; Train</PackageHeading>

        <PackageList
          title="What's Included:"
          items={[
            { text: "Two weeks of intensive residential training", bold: true },
            "3 training sessions per day",
            "Weekly update calls",
            "Graduation handoff session with trainer",
            "2 follow-up semi-private classes",
            "2 follow-up group classes",
            "Live Zoom group training (6 months)",
            "Advanced obedience reinforcement",
            "Behavior modification",
            "Socialization",
            "Problem solving techniques",
          ]}
        />

        <PriceBlock
          price="$2,997"
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
              ABOUT THE 2-WEEK BOARD &amp; TRAIN
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
                  "Available to returning Cali K9 clients only — dog must have completed a prior Cali K9 program",
                  "Dogs must be up to date on vaccinations including Bordetella (kennel cough)",
                  "Available in Bay Area, CA, Los Angeles, CA, Miami, FL, and New York, NY",
                  "Spots are limited — contact us to check current availability",
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

            {/* Who This Is For */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 h-full">
              <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
                <span>&#127919;</span> Who This Is For
              </h3>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-3">
                This program is designed for dogs that have already graduated a
                Cali K9 program and need a refresher, a boost, or advancement to
                more complex skills and real-world situations.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.7]">
                Not yet a Cali K9 client?{" "}
                <Link
                  href="/board-and-train"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  View our full Board &amp; Train programs
                </Link>{" "}
                to get started.
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
        heading="READY TO TAKE YOUR DOG TO THE NEXT LEVEL?"
        description="Book your 2-Week Board & Train and continue the transformation with Cali K9's certified trainers."
        primaryCta={{ label: "Book Now →", href: "#top" }}
        secondaryCta={{ label: "View All Services →", href: "/newclientservices" }}
      />
    </main>
  );
}
