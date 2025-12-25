import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import TextInput from "../../reusable-ui/TextInput";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const [motDePasse, setmotDePasse] = useState("");

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

  const handlechangeMotDePasse = (event) => {
    setmotDePasse(event.target.value);
  };
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput
          value={inputValue}
          onChange={handlechange}
          placeholder={"Entrez votre prénom..."}
          Icon={<BsPersonCircle className="icon" />}
        />
        <TextInput
          value={motDePasse}
          onChange={handlechangeMotDePasse}
          placeholder={"Entrez votre prénom..."}
          Icon={<RiLockPasswordLine className="icon" />}
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5em 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    color: white;
    font-size: 36px;
    margin: 20px 10px 10px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: 15px;
    margin-left: 10px;
  }
`;
