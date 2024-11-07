// Buy.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Buy = () => {
  const { type } = useParams(); // Extract the potato type from the URL

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for buying the potatoes (e.g., sending a request to a server)
    alert(`You have requested to buy: ${type}`);
  };

  return (
    <div className="buy-container">
      <h2>Buying {type}</h2>
      <p>Please indicate how many potatoes you need to buy.</p>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Quantity" required />
        <button type="submit" className="buy-button">Submit Order</button>
      </form>
    </div>
  );
};

export default Buy;
