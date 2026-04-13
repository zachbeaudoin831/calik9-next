import Link from "next/link";

interface CtaBlockProps {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
}

export default function CtaBlock({
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  dark = true,
}: CtaBlockProps) {
  return (
    <section
      className={`py-20 text-center ${
        dark
          ? "bg-gradient-to-br from-blue-700 to-blue-500"
          : "bg-cream"
      }`}
    >
      <div className="max-w-[640px] mx-auto px-6">
        <span
          className={`font-ui text-[15px] font-bold tracking-[4px] uppercase block mb-3 ${
            dark ? "text-blue-400" : "text-blue-500"
          }`}
        >
          {eyebrow}
        </span>
        <h2
          className={`font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] mb-4 ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {heading}
        </h2>
        <div
          className={`w-12 h-[2px] mx-auto mb-6 ${
            dark ? "bg-blue-400" : "bg-blue-500"
          }`}
        />
        <p
          className={`font-body text-base leading-relaxed mb-8 ${
            dark ? "text-white/70" : "text-gray-muted"
          }`}
        >
          {description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={primaryCta.href}
            className={`inline-block font-ui text-sm font-bold uppercase tracking-[2px] px-8 py-3.5 rounded-sm no-underline transition-all ${
              dark
                ? "bg-white text-ink hover:bg-off"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-block font-ui text-sm font-bold uppercase tracking-[2px] px-8 py-3.5 rounded-sm no-underline border-2 transition-all ${
                dark
                  ? "border-white/40 text-white hover:bg-white/10"
                  : "border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
