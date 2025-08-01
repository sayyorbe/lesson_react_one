import React, { useState, useEffect } from 'react';
import Home from "./components/hero/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact';
import "./App.css";
import "./I18"; // Sozlamalarni ishga tushurish
import { useTranslation } from "react-i18next";

function App() {

  // ? languages
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };



  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // 5 soniya

    return () => clearTimeout(timer); // cleanup
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      {showIntro ? (
       <div className="intro-screen">
    <div className="aurora"></div>
    <div className="particle-layer">
      <span className="p1" />
      <span className="p2" />
      <span className="p3" />
    </div>
    <div className="logo-container">
      <h1 className="text-glow">Sayyorbek Portfolio</h1>
      <p className="subtext">Frontend Developer</p>
    </div>
  </div>


      ) : (
        <>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} changeLanguage ={changeLanguage } t={t} />
          <Home isDarkMode={isDarkMode} t={t} />
          <About isDarkMode={isDarkMode} t={t} />
          <Portfolio isDarkMode={isDarkMode} t={t} />
          <Skills isDarkMode={isDarkMode} t={t} />
          <Contact isDarkMode={isDarkMode} t={t} />
        </>
      )}
    </div>
  );
}

export default App;
