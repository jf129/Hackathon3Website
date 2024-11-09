import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./StudentDashboard.css";
import SubjectCarousel from '../components/SubjectCarousel';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (

    <div>
      <h1>Student Dashboard</h1>
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