import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import './Home.css';
import { HeroBanner } from '../Components/Herobanner/HeroBanner';
import ImageWithText from '../Components/ImageWithText/ImageWithText';
import bigboy from "../Assets/bigboy.jpg";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="EVIDENCE-BASED COACHING DUO" />
      <div className="content">
      <ImageWithText
          imageSrc={bigboy}
          altText="Logo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem eros."
        />
      </div>
    </div>
  );
};