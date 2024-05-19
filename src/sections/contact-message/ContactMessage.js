import React from "react";
import './ContactMessage.css'



export default function ContactMessage() {
    return (
        <div>
            <section class="section contact-me" id="contact-me">
                <div class="container text-center text-fsm-let">
                    <div class="row align-items-center zoom-section" id="target-section">
                        <div class="col-sm offset-md-1 mb-4 mb-md-0">
                            <h6 class="title text-light">Want to see more works ?</h6>
                            <p class="m-0 text-light">Always feel free to contact</p>
                        </div>
                        <div class="col-sm offset-sm-2 offset-md-3">
                            <a onclick="navigateTo('contact')" href="#contact"><button
                                class="btn btn-lg btn-light rounded">Contact me</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}