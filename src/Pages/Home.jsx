import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import './Home.css';
import { HeroBanner } from '../Components/Herobanner/HeroBanner';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="HJEM" />
      <h1>Testing update</h1>
    </div>
  );
};