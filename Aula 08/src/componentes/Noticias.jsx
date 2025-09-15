import React from "react";

class Noticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      carregando: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ noticias: dados, carregando: false });
      })
      .catch(() => this.setState({ carregando: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.noticias.length !== this.state.noticias.length) {
      console.log(
        `Quantidade atual de notícias carregadas: ${this.state.noticias.length}`
      );
    }
  }

  render() {
    const { noticias, carregando } = this.state;
    return (
      <div>
        <h2>Notícias Recentes</h2>
        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {noticias.map((noticia) => (
              <li key={noticia.id}>{noticia.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Noticias;
