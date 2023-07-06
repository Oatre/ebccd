import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import '../Navbar/navbar.css';
import HiddenButton from '../Button/HiddenButton';

export const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSubmenuToggle = () => {
    setShowSubmenu(!showSubmenu);
  };

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
          <div className="navbar-button-wrapper">
            <Link to="/about">
              <Button
                label="OM OSS"
                onMouseEnter={handleSubmenuToggle}
                onMouseLeave={handleSubmenuToggle}
              />
            </Link>
            {showSubmenu && (
              <div className="navbar-submenu">
                <Link to="/about/vision">
                  <HiddenButton label="VÅR VISJON" />
                </Link>
              </div>
            )}
          </div>
          <div className="bar"></div>
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
