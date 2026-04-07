import React from "react";
import './About.css'
import profileImage from '../../assets/images/sainu.svg'
import cv from '../../assets/Sainu_Senior_UX_Product_Designer.pdf'


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

                <p className="description"> Senior Product Designer specialising in <strong>AI-native products, agentic UX, and design systems</strong> — 
                with 10+ years delivering measurable impact across Healthcare, Fintech, and B2B SaaS. 
                At Optum, reduced appointment booking drop-off by 28% through friction elimination. At EOT, 
                consolidated 5 screens into 1 unified dashboard — cutting task completion time by 48% and reducing 
                support dependency from 7 to 2 staff via strategic AI chatbot integration. Certified in AI 
                Governance, Prompt Engineering, and Generative AI. Recognised with 4 industry awards including 4 
                Optum Awards 2023 & 2026.</p>
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
                    <a href={cv} download>
                        <button className="btn download-cv">Download CV</button>
                    </a>
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
                <img src={profileImage} alt="Sainu - Web Developer" />
            </div>
        </div>
    );
}


