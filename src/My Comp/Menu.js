// Menu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Cicones from '../Components/Cicones';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav-top ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`links ${menuOpen ? 'show' : ''}`}>
        <Link to='/' onClick={toggleMenu}>Calcultrise</Link>
        <Link to='/Slider' onClick={toggleMenu}>Image Slider</Link>
        <Link to='/Tp3Todo' onClick={toggleMenu}>Todo List</Link>
        <Link to='/Useeffect' onClick={toggleMenu}>API</Link>
        

      </div>
    </div>
  );
}
