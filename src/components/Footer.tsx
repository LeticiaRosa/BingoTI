import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-8 text-center text-gray-600">
      <p className="mb-2">
        Feito com 💜 por{" "}
        <a
          href="https://linkedin.com/in/leticia-rosa-oliveira-miranda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          Letícia Rosa
        </a>
      </p>
    </footer>
  );
};
