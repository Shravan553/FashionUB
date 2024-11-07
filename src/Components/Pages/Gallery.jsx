import React from 'react';
import './Gallery.css';
import NavbarTYP from './Navbar/NavbarTYP.jsx';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react'; // Import useEffect for scroll to top

// Importing images
import Gallery1 from '../../assets/Gallerywallpaper1.jpg';
import Gimage1 from '../../assets/Gimage1.jpeg';
import Gimage3 from '../../assets/Gimage3.jpeg';
import Gimage4 from '../../assets/Gimage4.jpeg';
import Gimage5 from '../../assets/Gimage5.jpeg';
import Gimage6 from '../../assets/Gimage6.jpeg';
import Gimage7 from '../../assets/Gimage7.jpeg';
import Gimage8 from '../../assets/Gimage8.jpeg';
import Gimage9 from '../../assets/Gimage9.jpeg';
import Gimage10 from '../../assets/Gimage10.jpeg';
import Gimage11 from '../../assets/Gimage11.jpeg';
import Gimage12 from '../../assets/Gimage12.jpeg';
import Gimage13 from '../../assets/Gimage13.jpeg';
import Gimage14 from '../../assets/Gimage14.jpeg';
import Gimage17 from '../../assets/Gimage17.jpeg';
import Gimage18 from '../../assets/Gimage18.jpeg';

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Gallery = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  }, []);

  return (
    <div className="gallery-body">
      <NavbarTYP />

      <div className="gallery-entry">
        <img src={Gallery1} alt="Gallery Entry" className="entry-image" loading="lazy" />
        <div className="entry-overlay">
          <h2 className="entry-title">Gallery Images</h2>
        </div>
      </div>

      <h1>Potato Chronicles in Pictures</h1>
      <p className="section-description">
        Dive into the journey of potatoes, from planting to harvesting. These images capture the essence of potato farming, showcasing hard work, dedication, and the joy of reaping a bountiful harvest.
      </p>
      <div className="grid-container">
        <img className="grid-item" src={Gimage7} alt="Potato-on-floor" loading="lazy" />
        <img className="grid-item" src={Gimage13} alt="Grown-Potatoes" loading="lazy" />
        <img className="grid-item" src={Gimage14} alt="Potato-Image" loading="lazy" />
      </div>

<br>
</br>
      <h1>Exported Potato Chronicles</h1>
      <p className="section-description">
        Tracing the journey of potatoes from local farms to distant foreign markets, uncovering the processes involved in harvesting, packaging, and global distribution.
      </p>
      <div className="grid-container">
        <img className="grid-item" src={Gimage10} alt="Exportation-of-Potatoes" loading="lazy" />
        <img className="grid-item" src={Gimage12} alt="Potato-Export" loading="lazy" />
        <img className="grid-item" src={Gimage8} alt="Potato-Transport" loading="lazy" />
      </div>

      <br></br>

      <h1>Potato Industry in the Spotlight</h1>
      <p className="section-description">
        The potato industry plays a crucial role in global agriculture, with its presence expanding across news, trade magazines, and social media platforms.
      </p>
      <div className="grid-container">
        <img className="grid-item" src={Gimage4} alt="AGpotato-on-news1" loading="lazy" />
        <img className="grid-item" src={Gimage6} alt="AGpotato-on-news2" loading="lazy" />
        <img className="grid-item" src={Gimage17} alt="AGpotato-on-news3" loading="lazy" />
      </div>

<br></br>
      <h1>Memorable Moments with Industry Leaders</h1>
      <p className="section-description">
        In our journey towards excellence, we have had the privilege of collaborating with some of the most esteemed figures in the industry.
      </p>
      <div className="grid-container">
        <img className="grid-item" src={Gimage5} alt="Industry-Leaders2" loading="lazy" />
        <img className="grid-item" src={Gimage1} alt="International-buyerseller-meet" loading="lazy" />
        <img className="grid-item" src={Gimage3} alt="Industry-Leaders1" loading="lazy" />
      </div>
<br>
</br>
      <h1>Our Farming Community</h1>
      <p className="section-description">
        Our agricultural heroes are the dedicated farmers who work tirelessly to cultivate the land and bring food to our tables.
      </p>
      <div className="grid-container">
        <img className="grid-item" src={Gimage11} alt="Potato-Leaders" loading="lazy" />
        <img className="grid-item" src={Gimage9} alt="Potatoes-after-grown" loading="lazy" />
        <img className="grid-item" src={Gimage18} alt="Potatoes-Farm" loading="lazy" />
      </div>

<br></br>
      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>

      <Footer />
    </div>
  );
};

export default Gallery;
