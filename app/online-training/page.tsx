import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import FormEmbed from "@/components/FormEmbed";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Online Dog Training Program | Cali K9®",
  description:
    "Cali K9® Online Training + 6 Months of Weekly Group Zoom Calls. Train from anywhere with the 5-Pillar System. Self-paced course with live coaching. Starting at $497.",
  openGraph: {
    title: "Online Dog Training Program | Cali K9®",
    description:
      "Cali K9® Online Training + 6 Months of Weekly Group Zoom Calls. Self-paced course with live coaching. Starting at $497.",
    url: "https://calik9.com/online-training",
    images: [
      "https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dog Training Program | Cali K9®",
    description:
      "Cali K9® Online Training + 6 Months of Weekly Group Zoom Calls. Starting at $497.",
    images: [
      "https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp",
    ],
  },
};

export default function OnlineTrainingPage() {
  return (
    <main>
      {/* ── Hero: Two-column layout ── */}
      <ServiceHero
        sidebar={
          <FormEmbed
            formId="1nO3eSfLEZPyIAJuJlpW"
            formName="Online Training Cart"
            title="Select Training Program"
            height={896}
          />
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              <em className="italic" style={{ WebkitTextFillColor: "white" }}>
                Cali K9 Online Training
              </em>{" "}
              + 6 Months Of Weekly Group Zoom Calls
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Train from anywhere with Certified Cali K9 Coaches through structured
              online sessions and accountability check-in calls.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6 -mt-3">
              This is education-based coaching that teaches you how to lead your dog,
              not just manage problems.
            </p>
          </>
        }
      >
        {/* Hero video */}
        <video
          className="w-full h-auto rounded-lg mb-8 block bg-black"
          poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5ad18a327bf43ebed69d4.png"
          controls
          playsInline
          preload="metadata"
        >
          <source
            src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67f5accfa327bf440fed6993.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── 5-Pillar Package ── */}
        <PackageHeading as="h2">
          Cali K9 Online Training
        </PackageHeading>

        <PackageList
          title="What is included in Cali K9's 5-Pillar Dog Training System:"
          items={[
            { text: "6 Months Of Weekly Group Zoom with Senior Trainer (Live)", bold: true },
            "Train With Jas Series 1.0",
            "Train With Jas Series 1.0 Advanced",
            "Train With Jas Series 2.0 Advanced",
            "Daily Homework to Keep Your Training Consistent",
            "The 5 Motivation Videos",
            "10 Rules to Live By Video",
            "100 Problem-Solving Technique Videos",
            "Access to our Membership Community",
            "The Service Dog Training Course",
          ]}
        />

        <PriceBlock
          value="Total Value: $9,491"
          offerLabel="SPECIAL OFFER TODAY ONLY"
          price="$497.00"
          note="one-time"
        />

        <hr className="border-0 border-t border-white/[0.12] my-9" />

        {/* ── Platinum Package ── */}
        <PackageHeading as="h2">
          Cali K9 Online Training Platinum Package
        </PackageHeading>

        <h3 className="font-display text-[clamp(22px,3vw,28px)] text-white leading-[1.1] mt-2 mb-4">
          Your dog will learn to:
        </h3>
        <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 max-[480px]:grid-cols-1 mb-8">
          {[
            "Focus on you and not other distractions",
            "Respond to your commands immediately",
            "Stay calm around other dogs and people",
            "Become well-balanced and stress-free",
            "Be your companion and best friend",
            "Know what is appropriate to chew on",
            "Heel and recall when you want them to",
            "Make simple tasks easy and stress-free",
          ].map((item) => (
            <li
              key={item}
              className="font-body text-[15px] text-white/70 leading-normal py-[5px] pl-6 relative"
            >
              <span className="absolute left-0 text-green-500 font-bold">
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <PackageList
          title="What is included in Cali K9's Platinum Online Training Package:"
          items={[
            { text: "Kickstart Call with Top Dog Trainer (Live)", bold: true },
            { text: "4 Check-In Calls with Senior Trainer (Live)", bold: true },
            { text: "1 Year Of Weekly Group Zoom with Senior Trainer (Live)", bold: true },
            { text: "1 Year Of Monthly Q&A calls with Jas Leverette (Live)", bold: true },
            { text: "1 Year Of Advanced Group Zoom Calls (Live)", bold: true },
            "Train With Jas Series 1.0",
            "Train With Jas Series 1.0 Advanced",
            "Train With Jas Series 2.0 Advanced",
            "Daily Homework to Keep Your Training Consistent",
            "The 5 Motivation Videos",
            "10 Rules to Live By Video",
            "100 Problem-Solving Technique Videos",
            "Access to our Membership Community",
            "The Service Dog Training Course",
          ]}
        />

        <PriceBlock
          value="Total Value: $12,988"
          offerLabel="SPECIAL OFFER TODAY ONLY"
          price="$997"
          note="one-time &middot; Payment plans available"
        />
      </ServiceHero>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Start Training Today"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of dog owners who transformed their dog's behavior with the Cali K9 5-Pillar System. Train from anywhere, at your own pace, with expert coaching."
        primaryCta={{ label: "Get Started — $497 →", href: "#main-content" }}
        secondaryCta={{ label: "Book Evaluation First →", href: "/evaluation" }}
      />
    </main>
  );
}
