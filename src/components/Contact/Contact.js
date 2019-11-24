import React from 'react'

export default function Contact() {
    return (
        <section className="contact-section" id="contact-section">
            <h1>Contact me...</h1>
            <p>...and lets work together.</p>
            <div className="contact-section-contacts">
                <div className="contact-section-contact">
                    <div className="contact-section-contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    - <a href="mailto:moryckuba@gmail.com">moryckuba@gmail.com</a>
                </div>
                <div className="contact-section-contact">
                    <div className="contact-section-contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    - <a href="tel:511-625-146">511 625 146</a>
                </div>
                <div className="contact-section-contact">
                    <div className="contact-section-contact-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    - <a href="https://www.linkedin.com/in/jakub-moryc-9446b2198/" target="_blank" rel="noopener noreferrer">Jakub Moryc</a>
                </div>
            </div>
        </section>
    )
}
