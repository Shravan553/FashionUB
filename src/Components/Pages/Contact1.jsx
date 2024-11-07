import React, { useRef, useState } from 'react';
import './Contact1.css';
import emailjs from 'emailjs-com';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import insta_icon from '../../assets/insta-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';
import linkedin_icon from '../../assets/linkedin-icon.png';
import medium_icon from '../../assets/medium-icon.png';
import Contactusformimage1 from '../../assets/Contactusformimage1.jpg';
import Footer from "../../Components/Footer/Footer";



const Contact1 = () => {
  const form = useRef();
  const [result, setResult] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_cfixr9o',
      'template_r6qs79j',
      form.current,
      'L8En_cO-RON3rVcq7'
    )
    .then(
      () => {
        console.log('SUCCESS!');
        setResult('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        setResult('Message sending failed. Please try again.');
      }
    );
  

    e.target.reset();
  };

  return (
    <div className='Somecontainer'>
      
        
      <Footer/>
    </div>
  );
}

export default Contact1;
