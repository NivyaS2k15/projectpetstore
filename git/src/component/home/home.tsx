import React, { useState } from 'react';

import DogBreed from '../../assests/DogBreeds.jpg';
import one from '../../assests/one.jpg';
import dogone from '../../assests/dogone.jpg';

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide === 2 ? 0 : activeSlide + 1);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className={activeSlide === 0 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          className={activeSlide === 1 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          className={activeSlide === 2 ? "active" : ""}
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}>
          <img className="d-block w-100" src={DogBreed} alt="First slide" />
        </div>
        <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}>
          <img className="d-block w-100" src={one} alt="Second slide" />
        </div>
        <div className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}>
          <img className="d-block w-100" src={dogone} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#" role="button" onClick={handlePrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#" role="button" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Home;
