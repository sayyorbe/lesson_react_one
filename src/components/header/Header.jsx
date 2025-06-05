import { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import "./header.css";
import '../../App.css';
import { IoLanguageOutline } from "react-icons/io5";

function Header({isDarkMode, toggleDarkMode}) {
  const [active, setActive] = useState(true);

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ handleClick funksiyasi shu yerda bo'lishi kerak
  const handleClick = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header home-mode ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="display-flex container">
        <div className="font-size-20 logo blue">Sayyorbek.dev</div>

        <nav className="nav desktop-nav">
          <a className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')} href="#home">Home</a>
          <a className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')} href="#about">About</a>
          <a className={active === 'portfolio' ? 'active' : ''} onClick={() => handleClick('portfolio')} href="#portfolio">Portfolio</a>
          <a className={active === 'skills' ? 'active' : ''} onClick={() => handleClick('skills')} href="#skills">Skills</a>
          <a className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')} href="#contact">Contact</a>
        </nav>

        <div className="actions display-flex">
          <IoLanguageOutline onClick={() => setMenuOpen(false)} className='icon-btn black font-size-20' />

          <button onClick={toggleDarkMode} className="icon-btn black">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             {/* {isDarkMode ? 'Light Mode' : 'Dark Mode'} */}
          </button>

          <a href="#contact" className="cta-btn white">Hire Me</a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="background-minus-white mobile-nav">
          <a href="#home" onClick={() => { handleClick('home'); setMenuOpen(false); }}>Home</a>
          <a href="#about" onClick={() => { handleClick('about'); setMenuOpen(false); }}>About</a>
          <a href="#portfolio" onClick={() => { handleClick('portfolio'); setMenuOpen(false); }}>Portfolio</a>
          <a href="#skills" onClick={() => { handleClick('skills'); setMenuOpen(false); }}>Skills</a>
          <a href="#contact" onClick={() => { handleClick('contact'); setMenuOpen(false); }}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
