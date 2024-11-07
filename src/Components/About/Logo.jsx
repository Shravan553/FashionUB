// src/components/LogoSlider.jsx

import React from 'react';
import logo1 from '../../assets/Blink.png';
import logo2 from '../../assets/buddha.png';
import logo3 from '../../assets/DUNZO.png';
import logo4 from '../../assets/BigBasket.png';
import logo5 from '../../assets/flip.png';
import logo6 from '../../assets/Reliance.png';
import logo7 from '../../assets/swiggy.jpg';
import logo8 from '../../assets/Zepto.png';
import logo9 from '../../assets/More.jpg';
import './Logo.css';

const LogoSlider = () => {
  return (
    <section className="logo-sliders">
      <h2>Our Clients</h2>
      <div className="logo-rows">
        <div className="logo-tracks">
          <img src={logo1} alt="Client 1" className="logos" />
          <img src={logo2} alt="Client 2" className="logos" />
          <img src={logo3} alt="Client 3" className="logos" />
          <img src={logo4} alt="Client 4" className="logos" />
          <img src={logo5} alt="Client 5" className="logos" />
          <img src={logo6} alt="Client 6" className="logos" />
          <img src={logo7} alt="Client 7" className="logos" />
          <img src={logo8} alt="Client 8" className="logos" />
          <img src={logo9} alt="Client 9" className="logos" />
          {/* Duplicate logos for smooth looping */}
          <img src={logo1} alt="Client 1 Duplicate" className="logos" />
          <img src={logo2} alt="Client 2 Duplicate" className="logos" />
          <img src={logo3} alt="Client 3 Duplicate" className="logos" />
          <img src={logo4} alt="Client 4 Duplicate" className="logos" />
          <img src={logo5} alt="Client 5 Duplicate" className="logos" />
          <img src={logo6} alt="Client 6 Duplicate" className="logos" />
          <img src={logo7} alt="Client 7 Duplicate" className="logos" />
          <img src={logo8} alt="Client 8 Duplicate" className="logos" />
          <img src={logo9} alt="Client 9 Duplicate" className="logos" />

          <img src={logo1} alt="Client 1 Duplicate" className="logos" />
          <img src={logo2} alt="Client 2 Duplicate" className="logos" />
          <img src={logo3} alt="Client 3 Duplicate" className="logos" />
          <img src={logo4} alt="Client 4 Duplicate" className="logos" />
          <img src={logo5} alt="Client 5 Duplicate" className="logos" />
          <img src={logo6} alt="Client 6 Duplicate" className="logos" />
          <img src={logo7} alt="Client 7 Duplicate" className="logos" />
          <img src={logo8} alt="Client 8 Duplicate" className="logos" />
          <img src={logo9} alt="Client 9 Duplicate" className="logos" />
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
