import { Profile } from "../types";

export const profiles: Profile[] = [
  {
    name: "Trabalhador Nato™",
    emoji: "🏆",
    image: "/images/Super-herói%20da%20Tecnologia%20em%20Ação.png",
    description: "Super Profissional. O mercado que lute pra te segurar.",
    minScore: 16,
    maxScore: 16,
  },
  {
    name: "Trabalhador Esforçado",
    emoji: "💪",
    image: "/images/Mago%20da%20Tecnologia.png",
    description: "Batalha todo santo dia. Já merece um aumento!",
    minScore: 10,
    maxScore: 15,
  },
  {
    name: "Profissional Semi Sênior",
    emoji: "⚖️",
    image: "/images/Profissional%20de%20TI%20Digital.png",
    description: "Metade do caminho, metade do burnout.",
    minScore: 6,
    maxScore: 9,
  },
  {
    name: "Estagiário Raiz",
    emoji: "☕",
    image: "/estagiario.png",
    description: "Café feito, código quebrado. Mas tá no jogo!",
    minScore: 3,
    maxScore: 5,
  },
  {
    name: "Profissional em Formação",
    emoji: "🌱",
    image: "/estagiario.png",
    description: "É sobre começar. E você começou bem!",
    minScore: 0,
    maxScore: 2,
  },
];
