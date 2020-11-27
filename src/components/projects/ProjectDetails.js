import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Finding Purpose & Meaning in Life,Understanding Medical Research,Japanese for Beginners,Introduction to Cloud Computing,Foundations of Mindfulness</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Nikhil Ishi</div>
                    <div>25 November 2020 ,3pm</div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetails
