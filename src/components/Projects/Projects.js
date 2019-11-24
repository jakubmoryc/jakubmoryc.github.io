import React from 'react'

import calculator from '../../img/projects/before/calculator.png'
import pokedexapp from '../../img/projects/before/pokedexapp.png'
import nodejs from '../../img/projects/before/nodejs.png'
import pokelangapi from '../../img/projects/before/pokelang-api.png'

export default function Projects() {

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    const handleMouseEnter = (e) => {
        e.target.closest(".project-img").querySelector('img').classList.add('hover') // Add a nearest img's element "hover" class
    }

    const handleMouseLeave = (e) => {
        e.target.closest(".project-img").querySelector('img').classList.remove('hover') // Remove a nearest's img element "hover" class
    }

    return (
        <section className="projects-section" id="projects-section">
            <div className="project">
                <div className="project-img">
                    <img
                        src={calculator}
                        alt=""
                        id="lol1"
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-globe"></i>
                                Launch the site
                            </button>
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-code"></i>
                                See code on GitHub
                            </button>
                        </div>
                    </div>
                </div>
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>Calculator</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>A simple calculator app built with React.js.<br/> 
                           Fully responsive and mobile friendly.
                        </p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-html5"></i>
                            HTML
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-css3-alt"></i>
                            CSS
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-js"></i>
                            JavaScript
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React.js
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-github"></i>
                            GitHub
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>Pokédex Languages</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>Ever wondered how your favourite Pokémon was named in French? Or maybe German?<br/> 
                           This app allows you to see Pokémon names in different languages.<br/> 
                           Built with React.js and Bootstrap and it uses a local JavaScript library.
                        </p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-html5"></i>
                            HTML
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-css3-alt"></i>
                            CSS
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-js"></i>
                            JavaScript
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-bootstrap"></i>
                            Bootstrap
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React.js
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-github"></i>
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="project-img">
                    <img
                        src={pokedexapp}
                        alt=""
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-globe"></i>
                                Open the site
                            </button>
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-code"></i>
                                See code on GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-img">
                    <img
                        src={nodejs}
                        alt=""
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-globe"></i>
                            </button>
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>PokéLANG API</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>
                            A simple REST API built with Express.js that allows you to fetch Pokémon names in different languages in JSON format.<br/>
                            Built with Node.js, Express.js and MongoDB.
                        </p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-js"></i>
                            JavaScript
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-node-js"></i>
                            Node.js
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-node-js"></i>
                            Express.js
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fas fa-database"></i>
                            MongoDB
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>PokéLANG API Documentation</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>
                            Based on API above, this site describes the API and lets you demo it.<br/>
                            Built with React.js, React Router and also with SASS.
                        </p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-html5"></i>
                            HTML
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-css3-alt"></i>
                            CSS
                        </div>
                        <div className="project-desc-tags-tag">
                        <i class="fab fa-sass"></i>
                            SASS
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-js"></i>
                            JavaScript
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React.js
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React Router
                        </div>
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-github"></i>
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="project-img">
                    <img
                        src={pokelangapi}
                        alt=""
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fas fa-globe"></i>
                            </button>
                            <button 
                                onClick={() => {handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {handleMouseEnter(e)}}
                                onMouseLeave={(e) => {handleMouseLeave(e)}}
                            >
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
