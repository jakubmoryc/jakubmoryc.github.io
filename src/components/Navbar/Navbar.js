import React from 'react'

export default function Navbar({ showNavbar }) {
    const navbarClasses = (showNavbar ? `navbar` : 'navbar hide' )
    return (
        <nav>
            <div 
                className={navbarClasses}>
                <div className="navbar-logo">
                    <h1>JakubMoryc</h1>
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
