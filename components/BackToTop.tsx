"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const { scrolled } = useScrollProgress(500);

  return (
    <button
      id="back-to-top"
      className={cn(scrolled && "show")}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
