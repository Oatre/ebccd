import React from 'react';
import './imagewithtext.css';

const ImageWithText = ({ imageSrc, altText, text }) => {
  return (
    <div className="image-with-text">
      <img src={imageSrc} alt={altText} />
      <p>{text}</p>
    </div>
  );
};

export default ImageWithText;