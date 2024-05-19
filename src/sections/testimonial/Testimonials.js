import React, { useState } from 'react';
import { testimonial } from '../../data/Data';
import './Testimonials.css'

export default function Testimonial() {

    const [getCurrentUser, setCurrentUser] = useState(testimonial[0]);
    const [currentIndex, setcurrentIndex] = useState(1);
    const handlePrev = () => {
        var index =  currentIndex-1;
        setcurrentIndex(index);
        setCurrentUser(testimonial[index])
    };
    const handleNext = () => {
        setcurrentIndex(currentIndex+1);
        setCurrentUser(testimonial[currentIndex])

    };

    const isFirstItemVisible = currentIndex === 0;
    const isLastItemVisible = currentIndex === testimonial.length;

    return (
        <div>
            <h2>{currentIndex}</h2>
            <section class="section awards" id="awards">
                <div class="container text-center">
                    <p class="section-subtitle">What I Achieve ?</p>
                    <h6 class="section-title mb-4">Awards</h6>
                    <div className='row testimonial-card '>
                        <div className='col-md-5 col-sm-12 testimonial-section'>
                            <div className="testimonial-image">
                                <img src={getCurrentUser.path}/>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-12 testimonial-section'>
                            <div className="testimonial-details ">
                                <p className='about'> "{getCurrentUser.about}"</p>
                                <div className='mb-4' >
                                    <div className='fullName'>
                                        {getCurrentUser.name}
                                    </div>
                                    <div className='position'>
                                        {getCurrentUser.position}
                                    </div>
                                </div>
                                <div class="arrow-buttons" >
                                    <button type="button" class="btn" disabled={isFirstItemVisible} onClick={() => handlePrev()}>
                                        <i class="fas fa-arrow-left" ></i>
                                    </button>

                                    <button type="button" class="btn " disabled={isLastItemVisible} onClick={() => handleNext()}>
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>



    );
}