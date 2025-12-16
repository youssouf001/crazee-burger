import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const { username } = useParams();
  //comportement

  //render
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
