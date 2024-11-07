import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react"; // Import icons from lucide-react
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ade24c1-436c-4a2e-a51b-25256e01974d"); // Replace with your access key

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset(); // Reset the form on success
      } else {
        console.log("Error", res);
        setResult(res.message); // Display error message
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again."); // Error handling
    }
  };

  return (
    <div className="con-container">
      <h2></h2>
      <div className="con-grid">
        <div className="con-card">
          <MapPin size={40} className="con-icon" />
          <h3>Address</h3>
          <h5>
            World Trade Centre, Unit No 2217,<br />
            22nd Floor, Malleshwaram (W),<br />
            Next Orion Mall, Bangalore, Karnataka 560055, IN
          </h5>
        </div>
        <div className="con-card">
          <Phone size={40} className="con-icon" />
          <h3>Contact Number</h3>
          <h5>95131 62555</h5>
        </div>
        <div className="con-card">
          <Mail size={40} className="con-icon" />
          <h5>Email Address</h5>
          <h5>anand@agpotato.com</h5>
        </div>
        <div className="con-card">
          <Globe size={40} className="con-icon" />
          <h3>Website</h3>
          <h5>www.agpotato.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;