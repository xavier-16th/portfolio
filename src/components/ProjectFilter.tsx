// project filter - lets you filter projects by tag
// shows all by default, click a tag to narrow it down

"use client";

import { useState } from "react";
import type { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // grab all unique tags from the projects + add "all" at the start
  // Set removes duplicates, spread turns it back into an array
  const tags = ["all", ...new Set(projects.map((p) => p.tag.toLowerCase()))];

  // filter projects or show all
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tag.toLowerCase() === activeFilter);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border:
                activeFilter === tag
                  ? "1px solid #6366f1"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                activeFilter === tag
                  ? "rgba(99, 102, 241, 0.12)"
                  : "rgba(255, 255, 255, 0.03)",
              color: activeFilter === tag ? "#818cf8" : "rgba(237,237,240,0.5)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "capitalize",
              fontFamily: "inherit",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >
        {filtered.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
            padding: "60px 0",
          }}
        >
          No projects found for this filter.
        </p>
      )}
    </div>
  );
}
