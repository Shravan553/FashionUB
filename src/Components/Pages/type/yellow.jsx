import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './yellow.css';
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
// Importing images
// import yellowPotato1 from '../../../assets/yel1.jpg'; // Keep yellow potato images
// import yellowPotato2 from '../../../assets/yel2.jpg';
// import yellowPotato3 from '../../../assets/yel3.jpg';
import yellowPotato from '../../../assets/mohan.png'; // Main image for Mohan Special Potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Yellow = () => {
  return (
    <div className="mohan-special-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Mohan Special Potatoes</h1>
          <h2 className="subtitle">Unique and Flavorful</h2>
          <p className="tagline">Perfectly balanced for taste and texture.</p>
          <p className="description">
            Mohan Special Potatoes are known for their robust, earthy flavor and smooth texture. This variety excels in versatility, making it ideal for roasting, mashing, and frying. They bring a special touch to any meal with their balanced taste and creamy finish.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={yellowPotato} alt="Mohan Special Potato" className="potato-image" />
        </div>
      </main>

      {/* Image Gallery Section */}
      {/* <section className="image-gallery">
        <img src={yellowPotato1} alt="Roasted Mohan Special Potato" />
        <img src={yellowPotato2} alt="Crispy Fried Mohan Special Potato" />
        <img src={yellowPotato3} alt="Mashed Mohan Special Delight" />
      </section> */}

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          These potatoes have smooth, light-colored skin with a creamy flesh that complements any dish visually and in flavor.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          With a medium firmness, they maintain their structure during cooking, providing a satisfying bite in any recipe.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Known for a rich, earthy taste with subtle nutty notes, Mohan Special Potatoes offer a perfect blend of flavor depth.
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

export default Yellow;
