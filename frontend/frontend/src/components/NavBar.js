import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User } from 'lucide-react'; // Assuming you are using lucide-react for icons
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../path/to/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <Home className="navbar-icon" />
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Maths" className="navbar-link">
            <BookOpen className="navbar-icon" />
            Maths
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/CompSci" className="navbar-link">
            <BookOpen className="navbar-icon" />
            Computer Science
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/AI" className="navbar-link">
            <User className="navbar-icon" />
            AI Literacy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;