import React from "react";

const Reservados = () => {
    const livros = [
    { titulo: "Java Prático", autor: "João Castilho", data: "01/10/2025" },
    { titulo: "Como programar em Delphi", autor: "Pietra Silva", data: "05/11/2025" },
    { titulo: "Java vs. C#", autor: "Maria Cruz", data: "25/09/2025" },
    ]

  return (
    <>
      <h2>Livros Reservados</h2>
      {livros.map((livro, index) => (
        <li key={index}>
          {livro.titulo} - {livro.autor} (Data: {livro.data})
        </li>
      ))}
    </>
  );
};

export default Reservados;
