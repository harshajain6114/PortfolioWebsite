import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div id="contact">
      <div className="contact-page">
        <h1 className="contact-title">CONTACT ME</h1>
        <div className="contact-cards">
          <div className="contact-card">
            <h2>Email</h2>
            <p><i className="fas fa-envelope"></i> 
              <a href="mailto:harshajain6114@gmail.com" className="email-link">harshajain6114@gmail.com</a>
            </p>
          </div>
          <div className="contact-card">
            <h2>Phone</h2>
            <p><i className="fas fa-phone"></i> +91 9822******</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default ContactPage;


