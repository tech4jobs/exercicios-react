import { useParams } from "react-router-dom";

const DetalhesFilme = ({ filmes }) => {
  const { id } = useParams();
  const filme = filmes.find((f) => f.id === parseInt(id));

  if (!filme) return <h2>Filme não encontrado!</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{filme.titulo}</h1>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Descrição:</strong> {filme.descricao}</p>
    </div>
  );
};

export default DetalhesFilme;
