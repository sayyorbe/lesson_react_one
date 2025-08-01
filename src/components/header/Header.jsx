import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import "./header.css";
import "../../App.css";
import { IoLanguageOutline } from "react-icons/io5";

import uzb from "../../assets/UZB.png";
import ru from "../../assets/RU.png";
import eng from "../../assets/ENG.png";




function Header({ isDarkMode, toggleDarkMode, changeLanguage, t  }) {



  const [active, setActive] = useState(true);

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ handleClick funksiyasi shu yerda bo'lishi kerak
  const handleClick = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ? open language modal
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <header className={`header home-mode ${isDarkMode ? "dark" : "light"}`}>
      <div className="display-flex container">
        <div className="font-size-20 logo blue">{t("Sayyorbek.dev")}</div>

        <nav className="nav desktop-nav">
          <a
            className={active === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
            href="#home"
          >
            
            {t("Home")}
          </a>
          <a
            className={active === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
            href="#about"
          >
            {t("About")}
          </a>
          <a
            className={active === "portfolio" ? "active" : ""}
            onClick={() => handleClick("portfolio")}
            href="#portfolio"
          >
            {t("Portfolio")}
          </a>
          <a
            className={active === "skills" ? "active" : ""}
            onClick={() => handleClick("skills")}
            href="#skills"
          >
            {t("Skills")}
          </a>
          <a
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
            href="#contact"
          >
            {t("Contact")}
          </a>
        </nav>

        <div className="actions  language-pos-rel display-flex">
          <IoLanguageOutline onClick={openModal}  className="icon-btn black font-size-20" />

      {isModalOpen && (
          <div className="languages">
            <button onClick={closeModal} className="language-x font-size-18">x</button>

            <div className="uzb-language language display-flex"  onClick={() => changeLanguage("uz")}>
              <img src={uzb} alt="" />
              <p>UZB</p>
            </div>

            <div className="ru-language language display-flex" onClick={() => changeLanguage("ru")}>
              <img src={ru} alt="" />
              <p>RU</p>
            </div>

            <div className="eng-language language display-flex" onClick={() => changeLanguage("en")}>
              <img src={eng} alt="" />
            <p>ENG</p>
            </div>
          </div>
           )}

          <button onClick={toggleDarkMode} className="icon-btn black">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          
          </button>

          <a href="#contact" className="cta-btn white">
            {t("Hire Me")}
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="background-minus-white mobile-nav">
          <a
            href="#home"
            onClick={() => {
              handleClick("home");
              setMenuOpen(false);
            }}
          >
            {t("Home")}
          </a>
          <a
            href="#about"
            onClick={() => {
              handleClick("about");
              setMenuOpen(false);
            }}
          >
            {t("About")}
          </a>
          <a
            href="#portfolio"
            onClick={() => {
              handleClick("portfolio");
              setMenuOpen(false);
            }}
          >
            {t("Portfolio")}
          </a>
          <a
            href="#skills"
            onClick={() => {
              handleClick("skills");
              setMenuOpen(false);
            }}
          >
            {t("Skills")}
          </a>
          <a
            href="#contact"
            onClick={() => {
              handleClick("contact");
              setMenuOpen(false);
            }}
          >
            {t("Contact")}
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
