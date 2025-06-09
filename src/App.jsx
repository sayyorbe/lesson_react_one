import React, { useState, useEffect } from 'react';
import Home from "./components/hero/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact';
import "./App.css";

function App() {
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
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Home isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Portfolio isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
}

export default App;
