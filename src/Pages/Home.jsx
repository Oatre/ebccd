import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import './Home.css';
import { HeroBanner } from '../Components/Herobanner/HeroBanner';
// import ImageWithText from '../Components/ImageWithText/ImageWithText'; //Can stay, may use later.
import PackagesSection from '../Components/Programpackages/PackagesSection';
import OurStrengths from '../Components/OurStrengths/OurStrengths';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="EVIDENCE-BASED COACHING DUO" />
      <OurStrengths/>
      <PackagesSection/> 
    </div>
  );
};