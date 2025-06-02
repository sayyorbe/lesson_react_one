import React from "react";
// ? css import
import "./about.css";

// ? img
import profilePic from "../../assets/my-photo.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src={profilePic} alt="Sayyorbek" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I’m Sayyorbek, a passionate Frontend Developer with over 2 years of
            professional experience. I specialize in building modern,
            responsive, and user-friendly web applications using React, Tailwind
            CSS, and other cutting-edge technologies.
          </p>
          <p>
            Throughout my  career, I have successfully delivered multiple
            projects, ensuring clean code, performance optimization, and
            seamless user experience.
          </p>

          <a href="/cv.pdf" download className="btn primary-btn">
            Download CV
          </a>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
