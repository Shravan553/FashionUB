import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/extra7.jpg';
import img2 from '../../assets/ma.png';
import img3 from '../../assets/websiteimage3.jpg';
import img4 from '../../assets/websiteimage8.png';
import img5 from '../../assets/websiteimage7.png';
import img6 from '../../assets/websiteimage9.png';
import img7 from '../../assets/websiteimage10.png';



const slides = [
  {
    image: img1,
    heading: "agpotato-Innovative Farming Techniques",
    description: "AGPotato pioneers modern and sustainable farming methods to help farmers maximize their potato yields."
  },
  {
    image: img2,
    heading: "agpotato - Leading the Way in Farming Innovation",
    description: "At AGPotato, we champion cutting-edge, sustainable farming techniques, empowering farmers to optimize their potato crops for maximum yield and quality."
  },
  {
    image: img3,
    heading: "agpotato - Revolutionizing Sustainable Farming",
    description: "AGPotato transforms potato farming with advanced eco-friendly techniques, ensuring higher yields while fostering a sustainable agricultural future."
  },
  {
    image: img4,
    heading: "agpotato - Innovating for a Greener Future",
    description: "By embracing sustainable farming practices, AGPotato leads the charge in helping farmers boost potato production while preserving the environment."
  },
  {
    image: img5,
    heading: "agpotato - Pure & Sustainable Potato Flour",
    description: "AGPotato is committed to producing high-quality potato flour through sustainable practices. Our potato flour is not only rich in nutrients but also versatile."
  },
  {
    image: img6,
    heading: "agpotato - Pure & Sustainable Potato Flour",
    description: "AGPotato is committed to producing high-quality potato flour through sustainable practices. Our potato flour is not only rich in nutrients but also versatile."
  },
  {
    image: img7,
    heading: "agpotato - Pure & Sustainable Potato Flour",
    description: "AGPotato is committed to producing high-quality potato flour through sustainable practices. Our potato flour is not only rich in nutrients but also versatile."
  }
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change slide every 9 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-text">
              <h1>{slide.heading}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;