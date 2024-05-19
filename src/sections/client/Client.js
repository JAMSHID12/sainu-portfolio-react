import { clients } from "../../data/Data";
import './Client.css'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Client() {

    const options = {
        items: 9, // Set the default number of items to show
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    };

    return (
        <div>
            <section id="clients" class="section clients">
                <div class="container text-center">
                    <p class="section-subtitle">Collaborations ?</p>
                    <h6 class="section-title mb-3">Clients</h6>
                </div>
                <div className="container">
                    <OwlCarousel className="owl-theme" {...options}>
                        {clients.map(client => (
                            <div className="img-item" key={client.id}>
                                <img src={client.path} alt="brand-image" />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
        </div>
    );
}