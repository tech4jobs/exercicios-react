import { useState } from "react";

const temas = {
  claro: {
    background: "#f5f5f5",
    color: "#222",
    nome: "Claro",
  },
  escuro: {
    background: "#222",
    color: "#f5f5f5",
    nome: "Escuro",
  },
};

export default function SeletorTema() {
  const [tema, setTema] = useState("claro");

  const estilo = {
    background: temas[tema].background,
    color: temas[tema].color,
    padding: "30px",
    borderRadius: "10px",
    marginTop: "20px",
    textAlign: "center",
    transition: "all 0.3s",
  };

  return (
    <div style={estilo}>
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={() => setTema("claro")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            background: tema === "claro" ? "#ddd" : "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Claro
        </button>
        <button
          onClick={() => setTema("escuro")}
          style={{
            padding: "8px 16px",
            background: tema === "escuro" ? "#444" : "#fff",
            color: tema === "escuro" ? "#fff" : "#222",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Escuro
        </button>
      </div>
      <div>
        Tema atual: <strong>{temas[tema].nome}</strong>
      </div>
    </div>
  );
}
