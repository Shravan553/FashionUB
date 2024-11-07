import React from 'react';
import './frozen.css';
import Footer from "../../Components/Footer/Footer";

// Importing images from the assets folder
import cheeseShotz from '../../assets/che.jpg';
import crinkleFries from '../../assets/cri.jpg';
import veggieFinger from '../../assets/veggie.jpg';
import hashBrown from '../../assets/hash.jpg';
import chilliGarlicBites from '../../assets/lic.jpg';
import herbChilliPatty from '../../assets/patty.jpg';
import spicyWedges from '../../assets/wedges.jpg';
import alooTikki from '../../assets/tikki.jpg';
import vegBurgerPatty from '../../assets/veg.jpg';

import fheroImage from '../../assets/websiteimage1.jpeg';

const products = [
  { name: 'Potato Cheese Shotz', image: cheeseShotz, description: 'Cheesy goodness in every bite.' },
  { name: 'Crinkle Cut French Fries', image: crinkleFries, description: 'Perfectly crispy crinkle-cut fries.' },
  { name: 'Veggie Finger', image: veggieFinger, description: 'Crispy veggie fingers, packed with flavor.' },
  { name: 'Hash Brown', image: hashBrown, description: 'Golden, crispy hash browns.' },
  { name: 'Chilli Garlic Bites', image: chilliGarlicBites, description: 'Spicy bites with a kick of garlic.' },
  { name: 'Herb Chilli Patty', image: herbChilliPatty, description: 'A flavorful herb and chili patty.' },
  { name: 'Spicy Wedges', image: spicyWedges, description: 'Seasoned, crispy potato wedges.' },
  { name: 'Aloo Tikki', image: alooTikki, description: 'Traditional, spiced aloo tikkis.' },
  { name: 'Veg Burger Patty', image: vegBurgerPatty, description: 'Juicy veg patties, perfect for burgers.' },
];

const Fro = () => {
  return (

    <div>
      {/* Frozen Hero Section */}
      <div className="frozenhero">
        <div className="frozenhero-content">
          <h1 className="frozenhero-title">Frozen Products</h1>
        </div>
        <div className="frozenhero-image-container">
          <img src={fheroImage} alt="Frozen Products" className="frozenhero-image" />
        </div>
      </div>
      <section className="frozen-description-container">
      <div className="frozen-description-content">
        <h2 className="frozen-description-title">Why Choose Our Frozen Potato Products?</h2>
        <p className="frozen-description-text">
          Our frozen potato products are carefully selected to ensure quality and taste in every bite. 
          From crispy fries to golden hash browns, each product is frozen at peak freshness to preserve its natural flavor and texture. 
          Whether you're preparing a quick meal or a special dish, our frozen potatoes offer the perfect solution for convenience without compromising on quality.
        </p>
        <p className="frozen-description-text">
          With a variety of options, including spiced wedges, veggie fingers, and aloo tikkis, you can easily elevate any dish. 
          Our products are made with the finest ingredients, ensuring that every meal is both delicious and nutritious.
        </p>
      </div>
    </section>


    <div className="products-container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>

      ))}
                      

    </div>
    </div>
  );
};

export default Fro;