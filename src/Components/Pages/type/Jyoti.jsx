import React from 'react';
import { Link } from 'react-router-dom';
import NavbarTYP from '../Navbar/NavbarTYP';
import './yellow.css';
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
import jyotiPotato from '../../../assets/jyothi.webp'; // Main image for Jyoti Potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Jyoti = () => {
  return (
    <div className="jyoti-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Jyoti Potatoes</h1>
          <h2 className="subtitle">Smooth, Balanced, and Flavorful</h2>
          <p className="tagline">Perfect for enhancing any dish with its subtle flavors.</p>
          <p className="description">
            Jyoti Potatoes are celebrated for their balanced flavor and texture, making them an ideal choice for various cooking methods. They bring a rich, earthy taste that enhances any meal, whether roasted, mashed, fried, or sautéed.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={jyotiPotato} alt="Jyoti Potato" className="potato-image" />
        </div>
      </main>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Jyoti Potatoes have a smooth skin and a light, creamy interior, providing an inviting look and versatile use in dishes.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Known for a balanced, slightly waxy texture, Jyoti Potatoes retain their structure well during cooking, providing an enjoyable bite in each recipe.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Jyoti Potatoes feature a mild, earthy flavor with a hint of natural sweetness, making them an adaptable ingredient for numerous recipes.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={roastedImage} alt="Roasted" className="best-served-image" /> Roasted or Grilled
          </li>
          <li>
            <img src={sautéedImage} alt="Sautéed" className="best-served-image" /> Sautéed
          </li>
          <li>
            <img src={mashedImage} alt="Mashed" className="best-served-image" /> Mashed
          </li>
          <li>
            <img src={friedImage} alt="Fried" className="best-served-image" /> Fried
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Jyoti;
