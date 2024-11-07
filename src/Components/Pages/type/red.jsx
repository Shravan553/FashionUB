import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './red.css'; // Update the CSS file name for red potatoes
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
// Importing images
// import redPotato1 from '../../../assets/red1.jpg'; // Replace with your hybrid potato images if needed
// import redPotato2 from '../../../assets/red2.jpg';
// import redPotato3 from '../../../assets/red3.jpg';
import redPotato from '../../../assets/hybrid.jpeg'; // Main image for hybrid potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Red = () => {
  return (
    <div className="hybrid-302-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Hybrid 302</h1>
          <h2 className="subtitle">Potatoes</h2>
          <p className="tagline">The best of flavor and resilience.</p>
          <p className="description">
            Hybrid 302 potatoes are cultivated for their enhanced durability and consistent texture. They perform well in various dishes, making them ideal for culinary experimentation.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={redPotato} alt="Hybrid 302 Potato" className="potato-image" />
        </div>
      </main>

      {/* Image Gallery Section */}
      {/* <section className="image-gallery">
        <img src={redPotato1} alt="Roasted Hybrid 302 Potato" />
        <img src={redPotato2} alt="Crispy Fried Hybrid 302 Potato" />
        <img src={redPotato3} alt="Mashed Hybrid 302 Delight" />
      </section> */}

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Smooth skin with a light tan color and firm, creamy white flesh.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Slightly firm; versatile texture suitable for multiple cooking styles.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Mild and earthy with a subtle hint of sweetness.
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

export default Red;
