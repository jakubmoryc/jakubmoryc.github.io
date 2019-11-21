import React from 'react'

import crescent from '../../img/crescent.png'

export default function Navbar({ showNavbar }) {
    const navbarClasses = (showNavbar ? 'navbar' : 'navbar hide' )

    return (
        <nav>
            <div 
                className={navbarClasses}>
                <div className="navbar-logo">
                    <h1>JakubMoryc</h1>
                </div>
                <div className="navbar-theme-switcher">
                    <button onClick={void(0)}>
                        <img src={crescent} alt=""/>
                    </button>
                </div>
                <div className="navbar-links">
                    <button className="navbar-links-item">
                        About me
                    </button>
                    <button className="navbar-links-item">
                        My Projects
                    </button>
                    <button className="navbar-links-item">
                        Contact me
                    </button>
                </div>
            </div>
        </nav>
    )
}
