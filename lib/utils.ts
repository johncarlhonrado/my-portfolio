export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Smooth-scrolls to an in-page section, accounting for the fixed navbar height. */
export function scrollToId(id: string, offset = 70) {
  const target = document.querySelector(id);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
