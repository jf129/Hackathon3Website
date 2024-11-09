import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectCarousel from '../components/SubjectCarousel';
import Navbar from '../components/NavBar';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">AI Literacy Flash Cards</h1>
      <div className="button-container">
        <button
          className="rounded-button"
          style={{ backgroundImage: "url('../constants/Maths.jpg')" }}
          onClick={() => navigate('/Maths')}
        >
          Maths
        </button>
        <button
          className="rounded-button"
          style={{ backgroundImage: "url('../constants/CompSci.jpeg')" }}
          onClick={() => navigate('/CompSci')}
        >
          Computer Science
        </button>
        <button
          className="rounded-button"
          style={{ backgroundImage: "url('../constants/AI.jpeg')" }}
          onClick={() => navigate('/AI')}
        >
          AI Literacy
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;