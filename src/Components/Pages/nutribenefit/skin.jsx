import React from 'react';
import { motion } from 'framer-motion';
import './skin.css'; // Your custom CSS file
import skinImage from '../../../assets/skincare1.jpg'; // Your image path
import remedyImage from '../../../assets/honey.png'; // Path for the home remedy image
import curd from '../../../assets/curd.jpg';
import slice from '../../../assets/slice.jpg';
import Footer from '../../Footer/Footer';
 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Skin = () => {
  return (
    <div className="skin-page-container">
      {/* Background Image */}
      <div className="background-image-container">
        {<img src={skinImage} alt="Potato benefits for skin" className="background-image" />}
      </div>

      {/* Text Overlay */}
      <div className="overlay-text-container">
        <motion.h1
          className="overlay-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Potatoes on Skin
        </motion.h1>
        <motion.p
          className="overlay-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock the natural glow with the skin-enhancing power of potatoes.
        </motion.p>
      </div>

      {/* New Section Below the Image */}
      <div className="info-section">
        <motion.h2
          className="info-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Potatoes are Important for the Skin
        </motion.h2>
        <motion.p
          className="info-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Potatoes are rich in vitamins and minerals like vitamin C and B-complex, which promote skin rejuvenation. Their natural bleaching properties help reduce dark spots and enhance overall skin tone. Potatoes also contain antioxidants that help combat free radicals, making your skin look youthful and radiant. Incorporating potatoes into your skincare routine can lead to a healthier, glowing complexion.
        </motion.p>
      </div>

      {/* Home Remedies Section */}
      <div className="home-remedy-section">
        <motion.h2
          className="remedy-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home Remedies with Potatoes - 1
        </motion.h2>
        <div className="remedy-content">
          <img src={remedyImage} alt="Home Remedy" className="remedy-image" />
          <motion.h3
            className="remedy-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Potato and Honey Face Mask
          </motion.h3>
          <h4>Ingredients:</h4>
          <ul className="ingredients-list">
            <li>1 medium potato</li>
            <li>1 tablespoon honey</li>
            <li>1 tablespoon yogurt (optional)</li>
          </ul>
          <motion.p
            className="remedy-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mix the grated potato with honey and yogurt to form a paste. Apply it to your face and leave it on for 15-20 minutes. Rinse with lukewarm water for a refreshed glow!
          </motion.p>

        </div>
      </div>


 


 {/* Home Remedies Section */}
 <div className="home-remedy-section">
        <motion.h2
          className="remedy-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home Remedies with Potatoes - 2
        </motion.h2>
        <div className="remedy-content">
          <img src={curd} alt="Home Remedy" className="remedy-image" />
          <motion.h3
            className="remedy-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Potato and Yogurt Mask
          </motion.h3>
          <h4>Ingredients:</h4>
          <ul className="ingredients-list">
            <li>1 medium potato</li>
            <li>2 tablespoons yogurt.</li>
            
          </ul>
          <motion.p
            className="remedy-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Apply the mixture on your face and leave it for 20 minutes.
             Rinse with water. This mask nourishes the skin and helps brighten your complexion.
          </motion.p>

        </div>
      </div>



{/* Home Remedies Section */}
<div className="home-remedy-section">
        <motion.h2
          className="remedy-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home Remedies with Potatoes - 3
        </motion.h2>
        <div className="remedy-content">
          <img src={slice} alt="Home Remedy" className="remedy-image" />
          <motion.h3
            className="remedy-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Potato Slices for Puffy Eyes
          </motion.h3>
          <h4>Ingredients:</h4>
          <ul className="ingredients-list">
            <li>1 medium potato</li>
            
            
          </ul>
          <motion.p
            className="remedy-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cut the potato into thick slices.Place the slices over your closed eyes for 15-20 minutes.
             This remedy helps reduce puffiness and dark circles.
          </motion.p>

        </div>
      </div>

      {/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
      
      <Footer />

    </div>
  );
};

export default Skin;
