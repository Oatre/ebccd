import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import '../Navbar/navbar.css';

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/">
            <Button label="HJEM" /> 
            <div className="bar"></div>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">
            <Button label="OM OSS" /> 
            <div className="bar"></div>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/coaching">
            <Button label="COACHING" />
            <div className="bar"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};