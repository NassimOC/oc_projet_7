import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <span className="error--404">404</span>
      <p className="error--message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error--back">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
