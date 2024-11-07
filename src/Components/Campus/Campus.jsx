import React from 'react';
import './Campus.css';
import Gimage1 from '../../assets/Gimage1.jpeg';
import Gimage2 from '../../assets/Gimage2.jpeg';
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
import Gimage15 from '../../assets/Gimage15.jpeg';
import Gimage16 from '../../assets/Gimage16.jpeg';
import { Link } from 'react-router-dom';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        {/* Render all images */}
        <img src={Gimage1} alt="Gallery Image 1" />
        <img src={Gimage2} alt="Gallery Image 2" />
        <img src={Gimage3} alt="Gallery Image 3" />
        <img src={Gimage4} alt="Gallery Image 4" />
        <img src={Gimage5} alt="Gallery Image 5" />
        <img src={Gimage6} alt="Gallery Image 6" />
        <img src={Gimage7} alt="Gallery Image 7" />
        <img src={Gimage8} alt="Gallery Image 8" />
        <img src={Gimage9} alt="Gallery Image 9" />
        <img src={Gimage10} alt="Gallery Image 10" />
        <img src={Gimage11} alt="Gallery Image 11" />
        <img src={Gimage12} alt="Gallery Image 12" />
        <img src={Gimage13} alt="Gallery Image 13" />
        <img src={Gimage14} alt="Gallery Image 14" />
        <img src={Gimage15} alt="Gallery Image 15" />
        <img src={Gimage16} alt="Gallery Image 16" />
        {/* Duplicate images for infinite scrolling */}
        <img src={Gimage1} alt="Gallery Image 1" />
        <img src={Gimage2} alt="Gallery Image 2" />
        <img src={Gimage3} alt="Gallery Image 3" />
        <img src={Gimage4} alt="Gallery Image 4" />
        <img src={Gimage5} alt="Gallery Image 5" />
        <img src={Gimage6} alt="Gallery Image 6" />
        <img src={Gimage7} alt="Gallery Image 7" />
        <img src={Gimage8} alt="Gallery Image 8" />
        <img src={Gimage9} alt="Gallery Image 9" />
        <img src={Gimage10} alt="Gallery Image 10" />
        <img src={Gimage11} alt="Gallery Image 11" />
        <img src={Gimage12} alt="Gallery Image 12" />
        <img src={Gimage13} alt="Gallery Image 13" />
        <img src={Gimage14} alt="Gallery Image 14" />
        <img src={Gimage15} alt="Gallery Image 15" />
        <img src={Gimage16} alt="Gallery Image 16" />
      </div>
      <Link to="/Gallery">
        <button className="know-more-btn">Know More</button>
      </Link>
    </div>
  );
}

export default Campus;
