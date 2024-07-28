import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Infos({ property }) {
  const activeStars = parseInt(property.rating, 10);
  const stars = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="infos">
      <div className="infos--left">
        <h1>{property.title}</h1>
        <p>{property.location}</p>
        <ul>
          {property.tags.map((tag, key) => (
            <li key={key}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="infos--right">
        <div className="host">
          <p className="host--name">{property.host.name}</p>
          <img
            src={property.host.picture}
            alt={property.host.name}
            className="host--picture"
          />
        </div>
        <div className="rating">
          {stars.map((index) => (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className={
                index < activeStars
                  ? 'star star--active'
                  : 'star star--inactive'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Infos;
