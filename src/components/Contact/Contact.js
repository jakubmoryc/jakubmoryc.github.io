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
                    - moryckuba@gmail.com
                </div>
                <div className="contact-section-contact">
                    <div className="contact-section-contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    - 511 625 146
                </div>
                <div className="contact-section-contact">
                    <div className="contact-section-contact-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    - Jakub Moryc
                </div>
            </div>
        </section>
    )
}
