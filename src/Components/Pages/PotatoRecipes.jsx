import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link for routing
import './PotatoRecipes.css';
// Import images
import Gimage13 from '../../assets/1.jpg'; // Main image
import Gimage14 from '../../assets/2.jpg'; // Image 2
import Gimage15 from '../../assets/3.jpg'; // Image 3
import Gimage16 from '../../assets/5.jpg'; // Image 4
import Gimage17 from '../../assets/4.jpg'; // Image 5
import Gimage18 from '../../assets/6.jpg'; // Image 6
import Gimage20 from '../../assets/reci.jpg'; // Image 6

import Scroll from './scroll';

const PotatoRecipes = () => {
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
      <h2></h2>
      <p></p>
      <p></p>

      <div className="rechero-section">
      <div className="rechero-image-section">
        <img src={Gimage20} alt="Potato Recipes" className="rechero-image" />
      </div>
      <div className="rechero-text-section">
        <h1>Potato Recipes</h1>
      </div>
    </div>


{/* Potato Recipes Introduction Section */}
<div className="recdes-section">
  <div className="recdes-content">
    <h2 className="sourcing-section">Introduction to Potato Recipes</h2>
    <p>
      Potatoes are one of the most versatile and widely consumed vegetables worldwide. From simple mashed potatoes to elaborate baked dishes, the humble potato can be transformed into a variety of mouth-watering recipes. Whether you're craving crispy fries, creamy soups, or hearty casseroles, potatoes can be the star of any meal. Their mild flavor and starchy texture allow them to complement any cuisine, making them a staple in many households.
    </p>
    <p>
      Here, we share some of the most delicious and popular potato recipes that are sure to please any palate. With endless cooking methods—from roasting and boiling to frying and grilling—there's no limit to the number of ways you can enjoy potatoes.
    </p>
  </div>
</div>


      {/* Sourcing Content */}
      <div className="sourcing-section">

        <h2>Explore Our Delicious Potato Recipes!</h2>
      </div>

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

export default PotatoRecipes;