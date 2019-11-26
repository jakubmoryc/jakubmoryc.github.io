import React from 'react'

import calculator from '../../img/projects/before/calculator.png'
import pokedexapp from '../../img/projects/before/pokedexapp.png'
import nodejs from '../../img/projects/before/nodejs.png'
import pokelangapi from '../../img/projects/before/pokelang-api.png'

// TODO: make <Project> or <ProjectImg> Component

export default class Projects extends React.Component {

    handleClick = (url) => {
        window.open(url, '_blank')
    }

    handleMouseEnter = (e) => {
        if(this.props.screenWidth <= 1200) {
            return
        }
        e.target.closest(".project-img").querySelectorAll('button').forEach((element) => {
            element.classList.add('display')
        })
        e.target.closest(".project-img").querySelector('img').classList.add('hover') // Add a nearest img's element "hover" class
    }

    handleMouseLeave = (e) => {
        if(this.props.screenWidth <= 1200) {
            return
        }
        e.target.closest(".project-img").querySelectorAll('button').forEach((element) => {
            element.classList.remove('display')
        })
        e.target.closest(".project-img").querySelector('img').classList.remove('hover') // Remove a nearest's img element "hover" class
    }

    handleImgMouseEnter = (e) => {
        if(this.props.screenWidth <= 1200) {
            return
        }
        e.target.closest(".project-img").querySelectorAll('button').forEach((element) => {
            element.classList.add('display')
        })
        e.target.classList.add('hover')
    }

     handleImgMouseLeave = (e) => {
        if(this.props.screenWidth <= 1200) {
            return
        }
        e.target.closest(".project-img").querySelectorAll('button').forEach((element) => {
            element.classList.remove('display')
        })
        e.target.classList.remove('hover')
    }
    render() {
        return (
        <section className="projects-section" id="projects-section">
            <div className="project">
                <div className="project-img">
                    <img
                        src={calculator}
                        alt=""
                        onMouseEnter={(e) => {this.handleImgMouseEnter(e)}}
                        onMouseLeave={(e) => {this.handleImgMouseLeave(e)}}
                        className={this.props.screenWidth <= 1200 ? "hover" : ""}
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fas fa-globe"></i>
                                Launch the site
                            </button>
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
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
                        onMouseEnter={(e) => {this.handleImgMouseEnter(e)}}
                        onMouseLeave={(e) => {this.handleImgMouseLeave(e)}}
                        className={this.props.screenWidth <= 1200 ? "hover" : ""}
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fas fa-globe"></i>
                                Launch the site
                            </button>
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
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
                        onMouseEnter={(e) => {this.handleImgMouseEnter(e)}}
                        onMouseLeave={(e) => {this.handleImgMouseLeave(e)}}
                        className={this.props.screenWidth <= 1200 ? "hover" : ""}
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fas fa-globe"></i>
                                Launch the endpoint
                            </button>
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fab fa-github"></i>
                                See code on GitHub
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
                        onMouseEnter={(e) => {this.handleImgMouseEnter(e)}}
                        onMouseLeave={(e) => {this.handleImgMouseLeave(e)}}
                        className={this.props.screenWidth <= 1200 ? "hover" : ""}
                    />
                    <div className="project-img-buttons-wrapper">
                        <div className="project-img-buttons">
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fas fa-globe"></i>
                                Launch the site
                            </button>
                            <button 
                                onClick={() => {this.handleClick('https://www.google.com')}}
                                onMouseEnter={(e) => {this.handleMouseEnter(e)}}
                                onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                                className={this.props.screenWidth <= 1200 ? "display" : ""}
                            >
                                <i class="fab fa-github"></i>
                                See code on GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
}
