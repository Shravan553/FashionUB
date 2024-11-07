import React from 'react';
import { Link } from 'react-router-dom';
import NavbarTYP from '../Navbar/NavbarTYP';
import './yellow.css';
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
import hasanPotato from '../../../assets/hasan.jpeg'; // Main image for Hasan Potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Hasan = () => {
  return (
    <div className="hasan-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Hasan Potatoes</h1>
          <h2 className="subtitle">Robust, Nutritious, and Flavorful</h2>
          <p className="tagline">Bringing a rich texture and bold taste to every meal.</p>
          <p className="description">
            Hasan Potatoes are renowned for their hearty flavor and dense texture, making them ideal for a variety of cooking styles. They add a robust, earthy essence to meals, whether roasted, mashed, fried, or sautéed.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={hasanPotato} alt="Hasan Potato" className="potato-image" />
        </div>
      </main>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Hasan Potatoes have a rustic, light brown skin with a firm, creamy flesh, giving them a distinctive, inviting look in any dish.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Known for their dense, slightly starchy texture, Hasan Potatoes hold up well in cooking, providing a satisfying bite in each recipe.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          With a deep, earthy flavor and subtle nutty undertones, Hasan Potatoes elevate any recipe, bringing a rich and savory taste.
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

export default Hasan;
