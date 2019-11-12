import React from 'react'

import crescent from '../../img/crescent.png'

export default function Navbar({ showNavbar }) {
    const navbarClasses = (showNavbar ? `navbar` : 'navbar hide' )
    return (
        <nav>
            <div 
                className={navbarClasses}>
                <div className="navbar-logo">
                    <h1>JakubMoryc</h1>
                </div>
                <div className="navbar-theme-switcher">
                    <img src={crescent} alt=""/>
                </div>
                <div className="navbar-links">
                    <div className="navbar-links-item">
                        About
                    </div>
                    <div className="navbar-links-item">
                        My Projects
                    </div>
                    <div className="navbar-links-item">
                        Contact me
                    </div>
                </div>
            </div>
        </nav>
    )
}
