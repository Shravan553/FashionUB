import React, { useEffect } from 'react';
import './Potatobyproduct.css';
import Footer from '../Footer/Footer';
import Scroll from './scroll';
import { Link } from 'react-router-dom';

import potatoFlourImg from '../../assets/inflour.png';
import potatoMilkImg from '../../assets/inmilk.png';
import potatoFriesImg from '../../assets/infries.png';
import potatoGranulesImg from '../../assets/ingran.png';

const PotatoByproducts = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bypro-products-container">
      {/* Hero Section */}
      <section className="bypro-hero-section">
        <div className="bypro-hero-content">
          <h1 className="bypro-hero-title">Potato Byproducts</h1>
          <p className="bypro-hero-description">
            Discover a world of innovative potato-based products, crafted to suit your every need.
          </p>
          <p className="bypro-hero-subtext">
            From wholesome flours to dairy alternatives and crispy treats, explore our versatile range.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="agby1-info-section">
        <h2 className="agby1-info-title">Why Choose Our Potato Byproducts?</h2>
        <div className="agby1-info-cards">
          <div className="agby1-info-card">
            <p className="agby1-info-paragraph">
              Our byproducts are made from premium-quality potatoes, ensuring flavor, nutrition, and variety.
              Each product offers a unique way to add value to your meals, whether you're looking for gluten-free options,
              dairy substitutes, or delicious snacks.
            </p>
          </div>
        </div>
      </section>

     

      <section className="bypro-grid" id="bypro-products">
    {[
        { img: potatoFlourImg, title: 'Potato Flour', description: 'A gluten-free baking essential made from high-quality, organic potatoes.', link: '/flo' },
        { img: potatoMilkImg, title: 'Potato Milk', description: 'A creamy, nutrient-rich dairy alternative perfect for smoothies and coffee.', link: '/milk' },
        { img: potatoFriesImg, title: 'Potato Fries', description: 'Crispy and golden, made from hand-cut, sustainably farmed potatoes.', link: '/fri' },
        { img: potatoGranulesImg, title: 'Potato Granules', description: 'Quick and easy mashed potatoes, packed with flavor and nutrients.', link: '/gra' },
    ].map((product, index) => (
        <div key={index} className="bypro-card">
            <div className="bypro-content">
                <img src={product.img} alt={product.title} className="bypro-image" />
                <div className="bypro-info">
                    <h2 className="bypro-title">{product.title}</h2>
                    <p className="bypro-description">{product.description}</p>
                    <Link to={product.link} className="bypro-know-more-link">Know More</Link>
                </div>
            </div>
        </div>
    ))}
</section>
<div className="agby1-info-card">
    <p className="agby1-info-paragraph">
        Our byproducts are crafted with care to ensure:
    </p>
    <ul className="bypro-features-list">
        <li><span className="feature-icon">🥔</span> High-quality ingredients</li>
        <li><span className="feature-icon">🌱</span> Environmentally sustainable practices</li>
        <li><span className="feature-icon">💰</span> Affordable prices</li>
        <li><span className="feature-icon">🍽️</span> Versatile for all types of meals</li>
    </ul>
</div>

      <Scroll />
      <Footer />
    </div>
  );
};

export default PotatoByproducts;
