import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Collapse({ title, content }) {
  const [isActive, setIsActive] = useState(false);

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
      <p>{content}</p>
    </div>
  );
}

export default Collapse;
