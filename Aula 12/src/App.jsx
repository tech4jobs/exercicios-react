import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home";
import DetalhesFilme from "./paginas/DetalhesFilme";
import Sobre from "./paginas/Sobre";
import {Erro404} from "./paginas/Erro404";

function App() {
  const filmes = [
    {
      id: 1,
      titulo: "Matrix",
      ano: 1999,
      genero: "Ficção Científica",
      descricao: "Um hacker descobre a verdade sobre sua realidade.",
    },
    {
      id: 2,
      titulo: "Interestelar",
      ano: 2014,
      genero: "Ficção Científica",
      descricao:
        "Exploração espacial em busca de um novo lar para a humanidade.",
    },
    {
      id: 3,
      titulo: "O Rei Leão",
      ano: 1994,
      genero: "Animação",
      descricao: "A jornada de Simba para se tornar rei.",
    },
  ];

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "16px", padding: "10px" }}>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home filmes={filmes} />} />
        <Route path="/filmes/:id" element={<DetalhesFilme filmes={filmes} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
