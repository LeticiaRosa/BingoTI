export interface Skill {
  id: string;
  title: string;
  description: string;
  category: "hard" | "soft";
  image: string;
}

export interface Profile {
  name: string;
  emoji: string;
  image: string;
  description: string;
  minScore: number;
  maxScore: number;
}

export interface GameState {
  selectedSkills: string[];
  showResult: boolean;
  currentProfile: Profile | null;
}
