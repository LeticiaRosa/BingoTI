import { create } from "zustand";
import { GameState } from "../types";
import { profiles } from "../data/profiles";

interface GameStore extends GameState {
  toggleSkill: (skillId: string) => void;
  calculateProfile: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  selectedSkills: [],
  showResult: false,
  currentProfile: null,

  toggleSkill: (skillId: string) => {
    const { selectedSkills } = get();
    const newSelectedSkills = selectedSkills.includes(skillId)
      ? selectedSkills.filter((id) => id !== skillId)
      : [...selectedSkills, skillId];

    set({ selectedSkills: newSelectedSkills });
  },

  calculateProfile: () => {
    const { selectedSkills } = get();
    const score = selectedSkills.length;

    const profile = profiles.find(
      (p) => score >= p.minScore && score <= p.maxScore
    );

    set({
      currentProfile: profile || profiles[profiles.length - 1],
      showResult: true,
    });
  },

  resetGame: () => {
    set({
      selectedSkills: [],
      showResult: false,
      currentProfile: null,
    });
  },
}));
