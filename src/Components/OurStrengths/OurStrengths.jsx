import React from 'react';
import './ourstrengths.css';
import bigboy from "../../Assets/bigboy.jpg";
import strength from '../../Assets/Styrke.png';

const OurStrengths = () => {
  return (
    <div className="our-strength-wrapper">
      <h2 className="our-strength-heading">VÅRE STYRKER</h2>
      <div className="our-strength-grid">
        <div className="our-strength-item">
          <img src={strength} alt="Strength 1" className="our-strength-image" />
          <div>
            <h3 className="our-strength-title">STYRKE</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 2" className="our-strength-image" />
          <div>
            <h3 className="our-strength-title">MUSKELVEKST</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 3" className="our-strength-image" />
          <div>
            <h3 className="our-strength-title">IDRETTSLIG PRESTASJON</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 4" className="our-strength-image" />
          <div>
            <h3 className="our-strength-title">KOSTHOLD OG ERNÆRING</h3>
            <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrengths;
