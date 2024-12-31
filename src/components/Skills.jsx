import React from 'react';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';
import '../assets/style/Skills.css'; // Import the CSS file

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills">
                <div className="card">
                    <div className="card-icon">
                        <FaCode size={50} color="#ff6500" />
                    </div>
                    <h3 className="card-title">Front-End</h3>
                    <p className="card-description">Building responsive and interactive user interfaces using modern web.</p>
                    <div className="card-readmore">
                        <span>Read More</span>
                        <span className="arrow">→</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <FaPaintBrush size={50} color="#ff6500" />
                    </div>
                    <h3 className="card-title">UI/UX Design</h3>
                    <p className="card-description">Designing user-centric interfaces with a focus on aesthetics and usability.</p>
                    <div className="card-readmore">
                        <span>Read More</span>
                        <span className="arrow">→</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <FaServer size={50} color="#ff6500" />
                    </div>
                    <h3 className="card-title">Back-End </h3>
                    <p className="card-description">Creating robust and scalable server-side applications and APIs.</p>
                    <div className="card-readmore">
                        <span>Read More</span>
                        <span className="arrow">→</span>
                    </div>
                </div>
            </div>

            <div className="experience-section">
                <div className="experience-number">
                    <h1 className="big-number">12</h1>
                    <p className="years-text">YEARS</p>
                </div>
                <div className="landscape-cards">
                    <div className="landscape-card">
                        <h1 className="landscape-number">60+</h1>
                        <p className="landscape-text">Clients</p>
                    </div>
                    <div className="landscape-card">
                        <h1 className="landscape-number">08</h1>
                        <p className="landscape-text">Years Experience</p>
                    </div>
                    <div className="landscape-card">
                        <h1 className="landscape-number">122+</h1>
                        <p className="landscape-text">Complete Projects</p>
                    </div>
                    <div className="landscape-card">
                        <h1 className="landscape-number">10</h1>
                        <p className="landscape-text">Achievements</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;