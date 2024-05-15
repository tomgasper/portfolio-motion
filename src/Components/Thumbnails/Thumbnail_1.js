import React from 'react';
import { NavLink } from 'react-router-dom';

import ThumbnailDesc from './ThumbnailDesc';

import "./thumbnail-styles.css" 

function Thumbnail({project, id, size, style, side, changeProject, currentProject }) {
    const isActive = () => {
    if ( currentProject === project.id ) { return 0.6 }
    else return 1
    }

    if (side === "left")
    {
        return (
            <div className={`thumbnail-container-${style}`} id={project.id} style={ { opacity: isActive() } } >
                <ThumbnailDesc project={project} style={style} changeProject={changeProject} />
                <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
                    <div
                    style={{width:size[0], height:size[1], backgroundColor:"#D7EEED"}}
                    id={project.id}
                    onClick={changeProject} >
                    <img src={ project.thumbnail } alt={ project.text } />
                    </div>
                </NavLink>
            </div>
            )
    } else {
        return (
            <div className={`thumbnail-container-${style}`} id={project.id} style={ { opacity: isActive() } } >
                <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
                    <div
                    style={{width:size[0], height:size[1], backgroundColor:"#D7EEED"}}
                    id={project.id}
                    onClick={changeProject} >
                    <img src={ project.thumbnail } alt={ project.text } />
                    </div>
                </NavLink>
                <ThumbnailDesc project={project} style={style} changeProject={changeProject} />
            </div>
            )
    }
}

export default Thumbnail;