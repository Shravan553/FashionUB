import React, { useEffect } from 'react';

import './flo.css'; // Separate CSS file for Potato Flour
import Navbar1 from '../../Navbar/Navbar1';
import Footer from '../../../Footer/Footer';
import potatoFlourImage from '../../../../assets/flo.webp';
import cookingIcon from '../../../../assets/cooking.png'; // Icon for cooking

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Flor = () => {


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    return (
        <section>
            {/* Header Section */}
            <div className="flo-header-section">
                <Navbar1 />
                <div className="flo-header-content">
                    <h1>Potato Flour</h1>
                    <p>Discover the versatility and health benefits of potato flour!</p>
                </div>
            </div>

            {/* Potato Flour Details */}
            <div className="flo-potato-flour-container">
                <h2 className="flo-section-title">What is Potato Flour?</h2>
                <div className="flo-product-info">
                    <img src={potatoFlourImage} alt="Potato Flour" className="flo-product-image" />
                    <p className="flo-product-description">
                    Potato flour is made from whole peeled potatoes that are cooked, 
                    dried, and ground into a fine powder. It is a versatile ingredient widely used in gluten-free baking,
                     offering a unique texture and flavor that enhances various recipes. Unlike potato starch, 
                     which is more refined and often used for thickening, potato flour retains more of the potato's 
                     nutrients and fiber, making it a healthier choice.

<br></br>
<p className="flo-product-description">In gluten-free baking, potato flour acts as a binding agent,
 helping to improve the structure of baked goods. It provides moisture, 
 structure, and a soft texture, making it an excellent addition to breads, muffins, 
 pancakes, and cakes. When combined with other gluten-free flours, such as almond or rice flour, 
 it can help achieve a better rise and crumb.
 </p>
         </p>           
                </div>

                {/* Nutritional Information */}
                <h2 className="flo-section-title">Nutritional Information (Per 100g Serving)</h2>
                <div className="flo-nutrition-info">
                    {[ 
                        { label: 'Calories', value: '357 kcal' },
                        { label: 'Fat', value: '0.3g' },
                        { label: 'Sodium', value: '55mg' },
                        { label: 'Carbohydrates', value: '83g' },
                        { label: 'Fiber', value: '5.9g' },
                        { label: 'Sugars', value: '3.5g' },
                        { label: 'Protein', value: '6.9g' },
                        { label: 'Potassium', value: '1460mg' },
                    ].map((nutrient, index) => (
                        <div className="flo-nutrient" key={index}>
                            <p><strong>{nutrient.label}:</strong> {nutrient.value}</p>
                        </div>
                    ))}
                </div>

                {/* Health Benefits Section */}
                <h2 className="flo-section-title">Health Benefits</h2>
                <ul className="flo-benefits-list">
                    <li>Gluten-free and suitable for people with celiac disease</li>
                    <li>Rich in fiber, promoting digestive health</li>
                    <li>Low in fat and calories</li>
                    <li>Contains high amounts of potassium for heart health</li>
                    <li>Great source of vitamins and minerals</li>
                </ul>

                {/* Usage and Preparation */}
                <h2 className="flo-section-title">How to Use Potato Flour</h2>
                <div className="flo-usage-section">
                    <img src={cookingIcon} alt="Cooking Icon" className="flo-usage-icon" />
                    <p className="flo-usage-text">
                        Potato flour is excellent for adding moisture to baked goods like breads, muffins, and pancakes. It can 
                        also be used as a thickening agent for soups, sauces, and gravies. Use it in combination with other 
                        gluten-free flours for the best results. Try adding 1-2 tablespoons to your favorite recipes for a 
                        smooth, soft texture.
                    </p>
                </div>

                {/* Potential Drawbacks */}
                <h2 className="flo-section-title">Potential Drawbacks</h2>
                <p className="flo-drawbacks-text">
                    While potato flour is a nutritious and versatile ingredient, it is high in carbohydrates, which may not 
                    be suitable for low-carb diets. Also, it absorbs a lot of liquid, so be cautious when using it as a 
                    thickener, as it can make your dishes gummy if overused.
                </p>
            </div>
            {/* Scroll to Top Button */}
            <button onClick={scrollToTop} className="flo-scroll-to-top">
                Scroll to Top
            </button>
            {/* Footer Section */}
            <Footer />
        </section>
    );
};

export default Flor;
