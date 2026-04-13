import { ReactNode } from "react";

interface ServiceHeroProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function ServiceHero({ children, sidebar }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-blue-700">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%] max-md:w-[360px] max-md:h-[360px] max-sm:w-[220px] max-sm:h-[220px]"
        style={{
          background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-[1280px] mx-auto px-5 relative z-[1]">
        <div className="grid grid-cols-2 gap-12 items-start py-[60px] pb-20 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Left: page content */}
          <div>{children}</div>
          {/* Right: sticky sidebar (form) */}
          <div className="sticky top-6 max-[900px]:static">{sidebar}</div>
        </div>
      </div>
    </section>
  );
}
