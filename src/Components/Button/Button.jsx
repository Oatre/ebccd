import React from 'react';
import "./button.scss";

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