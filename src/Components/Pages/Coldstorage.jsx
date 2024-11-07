import React, { useEffect } from 'react';
import './Coldstorage.css';
import coldstorage1 from '../../assets/coldstorage1.jpg';
import coldstorage2 from '../../assets/coldstorage2.jpeg';
import coldstorage3 from '../../assets/coldstorage3.jpeg';
import coldstorage4 from '../../assets/Coldstorageimage1.jpg';

import Footer from "../../Components/Footer/Footer";
import { motion } from 'framer-motion';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Coldstorage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    scrollToTop();
  }, []);

  return (
    <section
      className="webcs-cold-storage"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="webcs-cold-storage-wrapper">
        {/* Header Section with Image */}
        <div className="webcs-cold-storage-header">
          <img src={coldstorage4} alt="Cold Storage Header" className="webcs-header-image" />
          <h1 className="webcs-header-title">Cold Storage</h1>
        </div>

        {/* Cold Storage Facilities Section */}
        <section className="webcs-cold-store">
          <h2 className="webcs-cold-store-title">AGPotato Cold Storage Facilities</h2>
          <p className="webcs-cold-store-description">
            At AGPotato, our state-of-the-art cold storage facilities are meticulously engineered to preserve the 
            quality, freshness, and nutritional value of potatoes year-round. Equipped with precision temperature 
            and humidity control systems, each facility ensures ideal conditions, reducing spoilage and extending 
            shelf life to deliver the best produce to customers.
          </p>
          
        </section>

        {/* Image Gallery Section */}
        <div className="webcs-cold-storage-gallery1">
          <h2>Cold Storage Facilities Gallery</h2>
          <br>
          </br>
          <div className="webcs-gallery-grid1">
          
            <img src={coldstorage2} alt="Cold Storage 1" className="webcs-gallery-image1" />
            <img src={coldstorage3} alt="Cold Storage 2" className="webcs-gallery-image1" />
            <img src={coldstorage2} alt="Cold Storage 3" className="webcs-gallery-image1" />
            <img src={coldstorage3} alt="Cold Storage 4" className="webcs-gallery-image1" />
          </div>
        </div>
       
        {/* Benefits of Cold Storage Section */}
        <div className="webcs-cold-storage-benefits">
          <h2 className="webcs-benefits-title">Benefits of Cold Storage</h2>
          <div className="webcs-benefits-list">
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🌡️</span>
              <p>Maintains potato quality for extended periods.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">❄️</span>
              <p>Prevents spoilage and reduces post-harvest losses.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">📆</span>
              <p>Ensures year-round supply of fresh potatoes.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">📈</span>
              <p>Helps stabilize prices in the market by controlling supply.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🌍</span>
              <p>Supports the export of potatoes to international markets.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🔋</span>
              <p>Enhances energy efficiency by maintaining optimal storage conditions.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🌱</span>
              <p>Promotes sustainable practices by reducing waste and extending shelf life.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🥔</span>
              <p>Preserves nutritional value, ensuring potatoes remain rich in vitamins and minerals.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🔒</span>
              <p>Enhances food safety by reducing contamination risks during storage.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🚚</span>
              <p>Facilitates efficient distribution, improving market availability and reducing delays.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">🛡️</span>
              <p>Minimizes the impact of seasonal shortages, ensuring consistent supply.</p>
            </div>
            <div className="webcs-benefit-item" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <span className="icon">👷‍♂️</span>
              <p>Generates employment opportunities in storage, logistics, and distribution sectors.</p>
            </div>
          </div>
        </div>

        {/* Cold Storage Importance Section */}
        <div className="webcs-cold-storage-section">
          <h2 className="webcs-importance-title">Importance of Cold Storage in the Potato Supply Chain</h2>
          <p className="webcs-importance-description">
            Cold storage plays a crucial role in preserving the quality of potatoes post-harvest. By maintaining an optimal temperature and humidity level, 
            cold storage facilities help extend the shelf life of potatoes, prevent spoilage, and reduce losses during transportation and storage. This process 
            ensures that the potatoes remain fresh, retain their nutritional value, and meet market demands year-round. Cold storage is especially important for 
            preserving the texture and flavor of potatoes, preventing sprouting and dehydration.
          </p>
        </div>

       

        {/* Footer Section */}
        <Footer />
      </div>
    
    </section>
  );
};

export default Coldstorage;
