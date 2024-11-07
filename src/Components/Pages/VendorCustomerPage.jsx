import React, { useState } from 'react';
import './VendorCustomerPage.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

// Import images for each potato variant
import marketImage from '../../assets/bands.jpg';
import potatoImage1 from '../../assets/3797.jpeg';
import potatoImage2 from '../../assets/302.jpeg';
import potatoImage3 from '../../assets/Chipsona.jpeg';
import potatoImage4 from '../../assets/2001.jpeg';
import potatoImage5 from '../../assets/Mohan.jpeg';
import potatoImage6 from '../../assets/kyathi.jpeg';
import potatoImage7 from '../../assets/jyothi.jpeg';
import potatoImage8 from '../../assets/hasan.jpeg';

const VendorCustomerPage = () => {
  const potatoVariants = [
    { name: '3797', description: 'A high-yield variety.', link: '/P3797', image: potatoImage1 },
    { name: '302 Hybrid', description: 'Resistant to diseases.', link: '/P302Hybrid', image: potatoImage2 },
    { name: 'Chipsona', description: 'Popular for its taste.', link: '/Chipsona', image: potatoImage3 },
    { name: '2001', description: 'Ideal for making chips.', link: '/P2001', image: potatoImage4 },
    { name: 'Mohan', description: 'Known for its quality.', link: '/Mohan', image: potatoImage5 },
    { name: 'Kyathi', description: 'Excellent cooking variety.', link: '/Kyathi', image: potatoImage6 },
    { name: 'Jyothi', description: 'Great for frying.', link: '/Jyothi', image: potatoImage7 },
    { name: 'Hasan Potatoes', description: 'Well-suited for various recipes.', link: '/Hasanpotatoes', image: potatoImage8 },
  ];

  const [selectedPotato, setSelectedPotato] = useState(null);

  const handleBuyClick = (potato) => {
    setSelectedPotato(potato);
  };

  const closePopup = () => {
    setSelectedPotato(null);
  };

  const handleCall = () => {
    window.location.href = 'tel:7676075092'; // Replace with the actual phone number
  };

  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in buying ${selectedPotato.name}.`;
    const phoneNumber = '+917676075092'; // Replace with the actual WhatsApp phone number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleShare = () => {
    const shareMessage = `Check out this potato variant: ${selectedPotato.name}!\nDetails: ${window.location.origin}${selectedPotato.link}`;
    
    if (navigator.share) {
      // Use the Web Share API if supported
      navigator.share({
        title: `Potato Variant: ${selectedPotato.name}`,
        text: shareMessage,
        url: window.location.origin + selectedPotato.link,
      })
      .then(() => console.log('Share successful!'))
      .catch((error) => console.log('Share failed:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(shareMessage).then(() => {
        alert('Shareable link copied to clipboard!');
      }).catch((error) => {
        console.error('Could not copy text: ', error);
      });
    }
  };

  return (
    <div className="container">
      <img src={marketImage} alt="Marketplace" className="market-image" />
      <h1 className="headingpot">Select the potato image that you want to buy and sell.</h1>

      <div className="potato-images-container">
        {potatoVariants.map((potato) => (
          <div className="potato-item" key={potato.name}>
            <div className="potato-info-row">
              <img src={potato.image} alt={potato.name} className="potato-image" />
              <div className="potato-details">
                <h3 className="potato-name">{potato.name}</h3>
                <p className="potato-description">{potato.description}</p>
              </div>
              <div className="potato-buttons">
                <button className="buy-button" onClick={() => handleBuyClick(potato)}>Buy</button>
                <button className="sell-button" onClick={() => handleBuyClick(potato)}>Sell</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPotato && (
  <div className="popup-overlay">
    <div className="popup">
      <h2>Contact Seller for {selectedPotato.name}</h2>
      <p className="owner-name">{selectedPotato.description}</p> {/* Added description for more details */}
      <div className="owner-details">
        <p className="owner-name"><strong>Owner's Name : Shravya Shetty</strong></p>
        <p className="owner-phone"><strong>Phone Number : 7676075092</strong> </p>
        <p className="owner-email"><strong>Email : shravyashetty159@gmail.com</strong></p>
      </div>
      <div className="contact-buttons">
        <button className="call-button" onClick={handleCall}>Call</button>
        <button className="whatsapp-button" onClick={handleWhatsApp}>WhatsApp</button>
        <button className="share-button" onClick={handleShare}>Share</button>
      </div>
      <button className="close-popup" onClick={closePopup}>Cancel</button>
    </div>
  </div>
)}


<Footer/>
    </div>
  );
};

export default VendorCustomerPage;
