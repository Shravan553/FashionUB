import React from "react";
import Slider from "react-slick";
import "./TypesOfPotatoes.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
// Import your potato images
import russetImage from "../../assets/prime.jpg";
import fingerImage from "../../assets/hybrid.jpeg";
import yellowImage from "../../assets/yellow.jpg";
import redImage from "../../assets/2001.webp";
import purpleImage from "../../assets/chipsona.jpg";
import alooDhokla from "../../assets/russet1.png";
import alooBukharaRed from "../../assets/red1.png";
import alooKesar from "../../assets/yellow1.png";
import alooBukharaWhite from "../../assets/white1.png";
import alooChipsona from "../../assets/purple1.png";
import fingerlingPotatoes from "../../assets/finger1.png";
import diversityIcon from "../../assets/diversity.png";
import flavorIcon from "../../assets/flavor.png";
import nutritionIcon from "../../assets/nutrit.png";
import cookingIcon from "../../assets/cooking.png";
import mohanImage from "../../assets/mohan.png";
import kyathiImage from "../../assets/kyati.jpg";
import hasanImage from "../../assets/hasan.jpeg";
import jyothiImage from "../../assets/jyothi.webp";

import tyImage from "../../assets/websiteimage3.jpg";

import Footer from "../Footer/Footer";
import Scroll from './scroll';
// Slider data
const potatoTypes = [
  {
    title: "Prime 3797",
    description: "Great for baking and mashing due to their fluffy texture.",
    imageUrl: russetImage, // Replace with the actual image URL for Prime 3797
    link: "/finger",
  },
  {
    title: "Hybrid 302",
    description: "Small, waxy potatoes perfect for roasting and salads.",
    imageUrl: fingerImage, // Replace with the actual image URL for Hybrid 302
    link: "/red",
  },
  {
    title: "Chipsona Delight",
    description: "Specially grown for making crispy chips!",
    imageUrl: purpleImage, // Replace with the actual image URL for Chipsona Delight
    link: "/chip",
  },
  {
    title: "Classic 2001",
    description: "Best for soups and salads due to their firm texture.",
    imageUrl: redImage, // Replace with the actual image URL for Classic 2001
    link: "/russet",
  },
  {
    title: "Mohan Special",
    description: "A versatile potato good for various dishes.",
    imageUrl: mohanImage, // Replace with the actual image URL for Mohan Special
    link: "/Yellow",
  },
  {
    title: "Kyathi Gold",
    description: "A buttery-textured potato that's great for all kinds of dishes.",
    imageUrl: kyathiImage, // Replace with the actual image URL for Kyathi Gold
    link: "/kyathi",
  },
  {
    title: "Jyothi Star",
    description: "Excellent for frying and making curries.",
    imageUrl: jyothiImage, // Replace with the actual image URL for Jyothi Star
    link: "/jyothi",
  },
  {
    title: "Hasan Best",
    description: "Ideal for making delicious mashed potatoes.",
    imageUrl: hasanImage, // Replace with the actual image URL for Hasan Best
    link: "/hasan",
  },
];
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const TypesOfPotatoes = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <div className="potato-slider-containers">
  {/* Hero Section */}
  <div className="tyhero-section">
    <img
      src={tyImage} // Replace with your actual image URL
      alt="Types of Potatoes"
      className="tyhero-image"
    />
    <div className="tyhero-overlay">
      <h1 className="header-titles" >Types of Potatoes</h1>
    </div>
  </div>

  <br></br>

  <section class="potato-types-section">
  <div class="potato-types-container">
    <h2 class="potato-types-heading">Types of Potatoes</h2>
    <p class="potato-types-paragraph">
      Potatoes come in many varieties, each with its unique characteristics. Whether you're looking for a potato that's perfect for baking, frying, or mashing, there's a type that suits your needs. From waxy to starchy, the types of potatoes offer endless possibilities for delicious dishes.
    </p>
  </div>
</section>

<br>
</br>
  <div className="potato-cards-container">
      {potatoTypes.map((potato, index) => (
        <div key={index} className="potato-card">
          <img
            src={potato.imageUrl}
            alt={potato.title}
            className="potato-card-image"
          />
          <div className="potato-card-info">
            <h3>{potato.title}</h3>
            <p>{potato.description}</p>
            <button onClick={() => scrollToSection(potato.link)} className="know-more-btn">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
     
      {/* Additional Content */}
      <div className="additional-content">
        <div className="centered-section">
          <h2>How Many Types of Potatoes Are There?</h2>
          <p>
            There are more than 200 varieties of potatoes sold throughout the United States. Each of these varieties fits into one of seven potato type categories: russet, red, white, yellow, blue/purple, fingerling, and petite.
            Potatoes can be used to fuel the body and the brain throughout the day. Easy to prepare and pair with a variety of cuisines, potatoes lend themselves to convenient meal prep to fuel you throughout the week.
            They can be whipped together with a few healthy ingredients and ready to serve under 30 minutes for a delicious meal.
            These versatile tubers can be transformed into countless dishes, from creamy mashed potatoes to crispy French fries, and are an essential ingredient in many culinary traditions worldwide.
          </p>
        </div>
        
   {/* Potato Varieties Section */}
<section className="potato-varieties">
  {/* Russet Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>Russet Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          Russet potatoes are known for their fluffy texture and are great for baking and mashing. They are rich in carbohydrates and provide a good source of dietary fiber.
        </p>
       
        {/* <Link to="/russet" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>

  {/* Red Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>Red Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          Red potatoes are firm and waxy, making them ideal for roasting, boiling, and adding to salads. Their skin adds a pop of color to dishes.
        </p>
       
        {/* <Link to="/red" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>

  {/* Yellow Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>Yellow Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          Yellow potatoes are rich, creamy, and slightly sweet. They hold their shape when boiled and are great for mashing and roasting.
        </p>
        
        {/* <Link to="/yellow" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>

  {/* White Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>White Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          White potatoes have a mild, earthy flavor and are great for grilling, roasting, and sautéing. Their thin skin and creamy flesh make them a popular choice for potato salads.
        </p>
        {/* <Link to="/white" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>

  {/* Purple Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>Purple Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          Purple potatoes have a deep color and nutty flavor, making them an eye-catching addition to meals. They're best for roasting, mashing, or baking.
        </p>
        {/* <Link to="/purple" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>

  {/* Fingerling Potatoes Card */}
  <div className="potato-card">
    <div className="potato-content">
      <div className="potato-front">
        <h3>Fingerling Potatoes</h3>
      </div>
      <div className="potato-back">
        <p>
          Fingerling potatoes are small, elongated, and firm. They're ideal for roasting and serving as a side dish, with a waxy texture that holds up well in cooking.
        </p>
        {/* <Link to="/fingerling" className="learn-more">Learn More</Link> */}
      </div>
    </div>
  </div>
</section>

        
        </div>
        <Scroll/>
        <Footer />
    </div>
  );
};
export default TypesOfPotatoes;