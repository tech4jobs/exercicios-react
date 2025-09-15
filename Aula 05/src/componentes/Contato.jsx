import React from "react";

const Contato = ({ contato }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          minWidth: "180px",
          textAlign: "center",
        }}
      >
        <h2>{contato.nome}</h2>
        <p>Telefone: {contato.telefone}</p>
        <p>Email: {contato.email}</p>
      </div>
    </>
  );
};

export default Contato;
