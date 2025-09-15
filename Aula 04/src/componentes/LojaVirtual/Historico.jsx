import React from "react";

const Historico = () => {
  const historico = [
    { nome: "Headset Vermelho", preco: 199.99, data: "10/09/2025" },
  ];

  return (
    <>
      <h2>Histórico de Compras</h2>
      <ul>
        {historico.map((compra, index) => (
          <li key={index}>
            {compra.nome} - R$ {compra.preco.toFixed(2)} (Data: {compra.data})
          </li>
        ))}
      </ul>
    </>
  );
};

export default Historico;
