import React from 'react';
import './ourstrengths.css';
import bigboy from "../../Assets/bigboy.jpg";
import strength from '../../Assets/Styrke.png';
import idrett from '../../Assets/idrett.jpeg';

const OurStrengths = () => {
  return (
    // Wrapper, heading, general.
    <div className="our-strength-wrapper">
      <h2 className="our-strength-heading">VÅRE STYRKER</h2>
      <div className="our-strength-grid">

        {/* Styrke */}
        <div className="our-strength-item strength-1">
          <img src={strength} alt="Strength 1" className="our-strength-image strength-1" />
          <div className="our-strength-content">
            <h3 className="our-strength-title">STYRKE</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Muskelvekst */}
        <div className="our-strength-item strength-2">
          <img src={bigboy} alt="Strength 2" className="our-strength-image strength-2" />
          <div className="our-strength-content">
            <h3 className="our-strength-title">MUSKELVEKST</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Idrettslig prestasjon */}
        <div className="our-strength-item strength-3">
          <img src={idrett} alt="Strength 3" className="our-strength-image strength-3" />
          <div className="our-strength-content">
            <h3 className="our-strength-title">IDRETTSLIG PRESTASJON</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Kosthold og ernæring */}
        <div className="our-strength-item strength-4">
          <img src={bigboy} alt="Strength 4" className="our-strength-image strength-4" />
          <div className="our-strength-content">
            <h3 className="our-strength-title">KOSTHOLD OG ERNÆRING</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrengths;

