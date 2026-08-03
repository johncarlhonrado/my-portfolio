"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, filterTags } from "@/constants/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow-label">03 · Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            A mix of school work build, capstone, and internship. Technologies used are indicated in each project. 
          </p>
        </Reveal>

        <Reveal className="filter-row">
          {filterTags.map((tag) => (
            <button
              key={tag}
              className={cn("filter-chip", filter === tag && "active")}
              onClick={() => setFilter(tag)}
            >
              {tag === "all" ? "$ all" : tag}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hidden={filter !== "all" && !project.tech.includes(filter)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
