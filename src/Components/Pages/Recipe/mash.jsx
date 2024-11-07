import React from 'react';
import { motion } from 'framer-motion';
import './mash.css';
import videoFile from '../../../assets/video4.mp4'; 
import potatoIm from '../../../assets/potato.png'; 
import butterIm from '../../../assets/but.png'; 
import garlicIm from '../../../assets/garlic.png'; 
import milkIm from '../../../assets/milk.png'; 
import sourCreamIm from '../../../assets/soul.png';
import saltIm from '../../../assets/pepper.png';
import heroImage from '../../../assets/potato_mash.jpg'; 
import NavbarTYP from '../Navbar/NavbarTYP';
import Footer from '../../Footer/Footer';
const Mash = () => {
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
          <img src={heroImage} alt="Mashed Potatoes" className="fri-hero-image" />
          {/* <div className="hero-text">
            <h1>Classic Mashed Potatoes Recipe</h1>
            <p>Learn how to make creamy, delicious mashed potatoes that are perfect for any occasion.</p>
          </div> */}
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
          <p>Follow this step-by-step video tutorial to make perfect mashed potatoes.</p>
        </div>
      </section>

      <section className="fri-ingredients-section">
        <h2>Ingredients</h2>
        <div className="fri-ingredient-grid">
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoIm} alt="Potatoes" className="fri-ingredient-img" />
            <p>3 lbs Potatoes</p>
          </motion.div>
          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={butterIm} alt="Butter" className="fri-ingredient-img"/>
            <p>Unsalted Butter - 125g</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={garlicIm} alt="Garlic" className="fri-ingredient-img" />
            <p>Garlic - 4 cloves</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <img src={milkIm} alt="Milk" className="fri-ingredient-img" />
            <p>Whole Milk - 1 cup</p>
          </motion.div>
          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={sourCreamIm} alt="Sour Cream" className="fri-ingredient-img" />
            <p>Sour Cream - 1/2 cup</p>
          </motion.div>
          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
            <img src={saltIm} alt="Salt" className="fri-ingredient-img"/>
            <p>Salt & Pepper to taste</p>
          </motion.div>
        </div>
      </section>

      <section className="fri-steps-section">
        <h2>Steps to Make Classic Mashed Potatoes</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Peel and boil the potatoes until tender.</li>
          <li>Melt the butter in a small pan over medium heat.</li>
          <li>Add minced garlic and sauté until fragrant.</li>
          <li>Mash the boiled potatoes and add the butter, milk, and garlic mixture.</li>
          <li>Fold in sour cream and season with salt and pepper.</li>
          <li>Serve warm and enjoy!</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Mash;