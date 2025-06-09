import React from 'react'

// ? css
import './portfolio.css'

// ? img
import img_1 from '../../assets/my-photo.jpg'
import tatLogo from '../../assets/hed_logo.svg'
import img_2 from '../../assets/telegramApp.png'
import img_3 from '../../assets/3-img-project.png'
import img_4 from '../../assets/softPoint.png'
import img_5 from '../../assets/MarceloPortfolio.png'
import img_6 from '../../assets/Quibleez.png'
import img_7 from '../../assets/instagram-clone.png'
// ? icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';



const projects = [
  {
    title: 'IT TAT web site',
    image: tatLogo,
    tech: ['React', 'VS code','Css'],
    github: 'https://github.com/sayyorbe/new_tech4.git',
    live: 'https://new-tech4-hdhh.vercel.app/',
  },
  {
    title: 'Telegram App',
    image: img_2,
    tech: ['React', 'VS code','Css' ],
    github: 'https://github.com/your-name/ecommerce-app',
    live: 'https://new-telegram-app-8kmi.vercel.app/',
  },
  {
    title: 'Your one stop Butdgeting tool',
    image: img_3,
    tech: ['Html', 'Css', 'JavaScript', 'VS Code'],
    github: 'https://github.com/Sayyorbek/responsive.git',
    live: 'https://main--prismatic-puppy-804035.netlify.app/',
  },
  {
    title: 'Soft Point',
    image: img_4,
    tech: ['Html', 'Css', 'VS Code'],
    github: 'https://github.com/Sayyorbek/25project.git',
    live: 'https://main--monumental-cajeta-8115e7.netlify.app/',
  },
  {
    title: 'Web portfolio',
    image: img_5,
    tech: ['Html', 'Css', 'VS Code'],
    github: 'https://github.com/Sayyorbek/loyiha.git',
    live: 'https://elaborate-sable-9d8292.netlify.app/',
  },
  
  {
    title: 'E-commerce App',
    image: img_6,
    tech: ['Html', 'Css', 'VS Code'],
    github: 'https://github.com/Sayyorbek/20.git',
    live: 'https://main--dulcet-klepon-d69ed4.netlify.app/',
  },
  {
    title: 'E-commerce App',
    image: img_7,
    tech: ['Next.js', 'Firebase (Auth + Firestore),', 'VS Code'],
    github: 'https://github.com/safak/youtube2022/tree/instagram',
    live: 'https://instagram-clone-react.vercel.app/',
  },

  // ko'proq projectlar qo'shiladi
];


const Portfolio = ({isDarkMode}) => {
  return (
    <section id="portfolio" className={`portfolio-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <h3 className="project-title">{project.title}</h3>
              <ul className="tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
