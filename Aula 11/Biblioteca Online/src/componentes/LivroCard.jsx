import React from "react";
import { Link } from "react-router-dom";

const LivroCard = ({ livro }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        minWidth: "150px",
        textAlign: "center",
      }}
    >
      <h3>{livro.titulo}</h3>
      <p>Autor: {livro.autor}</p>
      <p>Ano: {livro.ano}</p>
      <Link to={`/livros/${livro.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default LivroCard;
