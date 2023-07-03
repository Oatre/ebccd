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
      <h1>
        {title.split('').map((letter, index) => (
          <span key={index} className={`letter-${index}`}>{letter}</span>
        ))}
      </h1>
      {isHomepage && (
        <div className="h2-wrapper">
          <h2 className="h2-first">SAMMEN ER VI STERKERE</h2>
          <h2 className="h2-second"> MED TO COACHER, DOBLES RESULTATENE</h2>
        </div>
      )}
    </div>
  );
};