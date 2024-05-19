import React from "react";
import { projects } from "../../data/Data";
import './HidenPortfolio.css'
import { Link } from "react-router-dom";

export default function HidenPortfolio() {

    const linkAddress = ['', '/portfolio/eot-camp-director-app', '/portfolio/eka-portfolio-app', '/portfolio/eot-staff-portfolio-app',  ];


    return (
        <>

            <section id="portfolio" class="section portfolio">
                <div class="container text-center">
                    <p class="section-subtitle">Check My Wonderful Works.</p>
                    <h6 class="section-title mb-4">Portfolio</h6>

                    <div class="row">
                        {projects.map(project => (

                            <div className="col-md-4" key={project.id}>
                                {

                                    project.id > 3 ? <div className='img-wrapper blur'>
                                        <img src={project.path} alt="" />

                                    </div> : <div className='img-wrapper' >

                                        <img src={project.path} alt="" />

                                        <Link to={linkAddress[project.id]}>
                                            <div class="overlay">
                                                <div class="overlay-infos" key={project.id}>
                                                    <h5>{project.name}</h5>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );

}