import React from 'react';
import { Phone } from 'lucide-react';
import './li.css';
import { Link } from 'react-router-dom';
import tre from '../../assets/f.png';

const Li = () => {
  return (
    <div className="potato-potato-section">
      <div className="potato-image-container">
        <img src={tre} alt="Woman on phone" className="potato-main-image" />
      </div>

      <div className="potato-content-wrapper">
        <h2 className="potato-title">Potato Nutrition</h2>
        <div className="potato-gradient-bar"></div>

        <h4 className="potato-subtitle">Fueling Performance</h4>
        <p className="potato-paragraph">Potatoes are a nutrient-dense powerhouse that provides the energy, potassium, and vitamin C you need to fuel your day.</p>

        <h4 className="potato-subtitle">Get the Facts</h4>
        <p className="potato-paragraph">Potatoes are more energy-packed than any other popular vegetable, are an excellent source of vitamin C, and have more potassium than a banana.</p>

        <h4 className="potato-subtitle">In Your Diet</h4>
        <p className="potato-paragraph">Potatoes are naturally fat-free, cholesterol-free, and sodium-free, with only 110 calories per 5.3-ounce serving.</p>

        <div className="potato-button-container">
          <Link to="/AboutUS" className="potato-button potato-about-us">ABOUT US</Link>
          <Link to="/nutritional-facts" className="potato-button potato-our-team">FACTS</Link>
        </div>
      </div>

      <div className="potato-nutrition-section"></div>
    </div>
  );
};

export default Li;