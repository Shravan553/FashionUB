import React from 'react';
import { Link } from 'react-router-dom';
import './hi.css';
// Import the main image
import historyImage from '../../assets/hi.png';
const Hi = () => {
    return (
        <div className="history-info-section">
            <div className="history-image-section">
                <img src={historyImage} alt="Potato History" className="history-main-image" />
            </div>
            <div className="history-content-section">
                <h2 className="history-title">History of Potatoes</h2>
                <div className="history-highlight-bar"></div>
                <p className="history-section-text">
                    Potatoes have a long and fascinating history, stretching back over 7,000 years to the high altitudes of the Andes Mountains in South America, where indigenous communities first domesticated them. They were a staple crop for the Incas, who cultivated hundreds of varieties suited to different microclimates and altitudes. 
                    <br /><br />
                    When Spanish explorers encountered the potato in the 16th century, they brought it back to Europe, marking a turning point in global agriculture. However, as they discovered its adaptability to diverse climates and recognized its high nutritional value.
                    <br /><br />
                    Today, potatoes continue to be celebrated worldwide for their versatility and nutrition, having evolved from a South American staple to a global comfort food, supporting both tradition and innovation in countless culinary applications.
                </p>
                <div className="history-button-container">
                    <Link to="/potato-history" className="history-button learn-more">LEARN MORE</Link>
                </div>
            </div>
        </div>
    );
};
export default Hi