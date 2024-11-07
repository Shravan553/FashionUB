import React from 'react';
import './digestive.css';

// Import the Navbar
import NavbarTYP from '../Navbar/NavbarTYP';
// Import images
import digestive from '../../../assets/digestive1.jpg';
import Footer from '../../Footer/Footer';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const Digestive = () => {
  return (
    <div className='digestive-container'>
      <NavbarTYP /> {/* Add Navbar */}

      {/* Hero Section */}
      <section className='digestive-hero'>
        <div className='hero-image'>
          <img
            src={digestive}
            alt="Digestive System"
            className='digestive-hero-img'
          />
          <div className='overlay'>
            <div className='hero-text'>
              <h1>Potatoes Help the Human Digestive System</h1>
              <p>Exploring how potatoes support digestive health through their fiber content, promoting regular bowel movements and gut health.</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Card Section */}
      <section className='card-section'>
        <h2>How Potatoes Help the Digestive System</h2>
        <br></br>
        <div className='card-containers'>
          {[
            { title: 'High in Fiber', description: 'Potatoes are a great source of dietary fiber, promoting healthy digestion.' },
            { title: 'Prebiotic Benefits', description: 'Resistant starch in potatoes nourishes beneficial gut bacteria.' },
            { title: 'Gut Health', description: 'Regular consumption of potatoes can help maintain a balanced digestive tract.' },
            { title: 'Hydration', description: 'The high water content in potatoes supports overall digestive hydration.' },
            { title: 'Weight Management', description: 'Potatoes are filling yet low in calories, aiding in weight control.' },
            { title: 'Vitamins and Minerals', description: 'Rich in vitamin C and B6, potatoes support digestive health and function.' },
            { title: 'Digestive Comfort', description: 'Eating potatoes can help soothe an upset stomach and reduce bloating.' },
            { title: 'Gut Motility', description: 'The fiber in potatoes enhances gut motility, helping with regular bowel movements.' },
          ].map((card, index) => (
            <div key={index} className='card'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section class="aiding-digestion">
  <div class="digestive-box">
    <h2 class="digestive-title">Aiding the Digestive System with Potatoes</h2>
    <p class="digestive-info">
      Potatoes are packed with essential nutrients and dietary fiber that support a healthy digestive system. 
      The fiber helps regulate bowel movements, prevent constipation, and improve gut health. 
      Additionally, the resistant starch found in potatoes acts as a prebiotic, feeding good bacteria in the gut and promoting a balanced microbiome, 
      which is crucial for efficient digestion and nutrient absorption.
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

export default Digestive;
