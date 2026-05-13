import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "Board and Train Programs: Are They Worth It?",
  description:
    "An honest look at board and train dog training \u2014 what it costs, how it works, who it\u2019s best for, and what to look for in a program that actually delivers lasting results.",
};

export default function BoardAndTrainWorthItPage() {
  return (
    <>
      {/* ── ARTICLE HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Board &amp; Train
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            BOARD AND TRAIN: <span className="text-white/40">ARE THEY WORTH IT?</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-6">
            An Honest Look at Cost, Process, and Results
          </p>
          <div className="flex items-center gap-3 font-ui text-sm text-white/50 tracking-[1px]">
            <span>By Jas Leverette</span>
            <span>&middot;</span>
            <span>April 2, 2026</span>
            <span>&middot;</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
        <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="space-y-6 font-body text-[15px] text-gray-muted leading-[1.7]">
            <p>
              Board and train is one of the most searched &mdash; and most
              debated &mdash; topics in dog training. Some people swear by it.
              Others call it a waste of money. After running one of the most
              established{" "}
              <Link href="/board-and-train" className="text-blue-500 underline hover:text-blue-700">
                board and train programs
              </Link>{" "}
              in the country for over 15 years, I&apos;m going to give you the
              honest truth: it works, but only if you choose the right program.
            </p>

            <p>
              This guide covers everything you need to know &mdash; what board
              and train actually is, what a good program looks like versus a bad
              one, who it&apos;s best for, and what you should expect to pay. No
              sales pitch. Just the reality of how it works.
            </p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/dog-line-up.webp"
                alt="Dogs in formation demonstrating obedience at the Cali K9 training facility"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              WHAT IS BOARD AND TRAIN?
            </h2>

            <p>
              Board and train (sometimes called &ldquo;doggy boot camp&rdquo; or
              &ldquo;immersive training&rdquo;) is exactly what it sounds like:
              your dog lives at a training facility for a set period &mdash;
              typically 1 to 4 weeks &mdash; and receives professional training
              every day. At the end of the program, your dog comes home with new
              skills, and you receive a handoff session to learn how to maintain
              them.
            </p>

            <p>
              Think of it as full-time school versus tutoring. In a weekly
              private session, your dog gets 1 hour of professional training per
              week and the rest depends on you. In board and train, your dog gets
              multiple training sessions every day, in different environments,
              with professional handling around the clock.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              WHAT A TYPICAL DAY LOOKS LIKE
            </h2>

            <p>
              At{" "}
              <Link href="/about-us" className="text-blue-500 underline hover:text-blue-700">
                Cali K9
              </Link>
              , a board and train dog&apos;s day includes:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-ink">Morning session</strong> &mdash;
                Structured obedience work: sit, down, stay, heel, recall, place
                command
              </li>
              <li>
                <strong className="text-ink">Midday session</strong> &mdash;
                Socialization and behavior modification. This might mean working
                around other dogs, practicing leash manners in a busy area, or
                addressing specific issues like{" "}
                <Link
                  href="/blog/aggressive-dog-training"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  aggression
                </Link>{" "}
                or reactivity
              </li>
              <li>
                <strong className="text-ink">Afternoon session</strong> &mdash;
                Real-world proofing. Training in distracting environments &mdash;
                parks, sidewalks, pet stores, outdoor cafes
              </li>
              <li>
                <strong className="text-ink">Throughout the day</strong> &mdash;
                Structured routines, crate training, impulse control, and
                state-of-mind work
              </li>
            </ul>

            <p>
              Owners receive daily video updates so they can see their dog&apos;s
              progress in real time. This isn&apos;t a black box &mdash;
              transparency is non-negotiable in a good program.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              THE HONEST PROS AND CONS
            </h2>

            <p>
              I&apos;m not going to pretend board and train is perfect for every
              dog and every situation. Here&apos;s the real breakdown:
            </p>

            <h3 className="font-display text-xl text-ink pt-2">THE PROS</h3>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-ink">Faster results</strong> &mdash;
                What takes months in weekly sessions can happen in 2-4 weeks of
                immersive training. The dog is learning all day, every day.
              </li>
              <li>
                <strong className="text-ink">Professional consistency</strong>{" "}
                &mdash; The biggest challenge with owner-led training is
                inconsistency. Board and train eliminates that variable during
                the critical learning phase.
              </li>
              <li>
                <strong className="text-ink">Complex cases</strong> &mdash; For
                serious behavioral issues &mdash; aggression, severe anxiety,
                multi-dog reactivity &mdash; board and train provides the
                controlled environment needed for safe, effective modification.
              </li>
              <li>
                <strong className="text-ink">Busy lifestyles</strong> &mdash;
                Not everyone has 2-3 hours per day to dedicate to training.
                Board and train gives you a trained dog without requiring you to
                take time off work.
              </li>
              <li>
                <strong className="text-ink">Foundation building</strong> &mdash;
                The dog returns home with a solid foundation that you maintain,
                rather than trying to build from scratch.
              </li>
            </ul>

            <h3 className="font-display text-xl text-ink pt-2">THE CONS</h3>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-ink">Cost</strong> &mdash; Board and
                train is the most expensive option. Quality programs range from
                $2,000 to $5,000+ depending on length and complexity. You&apos;re
                paying for full-time professional attention.
              </li>
              <li>
                <strong className="text-ink">Separation</strong> &mdash; Your
                dog is away from home for 1-4 weeks. For some owners (and some
                dogs), this is stressful. Good programs mitigate this with daily
                updates and a structured transition.
              </li>
              <li>
                <strong className="text-ink">Owner follow-through</strong>{" "}
                &mdash; This is the biggest risk. If you don&apos;t maintain the
                training at home, behaviors will regress. The handoff session is
                critical, and you need to commit to the maintenance plan.
              </li>
              <li>
                <strong className="text-ink">Bad programs exist</strong> &mdash;
                Not all board and train facilities are equal. Some use outdated
                methods, provide minimal actual training, or don&apos;t include
                owner education. Research is essential.
              </li>
            </ul>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-ink">
              <p>
                &ldquo;Board and train isn&apos;t magic. It&apos;s an
                accelerator. The dog gets a massive head start, but the owner
                still has to show up and do the work at home.&rdquo;
              </p>
            </blockquote>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/trained-dogs1.jpeg"
                alt="Trained dogs demonstrating calm behavior after completing Cali K9 board and train"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              WHO IS BOARD AND TRAIN BEST FOR?
            </h2>

            <p>Board and train is ideal when:</p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Your dog has serious behavioral issues (aggression, severe
                reactivity, extreme anxiety) that require professional handling
                in a controlled environment
              </li>
              <li>
                You&apos;ve tried private sessions or group classes without
                lasting results
              </li>
              <li>
                Your schedule makes consistent daily training sessions
                unrealistic
              </li>
              <li>
                You want a strong foundation built by professionals that you then
                maintain
              </li>
              <li>
                You&apos;re dealing with a large or powerful breed that&apos;s
                difficult to manage physically during training
              </li>
              <li>
                You&apos;re preparing your dog for a major life change (new baby,
                move, etc.) and need results on a timeline
              </li>
            </ul>

            <p>
              Board and train may not be the best fit if your dog has severe
              separation anxiety (being away from home could make it worse), if
              your budget is limited (consider{" "}
              <Link href="/newclientservices" className="text-blue-500 underline hover:text-blue-700">
                private sessions or online training
              </Link>{" "}
              instead), or if the behavioral issue is primarily an owner
              education problem rather than a dog behavior problem.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              WHAT TO LOOK FOR IN A PROGRAM
            </h2>

            <p>
              If you&apos;re considering board and train, here&apos;s what
              separates a quality program from a risky one:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-ink">Transparency</strong> &mdash; Daily
                video updates, clear communication, willingness to show you the
                facility and explain their methods. If a program won&apos;t let
                you see where your dog will stay, that&apos;s a red flag.
              </li>
              <li>
                <strong className="text-ink">Method clarity</strong> &mdash; Ask
                specifically how they train. Vague answers like
                &ldquo;balanced training&rdquo; or &ldquo;whatever works&rdquo;
                aren&apos;t good enough. You should understand the philosophy and
                agree with it.
              </li>
              <li>
                <strong className="text-ink">Owner handoff</strong> &mdash; A
                program that doesn&apos;t include thorough owner education is
                setting you up to fail. At Cali K9, the handoff session is one of
                the most important parts of the program.
              </li>
              <li>
                <strong className="text-ink">Track record</strong> &mdash;
                Reviews, testimonials, before-and-after evidence. How long have
                they been operating? What&apos;s their reputation?
              </li>
              <li>
                <strong className="text-ink">Follow-up support</strong> &mdash;
                What happens after your dog comes home? Good programs offer
                follow-up sessions or support to ensure the transition goes
                smoothly.
              </li>
              <li>
                <strong className="text-ink">Specialization</strong> &mdash; If
                your dog has aggression or complex behavioral issues, make sure
                the program has specific experience with those cases. General
                obedience trainers are not behavior modification specialists.
              </li>
            </ul>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              COST CONSIDERATIONS
            </h2>

            <p>
              Board and train pricing varies significantly by region, program
              length, and facility quality. Here&apos;s the general landscape:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-ink">
                  Budget programs ($1,000-$2,000)
                </strong>{" "}
                &mdash; Typically shorter stays (1-2 weeks), may use less
                experienced trainers, limited follow-up support
              </li>
              <li>
                <strong className="text-ink">
                  Mid-range programs ($2,000-$4,000)
                </strong>{" "}
                &mdash; 2-4 week programs with experienced trainers, daily
                updates, and handoff sessions
              </li>
              <li>
                <strong className="text-ink">
                  Premium programs ($4,000-$7,000+)
                </strong>{" "}
                &mdash; Specialized behavior modification, complex cases
                (aggression, severe anxiety), senior trainers, extensive
                follow-up support
              </li>
            </ul>

            <p>
              At Cali K9, our{" "}
              <Link href="/board-and-train" className="text-blue-500 underline hover:text-blue-700">
                Elite Board &amp; Train program
              </Link>{" "}
              reflects the level of expertise, daily training volume, and
              comprehensive owner education included.
            </p>

            <p>
              When evaluating cost, consider what you&apos;ve already spent on
              training that didn&apos;t work. Many of our clients come to us
              after spending thousands on private sessions, group classes, and
              online courses without lasting results. Board and train often ends
              up being the most cost-effective option &mdash; not because
              it&apos;s cheap, but because it works the first time.
            </p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/trained-dogs2.jpeg"
                alt="Dogs showcasing real-world training results from the Cali K9 board and train program"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              THE BOTTOM LINE
            </h2>

            <p>
              Board and train is worth it &mdash; if you choose the right program
              and commit to maintaining the training at home. It&apos;s not a
              magic fix. It&apos;s a professional accelerator that gives your dog
              the best possible foundation for lasting behavioral change.
            </p>

            <p>
              If you&apos;re not sure whether board and train is right for your
              dog, the best next step is an{" "}
              <Link href="/evaluation-with-jas" className="text-blue-500 underline hover:text-blue-700">
                evaluation
              </Link>
              . In 30-45 minutes, we&apos;ll assess your dog&apos;s behavior,
              identify the root issues, and recommend the program that&apos;s
              actually the best fit &mdash; which might be board and train, or
              might be something else entirely. No pressure, just honest
              guidance.
            </p>

            <p>
              <Link href="/evaluation-with-jas" className="text-blue-500 underline hover:text-blue-700">
                Book your evaluation
              </Link>{" "}
              and let&apos;s figure out the right path for your dog.
            </p>
          </div>
        </div>
      </article>

      {/* ── RELATED ARTICLES ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink mb-8 text-center">
            RELATED ARTICLES
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            <Link
              href="/blog/aggressive-dog-training"
              className="group bg-white rounded-xl overflow-hidden border border-border no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/trained-dogs1.jpeg"
                  alt="Trained dogs demonstrating calm behavior after professional training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-blue-500 block mb-2">
                  Aggression
                </span>
                <h3 className="font-display text-xl text-ink leading-tight mb-3">
                  How to Train an Aggressive Dog: A Professional Trainer&apos;s
                  Guide
                </h3>
                <p className="font-body text-sm text-gray-muted leading-relaxed mb-4">
                  What causes aggression, why punishment makes it worse, and how
                  behavior modification actually works.
                </p>
                <div className="flex items-center justify-between font-ui text-xs text-gray-muted/60 tracking-[1px] uppercase">
                  <span>April 2, 2026</span>
                  <span>10 min read</span>
                </div>
              </div>
            </Link>
            <Link
              href="/blog/when-to-hire-dog-trainer"
              className="group bg-white rounded-xl overflow-hidden border border-border no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/jas-eval.webp"
                  alt="Professional dog trainer evaluating a dog's behavior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-blue-500 block mb-2">
                  Training Tips
                </span>
                <h3 className="font-display text-xl text-ink leading-tight mb-3">
                  When Should You Hire a Professional Dog Trainer? 7 Signs
                  It&apos;s Time
                </h3>
                <p className="font-body text-sm text-gray-muted leading-relaxed mb-4">
                  Seven clear signs that your dog needs more than DIY training
                  &mdash; and what professional help actually looks like.
                </p>
                <div className="flex items-center justify-between font-ui text-xs text-gray-muted/60 tracking-[1px] uppercase">
                  <span>April 2, 2026</span>
                  <span>8 min read</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Start Here"
        heading="BOOK YOUR EVALUATION"
        description="A $27 evaluation gives you a complete behavioral assessment, custom training roadmap, and program recommendation for your dog."
        primaryCta={{ label: "Book Evaluation \u2014 $27 \u2192", href: "/evaluation-with-jas" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/newclientservices" }}
        dark
      />
    </>
  );
}
