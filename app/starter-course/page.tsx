import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Starter Course Bundle \u2014 $27",
  description:
    "Get the Cali K9\u00ae Starter Course Bundle for just $27. Includes Online Training 2.0, Dog Psychology 101, and 10 House Rules \u2014 a $291 value.",
  openGraph: {
    title: "Starter Course Bundle \u2014 $27 | Cali K9\u00ae",
    description:
      "Get the Cali K9\u00ae Starter Course Bundle for just $27. Includes Online Training 2.0, Dog Psychology 101, and 10 House Rules \u2014 a $291 value.",
    url: "https://calik9.com/starter-course",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starter Course Bundle \u2014 $27 | Cali K9\u00ae",
    description:
      "Get the Cali K9\u00ae Starter Course Bundle for just $27. Includes Online Training 2.0, Dog Psychology 101, and 10 House Rules \u2014 a $291 value.",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const COURSES = [
  {
    image: "/images/cdn/66523556bc8a8e6d84fccdd2.webp",
    alt: "Online Training 2.0 Mini Course",
    num: "Course 01",
    value: "$197 value",
    title: "ONLINE TRAINING 2.0",
    desc: "Build the engagement and motivation that makes every command work \u2014 using Jas\u2019s dopamine-based reward system.",
    topics: [
      "Engagement & motivation techniques",
      "Foundation for obedience & behavior",
      "Sit, stay, and core commands",
      "Positive reinforcement & communication",
    ],
  },
  {
    image: "/images/cdn/662c2d66ec29703374156d19.webp",
    alt: "Dog Psychology 101",
    num: "Course 02",
    value: "$47 value",
    title: "DOG PSYCHOLOGY 101",
    desc: "Understand how your dog actually thinks. Once you see it through their eyes, training becomes communication.",
    topics: [
      "Pack dynamics & canine instincts",
      "Leadership with trust and loyalty",
      "Authority & consistency guidance",
      "Behavior management fundamentals",
    ],
  },
  {
    image: "/images/cdn/661ff59606d953b97e0d1959.webp",
    alt: "10 Rules to Prevent Your Dog From Destroying Your House",
    num: "Course 03",
    value: "$47 value",
    title: "10 HOUSE RULES",
    desc: "Stop the destruction before it starts. Practical rules you can implement today to protect your home and sanity.",
    topics: [
      "Rules & boundaries that stick",
      "Damage prevention strategies",
      "Pack leadership at home",
      "Daily behavior management habits",
    ],
  },
];

const BUNDLE_ITEMS = [
  { text: "Online Training 2.0 Mini Course", tag: "$197 value" },
  { text: "Dog Psychology 101", tag: "$47 value" },
  { text: "10 Rules to Stop Your Dog Destroying the House", tag: "$47 value" },
  { text: "Community Access \u2014 share results & connect with owners", tag: "Included" },
];

const UPGRADES = [
  {
    badge: "Mastery Add-On",
    name: "HEELING MASTERY",
    price: "$27",
    value: "$791",
    features: [
      "Heeling Basics",
      "Heeling \u2014 Removing the Help",
      "Advanced Heeling",
      "Community access included",
    ],
    href: "https://go.calik9.com/mini-course-heeling-mastery",
  },
  {
    badge: "Mastery Add-On",
    name: "SOCIALIZATION MASTERY",
    price: "$27",
    value: "$291",
    features: [
      "Proofing",
      "Advanced Socialization",
      "Community access included",
    ],
    href: "https://go.calik9.com/mini-course-socialization-mastery",
  },
  {
    badge: "Mastery Add-On",
    name: "RECALL MASTERY",
    price: "$27",
    value: "$291",
    features: [
      "Recall 1.0",
      "Recall 2.0",
      "Advanced Recall",
      "Community access included",
    ],
    href: "https://go.calik9.com/mini-course-recall-mastery",
  },
];

const TRUST_ITEMS = [
  { num: "3", label: "Courses Included" },
  { num: "$291", label: "Total Value" },
  { num: "$27", label: "Today Only" },
  { num: "Instant", label: "Access" },
];

export default function StarterCoursePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-standard relative overflow-hidden">
        {/* Grid overlay provided by hero-standard::before */}
        {/* Corner accent */}
        <div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(106,159,255,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Radial orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%] max-md:w-[360px] max-md:h-[360px]"
          style={{
            background:
              "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-[2] max-w-[1200px] mx-auto px-9 max-[960px]:px-6 max-[480px]:px-4 pt-24 pb-20 w-full grid grid-cols-[1fr_480px] gap-[72px] items-center max-[1024px]:grid-cols-[1fr_380px] max-[1024px]:gap-12 max-[960px]:grid-cols-1 max-[960px]:text-center max-[960px]:pt-28 max-[960px]:pb-12">
          {/* Left: text */}
          <div className="min-w-0">
            <p className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-300 mb-[18px]">
              Starter Course Bundle
            </p>
            <h1 className="text-white font-display text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-[1px] mb-6">
              CALI K9<br />
              <em className="not-italic text-blue-300">MINI COURSES</em>
            </h1>
            <p className="text-[clamp(15px,2vw,18px)] text-white/[0.72] max-w-[500px] leading-[1.65] mb-10 max-[960px]:mx-auto">
              Professional dog training from Jas Leverette &mdash; available
              instantly, at a price that removes every excuse.
            </p>
            <div className="flex gap-3.5 flex-wrap items-center max-[960px]:justify-center max-[540px]:flex-col max-[540px]:items-stretch">
              <a
                href="#bundle"
                className="btn btn-white text-center"
              >
                Get the Bundle &mdash; $27 &rarr;
              </a>
              <a
                href="#courses"
                className="btn btn-outline-white text-center"
              >
                See All Courses &darr;
              </a>
            </div>
          </div>

          {/* Right: product image + trust strip */}
          <div className="shrink-0 max-w-full max-[960px]:max-w-[460px] max-[960px]:mx-auto">
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <Image
                src="/images/cdn/67bdfcfe5d14914139614f99.webp"
                width={800}
                height={588}
                alt="Starter Course Bundle \u2014 three courses in one package"
                className="w-full h-auto block"
                priority
              />
            </div>
            {/* Trust strip */}
            <div
              className="bg-black/25 border border-white/[0.08] rounded-b-xl py-[18px] -mt-px"
              aria-hidden="true"
            >
              <div className="flex justify-center items-stretch max-[480px]:flex-wrap max-[480px]:gap-y-3">
                {TRUST_ITEMS.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 px-2 text-center max-[480px]:flex-[0_0_50%] max-[480px]:px-2 max-[480px]:py-1.5 ${
                      i < TRUST_ITEMS.length - 1
                        ? "border-r border-white/[0.08] max-[480px]:border-r-0"
                        : ""
                    } ${
                      i < 2 ? "max-[480px]:border-b max-[480px]:border-b-white/[0.08]" : ""
                    }`}
                  >
                    <span className="font-display text-[28px] text-white tracking-[1px] leading-none max-[480px]:text-2xl">
                      {item.num}
                    </span>
                    <span className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/45 leading-[1.3] max-[480px]:text-[10px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Inside ── */}
      <section
        id="courses"
        className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream"
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-14">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              What&apos;s Inside the Bundle
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              THREE COURSES.<br />ONE FOUNDATION.
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:max-w-[480px] max-[900px]:mx-auto">
            {COURSES.map((course) => (
              <article
                key={course.title}
                className="bg-white rounded-xl overflow-hidden border border-black/[0.06] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_8px_32px_rgba(26,63,171,0.12)] flex flex-col relative"
              >
                {/* Top blue accent */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-blue-500 z-[1]" />
                <Image
                  src={course.image}
                  alt={course.alt}
                  width={900}
                  height={615}
                  className="w-full h-auto block"
                />
                <div className="p-7 flex-1 flex flex-col max-[768px]:p-5 max-[480px]:p-4">
                  <p className="font-ui text-xs font-bold tracking-[3px] uppercase text-blue-500 mb-2">
                    {course.num} &middot; {course.value}
                  </p>
                  <h3 className="font-display text-[30px] text-ink leading-[0.95] mb-3">
                    {course.title}
                  </h3>
                  <p className="font-body text-sm text-gray-muted leading-[1.65] mb-4 flex-1">
                    {course.desc}
                  </p>
                  <ul className="list-none flex flex-col gap-[7px] border-t border-black/[0.06] pt-4">
                    {course.topics.map((topic) => (
                      <li
                        key={topic}
                        className="font-body text-[13px] text-gray-600 flex items-center gap-2.5"
                      >
                        <span className="w-[5px] h-[5px] rounded-full bg-blue-500 opacity-40 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial Break ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="relative bg-cream border border-black/[0.06] rounded-xl p-10 max-md:p-6 text-center">
            <span
              className="font-display text-[80px] text-blue-500/20 leading-none absolute top-4 left-6 select-none max-md:text-[60px]"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote>
              <p className="font-body text-[clamp(18px,2.5vw,24px)] italic text-ink leading-[1.5] max-w-[700px] mx-auto mb-6">
                Jas took care of my boys. He got them straight. They listen to
                me now. They got the best dog trainer right here.
              </p>
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/images/celebs/steph-curry.png"
                width={56}
                height={56}
                alt="Stephen Curry"
                className="w-14 h-14 rounded-full object-cover object-top"
              />
              <div className="text-left">
                <div className="font-display text-lg text-ink tracking-[0.5px]">
                  STEPHEN CURRY
                </div>
                <div
                  className="text-[#F59E0B] text-sm tracking-[2px]"
                  aria-label="5 out of 5 stars"
                >
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="font-ui text-xs font-semibold tracking-[1px] uppercase text-gray-muted">
                  NBA Champion &middot; Golden State Warriors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bundle Offer ── */}
      <section
        id="bundle"
        className="py-20 max-md:py-12 max-[480px]:py-8 bg-white"
      >
        <div className="max-w-[600px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Special Offer
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              GET THE BUNDLE
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-4" />
            <p className="font-body text-[15px] text-gray-muted leading-[1.65] max-w-[520px] mx-auto">
              Three courses, one unbeatable price. Everything you need to start
              training today.
            </p>
          </div>

          {/* Bundle card */}
          <div className="bg-white border border-black/[0.08] rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] flex flex-col">
            {/* Header */}
            <div
              className="px-7 py-6 max-[480px]:px-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue-700) 0%, var(--color-blue-500) 100%)",
              }}
            >
              <div className="inline-block font-ui text-xs font-extrabold tracking-[3px] uppercase bg-white/20 text-white px-3 py-1 rounded mb-3">
                Complete Bundle
              </div>
              <h3 className="font-display text-[clamp(24px,2.5vw,32px)] leading-none text-white mb-3">
                STARTER COURSE BUNDLE
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-white leading-none">
                  $27
                </span>
                <span className="font-ui text-[13px] font-semibold text-white/65 tracking-[1px] uppercase">
                  one-time
                </span>
              </div>
              <p className="font-ui text-[15px] font-semibold text-white/65 mt-2">
                Total Value: <s className="opacity-70">$291</s>
              </p>
            </div>

            {/* Body */}
            <div className="p-7 flex flex-col flex-1 max-[480px]:p-4">
              <ul className="list-none space-y-3 mb-6">
                {BUNDLE_ITEMS.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-2.5 font-body text-[15px] text-gray-600 leading-normal flex-wrap"
                  >
                    <span className="text-green-500 font-bold text-base shrink-0">
                      &#10003;
                    </span>
                    <span className="flex-1">{item.text}</span>
                    <span className="ml-auto font-ui text-xs font-bold tracking-[1px] uppercase text-white/60 bg-white/10 border border-white/[0.18] px-2.5 py-0.5 rounded-sm whitespace-nowrap bg-blue-500/10 border-blue-500/20 text-blue-500/60">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href="https://go.calik9.com/starter-course-new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-blue block w-full text-center"
                >
                  Get Instant Access for $27 &rarr;
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://go.calik9.com/oto15"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-[13px] text-gray-400 underline mt-4 transition-colors hover:text-gray-600"
          >
            No thanks, I&apos;ll pass on speeding up my dog&apos;s progress
          </a>
        </div>
      </section>

      {/* ── Upgrade Courses ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 py-20 max-md:py-12 max-[480px]:py-8">
        {/* Decorative accent */}
        <div
          className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(106,159,255,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-14">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-300 block mb-3">
              Add More Mastery
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              DEEPEN YOUR<br />TRAINING SKILLS
            </h2>
            <div className="w-12 h-[3px] bg-blue-400 mx-auto mb-4" />
            <p className="font-body text-[15px] text-white/65 leading-[1.65] max-w-[520px] mx-auto">
              Each mastery course goes deeper on a single skill. Add any to your
              order for just $27 each.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:max-w-[480px] max-[900px]:mx-auto">
            {UPGRADES.map((pkg) => (
              <article
                key={pkg.name}
                className="bg-white border border-black/[0.08] rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] flex flex-col"
              >
                <div
                  className="px-7 py-6 max-[480px]:px-4"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-blue-700) 0%, var(--color-blue-500) 100%)",
                  }}
                >
                  <div className="inline-block font-ui text-xs font-extrabold tracking-[3px] uppercase bg-white/20 text-white px-3 py-1 rounded mb-3">
                    {pkg.badge}
                  </div>
                  <h3 className="font-display text-[clamp(24px,2.5vw,32px)] leading-none text-white mb-3">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl text-white leading-none">
                      {pkg.price}
                    </span>
                    <span className="font-ui text-[13px] font-semibold text-white/65 tracking-[1px] uppercase">
                      one-time
                    </span>
                  </div>
                  <p className="font-ui text-[15px] font-semibold text-white/65 mt-2">
                    Total Value: <s className="opacity-70">{pkg.value}</s>
                  </p>
                </div>
                <div className="p-7 flex flex-col flex-1 max-[480px]:p-4">
                  <ul className="list-none space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 font-body text-[15px] text-gray-600 leading-normal"
                      >
                        <span className="text-green-500 font-bold text-base shrink-0">
                          &#10003;
                        </span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={pkg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-blue block w-full text-center"
                    >
                      Add Course &rarr;
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Limited Time"
        heading="START TRAINING TODAY"
        description="Three courses. Community access. A $291 value \u2014 for the price of a pizza. No excuses left."
        primaryCta={{
          label: "Get Instant Access for $27 \u2192",
          href: "https://go.calik9.com/starter-course-new",
        }}
      />
    </main>
  );
}
