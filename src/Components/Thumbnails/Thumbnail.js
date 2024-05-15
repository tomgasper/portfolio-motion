import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThumbnailDesc from './ThumbnailDesc';
import "./thumbnail-styles.css";

import { ProjectContext } from '../ProjectContext';

function Thumbnail({project, size, styleNum, isTextBeforeImg, side }) {
    const {currentProject, changeProject} = useContext(ProjectContext);

    const isActive = () => {
    if ( currentProject === project.id ) { return 0.6 }
    else return 1
    }

    if (isTextBeforeImg === true)
    {
        return (
            <div className={`thumbnail-container-${styleNum}`} id={project.id} style={ { opacity: isActive() } } >
                <ThumbnailDesc side={side} project={project} styleNum={styleNum} changeProject={changeProject} />
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
            <div className={`thumbnail-container-${styleNum}`} id={project.id} style={ { opacity: isActive() } } >
                <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
                    <div
                    style={{width:size[0], height:size[1], backgroundColor:"#D7EEED"}}
                    id={project.id}
                    onClick={changeProject} >
                    <img src={ project.thumbnail } alt={ project.text } />
                    </div>
                </NavLink>
                <ThumbnailDesc side={side} project={project} styleNum={styleNum} changeProject={changeProject} />
            </div>
            )
    }
}

export default Thumbnail;