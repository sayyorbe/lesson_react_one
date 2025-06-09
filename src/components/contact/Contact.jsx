import React, { useState } from "react";
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [status, setStatus] = useState("");

  const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (text) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
      chat_id: chatId,
      text,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("✅ Xabaringiz yuborildi!");
        setFormData({ name: "", email: "", message: "", number: "" });
      } else {
        setStatus("❌ Xatolik yuz berdi.");
      }
    } catch (error) {
      setStatus("❌ Xatolik yuz berdi.");
      console.error("Telegram API error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      setStatus("⚠️ Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const text = `
📥 Yangi xabar:
👤 Ism: ${name}
📧 Email: ${email}
📱 Raqam: ${number}
💬 Xabar: ${message}
`;

    sendMessage(text);
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">Feel free to get in touch with me 👇</p>

        <div className="contact-grid">
          {/* Chap qism */}
          <div className="contact-info">
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <p className='font-size-20'>Samarkand, Uzbekistan</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="icon" />
              <p className='font-size-20'>sayyorbekxoliqov@gmail.com</p>
            </div>
            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <a className='font-size-20 blue contact-telephone' href="tel:+998979359707">+998 97 935 97 07</a>
            </div>
            <div className="info-box">
              <FaTelegramPlane className="icon" />
              <a href="https://t.me/Khalikov_Salih" className='font-size-20 blue contact-telegram' target="_blank" rel="noreferrer">
                @sayyorbekdev
              </a>
            </div>
          </div>

          {/* O'ng qism - Forma */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-btn">Send Message</button>
            {status && <p style={{ marginTop: '10px' }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
