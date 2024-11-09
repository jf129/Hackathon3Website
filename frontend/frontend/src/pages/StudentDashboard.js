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
    </div>
  );
};

export default StudentDashboard;