import React from 'react';
import './Education.css';
import eduImage from '/home/harsha/Desktop/En-Portfolio/harshapf/src/images/edu.png';
import { FaGraduationCap, FaMedal, FaProjectDiagram } from 'react-icons/fa';

const Education = () => {
    return (
      <div id="education">
        <div className="education-section">
            <div className="education-content">
                <h2 className="education-heading">MY EDUCATION</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-year">2020</div>
                        <div className="timeline-details">
                            <h3><FaGraduationCap /> SSC [TVM School]</h3>
                            <p>• Top 10% of the class</p>
                            <p>• Science Club President</p>
                            <p>• Participated in National Science Fair</p>
                        </div>
                    </div>
                    <div className="timeline-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-year">2022</div>
                        <div className="timeline-details">
                            <h3><FaGraduationCap /> HSC [SMM College of Science]</h3>
                            <p>• Scored 90% in Physics</p>
                            <p>• Member of the Math Club</p>
                            <p>• Developed a project on Renewable Energy</p>
                        </div>
                    </div>
                    <div className="timeline-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-year">2026*</div>
                        <div className="timeline-details">
                            <h3><FaGraduationCap /> Bachelor of Technology in AI [JDCOEM]</h3>
                            <p>• Expected Graduation: 2026</p>
                            <p>• Dean's List</p>
                            <p>• Research Assistant in AI Lab</p>
                            <p>• Completed projects on Machine Learning and Data Analysis</p>
                        </div>
                    </div>
                    <div className="timeline-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="education-image">
                <img src={eduImage} alt="Education" />
            </div>
        </div>
      </div>
    );
}

export default Education;


