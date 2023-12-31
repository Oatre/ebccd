import React from 'react';
import './packagessection.css';
import trainingPackages from './packages.json'
import PackageItem from './PackageItem';

const PackagesSection = () => {
  return (
    <div className="packs-wrapper">
      <h1>Pakker og priser</h1>
      <div className='card-wrapper'>
        <ul className="card-list">
          {
            trainingPackages && trainingPackages.map((trainingPackage) => (
              <PackageItem key={trainingPackage.id} pack={trainingPackage}/>
            ))
          }
        </ul>
      </div>
    </div>
    
  );
};

export default PackagesSection;