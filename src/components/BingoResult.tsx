import { SoundManager } from "../utils/soundManager";
import { useEffect } from "react";

// ...existing code...

const BingoResult = () => {
  const soundManager = SoundManager.getInstance();

  useEffect(() => {
    // Play result sound when component mounts
    soundManager.play("result");
  }, []);

  // ...existing code...
};

export default BingoResult;
