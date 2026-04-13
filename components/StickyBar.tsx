import Link from "next/link";

export default function StickyBar() {
  return (
    <div
      role="complementary"
      aria-label="Quick action"
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-700 px-6 py-3.5 flex items-center justify-center gap-6 z-[999] shadow-[0_-4px_20px_rgba(0,0,0,0.2)] max-md:flex-col max-md:gap-2 max-md:px-4 max-md:py-3"
    >
      <span className="font-ui text-base font-bold tracking-[1px] text-white max-md:text-[13px] max-md:text-center">
        Don&apos;t Know Which Program Fits Your Dog?
      </span>
      <Link
        href="/evaluation"
        className="inline-block bg-white text-ink font-ui text-xs font-bold uppercase tracking-[2px] px-5 py-2.5 rounded-sm whitespace-nowrap hover:bg-off transition-colors"
      >
        Book an Evaluation &rarr;
      </Link>
    </div>
  );
}
