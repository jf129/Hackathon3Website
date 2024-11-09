import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SubjectCarousel.css';

const SubjectCarousel = () => {
  const slides = [
    {
      image: "../constants/Maths.jpg",
      alt: "Slide 1",
      link: "https://example.com/1",
      title: "Maths"
    },
    {
      image: "../constants/CompSci.jpeg",
      alt: "Slide 2",
      link: "https://example.com/2",
      title: "Computer Science"
    },
    {
      image: "../constants/AI.jpeg",
      alt: "Slide 3",
      link: "https://example.com/3",
      title: "AI Literacy"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <a href={slide.link}>
            <img src={slide.image} alt={slide.alt} />
          </a>
        </div>
      ))}
      <button className="carousel-button left" onClick={goToPrevious}>
        <ChevronLeft />
      </button>
      <button className="carousel-button right" onClick={goToNext}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default SubjectCarousel;