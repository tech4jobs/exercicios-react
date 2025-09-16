import React from "react";
import { Link } from "react-router-dom";
const Cartao = ({ produto }) => {
  return (
    <Link
      to={`/detalhes/${produto.id}`}
      style={{ textDecoration: "none", color: "#313131" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          minWidth: "120px",
          textAlign: "center",
        }}
      >
        <h2>{produto.nome}</h2>
        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      </div>{" "}
    </Link>
  );
};

export default Cartao;
