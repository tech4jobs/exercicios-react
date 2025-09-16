import React from "react";
import { useParams } from "react-router-dom";

export const Detalhes = ({ produtos }) => {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalhes do Produto</h1>
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
};
