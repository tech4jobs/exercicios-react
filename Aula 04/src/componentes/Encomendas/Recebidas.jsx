import React from "react";

const Recebidas = () => {
  class Encomenda {
    constructor(produto, quantidade, preco) {
      this.produto = produto;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  }

  const encomendas = [
    new Encomenda("Notebook", 1, 3500),
    new Encomenda("Smartphone", 2, 2500),
    new Encomenda("Tablet", 1, 1500),
  ];

  return (
    <>
      <h2>Encomendas Recebidas</h2>
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

export default Recebidas;
