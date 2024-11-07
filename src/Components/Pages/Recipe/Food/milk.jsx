import React, { useEffect } from 'react';
import './milk.css';
import Navbar1 from '../../Navbar/Navbar1';
import Footer from '../../../Footer/Footer';
import potatoMilkImage from '../../../../assets/milk.webp'; // Image of potato milk

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

const Milk = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    return (
        <section>
            {/* Header Section */}
            <header className="header-section">
                <Navbar1 />
                <h1 className="header-title"></h1>
                <p className="header-subtitle"></p>
            </header>

            {/* Product Information Section */}
            <div className="product-info">
                <img src={potatoMilkImage} alt="Potato Milk" className="product-image" />
                <div className="product-details">
                    <h2>What is Potato Milk?</h2>
                    <p>
                        Potato milk is a creamy and delicious non-dairy milk made from potatoes. 
                        It’s a great option for those who are lactose intolerant or looking to reduce their dairy intake. 
                        Rich in nutrients, potato milk can be used in smoothies, coffee, cooking, and baking.
                    </p>
                </div>
            </div>

            {/* Nutritional Facts Section */}
            <h2 className="section-title">Nutritional Facts (Per 1 Cup)</h2>
            <div className="nutrition-info">
                {[
                    { label: 'Calories', value: '100 kcal' },
                    { label: 'Fat', value: '3g' },
                    { label: 'Carbohydrates', value: '18g' },
                    { label: 'Sugars', value: '1g' },
                    { label: 'Protein', value: '2g' },
                    { label: 'Calcium', value: '300mg' },
                    { label: 'Vitamin D', value: '2.5µg' },
                ].map((nutrient, index) => (
                    <div className="nutrient" key={index}>
                        <strong>{nutrient.label}:</strong> {nutrient.value}
                    </div>
                ))}
            </div>

            {/* Health Benefits Section */}
            <h2 className="section-title">Health Benefits</h2>
            <ul className="benefits-list">
                <li>Rich in vitamins and minerals</li>
                <li>Low in calories and fat</li>
                <li>Dairy-free and lactose-free</li>
                <li>Supports digestive health</li>
            </ul>

            {/* Recipes Section */}
            <h2 className="section-title">Delicious Potato Milk Recipes</h2>
            <div className="recipes">
                <h3>Potato Milk Smoothie</h3>
                <p>Blend potato milk with your favorite fruits for a creamy smoothie.</p>

                <h3>Potato Milk Pancakes</h3>
                <p>Use potato milk in pancake batter for fluffy, delicious pancakes.</p>

                <h3>Potato Milk Mashed Potatoes</h3>
                <p>Add potato milk for a creamy texture in your mashed potatoes.</p>
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

export default Milk;
