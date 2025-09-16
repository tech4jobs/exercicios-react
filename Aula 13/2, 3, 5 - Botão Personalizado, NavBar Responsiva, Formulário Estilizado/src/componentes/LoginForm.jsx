/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
`;

const Titulo = styled.h2`
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 12px;
  width: 90%;
  margin-bottom: 15px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
    box-shadow: 0px 0px 5px rgba(52, 152, 219, 0.6);
  }
`;

const FormButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const LoginForm = () => {
  return (
    <Form>
      <Titulo>Login</Titulo>
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="Senha" required />
      <FormButton type="submit">Entrar</FormButton>
    </Form>
  );
};

export default LoginForm;
