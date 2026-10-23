import Link from "next/link";

const INCLUDES = [
  "A phone conversation with Jas or Jay about your dog’s behavior and history",
  "Clear training priorities based on the concerns you share",
  "A personalized training roadmap and program recommendation",
  "Practical next steps to begin working on",
  "The Cali K9 Starter Course Bundle, included at no extra charge",
];

// What the phone evaluation is and includes. Sits directly under the
// evaluation pages' hero; the CTA scrolls back up to the booking form.
export default function EvaluationDetails() {
  return (
    <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
      <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 grid grid-cols-[1fr_1.05fr] gap-14 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
        <div>
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Your Phone Evaluation
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-5">
            UNDERSTAND YOUR DOG&rsquo;S BEHAVIOR AND WHAT TO WORK ON FIRST
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mb-6" />
          <p className="font-body text-[17px] text-gray-muted leading-relaxed">
            Struggling with leash pulling, barking, reactivity, or difficulty
            listening? Talk through your biggest concerns and get guidance
            focused on your dog.
          </p>
        </div>

        <div className="bg-cream border border-black/[0.06] rounded-2xl p-9 max-[480px]:p-6">
          <div className="font-ui text-[15px] font-bold tracking-[2px] uppercase text-ink mb-5">
            Your evaluation includes:
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5 mb-8">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-[16px] text-ink/85 leading-snug">
                <span className="text-green-500 text-xl leading-none mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="#main-content" className="btn btn-gold btn-lg w-full">
            Book My Phone Evaluation
          </Link>
          <p className="font-ui text-[13px] font-semibold tracking-[1px] uppercase text-gray-muted text-center mt-4">
            30 minutes &bull; By phone &bull; With Jas or Jay &bull; Starter course bundle included
          </p>
        </div>
      </div>
    </section>
  );
}
