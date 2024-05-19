import React from "react";
import './Portfolio.css'
import { projects } from "../../data/Data";
import { Link } from "react-router-dom";


export default function Portfolio() {

    

    const linkAddress = ['', '/portfolio/eot-camp-director-app', '/portfolio/eka-portfolio-app', '/portfolio/eot-staff-portfolio-app',
        '/portfolio/oprex-eln-app', '/portfolio/little-brahma-hire-app', '/portfolio/clear-subtitle-app', '/portfolio/alga-energy-app', '/portfolio/pressure-yokogawa-app',
        '/portfolio/twaddan-car-wash-app', '/portfolio/groom-hr-managment-app', '/portfolio/bigmenu-grocery-app', '/portfolio/little-brahma-ecommerce-app'];

    return (
        <section id="portfolio" class="section portfolio">
            <div class="container text-center">
                <p class="section-subtitle">Check My Wonderful Works.</p>
                <h6 class="section-title mb-4">Portfolio</h6>

                <div class="row">
                    {
                        projects.map(project => (
                            <div class="col-md-4" key={project.id}>
                                <div className='img-wrapper' >
                                   <img src={project.path} alt="" />
                                   
                                   <Link to={linkAddress[project.id ]}>
                                       <div class="overlay">
                                           <div class="overlay-infos" key={project.id}>
                                               <h5>{project.name}</h5>
                                           </div>
                                       </div>
                                   </Link>
                                   
                               </div>
                            </div>
                        ),)
                    }
                </div>
            </div>
        </section>
    );
}

