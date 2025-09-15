import React from "react";

const ListaDesejos = () => {
  const listaDesejos = [{ nome: 'Monitor 24"', preco: 899.99 }];

  return (
    <>
      <h2>Lista de Desejos</h2>
      <ul>
        {listaDesejos.map((produto, index) => (
          <li key={index}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaDesejos;
