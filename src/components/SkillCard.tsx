// skill card - shows category name + tech tags
// used on homepage and about page

import type { Skill } from "@/data/portfolio";

interface SkillCardProps {
  skill: Skill;
  detailed?: boolean;
}

export default function SkillCard({ skill, detailed = false }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-label">{skill.name}</div>
      {detailed && skill.description && (
        <p className="skill-card-desc">{skill.description}</p>
      )}
      <div className="skill-card-tags">
        {skill.technologies.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
