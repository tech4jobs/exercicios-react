import React, { createRef } from "react";

class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      carregando: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ usuarios: dados, carregando: false });
      })
      .catch(() => this.setState({ carregando: false }));
  }

  render() {
    const { usuarios, carregando } = this.state;
    return (
      <div>
        <h2>Lista de Usuários</h2>
        {carregando ? (
          <p>Carregando</p>
        ) : (
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>{usuario.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Usuarios;