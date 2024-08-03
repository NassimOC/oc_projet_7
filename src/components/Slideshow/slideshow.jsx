/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import arrowBack from '../../images/arrow_back.png';
import arrowForward from '../../images/arrrow_forward.png';

function Carousel({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function Back() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? property.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function Next() {
    const isLastSlide = currentIndex === property.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="carousel--img">
        <img
          src={property.pictures[currentIndex]}
          alt={property.title}
        />
      </div>
      {property.pictures.length > 1 && (
        <>
          <img
            src={arrowBack}
            alt="image précédente"
            className="arrow arrow--back"
            onClick={Back}
          />
          <img
            src={arrowForward}
            alt="image suivante"
            className="arrow arrow--forward"
            onClick={Next}
          />
          <p className="numbering">
            {currentIndex + 1}/{property.pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
