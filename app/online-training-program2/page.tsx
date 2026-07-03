import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import PackageList from "@/components/PackageList";
import PriceBlock from "@/components/PriceBlock";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Online Dog Training Courses | Cali K9®",
  description:
    "Cali K9® Online Training Courses + 6 Months of Weekly Group Zoom Calls. Train from anywhere with the 5-Pillar System. Self-paced courses with live coaching. Starting at $497.",
  openGraph: {
    title: "Online Dog Training Courses | Cali K9®",
    description:
      "Cali K9® Online Training Courses + 6 Months of Weekly Group Zoom Calls. Self-paced courses with live coaching. Starting at $497.",
    url: "https://calik9.com/online-training-program2",
    images: [
      "https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dog Training Courses | Cali K9®",
    description:
      "Cali K9® Online Training Courses + 6 Months of Weekly Group Zoom Calls. Starting at $497.",
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
          <div className="bg-white/[0.07] border border-white/[0.18] rounded-xl p-5">
            <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/85 mb-4">
              Select Training Program
            </div>
            <Link
              href="https://go.calik9.com/online-training-program2"
              className="btn btn-white btn-lg w-full text-center block"
            >
              Select Training Program
            </Link>
          </div>
        }
        intro={
          <>
            <StarsRow />

            <PackageHeading as="h1">
              <em className="italic" style={{ WebkitTextFillColor: "white" }}>
                Cali K9 Online Training Courses
              </em>{" "}
              + 6 Months Of Weekly Group Zoom Calls
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-4">
              Two online training options &mdash;{" "}
              <strong className="text-white">Cali K9 Online Training</strong>{" "}
              and{" "}
              <strong className="text-white">
                Cali K9 Online Training Platinum Package
              </strong>
              .
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Train from anywhere with Certified Cali K9 Coaches through
              structured online sessions and accountability check-in calls
              &mdash; education-based coaching that teaches you how to lead
              your dog, not just manage problems.
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

        {/* ── Your Dog Will Learn To (shared across both packages) ── */}
        <h3 className="font-display text-[clamp(22px,3vw,28px)] text-white leading-[1.1] mt-2 mb-4">
          With Cali K9&rsquo;s Online Dog Training Your Dog Will Learn to:
        </h3>
        <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 max-[480px]:grid-cols-1 mb-10">
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

        {/* ── Cali K9 Online Training (5-Pillar) ── */}
        <PackageHeading as="h2">Cali K9 Online Training</PackageHeading>

        <PackageList
          title="What is included in Cali K9's Online 5-Pillar Dog Training System:"
          items={[
            { text: "6 Months of Weekly Group Zoom Calls with Senior Trainer (Live)", bold: true },
            "Train With Jas Series 1.0",
            "Train With Jas Series 1.0 Advanced",
            "Train With Jas Series 2.0",
            "Daily Homework to Keep Your Training Consistent",
            "How to Motivate Your Dog Video",
            "10 Rules to Live By Video",
            "100 Problem-Solving Technique Videos",
            "Access to our Membership Community",
            "The Service Dog Training Course",
          ]}
        />

        <PriceBlock
          value="Total Value: $1,997"
          offerLabel="SPECIAL OFFER TODAY ONLY"
          price="$497.00"
          note="one-time"
        />

        {/* Strong visual divide between packages */}
        <div className="my-14 flex items-center gap-4">
          <span className="flex-1 h-px bg-blue-400/40" />
          <span className="font-ui text-[11px] font-bold tracking-[3px] uppercase text-blue-300/80">
            Or Step Up · Platinum
          </span>
          <span className="flex-1 h-px bg-blue-400/40" />
        </div>

        {/* ── Platinum Package ── */}
        <PackageHeading as="h2">
          Cali K9 Online Training Platinum Package
        </PackageHeading>

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
            "Train With Jas Series 2.0",
            "Daily Homework to Keep Your Training Consistent",
            "How to Motivate Your Dog Video",
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
          note="one-time · Payment plans available"
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
        secondaryCta={{ label: "Book Evaluation First →", href: "https://go.calik9.com/evaluation-with-jas" }}
      />
    </main>
  );
}
