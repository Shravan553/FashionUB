// File: ./Components/Pages/OurBusiness.js
import React from 'react';
import './OurBusiness.css';
import mainImage from '../../assets/main-business.jpg';
import coldStorageImage from '../../assets/cold-storage.jpg';
import potatoFlourImage from '../../assets/potato-flour.jpg';
import { Link } from 'react-router-dom';

import Scroll from './scroll';

const OurBusiness = () => {
  return (
    <div className='our-business-container'>
      <header className='business-header'>
        <img src={mainImage} alt="Our Business" className='business-header-img' />
        <div className='header-overlay'>
          <h1>Our Business</h1>
          <p>Leading the Way in Potato Supply Chain Solutions</p>
        </div>
      </header>

      <section className='business-intro'>
        <h2>About Us</h2>
        <p>
          ANAND GROUP has been at the forefront of the potato industry since 2014. Our goal is to provide comprehensive solutions that cover every aspect of the potato supply chain, from seed supply to storage and logistics.
        </p>
      </section>

      <section className='business-services'>
        <h2>Our Services</h2>
        <div className='services-grid'>
          <div className='service-item'>
            <img src={coldStorageImage} alt="Cold Storage" />
            <h3>Cold Storage</h3>
            <p>Advanced cold storage facilities designed to maintain optimal conditions for potato preservation.</p>
          </div>
          <div className='service-item'>
            <img src={potatoFlourImage} alt="Potato Flour" />
            <h3>Potato Flour</h3>
            <p>High-quality potato flour for various applications, including exports to the Netherlands.</p>
          </div>
        </div>
      </section>

      <section className='business-why-choose-us'>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Comprehensive end-to-end solutions for the potato supply chain.</li>
          <li>Commitment to quality and innovation.</li>
          <li>Expertise in sustainable and efficient practices.</li>
          <li>Seamless integration through our state-of-the-art platform.</li>
        </ul>
      </section>

      <section className='business-contact'>
        <h2>Get in Touch</h2>
        <p>For more information about our services or to discuss your specific needs, please contact us.</p>
        <Link to="/" className="return-home-button">Return to Home</Link>
      </section>
     <Scroll/>
    </div>

    
  );
}

export default OurBusiness;
