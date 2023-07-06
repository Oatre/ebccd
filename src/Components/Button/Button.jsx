import React from 'react';
import "./button.css";

const Button = ({ label, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <button className='navBtn'
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
      {label}
      
    </button>
  
  );
};
console.log("onMouseEnter");
console.log("onMouseLeave");
export default Button;