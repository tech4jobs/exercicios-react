const Calculadora = () => {
  const calcularExpressao = () => {
    const inpuExpressao = document.getElementById("input-expressao");
    const resultado = document.getElementById("resultado");
    const expressao = inpuExpressao.value.split(" ");
    const primeiroValor = expressao[0];
    const operador = expressao[1];
    const segundoValor = expressao[2];
    let resultadoOperacao;
    switch (operador) {
      case "+":
        resultadoOperacao =
          parseFloat(primeiroValor) + parseFloat(segundoValor);
        break;
      case "-":
        resultadoOperacao =
          parseFloat(primeiroValor) - parseFloat(segundoValor);
        break;
      case "*":
        resultadoOperacao =
          parseFloat(primeiroValor) * parseFloat(segundoValor);
        break;
      case "/":
        resultadoOperacao =
          parseFloat(primeiroValor) / parseFloat(segundoValor);
        break;
      default:
        resultadoOperacao = "Operação inválida";
    }

    resultado.innerHTML = `Resultado: ${resultadoOperacao}`;
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <input
        id="input-expressao"
        type="text"
        placeholder="Digite sua operação matemática aqui..."
      />
      <button onClick={calcularExpressao}>Calcular</button>

      <h2 id="resultado"></h2>
    </div>
  );
};

export default Calculadora;
