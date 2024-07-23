import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  function menuCollapse(e) {
    e.currentTarget.classList.toggle('active');
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle('active');
  }

  return (
    <div className="collapse">
      <div className="collapse--menu">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="collapse--toggle"
          onClick={menuCollapse}
        />
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Collapse;
