import React, { useState } from "react";

const produto = {
  id: 1,
  nome: "Headset",
  preco: 200.0,
  estoque: 10,
};

const Produto = () => {
  const [quantidade, setQuantidade] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const handleQuantidadeChange = (e) => {
    let valor = parseFloat(e.target.value);
    if (valor < 0) valor = 0;
    if (valor > produto.estoque) {
      valor = produto.estoque;
      setMensagem("Quantidade excede o estoque disponível!");
    } else {
      setMensagem("");
    }
    setQuantidade(valor);
  };

  const handleComprar = () => {
    produto.estoque -= quantidade;
    setMensagem("Compra realizada!");
    setQuantidade(0);
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: "2rem auto",
        border: "1px solid #ccc",
        padding: 20,
      }}
    >
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>Em estoque: {produto.estoque}</p>
      <label>
        Quantidade:
        <input
          type="number"
          min={0}
          max={produto.estoque}
          value={quantidade}
          onChange={handleQuantidadeChange}
          style={{ marginLeft: 8, width: 60 }}
        />
      </label>
      <br />
      <button
        onClick={handleComprar}
        disabled={quantidade <= 0 || quantidade > produto.estoque}
        style={{ marginTop: 10 }}
      >
        Comprar
      </button>
      {mensagem && (
        <div style={{ color: "red", marginTop: 10 }}>{mensagem}</div>
      )}
    </div>
  );
};

export default Produto;
