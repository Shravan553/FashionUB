import './Programs.css';
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import program_1 from '../../assets/far.jpg';
import program_2 from '../../assets/cold.png';
import program_3 from '../../assets/supply.jpg';
import program_4 from '../../assets/bypro.jpg';
import program_5 from '../../assets/flo.jpg';
import program_6 from '../../assets/expo.jpg';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
}, []);
  return (
    
    <div className='programs'>
      <div className="program">
        <Link to="/Meetfarmer">
          <img src={program_1} alt="Program 1" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Potato from Farmers</h2>
        </div>
      </div>
      <div className="program">
        <Link to="/Coldstorage">
          <img src={program_2} alt="Program 2" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Cold Storage</h2>
        </div>
      </div>
      <div className="program">
        <Link to="/supply-chain">
          <img src={program_3} alt="Program 3" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Potato Supply Chain</h2>
        </div>
      </div>
      <div className="program">
        <Link to="/potato-by-product">
          <img src={program_4} alt="Program 4" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Byproducts</h2>
        </div>
      </div>
      <div className="program">
        <Link to="/frozen-products">
          <img src={program_5} alt="Program 5" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Frozen Products</h2>
        </div>
      </div>
      <div className="program">
        <Link to="/export-excellence">
          <img src={program_6} alt="Program 6" />
        </Link>
        <div className="caption">
          <h2 className="program-title">Potato Export</h2>
        </div>
      </div>
    </div>
  );
};

export default Programs;
