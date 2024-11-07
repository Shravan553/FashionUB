import React, { useRef, useState } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateForm = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setError({
          ...error,
          name: /^[A-Za-z\s]+$/.test(value) ? "" : "Only alphabetic characters are allowed.",
        });
        break;
      case "email":
        setError({
          ...error,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address.",
        });
        break;
      case "phone":
        setError({
          ...error,
          phone: /^\d{10}$/.test(value) ? "" : "Please enter a valid 10-digit phone number.",
        });
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure there are no errors before sending the email
    if (!error.name && !error.email && !error.phone) {
      emailjs
        .sendForm(
          'service_cfixr9o', // Replace with your EmailJS service ID
          'template_r6qs79j', // Replace with your EmailJS template ID
          formRef.current,
          'L8En_cO-RON3rVcq7' // Replace with your EmailJS user ID
        )
        .then(
          () => {
            setResult('Message sent successfully!');
          },
          (error) => {
            setResult('Message sending failed. Please try again.');
          }
        );

      e.target.reset();
    } else {
      setResult("Please fix the errors in the form.");
    }
  };

  return (
    <footer className="footer">
      {/* Contact Form */}
      <div className="footer-contact-form">
        <h2>Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={validateForm}
          />
          {error.name && <p className="form-error">{error.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={validateForm}
          />
          {error.email && <p className="form-error">{error.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={validateForm}
          />
          {error.phone && <p className="form-error">{error.phone}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
          <p className="form-result">{result}</p>
        </form>
      </div>

      {/* Footer Details */}
      <div className="footer-details">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a market leader in the potato industry, offering sustainable and innovative products.
            Our goal is to bridge the gap between producers and consumers.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/AboutUS">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/Contact1">Contact Us</a></li>
            <li><a href="/Gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Email: info@agpotato.com</p>
          <p>Phone: +1 800 123 4567</p>
          <p>Address: World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka 560055, IN</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Agpotato. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
