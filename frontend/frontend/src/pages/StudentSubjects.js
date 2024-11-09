import React from 'react';
import StudentNavbar from '../components/StudentNavBar';
import { useNavigate } from 'react-router-dom';

const StudentSubjects = () => {
    const navigate = useNavigate();

  return (
    <div>
        <StudentNavbar />
      <h1 className="text-2xl font-bold">Subjects</h1>
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

export default StudentSubjects;