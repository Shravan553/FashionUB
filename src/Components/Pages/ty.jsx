import React from 'react';
import './ty.css'; // Importing the same CSS file
import { Link } from 'react-router-dom';
import tre from '../../assets/tyimage1.jpg'; // Import the main image

const Ty = () => {
    return (
        <div className='about'> {/* Changed from ty-section to about */}
            <div className="about-left">
                <img src={tre} alt="Types of Potatoes" className='about-img' />
            </div>
            <div className="about-right">
                <h3>TYPES OF POTATOES</h3>
                <h2>Explore Our Premium Potato Varieties</h2>
                <p>
                    AGPotato offers a variety of premium potato types suited for all needs. Our <strong>3797</strong> variety is prized for its high yield and adaptability across regions. The <strong>302 Hybrid</strong> is known for its disease resistance and ideal chip-making quality. <strong>Chipsona 2001</strong> is specially cultivated for producing crispy, golden chips with minimal oil absorption. The <strong>Mohan</strong> and <strong>Kyathi</strong> varieties are versatile, with excellent texture for boiling, frying, or baking. <strong>Jyothi</strong> and <strong>Hasan Potatoes</strong> are favored for their smooth texture and delicious flavor, perfect for a range of culinary applications.
                </p>
                
                <Link to="/TypesOfPotatoes">
                    <button className="know-more-btn">Know More</button>
                </Link>
            </div>
        </div>
    );
};

export default Ty;
