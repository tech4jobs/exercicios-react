import React from "react";

const Curso = ({ curso }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        minWidth: "180px",
        textAlign: "center",
      }}
    >
      <h2>{curso.nome}</h2>
      <p>Carga Horária: {curso.cargaHoraria}</p>
      <p>Professor: {curso.professor}</p>
    </div>
  );
};

export default Curso;
