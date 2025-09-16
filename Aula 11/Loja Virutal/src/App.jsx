import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Vitrine from "./paginas/Vitrine";
import { Detalhes } from "./paginas/Detalhes";
import { Erro404 } from "./paginas/Erro404";
import Sobre from "./paginas/Sobre";

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: "Brigadeiro",
      preco: 2.5,
    },
    {
      id: 2,
      nome: "Beijinho",
      preco: 2.0,
    },
    {
      id: 3,
      nome: "Quindim",
      preco: 3.0,
    },
    {
      id: 4,
      nome: "Bolo de pote",
      preco: 5.0,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "16px", padding: "10px" }}>
          <Link to="/">Início</Link>
          <Link to="/vitrine">Vitrine</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine produtos={produtos} />} />
          <Route
            path="/detalhes/:id"
            element={<Detalhes produtos={produtos} />}
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
