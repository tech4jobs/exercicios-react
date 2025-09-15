import React from "react";
import Recebidas from "./Recebidas";
import EmTransporte from "./EmTransporte";
import Entregues from "./Entregues";

const Encomendas = () => {
  return (
    <div>
      <h1>Encomendas e Entregas</h1>
      <Recebidas />
      <EmTransporte />
      <Entregues />
    </div>
  );
};

export default Encomendas;
