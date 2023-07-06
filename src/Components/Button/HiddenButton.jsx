import React, { useState } from 'react';
// import "./hiddenbutton.css";

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
      <button
        className={`hidden-button ${isVisible ? 'visible' : ''}`}
      >
        {label}
      </button>
    </div>
  );
};

export default HiddenButton;
