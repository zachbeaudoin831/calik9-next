import { ReactNode } from "react";

interface PackageHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2";
}

export default function PackageHeading({ children, as: Tag = "h2" }: PackageHeadingProps) {
  return (
    <Tag
      className="font-display text-[clamp(28px,3.5vw,42px)] leading-[1.05] tracking-[1px] uppercase mb-5"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #93b4ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </Tag>
  );
}
