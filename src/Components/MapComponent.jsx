import React, { useEffect, useState } from 'react';

const Map = () => {
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Update the canvas size when the image is loaded
  const handleImageLoad = (e) => {
    setCanvasSize({ width: e.target.width, height: e.target.height });
  };

  // Coordinates of red-colored locations
  const locations = {
    USA: { x: 270, y: 200 }, // Example coordinates for USA
    India: { x: 800, y: 350 }, // Example coordinates for India
    Canada: { x: 270, y: 120 }, // Canada
    Germany: { x: 580, y: 150 }, // Germany
    UAE: { x: 720, y: 320 }, // UAE
    France: { x: 560, y: 160 }, // France
    Netherlands: { x: 560, y: 140 }, // Approximate location for Netherlands
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Map image */}
      <img
        src="/mnt/data/MapChart_Map (2).png" // Update the path according to your project structure
        alt="World Map"
        onLoad={handleImageLoad}
        style={{ width: '100%', maxWidth: '1000px' }}
      />
      
      {/* Draw connections using SVG */}
      <svg
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Line connecting USA and India */}
        <line
          x1={locations.USA.x}
          y1={locations.USA.y}
          x2={locations.India.x}
          y2={locations.India.y}
          stroke="red"
          strokeWidth="2"
        />
        {/* Line connecting India and UAE */}
        <line
          x1={locations.India.x}
          y1={locations.India.y}
          x2={locations.UAE.x}
          y2={locations.UAE.y}
          stroke="red"
          strokeWidth="2"
        />
        {/* Line connecting India and Netherlands */}
        <line
          x1={locations.India.x}
          y1={locations.India.y}
          x2={locations.Netherlands.x}
          y2={locations.Netherlands.y}
          stroke="red"
          strokeWidth="2"
        />
      </svg>

      {/* Place markers on the map */}
      {Object.keys(locations).map((location) => (
        <div
          key={location}
          style={{
            position: 'absolute',
            top: `${locations[location].y}px`,
            left: `${locations[location].x}px`,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Map;
