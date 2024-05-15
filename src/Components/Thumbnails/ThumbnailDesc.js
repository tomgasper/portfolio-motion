import React from "react";
import { NavLink } from 'react-router-dom';

const ThumbnailDesc = ({styleNum, side, changeProject, project}) => {
    const descStyle =
        {
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start"
        };

    if (side === "right")
    {
        descStyle.justifyContent = "flex-end";   
    }

    return (
        <div className={`thumbnail-text-container-${styleNum}`}>
            <div className={`thumbnail-text-${styleNum}`} style={descStyle} onClick={changeProject}><NavLink to={"/work/"+project.id} className="thumbnail-navlink">{project.title} </NavLink></div>
            <div className={`thumbnail-desc-${styleNum}`} style={descStyle} >{project.desc}</div>
        </div>
    )
}

export default ThumbnailDesc;