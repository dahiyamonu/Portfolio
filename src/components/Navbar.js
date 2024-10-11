import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Navbar.css'
import logo from '../Images/logo.webp'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='logo'>
      <NavLink exact to="/" className="active-link1"><img src={logo} alt="" height={35} width={150}/></NavLink>
    </div>
      <ul className='nav-links'>
        <li>
          <NavLink exact to="/" className="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/educations" className="active-link">Education</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="active-link">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="active-link">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/certifications" className="active-link">Certification</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
