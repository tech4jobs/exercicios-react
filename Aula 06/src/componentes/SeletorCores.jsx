import { useState } from "react";

const cores = [
  { nome: "Vermelho", valor: "#e74c3c" },
  { nome: "Verde", valor: "#27ae60" },
  { nome: "Azul", valor: "#2980b9" },
  { nome: "Amarelo", valor: "#f1c40f" },
];

export default function SeletorCores() {
  const [corSelecionada, setCorSelecionada] = useState(cores[0]);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {cores.map((cor) => (
          <div
            key={cor.valor}
            onClick={() => setCorSelecionada(cor)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: cor.valor,
              border:
                corSelecionada.valor === cor.valor
                  ? "3px solid #333"
                  : "2px solid #ccc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            title={cor.nome}
          >
            {corSelecionada.valor === cor.valor && (
              <span
                style={{
                  color: "#fff",
                  fontSize: 12,
                  position: "absolute",
                  bottom: 2,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                ✓
              </span>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          background: corSelecionada.valor,
          padding: "40px",
          borderRadius: "10px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Painel de cor selecionada: <strong>{corSelecionada.nome}</strong>
      </div>
    </div>
  );
}
