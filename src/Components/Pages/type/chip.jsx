import React from 'react';
import NavbarTYP from '../Navbar/NavbarTYP';
import './chip.css'; // Update the CSS file name for Chipsona potatoes
import Footer from '../../Footer/Footer';

// Importing images for Chipsona potatoes
import chipsonaMainImage from '../../../assets/chipsona.jpg'; // Main image for Chipsona potatoes
import chipsona1 from '../../../assets/chi1.jpg'; // Replace with your chipsona images
import chipsona2 from '../../../assets/chi2.jpg';
import chipsona3 from '../../../assets/chi3.jpg';

import friedImage from '../../../assets/fried56.png'; // Image for fried
import chipsImage from '../../../assets/chips.png'; // Image for chips
import crispyFriesImage from '../../../assets/crispy_fries.png'; // Image for crispy fries

const Chip = () => {
  return (
    <div className="chipsona-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Chipsona Potatoes</h1>
          <h2 className="subtitle">Perfect for Crispy Snacks</h2>
          <p className="tagline">High in starch, low in sugar, ideal for chips.</p>
          <p className="description">
            Chipsona potatoes are bred for producing high-quality potato chips and fries. With their pale yellow skin and firm texture, these potatoes ensure a crispy and delicious snacking experience.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={chipsonaMainImage} alt="Chipsona Potato" className="potato-image" />
        </div>
      </main>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <img src={chipsona1} alt="Chipsona Potato Chips" />
        <img src={chipsona2} alt="Crispy Fried Chipsona Potatoes" />
        <img src={chipsona3} alt="Golden Chipsona Fries" />
      </section>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Chipsona potatoes have pale yellow skin and white flesh, perfect for crispy fried snacks.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Firm and dense; holds its shape well after frying.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Neutral taste with a hint of sweetness, making it ideal for both salty and savory snacks.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={chipsImage} alt="Chips" className="best-served-image" /> Chips
          </li>
          <li>
            <img src={crispyFriesImage} alt="Crispy Fries" className="best-served-image" /> Crispy Fries
          </li>
          <li>
            <img src={friedImage} alt="Fried" className="best-served-image" /> Fried Snacks
          </li>
        </ul>
      </section>
  
    </div>
  );
};

export default Chip;
