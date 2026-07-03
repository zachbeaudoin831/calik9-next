import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "In-Person Dog Training | Cali K9\u00ae",
  description:
    "One-on-one in-person dog training sessions with certified Cali K9 trainers. Three program options starting at $1,497.",
  openGraph: {
    title: "In-Person Dog Training | Cali K9\u00ae",
    description:
      "One-on-one in-person dog training sessions with certified Cali K9 trainers. Three program options starting at $1,497.",
    url: "https://calik9.com/in-person",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
  { name: "Kendrick Lamar", image: "/images/celebs/kendrick-lamar.jpeg" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Jason Derulo", image: "/images/celebs/jason-derulo.png" },
];

export default function InPersonPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <div className="bg-white/[0.07] border border-white/[0.18] rounded-xl p-5">
            <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/85 mb-4">
              Book Your In-Person Training
            </div>
            <Link
              href="https://go.calik9.com/in-person"
              className="btn btn-white btn-lg w-full text-center block"
            >
              Book In-Person Training
            </Link>
          </div>
        }
        intro={
          <>
            <StarsRow />

            <h1
              className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] tracking-[1px] uppercase mb-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #93b4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <em className="italic" style={{ WebkitTextFillColor: "#fff" }}>
                In-Person Dog Training
              </em>
            </h1>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Work directly with a certified Cali K9 trainer to address your
              dog&rsquo;s specific behaviors &mdash; in your home, our facility, or
              both. Every session follows Jas Leverette&rsquo;s proven 5-Pillar
              Method, not guesswork.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6 -mt-3">
              Whether you&rsquo;re dealing with aggression, reactivity, anxiety, or
              simply want a well-trained companion &mdash; our in-person programs
              deliver real, lasting results.
            </p>
          </>
        }
      >
        {/* Hero video */}
        <video
          className="w-full h-auto rounded-lg mb-8 block bg-black"
          poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5b65ea327bf4786ed6f6c.png"
          controls
          playsInline
          preload="metadata"
        >
          <source
            src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5b5e93116e652821a1357.mp4"
            type="video/mp4"
          />
        </video>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── In-Person Dog Training Package (12 Sessions) ── */}
        <PackageHeading as="h2">
          In-Person Dog Training Package (12 Sessions)
        </PackageHeading>
        <p className="font-ui text-sm tracking-[1px] text-white/55 -mt-2 mb-5">
          (for dogs with no aggression or anxiety issues)
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "2 Private Training Sessions", bold: true },
            "2 Semi-Private Sessions",
            "4 Group Classes",
            "4 Group Zoom Classes",
            "Obedience",
            "Socialization",
            "Urban Agility",
            "Problem Solving Techniques",
          ]}
        />

        <PriceBlock
          price="$1,497"
          note="one-time · Payment plans available"
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Elite In-Person Dog Training Package (24 Sessions) ── */}
        <PackageHeading as="h2">
          Elite In-Person Dog Training Package (24 Sessions)
        </PackageHeading>

        <PackageList
          title="What's Included:"
          items={[
            { text: "2 Private Training Sessions", bold: true },
            "6 Semi-Private Sessions",
            "8 Group Classes",
            "8 Group Zoom Classes",
            "Obedience",
            "Socialization",
            "Behavior Modification",
            "Problem Solving Techniques",
          ]}
        />

        <PriceBlock
          price="$2,497"
          note="one-time · Payment plans available"
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── VIP Dog Training ── */}
        <PackageHeading as="h2">VIP Dog Training</PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Cali K9&rsquo;s VIP package delivers one-on-one, fully personalized
          training tailored to your dog&rsquo;s needs, lifestyle, and goals.
          Sessions focus on advanced skills including reliable off-leash
          obedience, professional service-dog task training, and specialized
          behaviors for high-performance or lifestyle demands. With flexible
          scheduling, premium support, and measurable progress plans, this
          program is ideal for owners who want elite results and lasting
          reliability.
        </p>

        <PackageList
          title="What's Included:"
          items={[
            { text: "10 Private OR 5 At-Home Sessions", bold: true },
            "1 Year of Group Classes",
            "1 Year of Group Zoom Classes",
            "Obedience",
            "Socialization",
            "Agility",
            "Behavior Modification",
            "Problem Solving Techniques",
          ]}
        />

        <PriceBlock
          price="$4,997"
          note="one-time · Payment plans available"
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Steph Curry Testimonial ── */}
        <div className="flex items-center gap-6 my-2 mb-8 max-md:flex-col max-md:text-center">
          <Image
            src="/images/celebs/steph-curry.png"
            alt="Stephen Curry"
            width={160}
            height={160}
            className="shrink-0 w-20 h-20 rounded-full object-cover object-top border-2 border-white/15"
          />
          <div>
            <p className="font-body text-[17px] italic text-white/80 leading-relaxed">
              &ldquo;They are listening to me now. Jas took care of my boys. He
              got them straight. They got the best dog trainer right
              here.&rdquo;
            </p>
            <p className="font-ui text-base font-bold tracking-[1px] text-white/50 mt-2 not-italic">
              STEPHEN CURRY &mdash; NBA Champion, Golden State Warriors
            </p>
          </div>
        </div>

        {/* ── Celebrity Mini Grid ── */}
        <CelebMiniGrid celebs={MINI_CELEBS} />
      </ServiceHero>

      {/* ── Info Section (blue gradient bg) ── */}
      <section
        className="py-20 max-md:py-12 max-[480px]:py-8"
        style={{
          background:
            "linear-gradient(135deg, #0A1A5C 0%, #122E85 50%, #1A3FAB 100%)",
        }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-white/50 block mb-3">
              Before You Start
            </span>
            <h2 className="font-display text-[clamp(28px,3.5vw,42px)] leading-[1.05] text-white mb-4">
              EVERYTHING YOU NEED TO KNOW
            </h2>
            <div className="w-12 h-[3px] bg-blue-400 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {/* Card 1: Requirements */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-8 transition-all hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5 bg-white/[0.12]">
                &#128737;&#65039;
              </div>
              <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white mb-4 leading-[1.1]">
                PROGRAM REQUIREMENTS
              </h3>
              <p className="font-body text-[13px] text-white/50 leading-[1.65] mb-5">
                These requirements keep every dog &mdash; and every handler
                &mdash; safe during sessions.
              </p>
              <ul className="list-none p-0 m-0">
                {[
                  "Dog must not be in heat",
                  "No active injury at time of sessions",
                  "All vaccinations current",
                  "Handler must attend all sessions",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-white/75 leading-normal py-2.5 pl-8 relative border-b border-white/[0.08] last:border-b-0"
                  >
                    <span className="absolute left-0 text-green-500 font-bold text-base">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Continued Training */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-8 transition-all hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5 bg-green-500/20">
                &#127919;
              </div>
              <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white mb-4 leading-[1.1]">
                CONTINUED TRAINING
              </h3>
              <p className="font-body text-[15px] text-white/70 leading-[1.65] mb-3">
                After completing your in-person package, you can continue with
                additional sessions, upgrade to a higher-tier package, or
                transition into our{" "}
                <Link
                  href="/online-training-program2"
                  className="text-white/90 underline underline-offset-2"
                >
                  online program
                </Link>{" "}
                for ongoing support and accountability.
              </p>
              <p className="font-body text-[15px] text-white/70 leading-[1.65]">
                Many clients combine in-person sessions with our online training
                platform for the best long-term results &mdash; structured
                coaching plus daily reinforcement at home.
              </p>
            </div>

            {/* Card 3: Disclaimer */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-8 transition-all hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5 bg-[#F59E0B]/20">
                &#128196;
              </div>
              <h3 className="font-display text-[clamp(20px,2.5vw,24px)] text-white mb-4 leading-[1.1]">
                DISCLAIMER
              </h3>
              <p className="font-body text-[15px] text-white/70 leading-[1.65] mb-3">
                Results vary depending on the dog&rsquo;s history, breed, age,
                and the handler&rsquo;s consistency with training between
                sessions.
              </p>
              <ul className="list-none p-0 m-0">
                {[
                  "Payment plans available for all packages",
                  "No refunds",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-white/75 leading-normal py-2.5 pl-8 relative border-b border-white/[0.08] last:border-b-0"
                  >
                    <span className="absolute left-0 text-[#F59E0B] font-bold text-sm">
                      &#9888;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body text-[13px] text-white/70 leading-[1.65] mt-3">
                <Link
                  href="/refund-policy"
                  className="text-white/90 underline underline-offset-2"
                >
                  See full refund policy &rarr;
                </Link>
              </p>
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
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/newclientservices" }}
      />
    </main>
  );
}
