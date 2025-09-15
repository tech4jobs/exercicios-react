const Disponiveis = () => {
  const disponiveis = [
    { titulo: "React para Iniciantes", autor: "João Silva" },
    { titulo: "JavaScript Avançado", autor: "Maria Souza" },
  ];

  return (
    <>
      <h2>Livros Disponíveis</h2>
      {disponiveis.map((livro, index) => (
        <li key={index}>
          {livro.titulo} - {livro.autor}
        </li>
      ))}
    </>
  );
};

export default Disponiveis;
