import React from "react";
import './Education.css'
import { education } from "../../data/Data";

export default function Education() {
    return(
        <div>
            <ol class="c-stepper">
                {education.map(edu => (
                    <li class="c-stepper__item">
                        <div class="c-stepper__content">
                            <div className="education_header">
                                <div className="education_sub_header">
                                    <div className="cource" >{edu.course}</div>
                                    
                                </div>
                                <div className="year" >{edu.year}</div>
                                <h6>{edu.univercity}</h6>
                                <p >{edu.about}</p>
                            </div>
                        </div>
                    </li>

                ))}

            </ol>
        </div>
    );
}