import React, { useState } from "react";

const CadastroUsuarios = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [erro, setErro] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [desabilitar, setDesabilitar] = useState(false);

  const handleCadastrar = (e) => {
    e.preventDefault();

    if (parseInt(idade) < 18) {
      setErro("Usuário deve ter 18 anos ou mais.");
      setUsuario(null);
      setDesabilitar(true);
      return;
    }

    setErro("");
    setUsuario({ nome, email, idade });
    setNome("");
    setEmail("");
    setIdade("");
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
      <h2>Cadastro de Usuário</h2>
      <form
        onSubmit={handleCadastrar}
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label>Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Idade: </label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={desabilitar}>
          Cadastrar
        </button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {usuario && (
        <div style={{ marginTop: "20px" }}>
          <h3>Dados Cadastrados:</h3>
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
          <p>
            <strong>Idade:</strong> {usuario.idade}
          </p>
        </div>
      )}
    </div>
  );
};

export default CadastroUsuarios;
