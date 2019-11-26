import React from 'react'

import crescent from '../../img/crescent.png'

export default function Navbar({ showNavbar, screenWidth }) {
    const navbarClasses = (showNavbar ? 'navbar' : 'navbar hide' )

    return (
        <nav>
            <div 
                className={navbarClasses}>
                <div className="navbar-logo">
                    <img src={crescent} alt=""/>
                    {screenWidth >= 768 ? <h1>JakubMoryc</h1> : null}
                </div>
                <div className="navbar-links">
                    <a className="navbar-links-item" href="#jumbotron-section">
                        About me
                    </a>
                    <a className="navbar-links-item" href="#projects-section">
                        My Projects
                    </a>
                    <a className="navbar-links-item" href="#contact-section">
                        Contact me
                    </a>
                </div>
            </div>
        </nav>
    )
}
