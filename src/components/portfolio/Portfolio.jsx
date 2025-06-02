import React from 'react'

// ? css
import './portfolio.css'

// ? img
import img_1 from '../../assets/my-photo.jpg'

// ? icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';



const projects = [
  {
    title: 'Netflix Clone',
    image: img_1,
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/your-name/netflix-clone',
    live: 'https://netflix-clone.example.com',
  },
  {
    title: 'E-commerce App',
    image: img_1,
    tech: ['Next.js', 'Stripe', 'Sanity'],
    github: 'https://github.com/your-name/ecommerce-app',
    live: 'https://ecommerce-app.example.com',
  },
  // ko'proq projectlar qo'shiladi
];


const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
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
