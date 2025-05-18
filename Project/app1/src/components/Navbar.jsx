import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };
  
  return (
    <nav className="navbar">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/movies" className="navbar-link">
          Movies
        </NavLink>
        <NavLink to="/about" className="navbar-link">
          About
        </NavLink>
        <NavLink to="/admin" className="navbar-link">
          Admin
        </NavLink>
        <NavLink to="/favorites" className="navbar-link">
        Favorites
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
