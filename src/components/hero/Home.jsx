import React from "react";
import "./home.css";
import "../../App.css";

import { Github, Linkedin } from "lucide-react";
import { PiTelegramLogo, PiInstagramLogo } from "react-icons/pi";
import profileImg from "../../assets/my-photo-2.jpg";

const Home = ({ isDarkMode }) => {
  return (
    <section id="home" className={`hero ${isDarkMode ? "dark" : ""}`}>
      <div className="hero-content">
        {/* Matn qismi */}
        <div className="hero-text">
          <h1 className="title">
            Hi, I'm <span className="gradient-text">Sayyorbek</span>
          </h1>
          <h2 className="subtitle">Frontend Developer & UI Designer</h2>
          <p className="description">
            I create modern, responsive and beautiful web experiences. With 2+
            years of experience building interfaces with React, Tailwind and
            other modern tools.
          </p>

          {/* CTA tugmalar */}
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>
            <a href="/myInform.docx" download className="btn outline">
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className="social-icons">
            <a href="https://github.com/sayyorbe" target="_blank">
              <Github />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Linkedin />
            </a>
            <a
              href="https://t.me/Khalikov_Salih"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTelegramLogo className="font-size-25" />
            </a>
            <a
              href="https://instagram.com/khalikov_salih"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiInstagramLogo className="font-size-25" />
            </a>
          </div>
        </div>

        {/* Rasm qismi */}
        <div className="hero-image">
          <img src={profileImg} alt="Sayyorbek" />
        </div>
      </div>
    </section>
  );
};

export default Home;
