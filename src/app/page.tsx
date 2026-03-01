// homepage - hero section, skills, featured projects, and a cta at the bottom

import Link from "next/link";
import { projects, skills, personalInfo } from "@/data/portfolio";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
  // just grab the first 3 projects to feature on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* hero section - big title, subtitle, two cta buttons */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "transparent",
        }}
      >
        <div style={{ textAlign: "center", zIndex: 10, position: "relative" }}>
          <div style={{ marginBottom: "16px" }}>
            <h1
              className="animate-glow"
              style={{
                fontFamily: "'Knewave', cursive",
                fontSize: "clamp(40px, 10vw, 90px)",
                margin: 0,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              PORTFOLIO
            </h1>
          </div>
          <p
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 400,
              color: "rgba(237, 237, 240, 0.6)",
              margin: "16px 0 36px",
              animationDelay: "0.5s",
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            {personalInfo.title}
          </p>
          <div
            className="animate-fade-in-up"
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              animationDelay: "1s",
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <Link href="/projects" className="cta-button">
              My Work
            </Link>
            <Link href="/about" className="cta-button outline">
              About Me
            </Link>
          </div>
        </div>

        {/* dark bg that sits behind everything */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "linear-gradient(to bottom, #0c0c14, #111119)",
            zIndex: -1,
          }}
        />
      </section>

      {/* skills grid section */}
      <section
        style={{
          background: "#0e0e16",
          padding: "100px 50px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle">What I bring to the table</p>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 100}>
                <SkillCard skill={skill} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* featured projects - shows 3 most recent ones */}
      <section
        style={{
          background: "#0c0c14",
          padding: "100px 50px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Recent work</p>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              marginTop: "50px",
            }}
          >
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 200}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <Link href="/projects" className="cta-button outline">
                View All Projects →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* bottom cta - let's work together */}
      <section
        style={{
          background: "#0a0a11",
          padding: "100px 50px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <AnimatedSection>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
          <Link href="/contact" className="cta-button">
            Get In Touch
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
