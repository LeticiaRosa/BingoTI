import { create } from "zustand";
import { GameState } from "../types";
import { profiles } from "../data/profiles";
import { SoundManager } from "../utils/soundManager";

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
    const soundManager = SoundManager.getInstance();
    soundManager.play("select");
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
    // Play result sound
    const soundManager = SoundManager.getInstance();
    soundManager.play("result");
  },

  resetGame: () => {
    set({
      selectedSkills: [],
      showResult: false,
      currentProfile: null,
    });
  },
}));
