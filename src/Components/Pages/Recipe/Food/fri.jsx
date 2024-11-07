import React, { useEffect } from 'react';

import './fri.css';
import Navbar1 from '../../Navbar/Navbar1';
import Footer from '../../../Footer/Footer';
import friesImage from '../../../../assets/fri2.png';
import immuneIcon from '../../../../assets/well.png'; // Import your health benefit icon
// import howToPrepareIcon from '../../../../assets/prepare.png'; // Example icon for how to prepare

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

const Fri = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    return (
        <section>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Potato Byproducts</h1>
                    <p>Explore a variety of products made from potatoes, from flour to snacks!</p>
                </div>
            </div>

            {/* French Fries Nutrition Facts Section */}
            <div className="fries-container">
                <Navbar1 />
                <h1 className="fries-title">French Fries Nutrition Facts</h1>
                <div className="fries-image-info">
                    <img src={friesImage} alt="French Fries" className="fries-image" />
                    <div className="fries-text-container">
                        <p className="fries-text">
                            French fries are a popular side dish in fast-food restaurants, burger joints, and homes across the U.S. This salty snack can be made from scratch using fresh potatoes and your choice of oil and seasoning, but many home cooks use frozen fries instead.
                        </p>
                        <p className="fries-text">
                            While potatoes—the primary ingredient in french fries—are a lower-calorie, low-fat food, french fries are usually high in fat, calories, and sodium. If you include them in your diet, it's smart to consume french fries in moderation or to use a cooking method that reduces the fat and sodium content.
                        </p>
                    </div>
                </div>

                <h2 className="fries-subtitle">Nutritional Information (Per 100g Serving)</h2>
                <div className="fries-nutrition-info">
                    <div className="fries-nutrient">
                        <p><strong>Calories:</strong> 196 kcal</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Fat:</strong> 13.1g</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Sodium:</strong> 141mg</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Carbohydrates:</strong> 18.5g</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Fiber:</strong> 1.6g</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Sugars:</strong> 1.3g</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Protein:</strong> 1.9g</p>
                    </div>
                    <div className="fries-nutrient">
                        <p><strong>Vitamin C:</strong> 9.7mg</p>
                    </div>
                </div>

                <h2 className="fries-subtitle">Health Benefits</h2>
                <ul className="fries-benefits-list">
              
                        <img src={immuneIcon} alt="Immune Support" style={{ width: '40px', marginRight: '10px' }} />
                       
               
                    <li> May support healthy immune function</li>
                    <li>May improve early brain development</li>
                    <li>May reduce oxidative stress</li>
                    <li>May promote weight maintenance</li>
                    <li>Low-cost source of nutrients</li>
                </ul>

                <h2 className="fries-subtitle">Varieties of French Fries</h2>
                <ul className="fries-benefits-list">
                    {[
                        { name: 'Frozen French Fries', info: '224 calories, 15g fat, 295mg sodium' },
                        { name: 'McDonald\'s French Fries', info: '323 calories, 15.5g fat, 189mg sodium' },
                        { name: 'Burger King French Fries', info: '280 calories, 12.5g fat, 279mg sodium' },
                        { name: 'Restaurant French Fries', info: '289 calories, 14g fat, 357mg sodium' },
                    ].map((variety, index) => (
                        <li key={index}>
                            <strong>{variety.name}:</strong> {variety.info}
                        </li>
                    ))}
                </ul>

                <h2 className="fries-subtitle">Adverse Effects</h2>
                <p className="fries-text">
                    When consumed in moderation, french fries are not likely to cause adverse effects in most people. However, over-consumption may lead to bloating from excess sodium intake.
                </p>

                <h2 className="fries-subtitle">How to Prepare</h2>
                <div className="fries-preparation">
                    {/* <img src={howToPrepareIcon} alt="How to Prepare" style={{ width: '40px', marginRight: '10px' }} /> */}
                    <p className="fries-text">
                        The best way to enjoy french fries and gain the health benefits of potatoes is to make them at home in the oven or an air fryer. This way, you can control the ingredients and eliminate excess fat and sodium.
                    </p>
                </div>
                <p className="fries-text">
                    Use russet potatoes, keep the skins for extra fiber, and try baking at 425°F for 30-40 minutes for a crispy finish!
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

export default Fri;
