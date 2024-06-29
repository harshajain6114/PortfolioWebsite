import React from 'react';
import './About.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfessionalPic from '/home/harsha/Desktop/En-Portfolio/harshapf/src/images/about.jpg'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-image">
                    <img src={ProfessionalPic} alt="Professional Profile" />
                </div>
                <div className="about-text">
                    <h1>ABOUT ME</h1>
                    <p>
                    Hello, I am Harsha. Welcome to my portfolio! I am an aspiring full stack web developer specializing in the MERN stack. Currently, I am an engineering student passionate about creating dynamic and responsive web applications. I enjoy solving complex problems and am always eager to learn new technologies. In my free time, I work on personal projects and stay updated with the latest industry trends. Let's connect and bring innovative ideas to life! </p>
                    <div className="social-icons">
                        <a href="https://x.com/HarshaJain_0611" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/harsha-jain-b1859b287/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/Harshajain0611" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
