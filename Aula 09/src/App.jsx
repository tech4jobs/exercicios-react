import React from "react";
import Produtos from "./componentes/Produtos";
import { Tarefas } from "./componentes/Tarefas";
import Relogio from "./componentes/Relogio";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Produtos />
      <Tarefas />
      <Relogio />
    </div>
  );
};

export default App;
