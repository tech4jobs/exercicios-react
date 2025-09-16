import { Link } from "react-router-dom";

const FilmeCard = ({ filme }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        minWidth: "150px",
        textAlign: "center",
      }}
    >
      <h3>{filme.titulo}</h3>
      <p>Ano: {filme.ano}</p>
      <Link to={`/filmes/${filme.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default FilmeCard;
