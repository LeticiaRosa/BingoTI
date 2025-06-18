import React from "react";
import "./GameTitle.css";

const GameTitle: React.FC = () => {
  return (
    <div className="game-title-container">
      <div className="title-row">
        <h1 className="game-title">
          <span className="letter letter-b">B</span>
          <span className="letter letter-i">I</span>
          <span className="letter letter-n">N</span>
          <span className="letter letter-g">G</span>
          <span className="letter letter-o">O</span>
        </h1>
        <div className="title-ti">
          <span className="letter letter-t">T</span>
          <span className="letter letter-i2">I</span>
        </div>
      </div>
    </div>
  );
};

export default GameTitle;
