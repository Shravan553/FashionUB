import React from 'react';
import { motion } from 'framer-motion';
import './salad.css';
import videoFile from '../../../assets/video2.mp4'; 
import picklesImage from '../../../assets/pickles.png'; 
import mustardImage from '../../../assets/mustard.png'; 
import celeryImage from '../../../assets/celery.png'; 
import potatoImage from '../../../assets/potato.png'; 
import onionImage from '../../../assets/onion.png'; 
import heroImage from '../../../assets/salad.png'; 
import NavbarTYP from '../Navbar/NavbarTYP'; 
import Footer from '../../Footer/Footer';
const Salad = () => {
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
          <img src={heroImage} alt="Potato Salad" className="fri-hero-image" />
          {/* <div className="hero-text">
            <h1>Refreshing Potato Salad</h1>
            <p>Enjoy a light and flavorful potato salad, perfect for any occasion!</p>
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
          <p>Follow this step-by-step video tutorial to create a delightful potato salad.</p>
        </div>
      </section>
      <section className="fri-ingredients-section">
        <h2>Ingredients</h2>
        <div className="fri-ingredient-grid">
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoImage} alt="Potato" className="fri-ingredient-img" />
            <p>Potatoes - 4 medium, boiled and chopped</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={onionImage} alt="Onion" className="fri-ingredient-img" />
            <p>Onion - 1 small, diced</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={picklesImage} alt="Pickles" className="fri-ingredient-img"/>
            <p>Dill Pickles - 1 cup, chopped</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={mustardImage} alt="Mustard" className="fri-ingredient-img" />
            <p>Mustard - 3 tbsp</p>
          </motion.div>
          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={celeryImage} alt="Celery" className="fri-ingredient-img" />
            <p>Celery - 1 cup, diced</p>
          </motion.div>
        </div>
      </section>
      <section className="fri-steps-section">
        <h2>Steps to Make Potato Salad</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Boil the potatoes until tender, then let them cool and chop them.</li>
          <li>In a large bowl, combine the chopped potatoes, pickles, celery, mustard, and diced onion.</li>
          <li>Mix in vegan mayo, salt, and pepper to taste.</li>
          <li>Refrigerate for at least 30 minutes before serving.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Salad;