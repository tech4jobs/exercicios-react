import { useState } from "react";
import Produto from "./componentes/Produto";
import CadastroUsuarios from "./componentes/CadastroUsuarios";
import SimuladorPassagens from "./componentes/SimuladorPassagens";

const App = () => {
  return (
    <>
      <Produto />
      <CadastroUsuarios />
      <SimuladorPassagens />
    </>
  );
};

export default App;
