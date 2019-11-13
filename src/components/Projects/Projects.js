import React from 'react'

import calculator from '../../img/projects/before/calculator.png'
import pokedexapp from '../../img/projects/before/pokedexapp.png'

export default function Projects() {
    return (
        <div className="projects-section">
            <div className="project">
                <div className="project-img">
                    <img
                        src={calculator}
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
                    />
                </div>
            </div>
        </div>
    )
}
