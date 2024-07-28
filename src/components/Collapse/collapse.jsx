import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Collapse({ title, content, list }) {
  const [isActive, setIsActive] = useState(false);

  const isObject = (value) => value === true;

  const toggleActiveState = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={isActive ? 'collapse active' : 'collapse'}>
      <div className="collapse--menu">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isActive ? 'collapse--toggle active' : 'collapse--toggle'}
          onClick={toggleActiveState}
        />
      </div>
      <ul>
        {isObject(list) ? (
          content.map((text, key) => <li key={key}>{text}</li>)
        ) : (
          <li>{content}</li>
        )}
      </ul>
    </div>
  );
}

export default Collapse;
