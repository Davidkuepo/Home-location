import React, { useState, useEffect } from 'react';

const Carousel = ({
  slides,
  containerClass = '',
  slideClass = '',
  imageClass = '',
  overlayClass = '',
  titleClass = '',
  descriptionClass = '',
  buttonClass = '',
  navButtonClass = '',
  indicatorClass = '',
  activeIndicatorClass = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-50 ${containerClass}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${slideClass}`}>
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover ${imageClass}`}
          />
          <div
            className={`absolute inset-0  flex flex-col justify-center items-center text-white p-4 ${overlayClass}`}>
            <h2 className={`text-4xl font-bold mb-2 ${titleClass}`}>{slide.title}</h2>
            <p className={`text-xl mb-4 ${descriptionClass}`}>{slide.description}</p>
            <button className={`btn btn-primary ${buttonClass}`}>{slide.buttonText}</button>
          </div>
        </div>
      ))}
      <button
        className={`btn btn-circle absolute top-1/2 left-4 transform -translate-y-1/2 ${navButtonClass}`}
        onClick={prevSlide}>
        ❮
      </button>
      <button
        className={`btn btn-circle absolute top-1/2 right-4 transform -translate-y-1/2 ${navButtonClass}`}
        onClick={nextSlide}>
        ❯
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? `bg-primary ${activeIndicatorClass}`
                : `bg-gray-300 ${indicatorClass}`
            }`}
            onClick={() => setCurrentIndex(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
