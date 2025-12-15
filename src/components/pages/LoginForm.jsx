import { useState } from "react";

export default function LoginForm() {
  //state
  const [prenom, setPrenom] = useState("");
  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    const Nprenom = prenom;
    alert("Bonjour ", Nprenom);
    setPrenom("");
  };
  const handleChange = (event) => {
    setPrenom(event.target.value);
  };
  //render
  return (
    <>
      <h2>Connectez-vous</h2>
      <form action="submit">
        <input
          type="text"
          placeholder="Entrer votre prénom..."
          onChange={handleChange} required
        />
        <button onSubmit={handleSubmit}>Acceder à votre espace</button>
      </form>
    </>
  );
}
