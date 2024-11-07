import React from 'react';
import { useNavigate } from 'react-router-dom';
import './P3797.css'; // Import your CSS file for styling
import potatoImage1 from '../../assets/3797.jpeg';

const P3797 = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    console.log("Buy button clicked for 3797");
  };

  const handleSellClick = () => {
    navigate('/sell', { state: { potatoName: '3797' } });
  };

  return (
    <div className="potato-detail-container">
      <h1 className="potato-title">Potato Variant: 3797</h1>
      <div className="potato-image-container">
        <img src={potatoImage1} alt="Potato 3797" className="potato-image" />
      </div>
      <div className="potato-description">
        <h2>Description</h2>
        <p>
          The 3797 potato is known for its high yield and excellent cooking quality. 
          It is ideal for both frying and baking, making it a popular choice among 
          consumers and farmers alike. With its smooth skin and golden flesh, it's 
          sure to please any palate!
        </p>
      </div>

      <div className="extra-content">
        <h2>Nutritional Information</h2>
        <ul>
          <li>Calories: 130</li>
          <li>Carbohydrates: 30g</li>
          <li>Protein: 3g</li>
          <li>Fiber: 2g</li>
          <li>Fat: 0g</li>
        </ul>
      </div>

      <div className="button-container">
        <button onClick={handleBuyClick} className="buy-button">Buy</button>
        <button onClick={handleSellClick} className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default P3797;
