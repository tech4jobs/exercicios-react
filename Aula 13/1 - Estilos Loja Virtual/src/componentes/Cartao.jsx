import React from "react";
import { Link } from "react-router-dom";
import { Botao, Card } from "./Estilo";
const Cartao = ({ produto }) => {
  return (
    <Card>
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <Botao>Comprar</Botao>
    </Card>
  );
};

export default Cartao;
