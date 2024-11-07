import React from 'react';
import './About.css';
import about_img from '../../assets/agpotatoabout.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = ({ setPlayState }) => {
  return (
    <div className='about1'>
      
      <div className="about-left">
        <img src={about_img} alt="About Anand Group" className='about-img' />
      </div>
      <div className="about-right">
        <h3>ABOUT AGPOTATO</h3>
        <h2>Bridging the Gap in the Potato Supply Chain</h2>
        <p>AGPOTATO specializes in the potato trade, acting as a crucial intermediary between vendors and customers. We source premium potatoes from trusted growers and efficiently distribute them to businesses in nearby areas.</p>
        <p>Our deep-rooted expertise in agriculture and comprehensive market understanding allows us to effectively bridge the gap between producers and end-users.</p>
        <p>Through our innovative online platform, agpotato.com, we've modernized the traditional supply chain, simplifying the process for vendors to showcase their produce and for customers to access fresh, high-quality potatoes.</p>

        {/* Add Know More Button */}
        <Link to="/AboutUS">
          <button className="know-more-btn">Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default About;