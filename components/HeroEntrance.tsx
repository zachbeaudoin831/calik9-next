"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HeroEntrance({ children, className = "", delay = 0 }: Props) {
  return (
    <div
      className={`hero-enter ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
