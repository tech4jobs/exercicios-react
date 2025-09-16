import React from "react";
import LivroCard from "../componentes/LivroCard";

const Home = ({ livros }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Biblioteca Online</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {livros.map((livro) => (
          <LivroCard key={livro.id} livro={livro} />
        ))}
      </div>
    </div>
  );
};

export default Home;
