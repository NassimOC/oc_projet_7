/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { listProperties } from '../../data/properties';
import arrowBack from '../../images/arrow_back.png';
import arrowForward from '../../images/arrrow_forward.png';

function Carousel({ id }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedProperty = listProperties.find(
    (property) => property.id === id
  );

  function Back() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? selectedProperty.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function Next() {
    const isLastSlide = currentIndex === selectedProperty.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="carousel--img">
        <img
          src={selectedProperty.pictures[currentIndex]}
          alt={selectedProperty.title}
        />
      </div>
      {selectedProperty.pictures.length > 1 && (
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
            {currentIndex + 1}/{selectedProperty.pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
