import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };
  const handlechange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={inputValue}
          onChange={handlechange}
        />
        <button>Accéder à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background: green;
`;
