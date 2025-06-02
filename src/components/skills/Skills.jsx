import React from 'react';
import './skills.css';
// / icons
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";





const skills = [
  { name: 'Html5', icon: <FaHtml5 />, level: 95 },
  { name: 'Css', icon: <FaCss3Alt />, level: 90 },
  { name: 'Bootstrap', icon: <RiBootstrapLine />, level: 80 },
  { name: 'Scss', icon: <FaSass />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Figma', icon: <PiFigmaLogoDuotone />, level: 75 },
];


const Skills = () => {
 return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills
