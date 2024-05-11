import React from 'react';
import { NavLink } from 'react-router-dom';

function Thumbnail({project, id, changeProject, currentProject }) {
    const isActive = () => {
    if ( currentProject === project.id ) { return 0.6 }
    else return 1
    }

    return (
    
    <div className="thumbnail-container" id={project.id} style={ { opacity: isActive() } } >
    <NavLink to={"/work/"+project.id} style={{ textDecoration: 'none' }}>
    <div
    className="thumbnail-placeholder"
    id={project.id}
    onClick={changeProject} >
    {/*<img src={ process.env.PUBLIC_URL + project.thumbnail } alt={ project.text } />*/}
    
    <img src={ project.thumbnail } alt={ project.text } />
    
    </div>
    <div className="thumbnail-text">{project.title} </div>
    </NavLink>
    </div>
    )
}

export default Thumbnail;