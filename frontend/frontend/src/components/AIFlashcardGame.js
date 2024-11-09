import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIFlashcardGame.css';

const AIFlashCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const navigate = useNavigate();

  const flashCards = [
    {
      question: "What does AI stand for?",
      answer: "Artificial Intelligence - intelligence demonstrated by machines, as opposed to natural intelligence displayed by humans."
    },
    {
      question: "What is machine learning?",
      answer: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed."
    },
    {
      question: "What is the difference between narrow AI and general AI?",
      answer: "Narrow AI is designed for specific tasks (like playing chess), while general AI would match human-level intelligence across all domains."
    }
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? flashCards.length - 1 : prevIndex - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === flashCards.length - 1 ? 0 : prevIndex + 1));
    setIsFlipped(false);
  };

  const handleResponse = (correct) => {
    setScore(prev => correct ? prev + 1 : prev);
    setAttempted(prev => prev + 1);
    handleNext();
  };

  const resetGame = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setScore(0);
    setAttempted(0);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">AI Literacy Flash Cards</h2>
        <div className="text-lg">
          Score: {score}/{attempted}
        </div>
      </div>
      <button 
        onClick={() => {navigate("/StudentDashboard")}}
        className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Back to Dashboard
      </button>

      <div 
        className="w-full bg-white border rounded-lg shadow-sm mb-4 cursor-pointer min-h-64 flex items-center justify-center p-6"
      >
        <div className="flashcard-container">
          <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-front">
              <p>{flashCards[currentCardIndex].question}</p>
            </div>
            <div className="flashcard-back">
              <p>{flashCards[currentCardIndex].answer}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mb-4">
        <button 
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => handleResponse(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Incorrect
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Correct
          </button>
        </div>

        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          Next →
        </button>
      </div>

      <button 
        onClick={resetGame}
        className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Reset Game
      </button>
    </div>
  );
};

export default AIFlashCards;