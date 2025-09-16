import React from "react";
import Cartao from "../componentes/Cartao";

const Vitrine = ({ produtos }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Vitrine de Doces</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {produtos.map((produto) => (
          <Cartao key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default Vitrine;
