"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/constants/projects";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  const screenshots = project?.screenshots ?? [];
  const isMobile = project?.type === "mobile";

  const goNext = () => {
    if (!screenshots.length) return;
    setActiveIndex((i) => (i + 1) % screenshots.length);
  };

  const goPrev = () => {
    if (!screenshots.length) return;
    setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, activeIndex, screenshots.length]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="pdm-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="pdm-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pdm-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            <div className="pdm-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} className="icon-link" target="_blank" rel="noopener noreferrer">
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>

            <div className="pdm-stage">
              {isMobile ? (
                <div className="phone-mock">
                  <div className="phone-mock-notch" />
                  <div className="phone-mock-screen">
                    {screenshots.length > 0 ? (
                      <img
                        key={activeIndex}
                        src={screenshots[activeIndex]}
                        alt={`${project.title} screen ${activeIndex + 1}`}
                        className="pdm-screenshot"
                      />
                    ) : (
                      <div className="pdm-empty">No screenshots available for this one.</div>
                    )}
                  </div>
                  <div className="phone-mock-btn phone-mock-btn-left-1" />
                  <div className="phone-mock-btn phone-mock-btn-left-2" />
                  <div className="phone-mock-btn phone-mock-btn-right" />
                </div>
              ) : (
                <div className="monitor-mock">
                  <div className="monitor-mock-screen">
                    {screenshots.length > 0 ? (
                      <img
                        key={activeIndex}
                        src={screenshots[activeIndex]}
                        alt={`${project.title} screenshot ${activeIndex + 1}`}
                        className="pdm-screenshot"
                      />
                    ) : (
                      <div className="pdm-empty">No screenshots available for this one.</div>
                    )}
                  </div>
                  <div className="monitor-mock-cam" />
                  <div className="monitor-mock-stand-neck" />
                  <div className="monitor-mock-stand-base" />
                </div>
              )}

              {screenshots.length > 1 && (
                <>
                  <button className="pdm-nav pdm-nav-prev" onClick={goPrev} aria-label="Previous screenshot">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="pdm-nav pdm-nav-next" onClick={goNext} aria-label="Next screenshot">
                    <ChevronRight size={20} />
                  </button>
                  <div className="pdm-dots">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        className={`pdm-dot ${i === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}