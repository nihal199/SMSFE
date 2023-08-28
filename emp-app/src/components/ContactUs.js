import React from 'react';
import './ContactUs.css'; // Import your custom CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to contact us using the information below:</p>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, City</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
