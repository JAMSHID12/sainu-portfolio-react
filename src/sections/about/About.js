import React from "react";
import './About.css'
import profileImage from '../../assets/images/sainu.svg'


export default function About() {
    return (
        <div class="about-section">
            <div class="about-left">
                <div className="row name-position" >
                    <div className="col-md-12 name">
                        I am Sainu k
                    </div>
                    <div className="col-md-12 position" >
                        a <strong className="gradient-text"> UX Lead</strong>
                    </div>
                </div>

                <p className="description"> I'm a Lead UX/UI designer With a 10+ years of experience in B2B, B2C, ERP
                    mobile, and web applications, coupled with a <strong>Master's degree in product
                        design from Coventry University United kingdom.</strong>  I am proud to have
                    received 4 UX/UI Design awards from 3 reputed fortune 500 companies</p>
                <div class="row phone-email">
                    <div class=" col-xl-6 col-lg-8 col-md-10 col-sm-6 email">
                        <p> sainumechpd@gmail.com</p>
                    </div>
                    <div class="col-xl-6 col-lg-8 col-md-10 col-sm-6 phone">
                        <p> +91-7760540078</p>
                    </div>
                </div>
                <div className=" dowloadcv-button">
                    <button className="btn browse-portfolio">Browse Porfolio</button>
                    <button className="btn download-cv">Download CV</button>
                </div>
                <div className="follow-me">
                    <p>Follow me : </p>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-behance"></i>
                    <i class="fab fa-dribbble"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
            <div class="about-right">
                <img src={profileImage} alt="Image" />
            </div>
        </div>
    );
}


