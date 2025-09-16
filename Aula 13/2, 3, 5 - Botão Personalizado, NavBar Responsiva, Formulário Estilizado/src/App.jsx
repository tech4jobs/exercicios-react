import React from "react";
import Botao from "./componentes/Botao";
import Navbar from "./componentes/Nav";
import LoginForm from "./componentes/LoginForm";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h1>Bem-vindo à Loja Virtual</h1>
          <p>Exemplo de navbar responsiva usando Glamorous!</p>
        </div>
      </div>

      <div
        style={{
          padding: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h1>Teste de Botões Personalizados</h1>

        <Botao tipo="primario">Salvar</Botao>
        <Botao tipo="secundario" style={{ marginLeft: "10px" }}>
          Cancelar
        </Botao>
      </div>

      <div>
        <h1>Formulário Estilizado</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
