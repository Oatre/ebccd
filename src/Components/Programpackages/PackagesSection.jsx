import React, {useEffect, useState} from 'react';
import sanityClient from '../../client.js'
import './packagessection.css';
import PackageItem from './PackageItem';

const PackagesSection = () => {

  const [trainingPackages, setTrainingPackages] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'trainingPackage'] | order(_createdAt)`
      )
      .then((data) => {
        setTrainingPackages(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="packs-wrapper">
      <h1>Pakker og priser</h1>
      <ul className="card-list">
        {
          trainingPackages && trainingPackages.map((trainingPackage) => (
            <PackageItem key={trainingPackage._id} pack={trainingPackage}/>
          ))
        }
      </ul>
    </div>
    
  );
};

export default PackagesSection;