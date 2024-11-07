import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import tyimage1 from '../../assets/tyimage3.jpg';

const Testimonials = () => {
  const backgroundStyle = {
    backgroundImage: `url(${tyimage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    display: 'flex',
    height:'500px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className="landing-page-card">
        <h1 className="landing-page-title">Buy Premium Potatoes?</h1>
        <h1 className="landing-page-title">Ready to Sell Premium Potatoes?</h1>

        <p className="landing-page-subtitle">Explore our platform to connect with trusted vendors and customers.</p>
        
        <div className="testimonialpvalue">
          <p>We offer a wide range of potato varieties and easy transactions.</p>
          <p>Join our network to buy or sell potatoes efficiently and effectively!</p>
        </div>
        
        <Link to="/VendorCustomerPage">
          <button className="click-here-button">Click Here to Buy & Sell Potatoes</button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
