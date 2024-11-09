import React, { useState } from 'react';

const AIFlashCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

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
    },
    {
      question: "What is a neural network?",
      answer: "A computing system inspired by biological neural networks, designed to recognize patterns in data through layers of interconnected nodes."
    },
    {
      question: "What is 'training data' in AI?",
      answer: "The initial dataset used to teach an AI model patterns and relationships, helping it learn how to make predictions or decisions."
    }
  ];

  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % flashCards.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => (prev - 1 + flashCards.length) % flashCards.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
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