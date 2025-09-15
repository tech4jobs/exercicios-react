import React from "react";
import Noticias from "./componentes/Noticias";
import Usuarios from "./componentes/Usuarios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      carregando: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ produtos: dados, carregando: false });
      })
      .catch(() => this.setState({ carregando: false }));
  }

  render() {
    const { produtos, carregando } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <h1>Produtos</h1>
        {carregando ? (
          <p>Carregando produtos...</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id}>
                {produto.nome} - R$ {produto.preco}
              </li>
            ))}
          </ul>
        )}
        <Noticias />
        <Usuarios />
      </div>
    );
  }
}

export default App;
