/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { listLogement } from '../../data/logements';
import arrowBack from '../../images/arrow_back.png';
import arrowForward from '../../images/arrrow_forward.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function Back() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? listLogement.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function Next() {
    const isLastSlide = currentIndex === listLogement.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="carousel-img">{listLogement.pictures[currentIndex]}</div>
      {listLogement.pictures.length > 1 && (
        <div>
          <img
            src={arrowBack}
            alt="image suivante"
            className="arrow arrow--back"
            onClick={Back}
          />
          <img
            src={arrowForward}
            alt="image précédente"
            className="arrow arrow--forward"
            onClick={Next}
          />
          <p className='numbering'>{currentIndex}/{listLogement.pictures.length}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
