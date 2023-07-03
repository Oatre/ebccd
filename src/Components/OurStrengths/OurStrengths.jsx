import React from 'react';
import './ourstrengths.css';
import bigboy from "../../Assets/bigboy.jpg";

const OurStrengths = () => {
  return (
    <div className="our-strength-wrapper">
      <h2 className="our-strength-heading">Våre Styrker</h2>
      <div className="our-strength-grid">
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 1" className="our-strength-image" />
          <h3 className="our-strength-title">Styrke</h3>
          <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 2" className="our-strength-image" />
          <h3 className="our-strength-title">Muskelvekst</h3>
          <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 3" className="our-strength-image" />
          <h3 className="our-strength-title">Kosthold og Ernæring</h3>
          <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="our-strength-item">
          <img src={bigboy} alt="Strength 4" className="our-strength-image" />
          <h3 className="our-strength-title">Idrettslig Prestasjon</h3>
          <p className="our-strength-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStrengths;