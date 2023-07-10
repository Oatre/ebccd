import React, { useState } from 'react';
import './hiddenbutton.css';

const HiddenButton = ({ label }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHover = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className="hidden-button-wrapper"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <a href='/about'
        className={`dropdownItem hidden-button ${isVisible ? 'visible' : ''}`}
      >
        {label}
      </a>
    </div>
  );
};

export default HiddenButton;
