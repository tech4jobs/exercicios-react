import Cartao from "./componentes/Cartao";
import Contato from "./componentes/Contato";
import Curso from "./componentes/Curso";

function App() {
  const produtos = [
    { id: 1, nome: "Brigadeiro", preco: 2.5 },
    { id: 2, nome: "Beijinho", preco: 2.0 },
    { id: 3, nome: "Quindim", preco: 3.0 },
    { id: 4, nome: "Bolo de pote", preco: 5.0 },
  ];

  const contatos = [
    {
      id: 1,
      nome: "Ana Silva",
      telefone: "(11) 99999-1111",
      email: "ana@email.com",
    },
    {
      id: 2,
      nome: "Carlos Souza",
      telefone: "(21) 98888-2222",
      email: "carlos@email.com",
    },
    {
      id: 3,
      nome: "Maria Oliveira",
      telefone: "(31) 97777-3333",
      email: "maria@email.com",
    },
  ];

  const cursos = [
    {
      id: 1,
      nome: "React Básico",
      cargaHoraria: "20h",
      professor: "João Pereira",
    },
    {
      id: 2,
      nome: "JavaScript Avançado",
      cargaHoraria: "30h",
      professor: "Fernanda Lima",
    },
    {
      id: 3,
      nome: "CSS Moderno",
      cargaHoraria: "15h",
      professor: "Carlos Mendes",
    },
  ];

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Vitrine de Doces</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          {produtos.map((produto) => (
            <Cartao key={produto.id} produto={produto} />
          ))}
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Agenda de Contatos</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          {contatos.map((contato) => (
            <Contato key={contato.id} contato={contato} />
          ))}
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Catálogo de Cursos</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          {cursos.map((curso) => (
            <Curso key={curso.id} curso={curso} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
