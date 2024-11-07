import React, { useEffect } from 'react'; // Import useEffect
import './Supplychain.css';
import Footer from "../../Components/Footer/Footer";
import supplychainimage from '../../assets/supplychainimage.jpg';
import { FaTruck, FaUsers, FaClock } from "react-icons/fa";
import potatotractor from '../../assets/potatotractor.jpg';
import Gimage13 from '../../assets/Gimage13.jpeg';
import cs from '../../assets/coldstorage3.jpeg';
import about2 from '../../assets/about2.png';
import Gimage14 from '../../assets/Gimage14.jpeg';
import retail1 from '../../assets/retail1.jpg';
import logistic1 from '../../assets/logistic1.jpg';
import Scroll from './scroll';

const Supplychain = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="supply-chain-wrapper">
      {/* Header Section with Image */}
      <div className="supply-chain-header">
        <img src={supplychainimage} alt="Potato Supply Chain Header" className="header-images" />
        <h1 className="header-titles">Potato Supply Chain</h1>
      </div>
      <section className="supply-chain-meaning">
        <h2>Supply Chain</h2>
        <p>
          The <strong>potato supply chain</strong> encompasses all the processes involved
          in growing, harvesting, storing, processing, distributing, and delivering
          potatoes from farms to consumers. It ensures that potatoes maintain their
          quality through every stage, from cultivation to consumption, with a focus on
          efficient transportation and meeting customer demands year-round.
        </p>
      </section>
      <section className="statistics-section">
        <div className="stats-container">
          <div className="stat-box">
            <FaTruck className="stat-icon" />
            <p>Exports</p>
            <h2>150+</h2>
          </div>
          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <p>Users Visited</p>
            <h2>20,000+</h2>
          </div>
          <div className="stat-box">
            <FaClock className="stat-icon" />
            <p>Times Accessed</p>
            <h2>500+</h2>
          </div>
        </div>
        <img
          src={potatotractor}
          alt="Landscape"
          className="landscape-image"
        />
      </section>
      <br />
      <section id="agpotato-info">
        <div className="info-box mission-box">
          <h3>Sustainability Efforts</h3>
          <p>
            We prioritize eco-friendly practices in every stage,
            from water conservation and soil health to waste reduction.
            Our goal is to cultivate potatoes in a way that enhances the environment.
          </p>
        </div>
        <div className="info-box opportunities-box">
          <h3>Business Opportunities</h3>
          <p>
            We offer flexible supply options tailored to meet diverse needs, ensuring
            competitive pricing and high-quality products for food manufacturers,
            retailers, and wholesalers.
          </p>
        </div>
      </section>
      <section className="sourcing-section">
        <div className="sourcing-content">
          <h2>Potato Sourcing</h2>
          <p>
            We source our potatoes directly from local farmers, ensuring that every batch is fresh and of the highest quality.
            This direct relationship with farmers allows us to support local agriculture while providing our customers with potatoes
            that are harvested at peak ripeness. By minimizing the distance from farm to table, we ensure the potatoes maintain
            their natural flavor and nutritional value.
          </p>
        </div>
        <div className="sourcing-image">
          <img src={Gimage13} alt="Sourcing Potatoes" />
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-image">
          <img src={cs} alt="Cold Storage" />
        </div>
        <div className="cs-content">
          <h2>Cold Storage</h2>
          <p>
            Our state-of-the-art cold storage facilities are designed to maintain optimal temperature and humidity levels, preserving the quality of our potatoes.
            Proper cold storage prevents spoilage and extends the shelf life of the produce, ensuring that our customers receive only the best products.
          </p>
          <ul>
            <li>Maintains optimal conditions to preserve quality.</li>
            <li>Prevents spoilage and extends shelf life.</li>
            <li>Efficient management of stock for timely delivery.</li>
            <li>Reduces waste and maximizes product availability.</li>
          </ul>
        </div>
      </section>

      <section className="sourcing-section">
        <div className="sourcing-content">
          <h2>Sorting and Grading</h2>
          <p>
          At AGPotato, we prioritize quality in our sorting and grading processes. Our skilled team uses advanced technology to meticulously sort and grade our potatoes based on various parameters such as size, shape, and overall quality. This attention to detail ensures that only the finest potatoes are selected for our customers. By maintaining high standards throughout the sorting and grading process, we are able to provide products that consistently meet industry standards and satisfy customer expectations. Our commitment to quality allows us to build long-term relationships with our partners and ensures the reliability of our supply chain.

          </p>
        </div>
        <div className="sourcing-image">
          <img src={about2} alt="Sourcing Potatoes" />
        </div>
      </section>
      

      <section className="cs-section">
        <div className="cs-image">
          <img src={Gimage14} alt="Cold Storage" />
        </div>
        <div className="cs-content">
          <h2>Prepackaging</h2>
          <p>
            Our state-of-the-art cold storage facilities are designed to maintain optimal temperature and humidity levels, preserving the quality of our potatoes.
            Proper cold storage prevents spoilage and extends the shelf life of the produce, ensuring that our customers receive only the best products.
          </p>
          <ul>
          <li>Potatoes are pre-packaged based on customer requirements, ensuring convenience and precision.</li>
            <li>We use industry-standard packaging materials to maintain freshness and extend shelf life.</li>
            <li>Packaging sizes are flexible to meet the needs of retail stores, wholesalers, and institutional buyers.</li>
            <li>Each package undergoes a final quality check to ensure consistency and meet high standards.</li>
            <li>Proper labeling for easy tracking and compliance with industry regulations.</li>
          </ul>
        </div>
      </section>

      

      <section className="sourcing-section">
        <div className="sourcing-content">
          <h2>Retail & Consumption</h2>
          <p>
          Potatoes are sold in stores or served in restaurants. At AGPotato, we ensure that our potatoes reach consumers in peak quality, whether they are selected from the shelves of retail outlets or included in gourmet dishes at fine dining establishments. Our careful sorting, grading, and distribution processes guarantee that every potato we deliver is fresh, nutritious, and meets our high standards for flavor and quality.

          </p>
        </div>
        <div className="sourcing-image">
          <img src={retail1} alt="Sourcing Potatoes" />
        </div>
      </section>


      
      <section className="cs-section">
        <div className="cs-image">
          <img src={logistic1} alt="Logistics & Transportation" />
        </div>
        <div className="cs-content">
          <h2>Logistics & Transportation</h2>
          <p>
            Our logistics and transportation services ensure the efficient movement of potatoes across various stages of the supply chain. From farm to sorting centers, and ultimately to retail or restaurant distribution points, we manage each step carefully to maintain product freshness and quality.
          </p>
          <ul>
            <li>Ensures timely delivery to maintain freshness.</li>
            <li>Reduces handling to minimize bruising and damage.</li>
            <li>Optimizes routes for efficient and eco-friendly transportation.</li>
            <li>Utilizes temperature-controlled trucks when needed for long-distance transport.</li>
          </ul>
        </div>
      </section>
      <Scroll />
      <Footer />
    </div>
  );
};

export default Supplychain;
