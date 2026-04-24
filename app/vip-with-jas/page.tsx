import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "VIP Training with Jas Leverette | Cali K9\u00ae",
  description:
    "Private VIP training sessions directly with Jas Leverette, founder of Cali K9\u00ae and Netflix's Canine Intervention. Limited availability.",
  openGraph: {
    title: "VIP Training with Jas Leverette | Cali K9\u00ae",
    description:
      "Private VIP training sessions directly with Jas Leverette, founder of Cali K9\u00ae and Netflix's Canine Intervention. Limited availability.",
    url: "https://calik9.com/vip-with-jas",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Steph Curry", image: "/images/celebs/steph-curry.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
];

export default function VipWithJasPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <>
            <PriceBlock
              price="$4,997"
              note="one-time &middot; limited availability"
            />
            <FormEmbed
              formId="1nO3eSfLEZPyIAJuJlpW"
              formName="VIP Training Cart"
              title="Fill out your information below to start"
              height={896}
            />
          </>
        }
        intro={
          <>
            <PackageHeading as="h1">
              Cali K9&reg; VIP Dog Training With Jas Leverette $4997
            </PackageHeading>

            <p className="font-ui text-base font-bold tracking-[1.5px] uppercase text-blue-400 mb-6">
              5 Private 2-Hour Sessions | Exclusive Access | Real Education
            </p>

            <p className="font-body text-base text-white/70 leading-[1.65] mb-6">
              This is for people who want to work directly with Jas Leverette
              &mdash; founder of Cali K9, host of Netflix&rsquo;s{" "}
              <em>Canine Intervention</em>, and the trainer behind 3,500+
              transformations. No assistants. No junior trainers. Just Jas, your
              dog, and a plan built specifically for your situation.
            </p>
          </>
        }
      >
        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* What You Get */}
        <PackageList
          title="What You Get:"
          twoColumn={false}
          items={[
            {
              text: "Live Kickstarter Call \u2014 A 1-on-1 call with Jas to assess your dog, set goals, and map out your training plan before sessions begin",
              bold: false,
            },
            {
              text: "Five 2-Hour Private Home Sessions \u2014 Jas comes to you. Real training in your environment, with your dog, on your schedule",
              bold: false,
            },
            {
              text: "1-Year Unlimited Group Classes \u2014 Weekly group Zoom sessions with Cali K9\u2019s senior coaching team to reinforce your training between sessions",
              bold: false,
            },
            {
              text: "1-Year Monthly Q&A Calls with Jas Leverette (Live) \u2014 Direct access to Jas every month for follow-up questions, tune-ups, and guidance",
              bold: false,
            },
            {
              text: "Full Online Training Course Access \u2014 Train With Jas Series 1.0, 1.0 Advanced, 2.0 Advanced, plus 100 Problem-Solving videos",
              bold: false,
            },
            {
              text: "Direct Line to Jas Between Sessions \u2014 Text or call for real-time guidance when you need it",
              bold: false,
            },
            {
              text: "Session Video Recaps \u2014 Every session recorded so you can review techniques and practice at home",
              bold: false,
            },
            {
              text: "Lifetime Email Support \u2014 Access to the Cali K9 team after your program ends",
              bold: false,
            },
          ]}
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Who It's For */}
        <PackageList
          title="Who It's For:"
          twoColumn={false}
          items={[
            "Dog owners who want the best trainer in the country working personally with their dog",
            "Families dealing with aggression, reactivity, anxiety, or serious behavioral issues",
            "High-profile clients who need discretion, flexibility, and elite-level results",
            "Anyone who has tried other trainers and wants it done right \u2014 once and for all",
          ]}
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Why It Works */}
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-3.5">
          Why It Works:
        </div>
        <p className="font-body text-base text-white/70 leading-[1.65] mb-8">
          Because Jas doesn&rsquo;t follow a script. He reads your dog, adapts
          in real time, and teaches you the system &mdash; not just tricks. His
          5-Pillar Training System is the same framework trusted by NBA
          champions, Grammy winners, law enforcement K9 units, and military
          working dog programs. This isn&rsquo;t a package. It&rsquo;s a
          transformation.
        </p>

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Stephen Curry testimonial */}
        <div className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-xl p-8 mb-9 max-[900px]:flex-col max-[900px]:items-center max-[900px]:text-center">
          <img
            src="/images/celebs/steph-curry.png"
            alt="Stephen Curry"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="font-body text-[17px] italic font-light text-white/90 leading-relaxed mb-3">
              &ldquo;Jas took care of my boys. He got them straight. They listen
              to me now. They got the best dog trainer right here.&rdquo;
            </p>
            <div className="font-ui text-base font-bold tracking-[2px] uppercase text-blue-400">
              Stephen Curry{" "}
              <span className="font-normal text-white/40 tracking-[1px]">
                &mdash; NBA Champion, Golden State Warriors
              </span>
            </div>
          </div>
        </div>

        {/* Celebrity mini grid */}
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-3.5">
          Trusted By:
        </div>
        <CelebMiniGrid celebs={MINI_CELEBS} />
      </ServiceHero>

      {/* Celebrity Social Proof */}
      <CelebGrid />

      {/* Final CTA */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9\u00ae to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/services" }}
      />
    </main>
  );
}
