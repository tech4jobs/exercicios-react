import React from "react";

const Carrinho = () => {
  const carrinho = [
    { nome: "Mouse Gamer", preco: 120.99 },
    { nome: "Teclado Mecânico", preco: 250.0 },
  ];

  return (
    <>
      <h2>Carrinho</h2>
      <ul>
        {carrinho.map((produto, index) => (
          <li key={index}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carrinho;
