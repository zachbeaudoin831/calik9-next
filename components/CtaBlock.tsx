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
      className={`py-20 max-md:py-12 max-[480px]:py-8 text-center ${
        dark
          ? "bg-gradient-to-br from-blue-700 to-blue-500"
          : "bg-cream"
      }`}
    >
      <div className="max-w-[640px] mx-auto px-6">
        <span
          className={`font-ui text-[15px] font-semibold tracking-[4px] uppercase block mb-3 ${
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
          className={`w-12 h-[3px] mx-auto mb-6 ${
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
        <div className="flex gap-4 justify-center flex-wrap max-[480px]:flex-col max-[480px]:items-stretch">
          <Link
            href={primaryCta.href}
            className={dark ? "btn btn-white" : "btn btn-blue"}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={dark ? "btn btn-outline-white" : "btn btn-outline"}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
