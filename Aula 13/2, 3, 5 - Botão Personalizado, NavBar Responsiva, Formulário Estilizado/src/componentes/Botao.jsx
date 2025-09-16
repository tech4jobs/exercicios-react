import styled from "@emotion/styled";

const Botao = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Estilos baseados na prop "tipo" */
  background-color: ${(props) =>
    props.tipo === "primario" ? "#3498db" : "#ecf0f1"};
  color: ${(props) => (props.tipo === "primario" ? "white" : "#2c3e50")};

  &:hover {
    background-color: ${(props) =>
      props.tipo === "primario" ? "#2980b9" : "#bdc3c7"};
  }
`;

export default Botao;
