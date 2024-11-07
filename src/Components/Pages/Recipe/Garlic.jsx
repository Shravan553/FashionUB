import React from 'react';
import { motion } from 'framer-motion';
import './Garlic.css';
import videoFile from '../../../assets/video1.mp4'; 
import but from '../../../assets/but.png'; 
import gar from '../../../assets/chop gar.png'; 
import potatoIm from '../../../assets/potato.png'; 
import salt from '../../../assets/salt.png';
import par from '../../../assets/par.png'; 
import heroImage from '../../../assets/garlic1.png'; 
import NavbarTYP from '../Navbar/NavbarTYP'; 
import Footer from '../../Footer/Footer';

const Garlic = () => {
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
          <img src={heroImage} alt="Garlic Chopped Potato" className="fri-hero-image" />
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
          <p>Follow this step-by-step video tutorial to create a delicious garlic chopped potato dish.</p>
        </div>
      </section>
      <section className="fri-ingredients-section">
        <h2>Ingredients</h2>
        <div className="fri-ingredient-grid">
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoIm} alt="Potato" className="fri-ingredient-img" />
            <p>Medium size boiled potato - 500 gms</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={but} alt="Butter" className="fri-ingredient-img" />
            <p>Butter - 125 gms</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={gar} alt="Garlic" className="fri-ingredient-img" />
            <p>Chopped garlic - 1/4 cup</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <img src={par} alt="Parsley" className="fri-ingredient-img" />
            <p>Chopped fresh parsley - a palmful</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={salt} alt="Salt" className="fri-ingredient-img" />
            <p>Salt - to taste</p>
          </motion.div>
        </div>
      </section>
      <section className="fri-steps-section">
        <h2>Steps to Make Garlic Chopped Potato</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Heat butter in a pot over medium heat.</li>
          <li>Add chopped garlic and sauté until fragrant.</li>
          <li>Add boiled potatoes and mash them slightly.</li>
          <li>Pour in vegetable broth, bring to a boil, then reduce heat and simmer.</li>
          <li>Stir in chopped parsley, season with salt to taste, and serve hot.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Garlic;
