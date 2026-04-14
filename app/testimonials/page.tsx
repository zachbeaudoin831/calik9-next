import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Dog Training Reviews & Results | Cali K9\u00ae",
  description:
    "Real results from 3,500+ dogs trained. Read Cali K9\u00ae client reviews and success stories.",
  openGraph: {
    title: "Dog Training Reviews & Results | Cali K9\u00ae",
    description:
      "Real results from 3,500+ dogs trained. Read Cali K9\u00ae client reviews and success stories.",
    url: "https://calik9.com/testimonials",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

/* ── Data ── */

const STATS = [
  { num: "3,500+", label: "Dogs Transformed" },
  { num: "4.9", star: true, label: "Average Rating" },
  { num: "15+", label: "Years Experience" },
  { num: "190", label: "Countries on Netflix" },
];

const VIDEOS = [
  { id: "-hYw1hkPLdU", title: "Courtney Testimonial" },
  { id: "2QbzvTzIumw", title: "Winter Testimonial" },
  { id: "CMp3MQXgifo", title: "Working With Kevin Hart" },
  { id: "HJ6Jh9DHAwI", title: "Steph Curry Testimonial" },
  { id: "HLFXLmNS-0c", title: "Mylene Testimonial" },
  { id: "J6HDoPJZUpg", title: "Dee and Her Frenchie" },
  { id: "MVnCZ9PX8UI", title: "Testimonial Video Cali K9_2" },
  { id: "SRLgBypVrgA", title: "Dr. Phil TV \u2014 Working With a Producer\u2019s Dog" },
  { id: "U3-ExAUhr54", title: "Kristin Testimonial" },
  { id: "_bkEiPII-X4", title: "Chelsea Testimonial" },
  { id: "hxP9Y7SWZyo", title: "Miriam Testimonial" },
  { id: "vvaDqpG1Sho", title: "TNT Shout Out - Kenny Smith" },
];

const REVIEWS = [
  {
    initials: "MT",
    name: "Marcus T.",
    location: "San Jose, CA \u2014 Google Review",
    quote:
      "\u201CJas completely transformed our reactive German Shepherd in just a few sessions. What 3 other trainers couldn\u2019t do in a year, he fixed in weeks. The 5-Pillar system actually works.\u201D",
    result: "Reactive German Shepherd transformed in weeks",
  },
  {
    initials: "JR",
    name: "Jessica R.",
    location: "Oakland, CA \u2014 Google Review",
    quote:
      "\u201CI was skeptical at first but the Board & Train program is worth every penny. Our dog came back completely different \u2014 calm, focused, obedient. Best money we\u2019ve ever spent.\u201D",
    result: "Calm, focused & obedient after Board & Train",
  },
  {
    initials: "DL",
    name: "David & Priya L.",
    location: "Los Angeles, CA \u2014 Yelp Review",
    quote:
      "\u201CAfter watching Canine Intervention we drove 4 hours to work with Cali K9. Worth every mile. Our pit bull went from dog-aggressive to walking past other dogs without a reaction. Unreal.\u201D",
    result: "Dog-aggressive pit bull now walks past dogs calmly",
  },
  {
    initials: "AK",
    name: "Amanda K.",
    location: "Miami, FL \u2014 Google Review",
    quote:
      "\u201CThe online program is incredible value. I\u2019ve done 3 other dog training courses and nothing comes close to the depth of Jas\u2019s system. My dog is off-leash reliable at 8 months old.\u201D",
    result: "Off-leash reliable at 8 months old",
  },
  {
    initials: "CM",
    name: "Christine M.",
    location: "Bay Area, CA \u2014 Yelp Review",
    quote:
      "\u201CJas understands dog psychology on a level that\u2019s hard to describe. He saw what was driving our dog\u2019s anxiety immediately and gave us a clear plan. Three months later, our dog is a joy to live with.\u201D",
    result: "Anxiety resolved \u2014 a joy to live with",
  },
  {
    initials: "RJ",
    name: "Robert J.",
    location: "New York, NY \u2014 Google Review",
    quote:
      "\u201CWe have a Belgian Malinois \u2014 notoriously difficult breed. Jas handled him like it was nothing. The transformation in 30 days was something we never thought possible. Truly elite trainer.\u201D",
    result: "Belgian Malinois transformed in 30 days",
  },
];

const CASE_STUDIES = [
  {
    eyebrow: "Case Study \u2014 Board & Train",
    heading: "ZEUS: FROM LEASH REACTIVE TO OFF-LEASH RELIABLE",
    paragraphs: [
      "Zeus, a 3-year-old German Shepherd, had been rejected by two trainers before his owners found Cali K9. He lunged at every dog and stranger within sight \u2014 walks had become a daily emergency. His owners were weeks away from making a painful decision about his future.",
      "After a thorough evaluation, Jas identified the root of Zeus\u2019s reactivity: unstructured energy with no clear leadership. Zeus entered the 4-week Board & Train program. Through the 5-Pillar method \u2014 calm energy, structure, communication, consistency, and trust \u2014 Zeus learned to focus on his handler regardless of the environment.",
      "On pickup day, Zeus walked through a crowded parking lot off-leash, passing two dogs and a group of children without a single reaction. His owner broke down in tears.",
    ],
    quote:
      "\u201CBefore Cali K9, Zeus was lunging at every dog on the street. After board and train, he walks by my side like a completely different dog. Jas didn\u2019t just train Zeus \u2014 he changed our lives.\u201D",
    attribution: "\u2014 Marcus T., San Jose, CA",
  },
  {
    eyebrow: "Case Study \u2014 Rescue Rehabilitation",
    heading: "LUNA: THE RESCUE WHO WAS ALMOST RETURNED",
    paragraphs: [
      "Jennifer and her family adopted Luna, a 2-year-old pit bull rescue with an unknown history. Within weeks, Luna\u2019s fear aggression had escalated to the point that guests couldn\u2019t enter the home and the family\u2019s young children were scared of their own dog. Rehoming was becoming a real possibility.",
      "Jas met with Luna and immediately recognized the pattern: a dog with deep insecurity trying to control her environment through aggression. The work began with rebuilding Luna\u2019s sense of safety through structured calm, clear communication, and earned trust \u2014 not force, not fear.",
      "Two weeks into Board & Train, Luna came home a different dog. She greeted the children calmly. She let guests in. She settled on her bed instead of patrolling the perimeter. The family was whole again.",
    ],
    quote:
      "\u201CWe were considering rehoming our rescue. Two weeks in board and train and she came back calm, focused, and loving. I\u2019m emotional typing this. Jas saved our family.\u201D",
    attribution: "\u2014 Jennifer L., Oakland, CA",
  },
  {
    eyebrow: "Case Study \u2014 Online Program",
    heading: "MOCHI: OFF-LEASH AT 8 MONTHS, TAUGHT ONLINE",
    paragraphs: [
      "Priya enrolled her 4-month-old Shiba Inu, Mochi, in the Cali K9 Online Program after frustrating experiences with three other trainers and courses. Shibas are notoriously independent \u2014 trainers kept telling her the breed \u201Ccouldn\u2019t be trained\u201D to a high level.",
      "The 5-Pillar Online Program gave Priya a systematic, step-by-step framework that addressed Mochi\u2019s underlying psychology, not just surface behaviors. Module by module, Priya learned to communicate with Mochi on her terms \u2014 and Mochi started responding. Within weeks the reactivity on leash was gone. By month four, Mochi had solid off-leash recall.",
      "Priya now runs Mochi off-leash at her local park \u2014 something she never believed was possible with a Shiba Inu.",
    ],
    quote:
      "\u201CI tried three trainers before Jas. The online course alone solved problems others couldn\u2019t fix in person. The 5-Pillar system just makes sense. My dog is off-leash reliable at 8 months old.\u201D",
    attribution: "\u2014 Priya K., Bay Area, CA",
  },
];

/* ── Stars helper ── */
function Stars() {
  return (
    <div className="text-[#F59E0B] text-lg" role="img" aria-label="5 out of 5 stars">
      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>
  );
}

/* ── Page ── */
export default function TestimonialsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-[calc(var(--banner-h,0px)+96px)] pb-20 max-[900px]:min-h-0 max-[900px]:py-[calc(var(--banner-h,0px)+80px)] max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-9 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              3,500+ Dogs Transformed
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              4.9&#9733; Avg Rating &middot; 500+ Reviews
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            CLIENT <span className="text-white/40">TESTIMONIALS</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-9">
            From NBA champions to everyday dog owners &mdash; real results from
            real clients. Zero unsolvable dogs.
          </p>
          <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
            <Link
              href="#celebrity-clients"
              className="btn btn-white btn-lg"
            >
              Celebrity Clients &rarr;
            </Link>
            <Link
              href="#verified-reviews"
              className="btn btn-outline-white btn-lg"
            >
              Verified Testimonials &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink text-center mb-10">
            BY THE NUMBERS
          </h2>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl shadow-sm p-8 text-center"
              >
                {s.star ? (
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <span className="font-display text-5xl text-blue-500 leading-none">
                      {s.num}
                    </span>
                    <span className="text-[#F59E0B] text-2xl">&#9733;</span>
                  </div>
                ) : (
                  <div className="font-display text-5xl text-blue-500 leading-none mb-2">
                    {s.num}
                  </div>
                )}
                <div className="font-ui text-xs font-bold tracking-[3px] uppercase text-gray-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      {/* ── CELEBRITY CLIENTS ── */}
      <section
        id="celebrity-clients"
        className="py-20 max-md:py-12 max-[480px]:py-8"
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 text-center mb-3">
            Trusted by the Best
          </p>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink text-center mb-4">
            CELEBRITY CLIENTS
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-10" />
          <CelebGrid />
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      {/* ── VIDEO TESTIMONIALS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-blue-700">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 text-center mb-3">
            Real Client Results
          </p>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white text-center mb-4">
            SEE THE RESULTS
          </h2>
          <div className="w-12 h-[3px] bg-blue-400 mx-auto mb-10" />
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {VIDEOS.map((v) => (
              <div key={v.id} className="flex flex-col gap-2.5">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-black/40">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-none"
                  />
                </div>
                <p className="font-ui text-[15px] font-semibold tracking-wide uppercase text-white/85 px-0.5">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      {/* ── VERIFIED REVIEWS ── */}
      <section
        id="verified-reviews"
        className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream"
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Google &amp; Yelp &middot; 5 Stars
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              VERIFIED REVIEWS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {REVIEWS.map((r) => (
              <div
                key={r.initials}
                className="bg-white rounded-xl border border-border p-8 card-hover flex flex-col"
              >
                <div className="flex gap-[3px]" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-sm leading-none">&#9733;</span>
                  ))}
                </div>
                <p className="font-body text-[15px] text-ink/80 leading-relaxed mb-5 mt-3 italic flex-1">
                  {r.quote}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-display text-sm text-blue-500 shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <cite className="font-ui text-sm font-bold text-ink not-italic block">
                      {r.name}
                    </cite>
                    <span className="font-ui text-xs text-gray-muted">
                      {r.location}
                    </span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {r.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      {/* ── CASE STUDIES ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 text-center mb-3">
            Real Transformations
          </p>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink text-center mb-4">
            CLIENT SUCCESS STORIES
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-10" />

          <div className="flex flex-col gap-10 max-w-[820px] mx-auto">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.heading}
                className="bg-white rounded-xl shadow-sm p-9 max-md:p-6"
              >
                <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 mb-3">
                  {cs.eyebrow}
                </p>
                <h3 className="font-display text-[28px] text-ink mb-3">
                  {cs.heading}
                </h3>
                <div className="w-12 h-[3px] bg-blue-500 mb-6" />
                {cs.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-[15px] text-gray-muted leading-[1.8] mb-4"
                  >
                    {p}
                  </p>
                ))}
                <div className="mt-5">
                  <Stars />
                </div>
                <blockquote className="border-l-[3px] border-blue-500 pl-4 mt-2">
                  <p className="font-body text-[15px] italic text-gray-muted/80 leading-[1.7]">
                    {cs.quote}
                  </p>
                  <footer className="mt-2 font-ui text-xs font-bold tracking-[1px] uppercase text-gray-muted">
                    {cs.attribution}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Your Story Starts Here"
        heading="READY FOR YOUR OWN SUCCESS STORY?"
        description="Join 3,500+ dogs transformed by the Cali K9 method. Start with an evaluation."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation" }}
        dark
      />
    </main>
  );
}
