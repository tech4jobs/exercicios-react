import React, { useEffect, useState } from "react";

const SimuladorPassagens = () => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [erro, setErro] = useState("");
  const [resumo, setResumo] = useState("");
  const [botaoDesativado, setBotaoDesativado] = useState(false);

  const handleComprar = (e) => {
    e.preventDefault();

    if (quantidade < 1) {
      setErro("O mínimo de passagens é 1");
      setResumo(null);
      setBotaoDesativado(true);
      return;
    }

    if (quantidade > 5) {
      setErro("Limite de passagens excedido");
      setResumo(null);
      setBotaoDesativado(true);
      return;
    }
    
    setErro("");
    setResumo({ origem, destino, quantidade });
    setOrigem("");
    setDestino("");
    setQuantidade("");
  };

  return (
    <>
      <div
        style={{
          maxWidth: 300,
          margin: "2rem auto",
          border: "1px solid #ccc",
          padding: 20,
        }}
      >
        <h2>Simulador de Passagens</h2>
        <form onSubmit={handleComprar}>
          <div>
            <label>Origem: </label>
            <input
              type="text"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Destino: </label>
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Quantidade de passagens: </label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(parseInt(e.target.value))}
              required
            />
          </div>

          <button type="submit" disabled={botaoDesativado}>
            Comprar
          </button>
        </form>

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        {resumo && (
          <div style={{ marginTop: "20px" }}>
            <h3>Resumo da Compra:</h3>
            <p>
              <strong>Origem:</strong> {resumo.origem}
            </p>
            <p>
              <strong>Destino:</strong> {resumo.destino}
            </p>
            <p>
              <strong>Quantidade:</strong> {resumo.quantidade}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SimuladorPassagens;
