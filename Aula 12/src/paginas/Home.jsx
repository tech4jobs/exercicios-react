import FilmeCard from "../componentes/FilmeCard";

const Home = ({ filmes }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo de Filmes</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {filmes.map((f) => (
          <FilmeCard key={f.id} filme={f} />
        ))}
      </div>
    </div>
  );
};

export default Home;
