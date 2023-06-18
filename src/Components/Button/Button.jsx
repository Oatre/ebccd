import React from 'react';
import "./button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className='navBtn' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;