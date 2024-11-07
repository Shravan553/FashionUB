import React from 'react';
import { Link } from 'react-router-dom';
import NavbarTYP from '../Navbar/NavbarTYP';
import './yellow.css';
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
import kyatiPotato from '../../../assets/kyati.jpg'; // Main image for Kyati Potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Kyati = () => {
  return (
    <div className="kyati-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Kyati Potatoes</h1>
          <h2 className="subtitle">Distinctive and Versatile</h2>
          <p className="tagline">An ideal choice for both texture and flavor.</p>
          <p className="description">
            Kyati Potatoes are cherished for their firm texture and earthy taste, making them excellent for a wide range of dishes. These potatoes bring a natural depth to meals and can be roasted, sautéed, mashed, or fried to perfection.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={kyatiPotato} alt="Kyati Potato" className="potato-image" />
        </div>
      </main>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Kyati Potatoes feature a light, smooth skin with a creamy interior, making them both visually appealing and versatile.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Known for their firm and slightly waxy texture, these potatoes hold up well in various cooking methods, ensuring a satisfying bite.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Kyati Potatoes offer a mild, earthy flavor with a hint of nuttiness, making them a flavorful addition to any dish.
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
      <Footer/>
    </div>
  );
};

export default Kyati;
