import React from 'react'

export default function Jumbotron() {
    return (
        <section className="jumbotron-section">
            <div className="jumbotron">
                <p className="jumbotron-top">
                    Hi.<br/>
                    I am Jakub Moryc,<br/>
                    a front-end developer<br/>
                    currently learning back-end.<br/>
                    I have been learning web dev since 2017.
                </p>
                <p className="jumbotron-bot">
                    Below you'll find few of my projects.<br/>
                    I invite you to look at them and <a href="#">get in touch with me</a>.<br/>
                    My main framework is React.js and I am currently learning Express.js.
                </p>
            </div>
        </section>
    )
}
