import React from 'react';
import { motion } from 'framer-motion';
import './fries.css';
import videoFile from '../../../assets/video3.mp4'; 
import oil from '../../../assets/oil.png'; 
import rust from '../../../assets/rust.png'; 
import salt from '../../../assets/salt.png';
import heroImage from '../../../assets/friesHeroImage.jpg';
import NavbarTYP from '../Navbar/NavbarTYP'; 
import ket from '../../../assets/ket.png';
import mo from '../../../assets/mo.png';
import Footer from '../../Footer/Footer';

const Fries = () => {
  return (
    <div className="fri-recipe-page-container">
      <NavbarTYP />
      <section className="fri-hero-section">
        <motion.div 
          className="fri-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="French Fries" className="fri-hero-image" />
        </motion.div>
      </section>
      <section className="fri-video-section">
        <motion.video
          src={videoFile}
          controls
          className="fri-recipe-video"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="fri-video-description">
          <h2>Watch How to Make It</h2>
          <p>Follow this step-by-step video tutorial to create delicious homemade French fries.</p>
        </div>
      </section>
      <section className="fri-ingredients-section">
        <h2>Ingredients for French Fries</h2>
        <div className="fri-ingredient-grid">
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={rust} alt="Russet Potatoes" className="fri-ingredient-img" />
            <p>4 large Russet potatoes</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={oil} alt="Oil" className="fri-ingredient-img" />
            <p>Oil for frying</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={salt} alt="Salt" className="fri-ingredient-img" />
            <p>Salt and pepper for seasoning</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={ket} alt="Ketchup" className="fri-ingredient-img" />
            <p>Ketchup (optional for serving)</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
            <img src={mo} alt="Mayonnaise" className="fri-ingredient-img" />
            <p>Mayonnaise (optional for serving)</p>
          </motion.div>
        </div>
      </section>
      <section className="fri-steps-section">
        <h2>Steps to Make French Fries</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Wash and peel the potatoes, then cut them into thin strips.</li>
          <li>Soak the potato strips in cold water for at least 30 minutes.</li>
          <li>Heat oil in a deep pan over medium-high heat.</li>
          <li>Drain the potatoes and pat them dry with a towel.</li>
          <li>Fry the potatoes in batches until golden brown and crispy.</li>
          <li>Remove from oil, drain on paper towels, and season with salt and pepper.</li>
          <li>Serve hot with ketchup or mayonnaise.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Fries;
