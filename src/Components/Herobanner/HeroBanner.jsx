import React from 'react';
import logo from "../../Assets/whitenobackgrund.png";
import './herobanner.css';

export const HeroBanner = ({title}) => {
  return (
    <div className='heroWrapper'>
      <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>
        {title}
      </h1>
    </div>
  );
};