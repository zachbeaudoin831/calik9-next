import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import FormEmbed from "@/components/FormEmbed";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "In-Person Group Dog Training Classes | Cali K9\u00ae",
  description:
    "Monthly in-person group dog training classes with certified Cali K9 trainers. 4 sessions per month for $197. Bay Area, LA, Miami & New York.",
  openGraph: {
    title: "In-Person Group Dog Training Classes | Cali K9\u00ae",
    description:
      "Monthly in-person group dog training classes with certified Cali K9 trainers. 4 sessions per month for $197. Bay Area, LA, Miami & New York.",
    url: "https://calik9.com/group-class",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const MINI_CELEBS = [
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
  { name: "Jason Derulo", image: "/images/celebs/jason-derulo.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
  { name: "Kendrick Lamar", image: "/images/celebs/kendrick-lamar.jpeg" },
];

export default function GroupClassPage() {
  return (
    <main>
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="H1lYuIqvPk8pw9DJqBit"
            formName="In Person Group Class"
            title="Sign Up for In-Person Group Class"
            height={834}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              Cali K9 Membership In Person Group &ndash; $197
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Four in-person group training sessions every month. Real dogs, real
              distractions, real results. The best way to proof your dog&rsquo;s
              behavior around other animals and people.
            </p>
          </>
        }
      >
        {/* What is included */}
        <PackageList
          title="What is included every month:"
          twoColumn={true}
          items={[
            "4 In-Person Group Sessions Per Month",
            "Certified Cali K9 Trainer Every Session",
            "Structured Monthly Curriculum",
            "Community App Access & Training Resources",
            "Written Session Notes After Every Class",
            "Max 8 Dogs Per Class",
            "Bay Area & Los Angeles Locations",
          ]}
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* Stephen Curry testimonial */}
        <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-xl p-6 mb-9 max-[480px]:flex-col max-[480px]:items-center max-[480px]:text-center">
          <img
            src="/images/celebs/steph-curry.png"
            alt="Stephen Curry"
            width={72}
            height={72}
            className="w-[72px] h-[72px] rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="font-body text-[15px] italic text-white/75 leading-relaxed mb-2">
              &ldquo;Jas took care of my boys. He got them straight. They listen
              to me now. They got the best dog trainer right here.&rdquo;
            </p>
            <div className="font-ui text-base font-bold tracking-[1px] uppercase text-white/50">
              Stephen Curry &mdash; NBA Champion, Golden State Warriors
            </div>
          </div>
        </div>

        {/* Celebrity mini grid */}
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
