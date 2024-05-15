import React from 'react';
import { NavLink } from 'react-router-dom';

import "./thumbnail-styles.css" 

function Thumbnail({project, id, style, changeProject, currentProject }) {
    const isActive = () => {
    if ( currentProject === project.id ) { return 0.6 }
    else return 1
    }

    return (
    
    <div className={`thumbnail-container-${style}`} id={project.id} style={ { opacity: isActive() } } >
    <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
    <div
    className={`thumbnail-placeholder-${style}`}
    id={project.id}
    onClick={changeProject} >
    {/*<img src={ process.env.PUBLIC_URL + project.thumbnail } alt={ project.text } />*/}
    <img src={ project.thumbnail } alt={ project.text } />
    </div>
    </NavLink>
    
    <div className={`thumbnail-text-container-${style}`}>
        <div className={`thumbnail-text-${style}`} onClick={changeProject}><NavLink to={"/work/"+project.id} className="thumbnail-navlink">{project.title} </NavLink></div>
        <div className={`thumbnail-desc-${style}`}>{project.desc}</div>
    </div>
    
    </div>
    )
}

export default Thumbnail;