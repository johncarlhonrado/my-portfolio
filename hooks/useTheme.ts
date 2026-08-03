"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * In-memory theme state (no localStorage), seeded from the user's OS preference.
 * Swap in localStorage persistence if you deploy this outside of a sandboxed preview.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
