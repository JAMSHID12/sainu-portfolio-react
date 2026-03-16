import React, { useState, useEffect, useRef } from 'react';
import { testimonial } from '../../data/Data';
import './Testimonials.css';

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const slideInterval = useRef(null);

    const total = testimonial.length;
    const currentUser = testimonial[currentIndex];

    const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
    const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

    const startAutoSlide = () => {
        clearInterval(slideInterval.current);
        slideInterval.current = setInterval(goNext, 5000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(slideInterval.current);
    }, [total]);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        touchEndX.current = event.changedTouches[0].clientX;
        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (Math.abs(distance) < threshold) return;

        if (distance > 0) {
            goNext();
        } else {
            goPrev();
        }

        startAutoSlide();
    };

    return (
        <div>
            <section className="section awards" id="awards">
                <div className="container text-center">
                    <p className="section-subtitle">What Think Colleague About Me ?</p>
                    <h6 className="section-title mb-4">Testimonial</h6>
                    <div
                        className="row testimonial-card"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="col-md-5 col-sm-12 testimonial-section">
                            <div className="testimonial-image">
                                <img src={currentUser.path} alt={`${currentUser.name} testimonial photo`} />
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 testimonial-section">
                            <div className="testimonial-details">
                                <p className="about"> "{currentUser.about}"</p>
                                <div className="mb-4">
                                    <div className="fullName">
                                        {currentUser.name}
                                        <a
                                            href={currentUser.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="linkedin-link"
                                        >
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                    <div className="position">{currentUser.position}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
