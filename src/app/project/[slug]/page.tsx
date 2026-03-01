// individual project page
// dynamic route - grabs the slug from the url and finds the matching project
// shows everything: description, highlights, tech stack, links

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// tell next.js which slugs exist so it can pre-render them
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// dynamic seo metadata based on which project you're viewing
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Xavier Carrier`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // if someone types a random slug, show 404
  if (!project) {
    notFound();
  }

  // find other projects with the same tag for the "related" section
  const relatedProjects = projects.filter(
    (p) => p.tag === project.tag && p.slug !== project.slug
  );

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, rgba(26, 15, 46, 1) 0%, rgba(35, 20, 60, 1) 30%, rgba(26, 15, 46, 1) 70%, #1a0f2e 100%)",
        padding: "140px 50px 100px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AnimatedSection>
          <Link
            href="/projects"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "40px",
              transition: "color 0.3s",
            }}
          >
            ← Back to Projects
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            style={{
              height: "300px",
              background: project.gradient,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              overflow: "hidden",
            }}
          >
            <h1
              style={{
                fontFamily: "'Knewave', cursive",
                fontSize: "clamp(30px, 6vw, 60px)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {project.title}
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                padding: "6px 16px",
                background: "rgba(129, 140, 248, 0.12)",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#818cf8",
              }}
            >
              {project.tag}
            </span>
            <span
              style={{
                padding: "6px 16px",
                background: "rgba(99, 102, 241, 0.12)",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#6366f1",
              }}
            >
              {project.year}
            </span>
            <span
              style={{
                padding: "6px 16px",
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(237,237,240,0.55)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {project.role}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "16px",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(237,237,240,0.65)",
              marginBottom: "40px",
            }}
          >
            {project.longDescription}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#818cf8",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}
          >
            Highlights
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 40px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(237,237,240,0.65)",
                }}
              >
                <span style={{ color: "#818cf8", flexShrink: 0 }}>▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#818cf8",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}
          >
            Tech Stack
          </h3>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255, 255, 255, 0.04)",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "80px",
            }}
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                View Live Site →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button outline"
              >
                View Source Code
              </a>
            )}
          </div>
        </AnimatedSection>

        {relatedProjects.length > 0 && (
          <AnimatedSection delay={700}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#818cf8",
                marginBottom: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              Related Projects
            </h3>
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/project/${rp.slug}`}
                  className="glass-card"
                  style={{
                    padding: "20px 30px",
                    display: "block",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {rp.title}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
