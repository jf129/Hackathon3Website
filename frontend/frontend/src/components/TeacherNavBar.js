import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User } from 'lucide-react'; // Importing icons from lucide-react
import './NavBar.css'; // Importing the CSS file for styling
import logo from '../constants/Logo.png'; // Importing the logo image

// Functional component for the TeacherNavBar
const TeacherNavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="navbar-logo">
        <Link to="/TeacherDashboard">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      {/* Navigation links */}
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