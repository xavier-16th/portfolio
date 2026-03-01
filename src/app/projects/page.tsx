// projects page - shows all projects with a filter
// the filter component handles the tag buttons and grid

import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import ProjectFilter from "@/components/ProjectFilter";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Découvrez les projets de Xavier Carrier — applications web, sites redesignés, expériences 3D interactives et plus.",
};

export default function ProjectsPage() {
  return (
    <section
      style={{
        background: "#0c0c14",
        padding: "140px 50px 100px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <h1 className="section-title">All Projects</h1>
          <p className="section-subtitle">
            A collection of my work — filter by category to explore
          </p>
        </AnimatedSection>

        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}
