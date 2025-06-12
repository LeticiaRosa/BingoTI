import React from "react";
import { SkillCard } from "./SkillCard";
import { skills } from "../data/skills";
import { useGameStore } from "../store/gameStore";

export const BingoGrid: React.FC = () => {
  const { selectedSkills, toggleSkill } = useGameStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
          isSelected={selectedSkills.includes(skill.id)}
          onToggle={() => toggleSkill(skill.id)}
        />
      ))}
    </div>
  );
};
