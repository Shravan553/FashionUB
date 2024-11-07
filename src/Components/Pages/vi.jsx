import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link for routing
import './vi.css';
// Import images
import Gimage13 from '../../assets/1.jpg'; // Main image
import Gimage14 from '../../assets/2.jpg'; // Image 2
import Gimage15 from '../../assets/3.jpg'; // Image 3
import Gimage16 from '../../assets/5.jpg'; // Image 4
import Gimage17 from '../../assets/4.jpg'; // Image 5
import Gimage18 from '../../assets/6.jpg'; // Image 6
import Scroll from './scroll';

const Vi = () => {
  // Array of images with titles and corresponding routes
  const images = [
    { src: Gimage13, title: 'Roasted Potatoes', route: '/rost' },
    { src: Gimage14, title: 'Mashed Potatoes', route: '/Mash' },
    { src: Gimage15, title: 'French Fries', route: '/Fries' },
    { src: Gimage16, title: 'Potato Salad', route: '/Salad' },
    { src: Gimage17, title: 'Potato Soup', route: '/Soup' },
    { src: Gimage18, title: 'Potato Garlic Dish', route: '/Garlic' },
  ];

  return (
    <section className="recipes-section">
      

      {/* Sourcing Content */}
        <h2>Explore Our Delicious Potato Recipes!</h2>

      {/* Images Row */}
      <MDBRow className="sourcing-images">
        {images.map((image, index) => (
          <MDBCol key={index} size="6" sm="4" className="sourcing-image">
            <div className="image-container">
              <img src={image.src} alt={`Sourcing Potatoes ${index + 1}`} />
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <Link to={image.route} className="view-recipe-button">View Recipe</Link> {/* Link to recipe */}
              </div>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

  <Scroll/>
    </section>
  );
};

export default Vi;
