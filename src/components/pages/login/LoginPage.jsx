import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageSytyled>
      <Logo />
      <LoginForm />
    </LoginPageSytyled>
  );
}

const LoginPageSytyled = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    background: url("/images/burger-and-firies-background.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
