import React, { useEffect, useState } from "react";

const PRODUTO_ID = 1;

const Produtos = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/produtos/${PRODUTO_ID}`)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((error) => console.error("Erro ao buscar produto:", error));
  }, []);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>ID: {produto.id}</p>
      <p>Nome: {produto.nome}</p>
      <p>Preço: {produto.preco}</p>
    </div>
  );
};

export default Produtos;
