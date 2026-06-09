"use client";

import { useState } from "react";
import FormEmbed from "@/components/FormEmbed";

/* ── Modal ── */
function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="rounded-xl w-full max-w-[520px] max-h-[90vh] overflow-y-auto relative shadow-2xl"
        style={{ background: "linear-gradient(135deg, #122E85 0%, #122E85 50%, #1A3FAB 100%)" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white text-xl font-bold leading-none z-10 transition-colors"
        >
          ✕
        </button>
        <div className="p-6 pt-10">
          <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/60 mb-1">
            Book Your Evaluation &mdash; Takes 60 Seconds
          </div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-[40px] text-white leading-none">$27</span>
          </div>
          <FormEmbed
            formId="GtiGDcoxe0fG5ufwj7Km"
            formName="Evaluation Cart"
            title="Book Your Evaluation"
            height={804}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Shared CTA button ── */
function CtaButton({ onClick, size = "md" }: { onClick: () => void; size?: "md" | "lg" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-[540px] bg-[#D4820A] hover:bg-[#b86e08] text-white font-ui font-black tracking-[1.5px] uppercase rounded-sm transition-colors duration-150 shadow-lg active:scale-[0.98] ${size === "lg" ? "text-[17px] py-6 px-10" : "text-[15px] py-5 px-8"}`}
    >
      Yes &mdash; I Want My Dog To Actually Listen
    </button>
  );
}

/* ── Trust badges ── */
function TrustRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-400 font-body text-sm mt-3">
      <span>🔒 Secure Checkout</span>
      <span>&middot;</span>
      <span>⚡ Instant Access</span>
      <span>&middot;</span>
      <span>✅ 30-Day Guarantee</span>
    </div>
  );
}

/* ── Price display ── */
function PriceRow({ badge }: { badge: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="font-display text-[56px] text-[#1251CC] leading-none">$27</span>
      <span className="font-body text-2xl text-gray-400 line-through">$97</span>
      <span className="bg-[#1251CC] text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-sm">
        {badge}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function EvaluationV2Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);

  return (
    <main className="bg-white text-[#0D0D0D]">

      {/* ── Announcement bar ── */}
      <div className="bg-[#1251CC] text-white text-center py-3 px-4">
        <span className="font-ui text-[12px] font-bold tracking-[2px] uppercase">
          🐾 &nbsp; A Dog Training System &mdash; The 5-Pillar Dog Behavior System &nbsp; 🐾
        </span>
      </div>

      {/* ════════════ HERO ════════════ */}
      <div className="bg-white border-b border-gray-200 pt-20 pb-16 max-md:pt-14 max-md:pb-10 px-6 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="inline-block bg-amber-50 border border-amber-300 text-[#D4820A] font-ui text-[11px] font-bold tracking-[3px] uppercase px-5 py-2.5 rounded-sm mb-8">
            For Dog Owners Watching Their Dog Run the House
          </div>
          <video
            className="w-full rounded-xl block mb-8 bg-black"
            poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67cf3c0717e9d95dac991999.png"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67d1be3a9138277227e87326.mp4"
              type="video/mp4"
            />
          </video>
          <h1 className="font-display text-[clamp(34px,5.5vw,56px)] text-[#0D0D0D] leading-[1.0] uppercase mb-4">
            What Netflix, Your Favorite Celebrity, and Millions of Instagram Followers All Trust &mdash;{" "}
            <em className="not-italic text-[#1251CC]">Cali K9.</em>
          </h1>
          <p className="font-display text-[clamp(20px,3vw,28px)] text-[#333333] max-w-[620px] mx-auto leading-[1.3] uppercase mb-8">
            Thousands of dogs transformed. Every breed. Every behavior problem. Now it&rsquo;s your turn.
          </p>
          <p className="font-body text-[18px] text-[#333333] max-w-[620px] mx-auto leading-[1.7] mb-8">
            The <strong className="text-[#0D0D0D]">5-Pillar System</strong> is a simple, proven framework &mdash; Obedience,
            Socialization, Agility, Behavior Management, Problem Solving &mdash; that
            removes the guesswork from your dog&rsquo;s training so you always know
            exactly what your dog needs and what to do next.
          </p>
          <PriceRow badge="72% Off Today" />
          <div className="flex justify-center mb-1">
            <CtaButton onClick={open} size="lg" />
          </div>
          <TrustRow />
        </div>
      </div>

      {/* ════════════ SOCIAL PROOF ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            Real Results From Real Dogs
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            Here&rsquo;s What Happened When Real Owners Used the 5-Pillar System
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-8" />
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {[
              {
                quote: "My GSD was completely out of control — charging the door, lunging at every dog on the street, wouldn't come when called no matter what. After the assessment with Jas I finally understood WHY. Six weeks in he walks right beside me. My neighbors can't believe it's the same dog.",
                name: "Marcus T.", detail: "German Shepherd · Los Angeles",
                result: "Leash reactive → fully controlled in 6 weeks",
              },
              {
                quote: "I spent $3,000 on two different trainers before Cali K9. Both told me my Dobe was 'too dominant.' Jas assessed him in 20 minutes and told me exactly what was happening — anxiety, not dominance. Total game changer. He's now the most relaxed dog at the dog park.",
                name: "Simone R.", detail: "Doberman · Miami",
                result: "Misdiagnosed by 2 trainers → correct protocol → calm in 4 weeks",
              },
              {
                quote: "I was about to rehome my Pit Bull. I'm not exaggerating. The $27 assessment was the last thing I tried before making that call. Jas broke down every single behavior and gave me a real plan. That was 3 months ago. My dog is the reason I get up excited every morning now.",
                name: "Derek J.", detail: "American Pit Bull · New York",
                result: "Near rehoming → transformed in 90 days",
              },
              {
                quote: "Bought every YouTube course. Tried shock collars, prong collars, the clicker thing. Nothing stuck. The 5-Pillar framework made me understand training isn't about tools — it's about temperament. Once I understood my dog's actual motivators everything clicked within days.",
                name: "Priya K.", detail: "Belgian Malinois · Bay Area",
                result: "Years of failed methods → foundation fixed in 2 weeks",
              },
            ].map((t) => (
              <div key={t.name} className="bg-[#F8F8F8] border border-gray-200 rounded-md p-7">
                <div className="text-[#D4820A] text-sm mb-3">★★★★★</div>
                <p className="font-body text-[15px] text-[#333333] leading-[1.7] italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-ui text-[14px] font-extrabold text-[#0D0D0D]">{t.name}</div>
                <div className="font-body text-[13px] text-gray-500 mb-2">{t.detail}</div>
                <span className="inline-block bg-blue-50 border border-blue-200 text-[#1251CC] font-ui text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-[0.5px]">
                  {t.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY NOTHING HAS WORKED ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            Why Nothing Has Worked
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            The Old Way Keeps Producing the Same Broken Dog. Here&rsquo;s Why.
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-6" />
          <p className="font-body text-[17px] text-[#333333] leading-[1.75] mb-8 max-w-[640px]">
            Most of these approaches would have worked if you had a simple dog with simple issues. But once a behavior is layered — fear, drive, reactivity, inconsistency — a surface-level fix just pushes the problem somewhere else. Here&rsquo;s why it keeps falling apart:
          </p>
          <ul className="divide-y divide-gray-200">
            {[
              {
                title: "Treating symptoms, not temperament",
                body: "Your dog jumps, so you train \"off.\" Your dog barks, so you train \"quiet.\" Your dog pulls, so you buy a better harness. None of these address what's actually driving the behavior. You fix one thing and something else breaks. That's because behavior isn't random — it's a direct output of your dog's temperament, drive state, and social structure at home. Until you address those, you're playing whack-a-mole forever.",
              },
              {
                title: "One-size-fits-all training programs",
                body: "The group class, the YouTube series, the online course — they all assume your dog responds to the same motivators and learns at the same pace as every other dog. But a high-drive Malinois and an anxious rescue mutt need completely different approaches. Putting them through the same program doesn't train your dog. It confuses your dog, and then people blame the dog.",
              },
              {
                title: "Skipping the three phases",
                body: "Most training stops at Learning — the dog does it in the kitchen with a treat in your hand. But real obedience requires Proofing (does it work in a new environment?) and Securing (does it hold under real pressure?). When you skip Proofing and Securing, your dog \"knows\" the command at home and forgets it the moment something interesting walks by. That's not a training problem. That's an incomplete training process.",
              },
              {
                title: "No structure at home",
                body: "You can spend $5,000 on the best trainer in the country, but if your dog comes home and gets on the couch, demands attention, and leads every walk — the training evaporates in two weeks. Structure isn't punishment. It's the operating system. Without it, every trained behavior slowly gets replaced by what your dog has learned it can get away with. The trainer fixed the dog. The home environment unfixed it.",
              },
              {
                title: "Hiring trainers who can't read the dog",
                body: "Most trainers were taught a method — positive only, balanced, e-collar, pack theory — and they apply that method to every dog they see. A trainer who can only use one tool will diagnose every dog as needing that tool. If they can't read your dog's 16 temperament dimensions before they start, they're not training your dog. They're training a version of your dog that doesn't exist.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4 items-start py-6 list-none">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                  ✗
                </div>
                <div>
                  <div className="font-ui text-[15px] font-extrabold text-[#0D0D0D] mb-1.5">{item.title}</div>
                  <p className="font-body text-[14px] text-[#333333] leading-[1.7]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-7 bg-blue-50 border-l-4 border-[#1251CC] rounded-r-md">
            <p className="font-body text-[17px] leading-[1.8] text-[#222222]">
              The dog isn&rsquo;t the problem. <strong className="text-[#0D0D0D]">The approach is the problem.</strong> Every solution you&rsquo;ve been sold — a new training tool, a new method, a new trainer — is just a different rod. It doesn&rsquo;t matter how good the rod is if nobody&rsquo;s taught you how to read the water you&rsquo;re fishing in. Your dog&rsquo;s behavior is information. Once you learn to read it, everything becomes obvious.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ 5 PILLARS ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            A Completely Different Approach
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            Here&rsquo;s Where the 5-Pillar System Is Built Different
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-6" />
          <p className="font-body text-[17px] text-[#333333] leading-[1.75] mb-10 max-w-[640px]">
            This isn&rsquo;t another training trick or method with a catchy name. This is a complete system — five interlocking pillars that work together to produce a dog that&rsquo;s reliable, calm, and actually enjoyable to be around.
          </p>
          <div className="space-y-10">
            {[
              {
                num: "01", label: "Pillar 01 — Obedience",
                title: "Build a Foundation That Actually Holds Under Pressure",
                body: "First, you stop teaching commands and start building communication. Real obedience isn't \"sit when there's a treat in your hand\" — it's \"sit the first time, every time, no matter what's happening around you.\" You'll understand the three-phase framework — Learning, Proofing, Securing — and know exactly which phase your dog is stuck in and what to do to move forward. No more commands that work at home and disappear in public.",
              },
              {
                num: "02", label: "Pillar 02 — Socialization",
                title: "Read Your Dog the Way Jas Reads Every Dog",
                body: "Once the foundation is set, most owners stare at bad behavior and panic. The 5-Pillar System teaches you to read your dog across 16 temperament dimensions — drive, threshold, social confidence, environmental sensitivity — all at once, the way a professional reads them. When you can read your dog correctly, you'll be able to tell the difference between a dog that needs more exposure and a dog that needs a completely different protocol.",
              },
              {
                num: "03", label: "Pillar 03 — Agility",
                title: "Channel Drive Before It Channels You",
                body: "This is where most owners quietly give up. High-drive dogs — the Malinois, the Shepherd, the working-line breeds — need an outlet or they will create one. The outlet is usually your furniture, your guests, or your other dog. The 5-Pillar System gives you a clear framework for drive management so your dog's energy is working for you, not against you. No more nervously watching the door when someone knocks.",
              },
              {
                num: "04", label: "Pillar 04 — Behavior Management",
                title: "Build the Structure That Makes Training Stick at Home",
                body: "Once you understand your dog's drives and have a real obedience foundation, the next step is structure — and not the way most people do it. This isn't a list of rules. It's the operating system that keeps trained behavior from eroding over time. Place, threshold work, controlled access, consistent leadership — these are what separate a dog that stays trained from one that regresses every three weeks.",
              },
              {
                num: "05", label: "Pillar 05 — Problem Solving",
                title: "Solve the Actual Problem, Not the Symptom",
                body: "This is what locks everything in. Once the first four pillars are in place, specific problems — aggression, reactivity, separation anxiety, resource guarding — become solvable because you understand the root cause. You stop being the owner whose results depend on which trainer they hired last and start being the one who can look at any behavior and know within minutes what's driving it and what protocol fits.",
              },
            ].map((p) => (
              <div key={p.num} className="grid grid-cols-[60px_1fr] gap-x-6 items-start max-[480px]:grid-cols-1">
                <div className="font-display text-[56px] text-[#1251CC] leading-none opacity-25 max-[480px]:text-[36px]">
                  {p.num}
                </div>
                <div>
                  <span className="block font-ui text-[10px] font-extrabold tracking-[3px] uppercase text-[#1251CC] mb-1.5">
                    {p.label}
                  </span>
                  <div className="font-display text-[28px] text-[#0D0D0D] uppercase leading-tight mb-2.5">{p.title}</div>
                  <p className="font-body text-[14px] text-[#333333] leading-[1.75]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TIMELINE ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            What To Expect
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            Here&rsquo;s What Happens After Your Behavior Breakthrough Assessment
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-10" />
          <div className="space-y-10">
            {[
              {
                step: "1", title: "In the Next 60 Minutes",
                sub: "\"Oh. So THAT'S why my dog does that.\"",
                checks: [
                  "You'll complete your Behavior Breakthrough Assessment and get the first clear explanation of what's actually driving your dog's specific behaviors",
                  "You'll identify which of the 16 temperament dimensions are at the root of the problems you've been fighting",
                  "You'll discover whether your dog is a praise, food, or toy motivator — and why the wrong motivator has been undermining everything you've tried",
                  "You'll know exactly which of the 5 Pillars your dog is missing and where to start",
                ],
              },
              {
                step: "2", title: "In the Next 7 Days",
                sub: "\"I'm not correcting the same thing for the hundredth time. I'm doing something different.\"",
                checks: [
                  "You'll apply the correct protocol to your dog's specific temperament profile — not a generic method",
                  "You'll stop reacting to every behavior incident and start responding based on what's actually happening in your dog's drive state",
                  "You'll implement Place and threshold work as the structural foundation — and your dog's baseline stress level will start to drop",
                  "Your dog's behavior will start telling a different story — and you'll know how to read it",
                ],
              },
              {
                step: "3", title: "In the Next 30 Days",
                sub: "\"This is the first month in a long time I'm not dreading walks.\"",
                checks: [
                  "You'll have real obedience — not \"good at home\" obedience — that holds in public, around other dogs, and under distraction",
                  "You'll understand the difference between proofed behavior and secured behavior, and your dog will be moving toward secured",
                  "You'll stop white-knuckling every interaction and start actually enjoying your dog again",
                  "Your household structure will feel different — calmer, more predictable, less like crisis management",
                ],
              },
              {
                step: "4", title: "In the Next 90 Days",
                sub: "\"I'm not the same dog owner I was three months ago.\"",
                checks: [
                  "You'll have a dog that you're proud to take anywhere — restaurants, parks, events, travel",
                  "You'll have a system you can apply to any behavior issue — for this dog or any future dog — regardless of breed, age, or history",
                  "You'll know what to do when a new behavior appears — because you'll know exactly which pillar the problem lives at",
                  "The \"fix the symptom\" trap won't be your life anymore",
                ],
              },
            ].map((item) => (
              <div key={item.step} className="grid grid-cols-[48px_1fr] gap-x-5 items-start relative">
                <div className="w-12 h-12 rounded-full bg-[#1251CC] text-white flex items-center justify-center font-ui font-black text-[15px] shrink-0 relative z-10">
                  {item.step}
                </div>
                <div>
                  <div className="font-ui text-[17px] font-extrabold text-[#0D0D0D] mb-1 mt-2.5">{item.title}</div>
                  <div className="font-body text-[13px] text-[#D4820A] font-bold italic mb-3">{item.sub}</div>
                  <ul className="space-y-2">
                    {item.checks.map((c, i) => (
                      <li key={i} className="font-body text-[14px] text-[#333333] leading-[1.5] pl-5 relative">
                        <span className="absolute left-0 text-[#1251CC] font-black">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ BIO ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            About The Creator
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            This Isn&rsquo;t Something I Made Up Last Week
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-8" />
          <div className="grid grid-cols-[120px_1fr] gap-x-8 items-start max-[480px]:grid-cols-1">
            <div className="w-[120px] h-[120px] rounded-full bg-[#F8F8F8] border-[3px] border-[#1251CC] flex items-center justify-center text-5xl shrink-0 max-[480px]:mb-5">
              🐾
            </div>
            <div>
              <div className="font-display text-[28px] tracking-[2px] uppercase text-[#0D0D0D] mb-1">Jas Leverette</div>
              <div className="font-ui text-[13px] font-bold tracking-[1px] uppercase text-[#1251CC] mb-5">
                Founder, Cali K9 · Host, Netflix&rsquo;s Canine Intervention
              </div>
              <div className="space-y-3 font-body text-[15px] text-[#333333] leading-[1.8]">
                <p>I&rsquo;m not a dog training influencer. I&rsquo;m a practitioner who&rsquo;s been in this for 30 years — the last 17 professionally — working with everything from family pets to police K9s to some of the most high-profile dogs in the country.</p>
                <p>A few years ago I watched the same pattern play out over and over. Owners showing up having already spent thousands — sometimes tens of thousands — on trainers and programs that produced results that lasted three weeks.</p>
                <p>The problem wasn&rsquo;t the owners. It wasn&rsquo;t even most of the trainers. The problem was that nobody was addressing the foundation. Everyone was treating symptoms. Nobody was building the actual system the dog needed to stay trained.</p>
                <p>So I took 30 years of what I knew worked — from military and police methodology, from working breeds, from behavioral rehabilitation — and built the 5-Pillar System. Not a method. A complete operating system for any dog.</p>
                <p>The $27 Behavior Breakthrough Assessment is how it starts. Not because it&rsquo;s cheap — because it&rsquo;s the right first step. You can&rsquo;t build the right program for your dog until you know exactly what your dog actually needs.</p>
              </div>
              <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-200">
                {[
                  { num: "30", label: "Years as a Practitioner" },
                  { num: "17", label: "Years Professional" },
                  { num: "4", label: "Cities" },
                  { num: "1M+", label: "Followers" },
                  { num: "Netflix", label: "Canine Intervention" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-[32px] text-[#1251CC] leading-none">{s.num}</div>
                    <div className="font-ui text-[11px] text-gray-500 uppercase tracking-[1px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ WHAT'S INSIDE ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            Everything Included
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            What&rsquo;s Inside the Behavior Breakthrough Assessment
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-8" />
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {[
              { num: "Module 01", title: "Temperament Mapping", body: "Identify your dog's 16 temperament dimensions — the complete picture of how your dog is wired before any training starts." },
              { num: "Module 02", title: "Motivator Identification", body: "Discover whether your dog is a praise, food, or toy motivator — and why using the wrong one has been sabotaging your results from day one." },
              { num: "Module 03", title: "Behavior Root Cause Analysis", body: "Map every problem behavior back to its root cause — fear, drive, social structure, threshold — so you're treating the cause, not the symptom." },
              { num: "Module 04", title: "5-Pillar Gap Audit", body: "Identify exactly which of the 5 pillars are missing or broken in your dog's current foundation — and which to prioritize first." },
              { num: "Module 05", title: "Custom Training Roadmap", body: "Walk away with a specific, sequenced action plan built around your dog's actual profile — not a generic program designed for an imaginary average dog." },
              { num: "Bonus", title: "K9 Combustion Framework PDF", body: "The proprietary method Jas uses to reset any dog's behavioral baseline — the same framework used in every Cali K9 Board & Train program." },
            ].map((m) => (
              <div key={m.num} className="bg-[#F8F8F8] border border-gray-200 rounded-md p-6">
                <div className="font-ui text-[13px] font-extrabold tracking-[3px] uppercase text-[#1251CC] mb-2.5">{m.num}</div>
                <div className="font-ui text-[15px] font-extrabold text-[#0D0D0D] mb-2">{m.title}</div>
                <p className="font-body text-[13px] text-gray-500 leading-[1.6]">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GUARANTEE ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="bg-blue-50 border-2 border-[#1251CC] rounded-lg p-10 max-md:p-7 text-center">
            <span className="text-5xl block mb-4">🛡️</span>
            <h3 className="font-display text-[32px] tracking-[2px] uppercase text-[#0D0D0D] mb-4">
              Your Assessment Is Backed by a 30-Day Money-Back Guarantee
            </h3>
            <p className="font-body text-[15px] text-[#333333] max-w-[540px] mx-auto leading-[1.7]">
              Complete the Behavior Breakthrough Assessment, work through all five modules, run the Temperament Map on your own dog — and if you don&rsquo;t have a completely new understanding of why your dog has been behaving the way they have, just email us within 30 days. We&rsquo;ll refund your $27 and let you keep the entire assessment free of charge. That&rsquo;s how confident we are that this changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-16 max-md:py-10 border-b border-gray-200 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block font-ui text-[11px] font-bold tracking-[3px] uppercase text-[#1251CC] mb-3">
            Got Questions
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#0D0D0D] leading-[1.05] uppercase mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[3px] bg-[#1251CC] mb-8" />
          <div className="divide-y divide-gray-200">
            {[
              { q: "How is this different from other dog training programs?", a: "Most programs teach you a method and apply it universally. The 5-Pillar System starts with your specific dog's temperament profile — 16 dimensions assessed before any protocol is applied. That means you're never guessing which approach fits. You know, because you did the work to understand your dog first." },
              { q: "My dog is older. Is it too late?", a: "No. The idea that you can't teach an old dog new tricks is one of the most damaging myths in dog training. Older dogs require a slightly different approach to proofing and securing — but the 5-Pillar framework applies at every age. We've seen dramatic turnarounds in dogs 8, 10, and 12 years old." },
              { q: "Will this work for my breed?", a: "Yes. The 5-Pillar System was built on 30 years of working with every breed category — working dogs, herding breeds, terriers, toy breeds, mixed breeds, and everything in between. The pillars are breed-agnostic. The temperament mapping inside the assessment is specifically designed to capture breed-specific drive and threshold differences." },
              { q: "I've tried everything. Why would this be different?", a: "Because everything you've tried was built on the same assumption — that training is about teaching commands. The 5-Pillar System is built on a different assumption: that behavior is a direct output of temperament, drive state, and social structure. Once you address those, commands aren't something you have to enforce. They become natural." },
              { q: "What if I want more than the assessment?", a: "The assessment is the starting point. After completion, you'll have a clear picture of where your dog is and which Cali K9 program — In-Person Training, Board & Train, or Elite Package — is the right fit. The $27 is a qualifier, not a replacement for real training. It just makes sure you start in the right place." },
              { q: "Is there a guarantee?", a: "Yes. Complete the full assessment within 30 days. If you don't have an entirely new understanding of your dog's behavior and what to do about it, email us and we'll refund every dollar. No questions, no hoops." },
            ].map((faq) => (
              <div key={faq.q} className="py-5">
                <div className="font-ui text-[15px] font-bold text-[#0D0D0D] mb-2.5">{faq.q}</div>
                <p className="font-body text-[14px] text-[#333333] leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <div className="bg-[#F4F4F4] py-20 max-md:py-12 px-6 text-center">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-display text-[clamp(36px,6vw,60px)] text-[#0D0D0D] leading-[1.05] uppercase mb-5">
            Ready To Finally Understand Your Dog?
          </h2>
          <p className="font-body text-[17px] text-[#333333] max-w-[560px] mx-auto leading-[1.7] mb-8">
            Get the Behavior Breakthrough Assessment for just $27. Know exactly what your dog needs. Build the right plan. Stop guessing.
          </p>
          <PriceRow badge="Today Only" />
          <div className="flex justify-center mb-1">
            <CtaButton onClick={open} size="lg" />
          </div>
          <TrustRow />
          <p className="text-gray-400 font-body text-sm mt-5">
            Visa &middot; Mastercard &middot; Amex &middot; PayPal &middot; Discover
          </p>
        </div>
      </div>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-white border-t border-gray-200 text-center py-8 px-6">
        <p className="font-body text-[12px] text-gray-500">
          &copy; 2026 Cali K9 &nbsp;&middot;&nbsp;{" "}
          <a href="https://calik9.com" className="text-[#1251CC] no-underline hover:underline">calik9.com</a>
          &nbsp;&middot;&nbsp; San Jose &middot; Los Angeles &middot; Miami &middot; New York
        </p>
        <p className="font-body text-[12px] text-gray-500 mt-2">
          Questions? Email{" "}
          <a href="mailto:support@calik9.com" className="text-[#1251CC] no-underline hover:underline">support@calik9.com</a>
        </p>
      </footer>

      {/* ── Booking modal ── */}
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
