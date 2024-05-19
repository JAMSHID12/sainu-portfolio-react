import React from "react";
import './Experience.css'
import { experience } from "../../data/Data";


export default function Experience() {


    return (
        <div>
            <ol class="c-stepper">
                {experience.map(exp => (
                    <li class="c-stepper__item">
                        <div class="c-stepper__content">
                            <div className="experience_header">
                                <div className="container-header">
                                    <div className="content1" >{exp.position}</div>
                                    <div className="content2" >{exp.year}</div>
                                </div>
                                <p >{exp.company}</p>
                            </div>
                        </div>
                    </li>

                ))}

            </ol>
        </div>
    );
}