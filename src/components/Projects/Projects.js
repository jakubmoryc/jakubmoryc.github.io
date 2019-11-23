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
                    <div className="project-desc-title">
                        <h1>Title</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris maximus, placerat dui ac, facilisis nulla. Pellentesque consequat, erat sed rutrum suscipit, nisi lectus cursus sem,</p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React
                        </div>
                        <div className="project-desc-tags-tag">
                            tag 2
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>Title</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris maximus, placerat dui ac, facilisis nulla. Pellentesque consequat, erat sed rutrum suscipit, nisi lectus cursus sem,</p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React
                        </div>
                        <div className="project-desc-tags-tag">
                            tag 2
                        </div>
                    </div>
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
                    <div className="project-desc-title">
                        <h1>Title</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris maximus, placerat dui ac, facilisis nulla. Pellentesque consequat, erat sed rutrum suscipit, nisi lectus cursus sem,</p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React
                        </div>
                        <div className="project-desc-tags-tag">
                            tag 2
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-desc">
                    <div className="project-desc-title">
                        <h1>Title</h1>
                    </div>
                    <div className="project-desc-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris maximus, placerat dui ac, facilisis nulla. Pellentesque consequat, erat sed rutrum suscipit, nisi lectus cursus sem,</p>
                    </div>
                    <div className="project-desc-tags">
                        <div className="project-desc-tags-tag">
                            <i class="fab fa-react"></i>
                            React
                        </div>
                        <div className="project-desc-tags-tag">
                            tag 2
                        </div>
                    </div>
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
