import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import LivroDetalhes from "./paginas/LivroDetalhes";
import { Erro404 } from "./paginas/Erro404";
import Sobre from "./paginas/Sobre";
import Autores from "./paginas/Autores";

const App = () => {
  const livros = [
    {
      id: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ano: 1899,
      descricao: "Um clássico da literatura brasileira.",
    },
    {
      id: 2,
      titulo: "O Alquimista",
      autor: "Paulo Coelho",
      ano: 1988,
      descricao: "Uma fábula sobre seguir seus sonhos.",
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      ano: 1949,
      descricao: "Um romance distópico sobre totalitarismo.",
    },
  ];

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "16px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/autores">Autores</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home livros={livros} />} />
        <Route path="/autores" element={<Autores livros={livros} />} />
        <Route path="/livros/:id" element={<LivroDetalhes livros={livros} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
