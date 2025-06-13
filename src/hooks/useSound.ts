import { useCallback } from "react";

export const useSound = () => {
  const playSelectSound = useCallback(() => {
    try {
      const audio = new Audio("/sounds/click-success.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Fallback para navegadores que bloqueiam autoplay
        console.log("Audio playback blocked");
      });
    } catch (error) {
      console.log("Error playing sound:", error);
    }
  }, []);

  const playResultSound = useCallback(() => {
    try {
      const audio = new Audio("/sounds/success-fanfare.mp3");
      audio.volume = 0.4;
      audio.play().catch(() => {
        console.log("Audio playback blocked");
      });
    } catch (error) {
      console.log("Error playing sound:", error);
    }
  }, []);

  return { playSelectSound, playResultSound };
};
