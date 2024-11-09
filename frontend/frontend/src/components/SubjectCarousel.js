import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SubjectCarousel.css';
import Maths from '../constants/Maths.jpg';
import CompSci from '../constants/CompSci.jpeg';
import AI from '../constants/AI.jpeg';

const SubjectCarousel = () => {
  const slides = [
    {
      image: {Maths},
      alt: "Maths",
      link: "https://example.com/1",
      title: "Maths"
    },
    {
      image: {CompSci},
      alt: "Computer Science",
      link: "https://example.com/2",
      title: "Computer Science"
    },
    {
      image: {AI},
      alt: "Artificial Intelligence",
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