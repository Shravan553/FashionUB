import React from 'react';
import world from '../../assets/websiteimage9.png'; // Ensure the path is correct
import './world.css'; // Ensure the CSS file path is correct

const WorldMap = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <h1 className='mapname'>Expanding Horizons: The Journey of Our Potatoes Abroad</h1>
      
      <img src={world} alt="World Map" style={{ width: '100%', height: 'auto' }} />

      {/* USA Marker */}
      <div className="marker usa">
        <span className="marker-text">USA-1.12 million</span>
      </div>
      
      {/* Netherlands Marker */}
      <div className="marker netherlands">
        <span className="marker-text">Netherlands-109.27 million</span>
      </div>
      
      {/* UAE Marker */}
      <div className="marker uae">
        <span className="marker-text">UAE-1.12 million</span>
      </div>
      
      {/* India Marker */}
      <div className="marker india">
        <span className="marker-text">India</span>
      </div>

      {/* Australia Marker */}
      <div className="marker australia">
        <span className="marker-text">Australia - 0.98 million</span>
      </div>
    </div>
  );
};

export default WorldMap;
