import React, { Component } from 'react'
import createProject from '../../store/actions/projectAction.js'
import { connect } from 'react-redux'
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state)
    }
    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3" >CreateProject</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content </label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">create</button>
                    </div>

                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
