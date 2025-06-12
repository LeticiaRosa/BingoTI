import { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  onToggle: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  isSelected,
  onToggle,
}) => {
  return (
    <div
      className={`skill-card ${isSelected ? "selected" : ""}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      <div className="text-center">
        <h3 className="font-semibold text-sm mb-2">{skill.title}</h3>
        <p className="text-xs opacity-75">{skill.description}</p>
      </div>
    </div>
  );
};
