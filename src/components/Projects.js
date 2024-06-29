import React from 'react';
import './Projects.css';
import snapshareLogo from '/home/harsha/Desktop/En-Portfolio/harshapf/src/images/snap.png';
import ttsLogo from '/home/harsha/Desktop/En-Portfolio/harshapf/src/images/tts.png';
import portfolioLogo from '/home/harsha/Desktop/En-Portfolio/harshapf/src/images/pw1png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            logo: snapshareLogo,
            name: "SnapShare",
            year: "2023",
            description: "SnapShare is a decentralized photo sharing app built on the Ethereum blockchain using React. Users can upload photos which get stored in a decentralized manner.",
            skills: "React, Ethereum Blockchain, IPFS, Solidity"
        },
        {
            id: 2,
            logo: ttsLogo,
            name: "Text-to-Speech Converter",
            year: "2022",
            description: "Text-to-Speech Converter is a Python application that converts text into spoken audio. It works on all operating systems and supports multiple languages.",
            skills: "Python, Text-to-Speech (TTS) Libraries, Cross-platform Development"
        },
        {
            id: 3,
            logo: portfolioLogo,
            name: "Portfolio Website",
            year: "2021",
            description: "This portfolio website showcases my skills, projects, and experience. It is built using React and includes sections such as education, projects, and contact information.",
            skills: "React, HTML/CSS, JavaScript"
        }
    ];

    return (
        <div id="projects" className="projects-section">
            <h2 className="projects-heading">MY PROJECTS</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-logo">
                            <img src={project.logo} alt={`${project.name} Logo`} />
                        </div>
                        <div className="project-info">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-year">{project.year}</p>
                        </div>
                        <div className="project-details">
                            <p className="project-description">{project.description}</p>
                            <p className="project-skills">{project.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
