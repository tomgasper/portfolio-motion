import React from "react";
import { NavLink } from 'react-router-dom';

const ThumbnailDesc = ({style, side, changeProject, project}) => {
    return (
        <div className={`thumbnail-text-container-${style}`}>
            <div className={`thumbnail-text-${style}`} onClick={changeProject}><NavLink to={"/work/"+project.id} className="thumbnail-navlink">{project.title} </NavLink></div>
            <div className={`thumbnail-desc-${style}`}>{project.desc}</div>
        </div>
    )
}

export default ThumbnailDesc;