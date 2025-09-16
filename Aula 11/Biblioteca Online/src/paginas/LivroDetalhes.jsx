import React from "react";
import { useParams } from "react-router-dom";

const LivroDetalhes = ({ livros }) => {
  const { id } = useParams();
  const livro = livros.find((l) => l.id === parseInt(id));

  if (!livro) return <h2>Livro não encontrado!</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{livro.titulo}</h1>
      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>
      <p>
        <strong>Ano:</strong> {livro.ano}
      </p>
      <p>
        <strong>Descrição:</strong> {livro.descricao}
      </p>
    </div>
  );
};

export default LivroDetalhes;
