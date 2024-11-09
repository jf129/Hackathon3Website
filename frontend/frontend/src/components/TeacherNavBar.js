import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User } from 'lucide-react'; // Assuming you are using lucide-react for icons
import './NavBar.css';
import logo from '../constants/Logo.png'; 

const TeacherNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/TeacherDashboard">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/TeacherAlerts" className="navbar-link">
            <Home className="navbar-icon" />
            Alerts
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Students" className="navbar-link">
            <BookOpen className="navbar-icon" />
            Students
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/TeacherDashboard" className="navbar-link">
            <Home className="navbar-icon" />
            Dashboard
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Profile" className="navbar-link">
            <User className="navbar-icon" />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TeacherNavBar;