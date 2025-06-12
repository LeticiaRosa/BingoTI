import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";

export const ResultModal: React.FC = () => {
  const { showResult, currentProfile, selectedSkills, resetGame } =
    useGameStore();

  if (!showResult || !currentProfile) return null;
  console.log(currentProfile);
  const shareText = `Acabei de descobrir meu perfil no Bingo TI! Sou ${currentProfile.emoji} ${currentProfile.name} com ${selectedSkills.length}/16 skills marcadas! 🚀`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Meu resultado no Bingo TI",
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText + ` ${window.location.href}`);
      alert("Resultado copiado para a área de transferência!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <img
              src={currentProfile.image}
              alt={currentProfile.name}
              className="w-80 h-80 md:w-70 md:h-70 object-contain"
              onLoad={() =>
                console.log("Imagem carregada:", currentProfile.image)
              }
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {currentProfile.name}
        </h2>
        <p className="text-gray-600 mb-6">{currentProfile.description}</p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">
            Você marcou{" "}
            <span className="font-bold text-purple-600">
              {selectedSkills.length} de 16
            </span>{" "}
            skills
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleShare}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Compartilhar
          </button>
          <button
            onClick={resetGame}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
};
