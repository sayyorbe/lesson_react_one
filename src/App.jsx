import Home from "./components/hero/Home";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact';
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
