"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import type { Project } from "@/constants/projects";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

interface ProjectCardProps {
  project: Project;
  hidden: boolean;
  index: number;
}

export default function ProjectCard({ project, hidden, index }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        style={{ display: hidden ? "none" : undefined }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="project-thumb">
          <div className="ph-fill" style={{ background: project.gradient }} />
          <span className="pj-glyph">{project.glyph}</span>
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <div className="tag-row">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.githubUrl} className="icon-link" target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
            <button className="icon-link view-details-btn" onClick={() => setShowDetails(true)}>
              <Eye size={15} /> View Details
            </button>
          </div>
        </div>
      </motion.div>

      <ProjectDetailsModal
        project={showDetails ? project : null}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}