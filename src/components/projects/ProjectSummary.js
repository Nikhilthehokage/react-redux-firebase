import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {project.title}</span>
                <p>Posted by Nikhil Ishi</p>
                <p className="grey-text">25 November 2020 , 3pm</p>
            </div>
        </div>

    )
}

export default ProjectSummary;