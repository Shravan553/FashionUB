import React from 'react';
import { motion } from 'framer-motion';
import './fries.css';
import videoFile from '../../../assets/video5.mp4'; 
import oil from '../../../assets/oil.png'; 
import potatoesImage from '../../../assets/potato.png'; // Replace with roasted potatoes image
import parmesan from '../../../assets/parmesan.png'; // Replace with Parmesan image
import paprika from '../../../assets/paprika.png'; // Replace with paprika image
import salt from '../../../assets/salt.png'; 
import heroImage from '../../../assets/Roasted.png'; // Replace with a roasted potatoes hero image
import NavbarTYP from '../Navbar/NavbarTYP';
import Footer from '../../Footer/Footer';
const Rost = () => {
  return (
    <div className="fri-recipe-page-container">
      <NavbarTYP />
      <section className="fri-hero-section">
        <img src={heroImage} alt="French Fries" className="fri-hero-image" />
        <motion.div
          className="fri-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="hero-text">
            <h1></h1>
            <p></p>
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
          <p>Follow this step-by-step video tutorial to create delicious roasted potatoes.</p>
        </div>
      </section>

      <section className="fri-ingredients-section">
        <h2>Ingredients for Roasted Potatoes</h2>
        <div className="fri-ingredient-grid">
          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoesImage} alt="Roasted Potatoes" className="fri-ingredient-img" />
            <p>2 pounds (900g) potatoes</p>
          </motion.div>

          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={oil} alt="Olive Oil" className="fri-ingredient-img"/>
            <p>4 tbsp (60g) olive oil</p>
          </motion.div>

          <motion.div className="fri-ingredient-card"  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={salt} alt="Salt" className="fri-ingredient-img" />
            <p>1 tsp (5g) salt & pepper for seasoning</p>
          </motion.div>

          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <img src={parmesan} alt="Parmesan Cheese" className="fri-ingredient-img" />
            <p>1/2 cup (50g) Parmesan cheese</p>
          </motion.div>

          <motion.div className="fri-ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={paprika} alt="Paprika" className="fri-ingredient-img"/>
            <p>1 tsp (3g) paprika</p>
          </motion.div>
        </div>
      </section>

      <section className="fri-steps-section">
        <h2>Steps to Make Roasted Potatoes</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Preheat your oven to 425°F (220°C).</li>
          <li>Wash and peel the potatoes, then cut them into evenly sized chunks.</li>
          <li>In a large bowl, toss the potatoes with olive oil, salt, pepper, and paprika.</li>
          <li>Spread the potatoes in a single layer on a baking sheet.</li>
          <li>Roast in the oven for 25-30 minutes, flipping halfway through.</li>
          <li>Sprinkle Parmesan cheese over the potatoes and roast for another 5-10 minutes until golden and crispy.</li>
          <li>Remove from the oven, season with more salt if needed, and serve hot.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Rost;