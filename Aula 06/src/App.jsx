import Contador from "./componentes/Contador";
import SeletorCores from "./componentes/SeletorCores";
import SeletorTema from "./componentes/SeletorTema";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Seletor de Cores</h2>
      <SeletorCores />
      <h2>Seletor de Tema</h2>
      <SeletorTema />
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;
