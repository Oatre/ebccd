import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import './Home.css';
import { HeroBanner } from '../Components/Herobanner/HeroBanner';
// import ImageWithText from '../Components/ImageWithText/ImageWithText'; //Can stay, may use later.
import PackagesSection from '../Components/Programpackages/PackagesSection';


export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="EVIDENCE-BASED COACHING DUO" />
      <div className="content">
      </div>
      <PackagesSection/> 
    </div>
  );
};