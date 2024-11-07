import React, { useEffect } from 'react';
import './Meetfarmer.css';
import Meetfarmer1 from '../../assets/Meetfarmer1.jpg';
import farmer1 from '../../assets/Farmer1.jpeg';
import farmer2 from '../../assets/Farmer2.jpeg';
import farmer3 from '../../assets/Gimage7.jpeg';
import farmer4 from '../../assets/Gimage13.jpeg';

import Scroll from './scroll';
import Footer from "../../Components/Footer/Footer";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Meetfarmer = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    scrollToTop();
  }, []);

  return (
    <div className="supply-chain-wrapper">
      {/* Header Section with Image */}
      <div className="supply-chain-header">
        <img src={Meetfarmer1} alt="Potato Supply Chain Header" className="meetheader-image" />
        <h1 className="header-title">Meet The Farmer</h1>
      </div>

      {/* Meet the Farmer Section */}
      <section className="meetfarmer-info">
        <h2 className="meetfarmer-heading">Our Farmers, Our Heroes</h2>
        <p className="meetfarmer-paragraph">
          At the heart of our supply chain are dedicated farmers who nurture the land and cultivate the finest potatoes. 
          Their passion, expertise, and hard work ensure that only the best produce reaches your table. We take pride in 
          building strong relationships with our farmers, supporting sustainable practices, and celebrating their invaluable 
          contributions to the community. Meet the people who grow with care and harvest with purpose – they are the lifeblood 
          of our mission to bring quality produce from the farm to your kitchen.
        </p>
      </section>

      <section className="sustainabilitys-tracker">
        <div className="impacts-details">
          <div className="impacts-cards">
            <h3>Reduced Carbon Footprint</h3>
            <p>Your purchase saves 2kg of CO₂ emissions!</p>
          </div>
          <div className="impacts-cards">
            <h3>Farmer Empowerment</h3>
            <p>Part of your purchase supports education programs for farmers.</p>
          </div>
        </div>
      </section>

      <section className="farmer-highlight">
        <div className="farmer-highlight-content">
          <h2 className="farmer-highlight-heading">Behind Every Potato: Meet the Growers</h2>
          <p className="farmer-highlight-paragraph">
            AGPotato isn’t just about produce—it’s about people. Our farmers are innovators, 
            committed to sustainable agriculture and passionate about delivering high-quality crops. 
            By working directly with growers, we bridge the gap between farms and kitchens, 
            ensuring every bite is a testament to their dedication. With AGPotato, you're not just 
            buying potatoes; you're supporting a community that values transparency, quality, 
            and sustainability from the ground up.
          </p>
        </div>
      </section>

      <section className="farmer-gallery">
        <h2 className="gallery-heading">Farmer Stories Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={farmer1} alt="Farmer 1" />
          </div>
          <div className="gallery-item">
            <img src={farmer2} alt="Farmer 2" />
          </div>
          <div className="gallery-item">
            <img src={farmer3} alt="Farmer 3" />
          </div>
          <div className="gallery-item">
            <img src={farmer4} alt="Farmer 4" />
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>

      <Scroll />
      <Footer />
    </div>
  );
};

export default Meetfarmer;
