import React from "react";

const EmTransporte = () => {
  class Encomenda {
    constructor(produto, quantidade, preco) {
      this.produto = produto;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  }

  const encomendas = [
    new Encomenda("Câmera", 1, 2000),
    new Encomenda("Fone de Ouvido", 2, 800),
    new Encomenda("Monitor", 1, 1200),
  ];

  return (
    <>
      <h2>Encomendas em Transporte</h2>
      <ul>
        {encomendas.map((encomenda, index) => (
          <li key={index}>
            {encomenda.quantidade}x {encomenda.produto} - R$ {encomenda.preco}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EmTransporte;
