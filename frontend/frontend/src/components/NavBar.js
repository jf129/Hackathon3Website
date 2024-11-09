import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Maths" className="navbar-link">Maths</Link>
        </li>
        <li className="navbar-item">
          <Link to="/CompSci" className="navbar-link">Computer Science</Link>
        </li>
        <li className="navbar-item">
          <Link to="/AI" className="navbar-link">AI Literacy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;