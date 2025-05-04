import React from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {


    return (

        <nav className='navbar'>


            <button className="hamburger-button">
             &#9776; 
            </button>


          <div className="nav-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/movies" className="navbar-link">Movies</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/admin" className="navbar-link">Admin</Link>
            <Link to="/404" className="navbar-link">Random</Link>

         </div>
        </nav>

    );
}

export default Navbar;