import React, { useState } from 'react';
import './Insights.css';
import NavbarTYP from './Navbar/NavbarTYP.jsx';
import Footer from '../Footer/Footer.jsx';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Import tick icon from react-icons

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const PotatoInsights = () => {
  const location = useLocation();
  const showFooter = location.pathname === '/PotatoInsights';

  // State to manage visibility of content
  const [visibleContent, setVisibleContent] = useState({
    history: false,
    types: false,
    nutritional: false,
    recipes: false,
  });

  const toggleContent = (section) => {
    setVisibleContent((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className='potato-insights-container'>
      {/* Navbar */}
      <NavbarTYP />

      {/* Content Section */}
      <section className='content-sections'>
        <div className='content-container'>
          {/* Box 1: Potato History */}
          <div className='content-box' onClick={() => toggleContent('history')}>
            <h2 className='content-title'>Potato History</h2>
            {visibleContent.history && (
              <p className='content-text'>
                <FaCheckCircle className='tick-icon' /> Potatoes were first domesticated in the Andes Mountains in South America around 8,000 years ago.
                <br /><br />
                <FaCheckCircle className='tick-icon' /> They became a staple crop for the Incas and were later introduced to Europe by Spanish explorers in the 16th century.
              </p>
            )}
            
            <img src="src/assets/his.png" alt="Potato History" className='content-image' />
            <Link to="/potato-history">
              <button className="know-more1-btn">Know More</button>
            </Link>
          </div>

          {/* Box 2: Types of Potatoes */}
          <div className='content-box' onClick={() => toggleContent('types')}>
            <h2 className='content-title'>Types of Potatoes</h2>
            {visibleContent.types && (
              <p className='content-text'>
                <FaCheckCircle className='tick-icon' /> Potatoes come in various shapes and sizes.
                <br /><br />
                <FaCheckCircle className='tick-icon' /> Popular varieties include Russet potatoes for baking, Fingerling for roasting, and Red potatoes for soups and salads.
              </p>
            )}
           
            <img src="src/assets/pot.png" alt="Types of Potatoes" className='content-image' />
            <Link to="/TypesOfPotatoes">
              <button className="know-more1-btn">Know More</button>
            </Link>
          </div>

          {/* Box 3: Nutritional Facts */}
          <div className='content-box' onClick={() => toggleContent('nutritional')}>
            <h2 className='content-title'>Nutritional Facts</h2>
            {visibleContent.nutritional && (
              <p className='content-text'>
                <FaCheckCircle className='tick-icon' /> Potatoes are packed with Vitamin C, which boosts your immune system.
                <br /><br />
                <FaCheckCircle className='tick-icon' /> They contain potassium, helping regulate blood pressure.
              </p>
            )}
           
            <img src="src/assets/nut.png" alt="Nutritional Facts" className='content-image' />
            <Link to="/nutritional-facts">
              <button className="know-more1-btn">Know More</button>
            </Link>
          </div>

          {/* Box 4: Potato Recipes */}
          <div className='content-box' onClick={() => toggleContent('recipes')}>
            <h2 className='content-title'>Potato Recipes</h2>
            {visibleContent.recipes && (
              <p className='content-text'>
                <FaCheckCircle className='tick-icon' /> Creamy mashed potatoes, a perfect side dish.
                <br /><br />
                <FaCheckCircle className='tick-icon' /> French fries, golden and crispy.
              </p>
            )}
           
            <img src="src/assets/rec.png" alt="Potato Recipes" className='content-image' />
            <Link to="/potato-recipes">
              <button className="know-more1-btn">Know More</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
      {showFooter && <Footer />}
    </div>
  );
}

export default PotatoInsights;