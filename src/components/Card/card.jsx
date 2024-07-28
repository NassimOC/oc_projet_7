import { Link } from 'react-router-dom';

function Card({ cover, title, id }) {
  return (
    <Link to={`/property/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
}

export default Card;
