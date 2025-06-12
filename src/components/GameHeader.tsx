import React from "react";
import { useGameStore } from "../store/gameStore";

export const GameHeader: React.FC = () => {
  const { selectedSkills, calculateProfile, showResult } = useGameStore();

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">🧩 Bingo TI</h1>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Marque as skills que você já desenvolveu na sua carreira tech e descubra
        seu perfil profissional!
      </p>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="bg-white rounded-lg px-4 py-2 shadow-md">
          <span className="text-gray-600">Marcadas: </span>
          <span className="font-bold text-purple-600">
            {selectedSkills.length}/16
          </span>
        </div>

        {!showResult && (
          <button
            onClick={calculateProfile}
            className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Ver Resultado
          </button>
        )}
      </div>
    </div>
  );
};
