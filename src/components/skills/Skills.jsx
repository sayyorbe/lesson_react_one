import React, { useState } from 'react';
import './skills.css';

// Hard skill iconlari
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";

// Soft skill iconlari
import { FaComments, FaUsers, FaLightbulb, FaClock, FaBrain, FaPuzzlePiece } from 'react-icons/fa6';

const hardSkills = [
  { name: 'Html5', icon: <FaHtml5 />, level: 95 },
  { name: 'Css', icon: <FaCss3Alt />, level: 90 },
  { name: 'Bootstrap', icon: <RiBootstrapLine />, level: 80 },
  { name: 'Scss', icon: <FaSass />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Figma', icon: <PiFigmaLogoDuotone />, level: 75 },
];

const softSkills = [
  { name: 'Communication', icon: <FaComments />, level: 90 },
  { name: 'Teamwork', icon: <FaUsers />, level: 85 },
  { name: 'Creativity', icon: <FaLightbulb />, level: 80 },
  { name: 'Time Management', icon: <FaClock />, level: 85 },
  { name: 'Problem Solving', icon: <FaPuzzlePiece />, level: 80 },
  { name: 'Critical Thinking', icon: <FaBrain />, level: 75 },
];

const Skills = ({isDarkMode})  => {
  const [activeTab, setActiveTab] = useState('hard');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const currentSkills = activeTab === 'hard' ? hardSkills : softSkills;

  return (
    <section id="skills" className={`skills-section  ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="Types-of-skills display-flex">
          <h1
            className={activeTab === 'hard' ? 'tab active-tab' : 'tab'}
            onClick={() => {
              setActiveTab('hard');
              setActiveIndex(null);
            }}
          >
            Hard Skills
          </h1>
          <h2
            className={activeTab === 'soft' ? 'tab active-tab' : 'tab'}
            onClick={() => {
              setActiveTab('soft');
              setActiveIndex(null);
            }}
          >
            Soft Skills
          </h2>
        </div>

        <div className="skills-grid">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {skill.icon && <div className="skill-icon">{skill.icon}</div>}
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
};

export default Skills;
