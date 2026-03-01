// skill card - shows an icon, name, and optionally the tech list
// used on both the homepage (compact) and about page (detailed)

import type { Skill } from "@/data/portfolio";

interface SkillCardProps {
  skill: Skill;
  detailed?: boolean;
}

export default function SkillCard({ skill, detailed = false }: SkillCardProps) {
  return (
    <div
      className="glass-card"
      style={{
        padding: detailed ? "30px" : "20px",
        textAlign: "center",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{skill.icon}</div>
      <span
        style={{
          display: "block",
          fontSize: detailed ? "18px" : "14px",
          fontWeight: 600,
          marginBottom: detailed ? "10px" : 0,
        }}
      >
        {skill.name}
      </span>
      {detailed && (
        <>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(237,237,240,0.5)",
              margin: "0 0 14px",
              lineHeight: 1.5,
            }}
          >
            {skill.description}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {skill.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "4px 10px",
                  background: "rgba(129, 140, 248, 0.1)",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#818cf8",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
