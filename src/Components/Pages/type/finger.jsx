import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './finger.css';
import Footer from '../../Footer/Footer';

import cookingGif from '../../../assets/cooking.gif';
// Importing images
// import fingerling1 from '../../../assets/fin23.jpg'; // Replace with your prime images if needed
// import fingerling2 from '../../../assets/fin24.jpg';
// import fingerling3 from '../../../assets/fin25.jpg';
import finger from '../../../assets/prime.jpg';
import roastedImage from '../../../assets/roasted12.png'; // Add your image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Add your image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Add your image for mashed
import friedImage from '../../../assets/fried.png'; // Add your image for fried

const Finger = () => {
  return (
    <div className="prime-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Prime 3797</h1>
          <h2 className="subtitle">Potatoes</h2>
          <p className="tagline">A premium choice for top culinary experiences.</p>
          <p className="description">
            Prime 3797 potatoes are known for their fluffy texture, making them ideal for baking and mashing. With their robust flavor and versatility, they’re a favorite for various dishes in the kitchen.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Move the image section here */}
        <div className="image-content">
          <img src={finger} alt="Prime 3797 Potato" className="potato-image" />
        </div>
      </main>

      {/* Normal Image Gallery Section */}
      {/* <section className="image-gallery">
        <img src={fingerling1} alt="Baked Prime 3797 Potato" />
        <img src={fingerling2} alt="Crispy Prime 3797 Fries" />
        <img src={fingerling3} alt="Mashed Prime 3797 Potato" />
        {/* You can add more images here if needed */}
      {/* </section>  */}

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Large, oval, and smooth-skinned with a light brown hue; great for a variety of cooking methods.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Fluffy; light; becomes soft when cooked, ideal for mashing and baking.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Mild and earthy; a subtle, rich flavor perfect for diverse recipes.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={roastedImage} alt="Roasted" className="best-served-image" /> Baked or Roasted
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

export default Finger;
