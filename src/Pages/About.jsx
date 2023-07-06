import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { HeroBanner } from '../Components/Herobanner/HeroBanner'
import ImageWithText from '../Components/ImageWithText/ImageWithText'
import bigboy from "../Assets/bigboy.jpg";
export const About = () => {
  return (
    <div>
        <Navbar />
        <HeroBanner title="OM OSS" />
        <ImageWithText
          imageSrc={bigboy}
          altText="Bigboy"
          heading="Espen Aukrust"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem eros."
        />
        
    </div>
  )
}
