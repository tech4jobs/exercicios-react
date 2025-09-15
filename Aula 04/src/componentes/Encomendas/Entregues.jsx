import React from "react";

const Entregues = () => {
  class Encomenda {
    constructor(produto, quantidade, preco) {
      this.produto = produto;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  }

  const encomendas = [
    new Encomenda("Cadeira Gamer", 1, 1500),
    new Encomenda("Teclado Mecânico", 1, 600),
    new Encomenda("Mouse", 1, 300),
  ];
  
  return (
    <>
      <h2>Encomendas Entregues</h2>
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

export default Entregues;
