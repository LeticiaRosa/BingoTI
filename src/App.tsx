import { GameHeader } from "./components/GameHeader";
import { BingoGrid } from "./components/BingoGrid";
import { ResultModal } from "./components/ResultModal";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto card">
        <GameHeader />
        <BingoGrid />
        <Footer />
      </div>
      <ResultModal />
    </div>
  );
}
