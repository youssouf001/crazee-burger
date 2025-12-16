import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  const handlechange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrer votre prénom..."
        required
        value={inputValue}
        onChange={handlechange}
      />
      <Link to="/order"><button>Accéder à votre espace</button></Link>
    </form>
  );
}
