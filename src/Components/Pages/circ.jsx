import React, { useState, useEffect, useRef } from 'react';
import './circ.css'; // Ensure you have the correct path to your CSS file


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
const Anim = () => {
    const cubeRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [lastMouseX, setLastMouseX] = useState(0);
    const [lastMouseY, setLastMouseY] = useState(0);

    // Handle mouse down event
    const handleMouseDown = (event) => {
        setIsDragging(true);
        setLastMouseX(event.clientX);
        setLastMouseY(event.clientY);
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse move event
    const handleMouseMove = (event) => {
        if (isDragging) {
            const deltaX = event.clientX - lastMouseX;
            const deltaY = event.clientY - lastMouseY;

            setRotateY((prevRotateY) => prevRotateY + deltaX * 0.5); // Adjust sensitivity
            setRotateX((prevRotateX) => prevRotateX - deltaY * 0.5); // Adjust sensitivity

            setLastMouseX(event.clientX);
            setLastMouseY(event.clientY);
        }
    };

    // Update cube's transform style
    useEffect(() => {
        const cube = cubeRef.current;
        if (cube) {
            cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        // Add mouse move and mouse up event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [rotateX, rotateY, isDragging]);

    return (
        <div
            className="cube"
            ref={cubeRef}
            onMouseDown={handleMouseDown}
        >
            <div className="face front">Front</div>
            <div className="face back">Back</div>
            <div className="face left">Left</div>
            <div className="face right">Right</div>
            <div className="face top">Top</div>
            <div className="face bottom">Bottom</div>
            {/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
        </div>
        
    );
};

export default Anim;
