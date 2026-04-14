import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title:
    "When Should You Hire a Professional Dog Trainer? 7 Signs It\u2019s Time",
  description:
    "Tried YouTube videos and treat bribes with no results? Here are 7 clear signs your dog needs professional training \u2014 and what to expect when you hire a trainer.",
};

export default function WhenToHireDogTrainerPage() {
  return (
    <>
      {/* ── ARTICLE HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-[calc(var(--banner-h,0px)+96px)] pb-20 max-[900px]:py-[calc(var(--banner-h,0px)+80px)] max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-9 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Training Tips
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            WHEN TO HIRE A <span className="text-white/40">DOG TRAINER</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-6">
            7 Signs It&apos;s Time
          </p>
          <div className="flex items-center gap-3 font-ui text-sm text-white/50 tracking-[1px]">
            <span>By Jas Leverette</span>
            <span>&middot;</span>
            <span>April 2, 2026</span>
            <span>&middot;</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
        <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="space-y-6 font-body text-[15px] text-gray-muted leading-[1.7]">
            <p>
              You&apos;ve watched the YouTube videos. You&apos;ve tried the
              treat lure. You&apos;ve read the Reddit threads. And your dog is
              still pulling on the leash, ignoring your recall, or lunging at
              other dogs. Sound familiar?
            </p>

            <p>
              The truth is, most dog owners try to handle training themselves
              before ever considering a professional. And that&apos;s fine &mdash;
              some dogs respond well to consistent DIY training. But there are
              clear situations where professional help isn&apos;t just helpful,
              it&apos;s necessary. Here are seven signs it&apos;s time to stop
              guessing and{" "}
              <Link href="/services" className="text-blue-500 underline hover:text-blue-700">
                call a trainer
              </Link>
              .
            </p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/jas-eval.webp"
                alt="Cali K9 professional trainer conducting a dog behavior evaluation"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 1: YOUR DOG IS SHOWING AGGRESSION
            </h2>

            <p>
              This is the most important sign on the list. If your dog is
              growling, snapping, lunging, or biting &mdash; at people, other
              dogs, or animals &mdash; you need professional help. Full stop.
            </p>

            <p>
              <Link
                href="/blog/aggressive-dog-training"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Aggression
              </Link>{" "}
              is not a behavior you can fix with treats and YouTube tutorials. It
              requires a professional who can accurately diagnose the type of
              aggression (fear-based, territorial, resource guarding, redirected)
              and implement a behavior modification plan that&apos;s specific to
              your dog. Getting it wrong doesn&apos;t just fail &mdash; it can
              make the aggression significantly worse and put people at risk.
            </p>

            <p>
              If your dog has bitten anyone, or if you feel unsafe around your
              own dog, this is urgent. Don&apos;t wait for it to &ldquo;get
              better on its own.&rdquo; It won&apos;t.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 2: YOU&apos;VE TRIED DIY TRAINING FOR 4+ WEEKS WITH NO
              PROGRESS
            </h2>

            <p>
              There&apos;s a difference between slow progress and no progress. If
              you&apos;ve been consistently working with your dog for a month
              &mdash; following a structured program, practicing daily &mdash;
              and you&apos;re seeing no improvement, something is off. Either the
              approach isn&apos;t right for your dog, you&apos;re inadvertently
              reinforcing the wrong behaviors, or the issue is more complex than
              basic obedience.
            </p>

            <p>
              A professional can diagnose in one session what might take you
              months to figure out on your own. That&apos;s not a knock on you
              &mdash; it&apos;s the value of experience. A trainer who&apos;s
              worked with thousands of dogs can read body language, identify
              triggers, and adjust approaches in real time in ways that no video
              tutorial can teach.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 3: THE BEHAVIOR IS GETTING WORSE, NOT BETTER
            </h2>

            <p>
              This is a major red flag. If your dog&apos;s pulling, reactivity,
              barking, or anxiety is escalating despite your efforts, you&apos;re
              likely in a pattern where the unwanted behavior is being
              accidentally reinforced. This is extremely common and extremely
              hard to see when you&apos;re in the middle of it.
            </p>

            <p>
              Escalation means the window for easier correction is closing.
              Behavioral patterns that become deeply practiced are harder (and
              more expensive) to change. The sooner you get professional
              intervention, the faster and more affordable the fix.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 4: THERE&apos;S A SAFETY CONCERN
            </h2>

            <p>Safety isn&apos;t just about aggression. It includes:</p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                A dog that bolts out the front door and won&apos;t come back
              </li>
              <li>
                A large dog that pulls so hard on leash that you or a family
                member could fall
              </li>
              <li>A dog that resource guards from children in the home</li>
              <li>
                A dog with severe separation anxiety that&apos;s destroying the
                house or injuring themselves
              </li>
              <li>
                A dog that&apos;s a flight risk (escapes the yard, slips
                collars, runs toward traffic)
              </li>
            </ul>

            <p>
              When safety is involved, speed matters more than budget. An{" "}
              <Link href="/evaluation" className="text-blue-500 underline hover:text-blue-700">
                evaluation
              </Link>{" "}
              is the fastest way to get a clear action plan.
            </p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/dog-line-up.webp"
                alt="Multiple dogs trained to hold position at Cali K9 training facility"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 5: A MAJOR LIFE CHANGE IS COMING
            </h2>

            <p>
              Having a baby. Moving to a new home. Adding a second dog. Returning
              to the office after working from home. These life transitions
              create stress for dogs and often trigger behavioral issues that
              weren&apos;t there before.
            </p>

            <p>
              The smart move is to get professional training <em>before</em> the
              change happens &mdash; not after the problems start. If you&apos;re
              expecting a baby in three months and your dog jumps on everyone and
              has poor impulse control, now is the time to invest in a{" "}
              <Link
                href="/blog/board-and-train-worth-it"
                className="text-blue-500 underline hover:text-blue-700"
              >
                board and train
              </Link>{" "}
              or intensive private session program. Don&apos;t wait until
              you&apos;re sleep-deprived with a newborn and an untrained dog.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 6: YOU HAVE SPECIFIC GOALS YOU CAN&apos;T REACH ALONE
            </h2>

            <p>
              Maybe your dog is &ldquo;fine&rdquo; in most situations but you
              have a specific goal that requires professional expertise:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Reliable off-leash recall in distracting environments
              </li>
              <li>
                Calm behavior at outdoor cafes, breweries, or public spaces
              </li>
              <li>Therapy dog or service dog certification preparation</li>
              <li>Multi-dog household management</li>
              <li>Advanced obedience or competition-level training</li>
              <li>
                Transitioning a rescue dog with unknown history into your family
              </li>
            </ul>

            <p>
              These goals require more than basic obedience &mdash; they require
              structured, progressive training with professional guidance. An{" "}
              <Link href="/in-person" className="text-blue-500 underline hover:text-blue-700">
                in-person training program
              </Link>{" "}
              can take your dog from &ldquo;pretty good&rdquo; to exceptional.
            </p>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              SIGN 7: YOU&apos;VE SPENT MORE TIME RESEARCHING THAN TRAINING
            </h2>

            <p>
              If you&apos;ve downloaded three apps, bought two books, bookmarked
              47 YouTube channels, joined four Facebook groups, and you&apos;re
              still not sure which approach to use &mdash; that&apos;s analysis
              paralysis. And it&apos;s more common than you&apos;d think.
            </p>

            <p>
              The problem with free online content is that it&apos;s often
              contradictory. One trainer says use a prong collar. Another says
              never use any tool. One says ignore barking. Another says redirect
              it. Without a professional who knows your specific dog, you&apos;re
              assembling a training plan from random, sometimes conflicting
              advice.
            </p>

            <p>
              One session with a professional gives you a single, clear,
              customized plan. That&apos;s worth more than a thousand hours of
              internet research.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-ink">
              <p>
                &ldquo;The owners who make the fastest progress aren&apos;t the
                ones who tried the hardest on their own. They&apos;re the ones
                who recognized when they needed help and got it quickly.&rdquo;
              </p>
            </blockquote>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              DIY VS. PROFESSIONAL: WHEN EACH MAKES SENSE
            </h2>

            <p>
              <strong className="text-ink">DIY training works well when:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                You have a young puppy with no behavioral issues and you want to
                build basic obedience
              </li>
              <li>
                The behaviors are mild (occasional pulling, mild jumping, basic
                manners)
              </li>
              <li>
                You have daily time to commit and a structured program to follow
              </li>
              <li>You&apos;re seeing steady, measurable progress</li>
            </ul>

            <p>
              <strong className="text-ink">
                Professional training is the better path when:
              </strong>
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Any of the 7 signs above apply</li>
              <li>
                The behavior involves aggression, anxiety, or reactivity
              </li>
              <li>You need results on a timeline</li>
              <li>You&apos;ve tried DIY and it&apos;s not working</li>
              <li>
                The dog is large, powerful, or has a complex history
              </li>
            </ul>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden my-10">
              <Image
                src="/images/trained-dogs2.jpeg"
                alt="Dogs showing transformation results after professional Cali K9 training"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              WHAT TO EXPECT FROM PROFESSIONAL TRAINING
            </h2>

            <p>
              If you&apos;ve never worked with a professional trainer before,
              here&apos;s what the process typically looks like at{" "}
              <Link href="/about" className="text-blue-500 underline hover:text-blue-700">
                Cali K9
              </Link>
              :
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-ink">Evaluation</strong> &mdash; A 30-45
                minute behavioral assessment. The trainer observes your dog, asks
                about their history and your goals, identifies the root causes of
                the behaviors, and recommends a specific program.
              </li>
              <li>
                <strong className="text-ink">Program recommendation</strong>{" "}
                &mdash; Based on the evaluation, you&apos;ll get a clear
                recommendation:{" "}
                <Link href="/services" className="text-blue-500 underline hover:text-blue-700">
                  private sessions, board and train, online program, or group
                  classes
                </Link>
                . A good trainer will recommend what your dog actually needs, not
                what&apos;s most expensive.
              </li>
              <li>
                <strong className="text-ink">Active training</strong> &mdash;
                Whether it&apos;s weekly sessions or an immersive program, this
                is where the behavior change happens. Professional training is
                structured, progressive, and adjusted to your dog&apos;s
                responses in real time.
              </li>
              <li>
                <strong className="text-ink">Owner education</strong> &mdash;
                The most important part. You need to understand why your dog does
                what they do and how to maintain the training at home. A program
                without owner education is incomplete.
              </li>
              <li>
                <strong className="text-ink">Follow-up</strong> &mdash; Good
                programs include follow-up support to ensure the training sticks
                in real life.
              </li>
            </ol>

            <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-ink pt-4">
              NEXT STEPS
            </h2>

            <p>
              If any of these signs resonated with you, the best next step is
              simple:{" "}
              <Link href="/evaluation" className="text-blue-500 underline hover:text-blue-700">
                book an evaluation
              </Link>
              . At Cali K9, evaluations are $27 and give you a complete
              behavioral assessment, a custom training roadmap, and a program
              recommendation &mdash; whether that&apos;s one of our programs or
              not.
            </p>

            <p>
              You don&apos;t need to commit to anything. You just need to
              understand what&apos;s going on with your dog and what it&apos;ll
              take to fix it. That clarity alone is worth the conversation.
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
              href="/blog/board-and-train-worth-it"
              className="group bg-white rounded-xl overflow-hidden border border-border no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/dog-line-up.webp"
                  alt="Dogs in formation at Cali K9 training facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-blue-500 block mb-2">
                  Board &amp; Train
                </span>
                <h3 className="font-display text-xl text-ink leading-tight mb-3">
                  Board and Train Programs: Are They Worth It?
                </h3>
                <p className="font-body text-sm text-gray-muted leading-relaxed mb-4">
                  An honest look at board and train dog training &mdash; what it
                  costs, how it works, and who it&apos;s best for.
                </p>
                <div className="flex items-center justify-between font-ui text-xs text-gray-muted/60 tracking-[1px] uppercase">
                  <span>April 2, 2026</span>
                  <span>9 min read</span>
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
        primaryCta={{ label: "Book Evaluation \u2014 $27 \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/services" }}
        dark
      />
    </>
  );
}
