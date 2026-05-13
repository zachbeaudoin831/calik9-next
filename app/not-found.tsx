import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#061225] via-[#0D2260] to-[#1A3FAB] px-6 py-20 text-center relative overflow-hidden">
      {/* Decorative orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full -top-[200px] -right-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,63,171,0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(106,159,255,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[560px]">
        <p
          className="font-display text-[clamp(120px,20vw,200px)] leading-[0.85] text-white/[0.08] tracking-[-4px] select-none mb-0"
          aria-hidden="true"
        >
          404
        </p>
        <p className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-blue-200 mb-4">
          Page Not Found
        </p>
        <h1 className="font-display text-[clamp(40px,7vw,72px)] text-white leading-[0.93] mb-5">
          WRONG LEASH.
          <br />
          WRONG TRAIL.
        </h1>
        <p className="text-[16px] text-white/65 leading-[1.7] mb-10 max-w-[420px] mx-auto">
          The page you&#39;re looking for doesn&#39;t exist or may have moved. Let&#39;s get you back on track.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-ink font-ui text-[13px] font-bold tracking-[2px] uppercase rounded-lg hover:bg-white/90 transition-colors"
          >
            Back to Home &rarr;
          </Link>
          <Link
            href="/evaluation-with-jas"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-ui text-[13px] font-bold tracking-[2px] uppercase rounded-lg hover:border-white/60 transition-colors"
          >
            Book Evaluation
          </Link>
        </div>

        <nav
          className="mt-14 pt-8 border-t border-white/10 flex gap-6 justify-center flex-wrap"
          aria-label="Site pages"
        >
          <Link href="/about-us" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            About
          </Link>
          <Link href="/newclientservices" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            Services
          </Link>
          <Link href="/team" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            Team
          </Link>
          <Link href="/testimonials" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            Testimonials
          </Link>
          <Link href="/business-coaching" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            Coaching
          </Link>
          <Link href="/contact-us" className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/45 no-underline hover:text-white/85 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
