import React, { useEffect } from 'react';

import './Export.css';
import Export1 from '../../assets/Export1.jpg';
import Export2 from '../../assets/Export2.jpeg';
import Export3 from '../../assets/Export3.jpeg';
import Export4 from '../../assets/Export4.jpeg';
import extra3 from '../../assets/extra3.jpg';
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';


const handleReadMore = () => {
  
  history.push('/AboutUS'); // Replace '/about' with your actual About page route
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Export = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
}, []);
  return (
    <div className="Exportpage-wrapper">
      {/* Header Section with Image */}
      <div className="Exportpage-header">
        <img src={Export1} alt="Export Excellence Header" className="Exportpage-header-image" />
        <br></br>
        <h1 className="Exportpage-header-title">Export Excellence</h1>
      </div>

      {/* Potatoes Export Section */}
      <div className="Exportpage-potato-section" style={{ animationDelay: '0.5s' }}>
        <h2 className="Exportpage-potato-title">Potatoes Export</h2>
        <p className="Exportpage-potato-description">
          Exports have played a pivotal role in AGPotato's growth since its inception, delivering a range of potato products across India. Before the pandemic, we aimed to venture into European markets, particularly the Netherlands. With a modern facility and distribution capabilities, AGPotato is poised to make a substantial impact on domestic and international markets.
        </p>
      </div>

      {/* Export Journey Section */}
      <div className="Exportpage-journey-section" style={{ animationDelay: '0.7s' }}>
        <div className="Exportpage-journey-image">
          <img src={extra3} alt="Potato Products" />
        </div>
        <div className="Exportpage-journey-content">
          <h2>Our Export Journey</h2>
          <p>
            AGPotato began with a mission to provide fresh, high-quality potato products, building a network of farmers and partners committed to sustainable practices and exceptional standards. From local distribution, we quickly expanded across India, laying a strong foundation for international growth.
          </p>
          <p>
            Today, our partnerships with European retail chains, including in the Netherlands, mark a major milestone. As we continue investing in advanced logistics and product innovation, we look forward to sharing India’s best potatoes with customers worldwide.
          </p>
        </div>
      </div>

      {/* Success Stories Section */}
<div className="Exportpage-success-stories-section">
  <h2 className="Exportpage-success-stories-title">Success Stories</h2>
  <div className="Exportpage-success-story">
    <h3>Farmers' Journey Towards Sustainability</h3>
    <p>
    At AGPotato, we believe that sustainability starts at the grassroots level. Our collaboration with local farmers is centered around empowering them with knowledge, resources, and technology to implement eco-friendly farming practices. Through our initiatives, farmers are learning to utilize water-efficient irrigation systems, organic farming techniques, and waste reduction strategies.
    </p>
    <br></br>
    {/* <button onClick={handleReadMore} className="Exportpage-read-more">Read More</button> */}
    <Link to="/AboutUS" className="Exportpage-read-more">Read More</Link>
  </div>
</div>


      {/* Export Images Gallery Section */}
      <div className="Exportpage-images-section" style={{ animationDelay: '0.9s' }}>
        <h2 className="Exportpage-title">Export Images</h2>
        <div className="Exportpage-image-gallery">
          <img src={Export2} alt="Export Image 1" className="Exportpage-image" />
          <img src={Export3} alt="Export Image 2" className="Exportpage-image" />
          <img src={Export4} alt="Export Image 3" className="Exportpage-image" />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="Exportpage-scroll-to-top">Scroll to Top</button>
      <Footer />
    </div>
  );
};

export default Export;
