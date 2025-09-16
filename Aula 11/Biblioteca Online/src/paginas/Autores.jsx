import React from 'react'

const Autores = ({ livros }) => {
    const autoresUnicos = [...new Set(livros.map(livro => livro.autor))];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Autores</h1>
      <ul>
        {autoresUnicos.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </ul>
    </div>
  )
}

export default Autores