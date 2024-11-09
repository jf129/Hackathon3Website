import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User } from 'lucide-react'; // Importing icons from lucide-react
import './NavBar.css'; // Importing the CSS file for styling
import logo from '../constants/Logo.png'; // Importing the logo image

// Functional component for the StudentNavBar
const StudentNavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      {/* Navigation links */}
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/StudentAlerts" className="navbar-link">
            <Home className="navbar-icon" />
            Alerts
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/StudentSubjects" className="navbar-link">
            <BookOpen className="navbar-icon" />
            Subjects
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

export default StudentNavBar;