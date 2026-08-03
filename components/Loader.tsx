"use client";

import { useEffect, useState } from "react";

/** Full-screen loading splash shown briefly on first paint. */
export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""} aria-hidden={hidden}>
      <div className="loader-mark">
        <span className="loader-dot" /> loading portfolio…
      </div>
    </div>
  );
}
