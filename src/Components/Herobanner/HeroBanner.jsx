import React from 'react';
import logo from "../../Assets/images/whitenobackgrund.png";
import './herobanner.scss';
import { Link, useLocation } from 'react-router-dom';

export const HeroBanner = ({ title = '', link }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // Split the title into words
  const words = title.split(' ');

  return (
    
    <div className='heroWrapper'>
      <Link to="/">
        <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Link>
      <h1>
        {words.map((word, wordIndex) => 
          <>
            {word.split('').map((letter, letterIndex) => (
              <span 
                key={`${wordIndex}-${letterIndex}`} 
                className={letterIndex === 0 ? `first-letter` : `letter-${letterIndex}`}
              >
                {letter}
              </span>
            ))}
            {/* Add a space after each word */}
            {wordIndex < words.length - 1 && ' '}
          </>
        )}
      </h1>
      {isHomepage && (
        <div className="h2-wrapper">
          <h2 className="h2-first">SAMMEN ER VI STERKERE &nbsp; </h2>
          <h2 className="h2-second">MED TO COACHER, DOBLES RESULTATENE</h2>
        </div>
      )}
    
    </div>
  );
};