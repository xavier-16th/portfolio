// about page - bio, timeline, and detailed skills
// pretty much my resume but in a nicer format

import type { Metadata } from "next";
import { skills, timeline, personalInfo } from "@/data/portfolio";
import SkillCard from "@/components/SkillCard";
import TimelineItem from "@/components/TimelineItem";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Découvrez le parcours professionnel et scolaire de Xavier Carrier, ses compétences en développement web, design et technologies modernes.",
};

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          background: "#0e0e16",
          padding: "140px 50px 80px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <AnimatedSection>
            <h1 className="section-title">About Me</h1>
            <p className="section-subtitle">
              My story, skills, and journey
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div
              className="glass-card"
              style={{
                padding: "40px",
                cursor: "default",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#818cf8",
                  marginBottom: "12px",
                  lineHeight: 1.6,
                }}
              >
                {personalInfo.bio}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "rgba(237,237,240,0.55)",
                  margin: 0,
                }}
              >
                {personalInfo.bioExtended}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* timeline section - school and work entries */}
      <section
        style={{
          background: "#0c0c14",
          padding: "80px 50px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">
              Professional &amp; educational timeline
            </p>
          </AnimatedSection>

          {/* legend showing what each dot color means */}
          <AnimatedSection delay={100}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background:
                      "#6366f1",
                  }}
                />
                Work
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background:
                      "#818cf8",
                  }}
                />
                Education
              </div>
            </div>
          </AnimatedSection>

          {timeline.map((entry, index) => (
            <AnimatedSection key={index} delay={200 + index * 150}>
              <TimelineItem entry={entry} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* detailed skills grid */}
      <section
        style={{
          background: "#0a0a11",
          padding: "80px 50px 100px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-title">Skills &amp; Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I work with
            </p>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 100}>
                <SkillCard skill={skill} detailed />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
