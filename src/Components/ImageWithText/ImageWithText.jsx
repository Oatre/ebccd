import React from 'react';
import './imagewithtext.scss';

const ImageWithText = ({ imageSrc, altText, heading, text }) => {
  return (
    <div className="image-with-text">
      <div className="image-wrapper">
        <img src={imageSrc} alt={altText} />
      </div>
      {heading && <h1>{heading}</h1>}
      <p>{text}</p>
    </div>
  );
};

export default ImageWithText;