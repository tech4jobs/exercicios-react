import BibliotecaDigital from "./componentes/BibliotecaDigital/BibliotecaDigital";
import Encomendas from "./componentes/Encomendas/Encomendas";
import LojaVirtual from "./componentes/LojaVirtual/LojaVirtual";

function App() {
  return (
    <div className="app-container">
      {/* Encomendas e Entregas */}
      <section>
        <Encomendas />
      </section>

      {/* Biblioteca Digital */}
      <section>
        <BibliotecaDigital />
      </section>

      {/* Loja Virtual */}
      <section>
        <LojaVirtual />
      </section>
    </div>
  );
}

export default App;
