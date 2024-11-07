import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './Sell.css'; // Import your CSS file

const Sell = () => {
  const location = useLocation();
  const potatoName = location.state?.potatoName || 'Unknown Potato'; // Get the potato name from the state

  return (
    <div className="buy-potato-container">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Sell Your Fresh Potatoes
      </motion.h1>
      
      {/* New row displaying the potato name */}
      <motion.div
        className="potato-name-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Potato Name: <span className="potato-name">{potatoName}</span></h2>
      </motion.div>

      <motion.form
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="buy-potato-form"
      >
        {/* Adding the potato name as a read-only field */}
        <motion.div 
          className="form-group" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="potatoName">Potato Name</label>
          <input 
            type="text" 
            id="potatoName" 
            value={potatoName} 
            readOnly 
            className="readonly-input" // Optional class for styling
          />
        </motion.div>

        {['name', 'email', 'number', 'quantity', 'address', 'Message'].map((field, index) => (
          <motion.div 
            className="form-group" 
            key={field}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'Message' || field === 'address' ? (
              <textarea id={field} placeholder={`Enter your ${field}`} required></textarea>
            ) : (
              <input 
                type={field === 'quantity' || field === 'number' ? 'number' : 'text'} 
                id={field} 
                placeholder={`Enter your ${field}`} 
                required 
                min={field === 'quantity' ? '1' : undefined} 
              />
            )}
          </motion.div>
        ))}
        
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#7cb342' }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Sell Now
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Sell;
