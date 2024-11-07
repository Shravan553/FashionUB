import React from 'react';
import { useNavigate } from 'react-router-dom';
import './P302hybrid.css'; // Import your CSS file for styling

const P302hybrid = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Handle buy action (you can redirect or perform an action here)
    console.log("Buy button clicked for P2001");
  };

  const handleSellClick = () => {
    // Navigate to the sell page with the potato name as a parameter
    navigate('/sell', { state: { potatoName: '302hybrid' } });
  };

  return (
    <div className="potato-detail-container">
      <h1>Potato Variant: 302hybrid</h1>
      <img src="../../assets/3.jpg" alt="Potato 302hybrid" className="potato-image" />
      <div className="potato-description">
        <h2>Description</h2>
        <p>
        The 302 Hybrid potato is a high-yielding, resilient variety that’s
         particularly well-suited for large-scale production. With its smooth, 
         uniform shape and firm texture, it’s a versatile option that excels in both fresh market 
         and processing applications, including frying and chipping. This hybrid variety is prized for its adaptability to various climates and its resistance to common potato diseases. Farmers appreciate its reliability, while consumers enjoy its light,
         fluffy texture and mild flavor, making it a go-to choice for a wide range of culinary uses.
        </p>
      </div>
      
      <div className="button-container">
        <button onClick={handleBuyClick} className="buy-button">Buy</button>
        <button onClick={handleSellClick} className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default P302hybrid;
