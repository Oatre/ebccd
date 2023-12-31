import React from 'react'
import checkmark from '../../Assets/checkmark.png';
import Button from '../Button/Button';
 
const PackageItem = (item) => (
    <li className="card-list-item">
        <div className="headline-wrapper">
            <h2>{item.pack.title}</h2>
            {
            item.pack.titleIngress && 
                <h3>{item.pack.titleIngress}</h3>
            }
            <p>{item.pack.subtitle}</p>
        </div>
        <div className="price-wrapper">
            <h3>{item.pack.price}</h3>
            <p>{item.pack.priceSubTitle}</p>
        </div>
        <ul className="info-list">
        {
            item.pack.benefits && item.pack.benefits.map((benefit) => (
            <li className="info-item" key={benefit.id}>
                <div className="dot">
                {
                    benefit.included ?
                    <img src= {checkmark} alt="checkmark" />
                    :
                    <div className="dot" />
                }
                </div>
                <p>{benefit.benefitTitle}</p>
            </li>
            ))
        }
        </ul>
        <Button label= "Bestill"/>
    </li>
)


export default PackageItem