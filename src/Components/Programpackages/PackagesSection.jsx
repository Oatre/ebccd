import React from 'react';
import './packagessection.css';
import checkmark from '../../Assets/checkmark.png';
import Button from '../Button/Button';



const PackagesSection = () => {
  return (
    <div className="packs-wrapper">
      <h1>Pakker og priser</h1>
      <ul className="card-list">
        {/* Pakke 1 */}
        <li className="card-list-item">
          <div className="headline-wrapper">
            <h2>Treningspakken</h2>
            <p>2799,- første måned. deretter</p>
          </div>
          <div className="price-wrapper">
            <h3>2499,-</h3>
            <p>i mnd</p>
          </div>
          <ul className="info-list">
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Info innhentes via kundeskjema</p>
            </li>
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Tilpasset treningsprogram</p>
            </li>
            <li className="info-item">
              <div className="dot"></div>
              <p>Veiledning/tilpasset kosthold</p>
            </li>
          </ul>
          <Button label= "Bestill"/>
        </li>
        {/* Pakke 2 */}
        <li className="card-list-item">
          <div className="headline-wrapper">
            <h2>Treningspakken</h2>
            <p>2799,- første måned. deretter</p>
          </div>
          <div className="price-wrapper">
            <h3>2499,-</h3>
            <p>i mnd</p>
          </div>
          <ul className="info-list">
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Info innhentes via kundeskjema</p>
            </li>
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Tilpasset treningsprogram</p>
            </li>
            <li className="info-item">
              <div className="dot"></div>
              <p>Veiledning/tilpasset kosthold</p>
            </li>
          </ul>
          <Button label= "Bestill"/>
        </li>
        {/* Pakke 3 */}
        <li className="card-list-item">
          <div className="headline-wrapper">
            <h2>Treningspakken</h2>
            <p>2799,- første måned. deretter</p>
          </div>
          <div className="price-wrapper">
            <h3>2499,-</h3>
            <p>i mnd</p>
          </div>
          <ul className="info-list">
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Info innhentes via kundeskjema</p>
            </li>
            <li className="info-item">
              <div className="dot">
                <img src= {checkmark} alt="checkmark" />
              </div>
              <p>Tilpasset treningsprogram</p>
            </li>
            <li className="info-item">
              <div className="dot"></div>
              <p>Veiledning/tilpasset kosthold</p>
            </li>
          </ul>
          <Button label= "Bestill"/>
        </li>


      </ul>
    </div>
    
  );
};

export default PackagesSection;