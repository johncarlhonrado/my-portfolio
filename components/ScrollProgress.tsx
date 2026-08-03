"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Thin fixed bar at the top of the viewport showing scroll progress through the page. */
export default function ScrollProgress() {
  const { progress } = useScrollProgress();
  return <div id="progress-bar" style={{ width: `${progress}%` }} />;
}
