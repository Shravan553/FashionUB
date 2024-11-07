import React from 'react';
import { useNavigate } from 'react-router-dom';
import './P2001.css'; // Import your CSS file for styling

const P2001 = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Handle buy action (you can redirect or perform an action here)
    console.log("Buy button clicked for P2001");
  };

  const handleSellClick = () => {
    // Navigate to the sell page with the potato name as a parameter
    navigate('/sell', { state: { potatoName: 'P2001' } });
  };

  return (
    <div className="potato-detail-container">
      <h1>Potato Variant: 2001</h1>
      <img src="../../assets/3.jpg" alt="Potato 2001" className="potato-image" />
      <div className="potato-description">
        <h2>Description</h2>
        <p>
        The 2001 potato variant is celebrated for its excellent taste and versatility in cooking. 
        Known for its smooth skin and creamy texture, this potato is perfect for a variety of culinary applications, 
        including mashing, baking, and roasting.
         Its high resistance to diseases and pests makes it a favorite among farmers, ensuring a reliable yield. 
        </p>
      </div>
      
      <div className="button-container">
        <button onClick={handleBuyClick} className="buy-button">Buy</button>
        <button onClick={handleSellClick} className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default P2001;
