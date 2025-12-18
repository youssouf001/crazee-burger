import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  //render
  return (
    <LoginPageSytyled>
      <Logo />
      <LoginForm />;
    </LoginPageSytyled>
  );
}

const LoginPageSytyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
