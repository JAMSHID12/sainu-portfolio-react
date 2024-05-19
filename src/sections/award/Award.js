import React from "react";
import './Award.css'
import { awards } from "../../data/Data";

export default function Award() {
    return (
        <div>
            <section class="section awards" id="awards">
                <div class="container text-center">
                    <p class="section-subtitle">What I Achieve ?</p>
                    <h6 class="section-title mb-4">Awards</h6>
                    <div class="row mb-3">
                        {awards.map(award => (
                            <div class="col-md-6 award-img-div mb-3" id="award_1">
                                <a href="#award_1" class="award-card">
                                    <img src={award.path} class="award-card-img"
                                        alt="" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
