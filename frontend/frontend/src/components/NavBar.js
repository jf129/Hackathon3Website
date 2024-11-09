import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User } from 'lucide-react'; // Assuming you are using lucide-react for icons
import './NavBar.css';
import logo from '../constants/Logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
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
          <Link to="/StudentDashboard" className="navbar-link">
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

export default Navbar;