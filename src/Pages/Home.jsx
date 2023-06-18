import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import './Home.css';
import { HeroBanner } from '../Components/Herobanner/HeroBanner';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="EVIDENCE-BASED COACHING DUO" />
      <div className="content">
        <p className="centered-paragraph">HJEM ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eros id erat interdum dignissim. Donec sit amet faucibus est. Ut et maximus
         felis. Morbi semper aliquam urna, at tempor risus laoreet sed. Sed nec luctus velit, vitae consectetur risus. Aenean non turpis eu purus tristique congue. Vestibulum pharetra arcu in odio placerat, non varius elit facilisis.</p>
      </div>
    </div>
  );
};