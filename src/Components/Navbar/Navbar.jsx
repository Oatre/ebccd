import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'; // Adjusted import path
import "../Navbar/navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li>
          <Link to="/">
            <Button label="HJEM" /> {/* Using the Button component */}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Button label="OM OSS" /> {/* Using the Button component */}
          </Link>
        </li>
        <li>
          <Link to="/coaching">
            <Button label="COACHING" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};