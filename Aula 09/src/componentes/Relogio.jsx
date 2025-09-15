import React, { useEffect, useState } from "react";

const Relogio = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Horário Atual</h2>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
};

export default Relogio;
