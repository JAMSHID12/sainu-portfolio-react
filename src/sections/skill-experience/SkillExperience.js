
import './SkillExperience.css'
import { skills } from "../../data/Data";
import Experience from "../experience/Experience";
import React, { useState } from 'react';
import Education from '../education/Education';

export default function SkillExperience() {

    const [showExperience, setExperience] = useState(true);
    const [showEducation, setEducation] = useState(false);
    const [activeButton, setActiveButton] = useState('experience');

    const handleButton1Click = () => {
        setExperience(true);
        setEducation(false);
        setActiveButton('experience');
    };

    const handleButton2Click = () => {
        setExperience(false);
        setEducation(true);
        setActiveButton('education');
    };

    const activeStyle = {
        color: "#fff",
        backgroundColor: "#60159B"
    };

    const inactiveStyle = {
        color: "#60159B",
        backgroundColor: "#fffF",
        border : "1px solid black"
    };

    return (
        <div>
            <section id="skill-experience" class="section skill-experience">
                <div class="container text-center">
                    <p class="section-subtitle">My expertise in UX.</p>
                    <h6 class="section-title mb-4">Skills & Experience</h6>

                    <div className="row">
                        <div className="col-md-6 skill-section">
                            <h3 className="skill-header">Skill</h3>
                            {skills.map(skill => (
                                <div class="barWrapper" key={skill.id}>
                                    <span class="progressText">{skill.name}</span>
                                    <div class="single-progress-txt">
                                        <div class="progress">
                                            <div class="percent"> </div>
                                        </div>
                                        <h3>{skill.percent}</h3>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col-md-6">
                            <div className='education-section'>
                                <div className='button-div btn-group'>
                                    <button className='btn'
                                        style={activeButton === 'experience' ? activeStyle : inactiveStyle}
                                        onClick={handleButton1Click}
                                    >Experience</button>
                                    <button className='btn' style={activeButton === 'education' ? activeStyle : inactiveStyle} onClick={handleButton2Click}>Education</button>
                                </div>

                                {showExperience && (
                                    <Experience />
                                )}

                                {showEducation && (
                                    <Education />
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}