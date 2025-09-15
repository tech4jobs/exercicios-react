import React from "react";

const Emprestados = () => {
  const livros = [
    { titulo: "CSS Moderno", autor: "Ana Silva", para: "Carlos" },
    { titulo: "Node.js", autor: "Pedro Souza", para: "Mariana" },
  ];

  return (
    <>
      <h2>Livros Emprestados</h2>
      {livros.map((livro, index) => (
        <li key={index}>
          {livro.titulo} - {livro.autor} (Para: {livro.para})
        </li>
      ))}
    </>
  );
};

export default Emprestados;
