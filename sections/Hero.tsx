"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { scrollToId } from "@/lib/utils";
import Image from "next/image";

const ROLES = [
  "building responsive React and React Native interfaces",
  "developing full-stack Next.js applications",
  "creating REST APIs with Express.js",
  "designing scalable PostgreSQL databases",
];

/** Rotating typewriter effect used under the hero heading. */
function useTypedRole() {
  const [text, setText] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = ROLES[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex.current--;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 30 : 55);
    }

    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);

  return text;
}

export default function Hero() {
  const typedRole = useTypedRole();
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg) return;

    function handleMove(e: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      bg!.style.setProperty("--mx", `${x}%`);
      bg!.style.setProperty("--my", `${y}%`);
    }

    hero.addEventListener("mousemove", handleMove);
    return () => hero.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg" ref={bgRef} />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container hero-grid">
        <div>
          <Reveal><div className="eyebrow"><span className="live-dot" /> Open to new opportunities</div></Reveal>

          <Reveal delay={0.05}>
            <h1>
              Hi, I&apos;m John Carl —<br />
              <span className="accent-text">Software Developer.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-role">
              <span>{typedRole}</span>
              <span className="cursor" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="lead">
              I design and build modern web and mobile applications end to end — from database
              schema to pixel-perfect interface — with a focus on performance,
              scalability, and genuinely good user experience.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hero-actions">
              <Button variant="primary" onClick={() => scrollToId("#projects")}>View Projects</Button>
              <Button variant="secondary" onClick={() => scrollToId("#contact")}>Contact Me</Button>
            </div>
          </Reveal>

        </div>

        <Reveal variant="scale" delay={0.15} className="hero-photo-wrap">
          <div className="hero-photo">
            <Image
              src="/images/me.jpg"
              alt="John Carl"
              width={420}
              height={420}
              className="hero-image"
              priority
            />
            <div className="badge-floating">
              <div className="icon-wrap">🟢</div>
              <div>
                <div className="t1">Status</div>
                <div className="t2">Available for hire</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="line" />
      </div>
    </section>
  );
}
