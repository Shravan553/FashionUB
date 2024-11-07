import './imune.css';
import React, { useEffect, useState } from 'react';

// Import the Navbar
import NavbarTYP from '../Navbar/NavbarTYP';

// Import images
import skin from '../../../assets/mentalhealth.png';
// Add more images if necessary
// import photo1 from '../../../assets/photo1.jpg';
// import photo2 from '../../../assets/photo2.jpg';
// const images = [skin, photo1, photo2];

import imune2 from '../../../assets/imune2.jpg';
import Footer from '../../Footer/Footer';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Imune = () => {
  

  
  return (
    <div className='imune-container'>
      <NavbarTYP />  {/* Add Navbar */}

      {/* Hero Section */}
      <section className='imune-hero'>
        <div className='hero-text'>
          <h1> Immune System</h1>
          <p>Potatoes help the immune system by providing vitamin C and fiber.</p>
        </div>
        <div className='hero-image'>
          <img
            src={skin}
            alt="Potato History"
            className='potato-hero-img'
          />
        </div>
      </section>

      {/* Immune System Section */}
      <section className='immune-system'>
        <h2>Immune System</h2>
        <div className='cards-container'>
          <div className='card'>
            <h3>Defends Against Invaders</h3>
            <p>The immune system protects the body from harmful invaders like bacteria and viruses.</p>
          </div>
          <div className='card'>
            <h3>Adaptive Immunity</h3>
            <p>It can remember previous invaders and responds faster to repeated threats.</p>
          </div>
          <div className='card'>
            <h3>White Blood Cells</h3>
            <p>These cells act as soldiers, fighting off infections and keeping the body safe.</p>
          </div>
          <div className='card'>
            <h3>Maintains Balance</h3>
            <p>The immune system also helps regulate body functions and maintain internal balance.</p>
          </div>
        </div>
      </section>

      <section className='immune-facts'>
  <div className='facts-container'>
    <h2>Amazing Facts About the Immune System</h2>
    <div className='fact-cards'>
      <div className='fact-card'>
        <i className='fas fa-shield-alt'></i> {/* Example icon */}
        <h3>Fact 1</h3>
        <p>Your immune system has a memory! It can remember past infections and attack them more effectively.</p>
      </div>
      <div className='fact-card'>
        <i className='fas fa-virus'></i> {/* Example icon */}
        <h3>Fact 2</h3>
        <p>The average person’s body contains over 25 billion white blood cells to protect you from pathogens.</p>
      </div>
      <div className='fact-card'>
        <i className='fas fa-heartbeat'></i> {/* Example icon */}
        <h3>Fact 3</h3>
        <p>Your skin is the first line of defense. It acts as a physical barrier against invaders.</p>
      </div>
      <div className='fact-card'>
        <i className='fas fa-microscope'></i> {/* Example icon */}
        <h3>Fact 4</h3>
        <p>Fever is your immune system’s way of raising the body’s temperature to fight off invaders.</p>
      </div>
    </div>
  </div>
</section>

<section className='immune-response'>
  <div className='response-container'>
    <div className='response-text'>
      <h2>Understanding the Immune Response</h2>
      <p>
        Your immune system is a complex network of cells, tissues, and organs that work together to defend your body against harmful invaders. From recognizing pathogens to triggering a response, every step is crucial in keeping you healthy.
      </p>
      <p>
        This process involves various types of immune cells, including white blood cells that act as your body's personal army, attacking and eliminating threats.
      </p>
    </div>
    <div className='response-image'>
      <img src={imune2} alt="Immune response" className='immune-image' />
    </div>
  </div>
</section>


<section className='potato-importance'>
  <div className='importance-card'>
    <h2>Why Potatoes Are Important for Your Immune System</h2>
    <p>
      Potatoes are not just a staple food in many diets; they are also a nutritional powerhouse that plays a significant role in supporting the immune system. Rich in essential vitamins and minerals, particularly vitamin C, potatoes help bolster the body's defenses against infections. This versatile vegetable provides antioxidants that combat free radicals, reducing oxidative stress and inflammation, both of which can weaken immune function. Additionally, potatoes are an excellent source of dietary fiber, which promotes gut health—a crucial factor for a robust immune response. By delivering complex carbohydrates, they offer sustained energy necessary for the body to fend off illnesses effectively. Incorporating potatoes into a balanced diet not only adds flavor but also contributes to overall health, making them an invaluable ally in maintaining a strong immune system.
    </p>
  </div>
</section>
{/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
<Footer />
     
    </div>
  );

};

export default Imune;
