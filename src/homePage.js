import React from 'react';
import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import HidenPortfolio from './sections/hidenPortfolio/HidenPortfolio';
import ContactMessage from './sections/contact-message/ContactMessage';
import SkillExperience from './sections/skill-experience/SkillExperience';
import Award from './sections/award/Award';
import Testimonial from './sections/testimonial/Testimonials';
import Client from './sections/client/Client';
import Form from './sections/form/Form';
import Footer from './sections/footer/Footer';

const urlParams = new URLSearchParams(window.location.search);
const password = urlParams.get('password');


const HomePage = () => (
  <div>
    <Navbar />
    <About />
    {password === "sainu" ? <Portfolio /> : <HidenPortfolio />}
    <ContactMessage />
    <SkillExperience />
    <Award />
    <Testimonial />
    <Client />
    <Form />
    <Footer />
  </div>

);

export default HomePage;