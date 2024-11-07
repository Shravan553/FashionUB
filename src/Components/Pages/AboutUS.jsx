import React, { useState, useEffect } from 'react';
import './AboutUS.css'; // Updated the CSS import
import about_img from '../../assets/imageforabout1.jpg';
import extra1 from '../../assets/about2.png';
import { Link } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer";
import NavbarTYP from '../../Components/Pages/Navbar/NavbarTYP';

import logo1 from '../../assets/Blink.png';
import logo2 from '../../assets/buddha.png';
import logo3 from '../../assets/DUNZO.png';
import logo4 from '../../assets/BigBasket.png';
import logo5 from '../../assets/flip.png';
import logo6 from '../../assets/Reliance.png';
import logo7 from '../../assets/swiggy.jpg';
import logo8 from '../../assets/Zepto.png';
import logo9 from '../../assets/More.jpg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const About = () => {
  const quotes = [
    "Potatoes are the perfect comfort food.",
    "A balanced diet is a potato in each hand.",
    "Life is too short to skip potato day.",
    "Potatoes make everything better.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Scroll to the top when the component mounts
    scrollToTop();

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='aboutus-container'>
      <NavbarTYP />
      <section className='aboutus-hero'>
        <img src={about_img} alt="About Anand Group" className='aboutus-hero-img' />
        <div className='hero-overlay'>
          <h1 className='hero-text'>About AGPOTATO</h1>
          <p>Your trusted partner in the potato supply chain.</p>
        </div>
      </section>

      <section className="aboutus-agpotato">
        <div className="aboutus-agpotato-content">
          <h2>About Agpotato</h2>
          <p>
            Founded in 2014, Agpotato set out with a bold vision to revolutionize the potato industry by offering a diverse range of high-quality potato products. From staple potatoes to potato fries, flour, and even potato milk, we are committed to delivering innovative solutions that meet evolving consumer needs.
          </p>
          <p>
            Over the last decade, our dedication to research, sustainability, and refining our processes has shaped Agpotato into a trusted name in the market. Today, we take pride in seeing our "Agpotato" brand thrive, reflecting our passion for excellence and innovation in every product we offer.
          </p>
        </div>
      </section>

      <div className="achievements">
        <div className="achievement-item">
          <h3>10+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="achievement-item">
          <h3>100+</h3>
          <p>Innovative Products</p>
        </div>
        <div className="achievement-item">
          <h3>1M+</h3>
          <p>Happy Customers</p>
        </div>
      </div>

      <section className="market-leaders">
        <div className="market-leaders-content">
          <div className="text-section">
            <h2>What We Deliver</h2>
            <p>
              As market leaders in institutional supplies, we specialize in workplace food solutions, serving factories, malls, modern retail, general retail, the skincare industry, retail, and wholesalers. Our solutions play a vital role in driving the nation's economic growth by supporting key sectors.
            </p>
            <p>
              At Agpotato, we pride ourselves on being a trusted source for premium potatoes, delivering fresh, nutritious produce to our valued customers. With a focus on variety and quality, we handle the entire process from sourcing to distribution, ensuring every product meets the highest standards. Our dedication to sustainability and healthy living drives our efforts to build a strong, reliable supply chain that benefits both consumers and the environment.
            </p>
          </div>
          <div className="image-section">
            <img src={extra1} alt="Agpotato Delivery" className="market-leaders-img" />
          </div>
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className="quote-slider">
        <div className="quote-container">
          <blockquote className="blockquote">
            <span>"</span>
            {quotes[currentQuoteIndex]}
            <span>"</span>
          </blockquote>
        </div>
      </section>

      {/* Logo Slider Section */}
      <section className="logo-sliders">
        <h2>Our Clients</h2>
        <div className="logo-rows">
          <div className="logo-tracks">
            <img src={logo1} alt="Client 1" className="logos" />
            <img src={logo2} alt="Client 2" className="logos" />
            <img src={logo3} alt="Client 3" className="logos" />
            <img src={logo4} alt="Client 4" className="logos" />
            <img src={logo5} alt="Client 5" className="logos" />
            <img src={logo6} alt="Client 6" className="logos" />
            <img src={logo7} alt="Client 7" className="logos" />
            <img src={logo8} alt="Client 8" className="logos" />
            <img src={logo9} alt="Client 9" className="logos" />
            {/* Duplicate the logos for smooth looping */}
            <img src={logo1} alt="Client 1 Duplicate" className="logos" />
            <img src={logo2} alt="Client 2 Duplicate" className="logos" />
            <img src={logo3} alt="Client 3 Duplicate" className="logos" />
            <img src={logo4} alt="Client 4 Duplicate" className="logos" />
            <img src={logo5} alt="Client 5 Duplicate" className="logos" />
            <img src={logo6} alt="Client 6 Duplicate" className="logos" />
            <img src={logo7} alt="Client 7 Duplicate" className="logos" />
            <img src={logo8} alt="Client 8 Duplicate" className="logos" />
            <img src={logo9} alt="Client 9 Duplicate" className="logos" />
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default About;
