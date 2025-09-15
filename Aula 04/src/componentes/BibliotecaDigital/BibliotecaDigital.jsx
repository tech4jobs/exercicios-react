import React from "react";
import Disponiveis from "./Disponiveis";
import Emprestados from "./Emprestados";
import Reservados from "./Reservados";

const BibliotecaDigital = () => {
  return (
    <>
      <h1>Biblioteca Digital</h1>
      <Disponiveis />
      <Emprestados />
      <Reservados />
    </>
  );
};

export default BibliotecaDigital;
