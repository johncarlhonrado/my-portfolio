"use client";

import { useEffect, useState } from "react";

/** Tracks scroll progress (0-100) and whether the page has scrolled past a threshold. */
export function useScrollProgress(threshold = 40) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { progress, scrolled };
}
