import React from 'react';
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">Feel free to get in touch with me 👇</p>

        <div className="contact-grid">
          {/* Chap qism */}
          <div className="contact-info">
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <p>Samarkand, Uzbekistan</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="icon" />
              <p>sayyorbekxoliqov@gmail.com</p>
            </div>
            <div className="info-box">
              <FaPhoneAlt className="icon" />
             <a href="tel:+998979359707">+998 97 935 97 07</a>

            </div>
            <div className="info-box">
              <FaTelegramPlane className="icon" />
              <a href="https://t.me/Khalikov_Salih" target="_blank" rel="noreferrer">
                @sayyorbekdev
              </a>
            </div>
          </div>

          {/* O'ng qism - Forma */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
