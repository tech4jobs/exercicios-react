import { useState, useEffect } from "react";

export default function Contador() {
  const [valor, setValor] = useState(() => {
    const salvo = localStorage.getItem("contador");
    return salvo !== null ? Number(salvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem("contador", valor);
  }, [valor]);

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <button
        onClick={() => (valor == 0 ? null : setValor(valor - 1))}
        style={{ marginRight: "10px", padding: "8px 16px" }}
      >
        -
      </button>
      <span style={{ fontSize: "2rem", margin: "0 20px" }}>{valor}</span>
      <button
        onClick={() => setValor(valor + 1)}
        style={{ marginLeft: "10px", padding: "8px 16px" }}
      >
        +
      </button>
    </div>
  );
}
