// project card component
// shows the gradient preview, tag, title, description and tech stack
// the whole card is a link to the project detail page

"use client";

import Link from "next/link";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
        className="project-card-hover"
      >
        <div
          style={{
            height: "200px",
            background: project.gradient,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Knewave', cursive",
              fontSize: "24px",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            {project.title}
          </span>
          {/* hover overlay - starts invisible, the style jsx below makes it appear on hover */}
          <div
            className="project-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <span style={{ color: "white", fontWeight: 600, fontSize: "18px" }}>
              View Project →
            </span>
          </div>
        </div>

        <div style={{ padding: "30px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(129, 140, 248, 0.12)",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#818cf8",
              marginBottom: "12px",
            }}
          >
            {project.tag}
          </span>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              margin: "0 0 12px",
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "rgba(237, 237, 240, 0.6)",
              marginBottom: "18px",
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "5px 10px",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(237, 237, 240, 0.5)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          .project-card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.14);
          }
          .project-card-hover:hover .project-overlay {
            opacity: 1 !important;
          }
        `}</style>
      </div>
    </Link>
  );
}
