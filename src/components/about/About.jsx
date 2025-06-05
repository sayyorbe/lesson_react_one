import React from "react";
// ? css import
import "./about.css";

// ? img
import profilePic from "../../assets/my-photo.jpg";

const About = ({isDarkMode}) => {
  return (
    <section id="about" className= {`about-section display ${isDarkMode ? "dark" : ""}`} >
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

          <div className="box-bar display-flex">
            <div className="box">
              <h1 className="font-size-35">+2</h1>
              <p className="font-size-20">Years of Experience</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+23</h1>
              <p className="font-size-20">Happy Customers</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+5</h1>
              <p className="font-size-20">Completed Projects</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+20</h1>
              <p className="font-size-20">Total Students</p>
            </div>
          </div>

          <a href="/myInform.docx" download className="btn primary-btn">
            Download CV
          </a>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
