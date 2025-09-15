import React from "react";
import Carrinho from "./Carrinho";
import ListaDesejos from "./ListaDesejos";
import Historico from "./Historico";

const LojaVirtual = () => {
  return (
    <>
      <h2>Loja Virtual</h2>
      <Carrinho />
      <ListaDesejos />
      <Historico />
    </>
  );
};

export default LojaVirtual;
