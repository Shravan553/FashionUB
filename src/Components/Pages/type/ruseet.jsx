import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './russet.css';

import cookingGif from '../../../assets/cooking.gif';
// Importing images
import rus1 from '../../../assets/rus1.jpg';
import rus2 from '../../../assets/2001.webp';
import rus3 from '../../../assets/rus3.jpg';
import bakedImage from '../../../assets/baked.png';  // Add your image for baked
import friedImage from '../../../assets/fried.png';  // Add your image for fried
import mashedImage from '../../../assets/mashed.png'; // Add your image for mashed
import sautéedImage from '../../../assets/sauted.png'; // Add your image for sautéed

const Russet = () => {
  return (
    <div className="classic-2001-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Classic 2001</h1>
          <h2 className="subtitle">Potatoes</h2>
          <p className="tagline">Time-tested quality in every bite.</p>
          <p className="description">
            Classic 2001 potatoes are celebrated for their consistent quality and exceptional taste. Their balanced texture and classic flavor make them a top choice for traditional recipes.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Move the image section here */}
        <div className="image-content">
          <img src={rus2} alt="Classic 2001 Potato" className="potato-image" />
        </div>
      </main>

      {/* Normal Image Gallery Section */}
      {/* <section className="image-gallery">
        <img src={rus1} alt="Delicious Baked Classic 2001" />
        <img src={rus2} alt="Crispy Fried Classic 2001" />
        <img src={rus3} alt="Mashed Classic 2001 Delight" />
      </section> */}

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Classic medium to large size, round to oval shape, with a lightly textured tan skin and creamy white flesh.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Smooth, slightly firm; holds shape well in cooking, making it versatile for various dishes.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Rich, earthy, and mildly sweet; an ideal choice for bringing out comforting flavors.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={bakedImage} alt="Baked" className="best-served-image" /> Baked or Roasted
          </li>
          <li>
            <img src={sautéedImage} alt="Pan Fried" className="best-served-image" /> Pan Fried or Sautéed
          </li>
          <li>
            <img src={mashedImage} alt="Mashed" className="best-served-image" /> Mashed
          </li>
          <li>
            <img src={friedImage} alt="Fried" className="best-served-image" /> Fried
          </li>
        </ul>
      </section>

      <section className="fun-gif-section">
        <h2>Watch How to Prepare</h2>
        <Link to="/rost"> {/* Wrap the GIF in a Link */}
          <img src={cookingGif} alt="Cooking Classic 2001 Potatoes" className="cooking-gif" />
        </Link>
      </section>
    </div>
  );
};

export default Russet;
