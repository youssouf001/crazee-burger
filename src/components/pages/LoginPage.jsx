import { useState } from "react";

export default function LoginPage() {
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

  //render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrer votre prénom..."
          required
          value={inputValue}
          onChange={handlechange}
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
