import React, { useState } from "react";
import './Form.css'

export default function Form() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted:", formData.name, formData.email);
    // Send data to server (e.g., using fetch or an API library)
  };

  return (
    <div>
      <section class="section contact" id="contact">
        <div class="container text-center">
          <p class="section-subtitle">How can you communicate?</p>
          <h6 class="section-title mb-5">Contact Me</h6>

          <div className="row">
            <div className="col-md-5">
              <div className="left-content">
                <div className="left-heading">We’d love to hear from you</div>
                <div className="contact-details">
                  <p className="phone-no">+91-7760540078</p>
                  <p className="email-id">sainumechpd@gmail.com</p>
                </div>
                <div className="address-form">
                  <h5>Address</h5>
                  <p className="address-form">
                    0th Floor, Campus 5B, RMZ Ecoworld, Sarjapur Marathahalli
                    Outer Ring Road, Devarabeesanahalli, Bengaluru, Karnataka,
                    560103
                  </p>
                </div>
                <div className="form-icons">
                  Follow me :     <a href="https://www.linkedin.com/in/sainu123" class="link"><i
                        class="fab fa-brands fa-linkedin-in"></i></a>
                <a href="https://dribbble.com/sainumechpd" class="link"><i class="fab fa-brands fa-dribbble"></i></a>
                <a href="https://www.behance.net/sainumechpd" class="link"><i class="fab fa-behance"></i></a>
                <a href="https://www.instagram.com/sainu_uxdesign/" class="link"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="right-content">
                <form onSubmit={handleSubmit}>
                  <div class="form-group input-row">
                    <div class="form-data">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Tom"
                        required
                      />
                    </div>
                    <div class="form-data">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="William"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group input-row">
                    <div class="form-data">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>
                    <div class="form-data">
                      <label for="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="about">About</label>
                    <textarea
                      as="textarea"
                      rows={1}
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    variant="primary"
                    type="submit"
                    className="btn send-messagebtn"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}