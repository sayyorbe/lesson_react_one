import React from "react";
// ? css import
import "./about.css";

// ? img
import profilePic from "../../assets/my-photo.jpg";

const About = ({isDarkMode, t}) => {
  return (
    <section id="about" className= {`about-section display ${isDarkMode ? "dark" : ""}`} >
      <div className="container about-container">
        <div className="about-image">
          <img src={profilePic} alt="Sayyorbek" />
        </div>
        <div className="about-content">
          <h2>{t("About Me")}</h2>

          <p>
           {t(" I’m Sayyorbek, a passionate Frontend Developer with over 2 years of professional experience. I specialize in building modern, responsive, and user-friendly web applications using React, TailwindCSS, and other cutting-edge technologies.")}
          </p>
          <p>
            {t("Throughout my  career, I have successfully delivered multiple projects, ensuring clean code, performance optimization, and seamless user experience.")}
          </p>

          <div className="box-bar display-flex">
            <div className="box">
              <h1 className="font-size-35">+2</h1>
              <p className="font-size-20">{t("Years of Experience")}</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+23</h1>
              <p className="font-size-20">{t("Happy Customers")}</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+5</h1>
              <p className="font-size-20">{t("Completed Projects")}</p>
            </div>
            <div className="box">
               <h1 className="font-size-35">+20</h1>
              <p className="font-size-20">{t("Total Students")}</p>
            </div>
          </div>

          <a href="/myInform.docx" download className="btn primary-btn">
           {t("Download CV")}
          </a>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
