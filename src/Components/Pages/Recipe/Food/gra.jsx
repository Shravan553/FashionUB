import React, { useEffect } from 'react';

import './gra.css';
import Navbar1 from '../../Navbar/Navbar1';
import Footer from '../../../Footer/Footer';
import granulesImage from '../../../../assets/gra.webp'; // Update with the correct image path

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

const Gra = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    return (
        <section>
            {/* Hero Section */}
           

            {/* Product Information Section */}
            <div className="granules-container">
                <Navbar1 />
                <h1 className="granules-title">Potato Granules</h1>
                <div className="granules-info">
                    <img src={granulesImage} alt="Potato Granules" className="granules-image" />
                    <div className="granules-description">
                        <p>
                            Potato granules are a dehydrated potato product that is used widely in food manufacturing 
                            and home cooking. They are made by cooking, mashing, and drying potatoes into fine granules, 
                            which can then be rehydrated and used in a variety of dishes. Potato granules are an excellent 
                            thickening agent and are commonly used in instant mashed potatoes, soups, sauces, and snack foods.
                        </p>
                        <p>
                            Due to their long shelf life and convenience, potato granules are often preferred in large-scale 
                            food production and by home cooks looking for quick and easy meal solutions.
                        </p>
                    </div>
                </div>

                <h2 className="granules-subtitle">Nutritional Information (Per 100g)</h2>
                <div className="granules-nutrition">
                    {[
                        { label: 'Calories', value: '360 kcal' },
                        { label: 'Fat', value: '0.5g' },
                        { label: 'Sodium', value: '25mg' },
                        { label: 'Carbohydrates', value: '81g' },
                        { label: 'Fiber', value: '6g' },
                        { label: 'Sugars', value: '1g' },
                        { label: 'Protein', value: '8g' },
                        { label: 'Potassium', value: '1100mg' },
                    ].map((nutrient, index) => (
                        <div className="granules-nutrient" key={index}>
                            <p><strong>{nutrient.label}:</strong> {nutrient.value}</p>
                        </div>
                    ))}
                </div>

                <h2 className="granules-subtitle">Key Benefits</h2>
                <ul className="granules-benefits">
                    <li>Long shelf life and easy storage</li>
                    <li>Convenient and quick to prepare</li>
                    <li>Retains nutritional value</li>
                    <li>Ideal for use in soups, sauces, and snacks</li>
                    <li>Cost-effective for bulk production</li>
                </ul>

                <h2 className="granules-subtitle">Usage Ideas</h2>
                <ul className="granules-usage">
                    <li>Instant mashed potatoes</li>
                    <li>Thickening agent for soups and gravies</li>
                    <li>Base ingredient in potato-based snacks</li>
                    <li>Added to bread and bakery products for moisture</li>
                    <li>Used in baby food production</li>
                </ul>

                <h2 className="granules-subtitle">How to Prepare</h2>
                <p className="granules-text">
                    Potato granules can be rehydrated easily by adding hot water or milk. Stir the granules into the liquid until 
                    the desired consistency is achieved. Adjust seasoning to taste. They can also be added directly to soups or sauces 
                    for thickening without the need for prior rehydration.
                </p>
            </div>
{/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
            {/* Footer Section */}
            <Footer />
        </section>
    );
};

export default Gra;
