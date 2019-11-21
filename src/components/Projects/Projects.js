import React from 'react'

import calculator from '../../img/projects/before/calculator.png'
import pokedexapp from '../../img/projects/before/pokedexapp.png'
import nodejs from '../../img/projects/before/nodejs.png'
import pokelangapi from '../../img/projects/before/pokelang-api.png'

export default function Projects() {
    return (
        <section className="projects-section">
            <div className="project">
                <div className="project-img">
                    <img
                        src={calculator}
                        alt=""
                    />
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    2
                </div>
                <div className="project-img">
                    <img
                        src={pokedexapp}
                        alt=""
                    />
                </div>
            </div>
            <div className="project">
                <div className="project-img">
                    <img
                        src={nodejs}
                        alt=""
                    />
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    2
                </div>
                <div className="project-img">
                    <img
                        src={pokelangapi}
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
