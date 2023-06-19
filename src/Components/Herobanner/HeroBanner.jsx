import React from 'react';
import logo from "../../Assets/whitenobackgrund.png";
import './herobanner.css';
import { Link, useLocation } from 'react-router-dom';


export const HeroBanner = ({ title, link }) => {
  const location = useLocation();

const isHomepage = location.pathname === '/';

  return (
    <div className='heroWrapper'>
      <Link to="/">
        <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Link>
      <h1>{title}</h1>
      {isHomepage && <h2>COACHING MED TO</h2>}
    </div>
  );
};