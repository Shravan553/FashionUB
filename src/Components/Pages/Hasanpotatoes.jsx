import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hasanpotatoes.css'; // Import your CSS file for styling

const Hasanpotatoes = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Handle buy action (you can redirect or perform an action here)
    console.log("Buy button clicked for Chipsona");
  };

  const handleSellClick = () => {
    // Navigate to the sell page with the potato name as a parameter
    navigate('/sell', { state: { potatoName: 'Hasanpotatoes' } });
  };

  return (
    <div className="potato-detail-container">
      <h1>Potato Variant: Hasanpotatoes</h1>
      <img src="../../assets/3.jpg" alt="Potato Hasanpotatoes" className="potato-image" />
      <div className="potato-description">
        <h2>Description</h2>
        <p>
          The 3797 potato is known for its high yield and excellent cooking quality.
          It is ideal for both frying and baking, making it a popular choice among consumers
          and farmers alike. With its smooth skin and golden flesh, it's sure to please 
          any palate!
        </p>
      </div>
      
      <div className="button-container">
        <button onClick={handleBuyClick} className="buy-button">Buy</button>
        <button onClick={handleSellClick} className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default Hasanpotatoes;
