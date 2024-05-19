import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThumbnailDesc from './ThumbnailDesc';
import "./thumbnail-styles.css";

import { ProjectContext } from '../ProjectContext';

function Thumbnail({project, vid, size, styleNum, isTextBeforeImg, side }) {
    const {currentProject, changeProject} = useContext(ProjectContext);

    const isActive = () => {
    if ( currentProject === project.id ) { return 0.6 }
    else return 1
    }

    const descStyle =
        {
            width: size,
            alignItems:"start",
            /*opacity: isActive(),*/
        };

    if (side === "right")
    {
        descStyle.alignItems = "end";   
    }

    if (isTextBeforeImg === true)
    {
        return (
            <div className={`thumbnail-container-${styleNum}`} id={project.id} style={descStyle} >
                <ThumbnailDesc side={side} project={project} styleNum={styleNum} changeProject={changeProject} />
                <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
                    { vid ?
                    <video style={{maxWidth:"100%"}} autostart loop muted autoPlay src={project.vidThumbnail} type="video/mp4" />
                    : <div
                    style={{}}
                    id={project.id}
                    onClick={changeProject}
                    className='thumbnail-img-container'
                    >
                    <img src={ project.thumbnail } alt={ project.text } />
                    </div>
                    }
                </NavLink>
            </div>
            )
    } else {
        return (
            <div className={`thumbnail-container-${styleNum}`} id={project.vidThumbnail} style={descStyle} >
                <NavLink to={"/work/"+project.id} className="thumbnail-navlink" >
                    { vid ?
                    <video style={{maxWidth:"100%"}} autostart loop muted autoPlay src={project.vidThumbnail} type="video/mp4" />
                    : <div
                    style={{ }}
                    id={project.id}
                    onClick={changeProject}
                    className='thumbnail-img-container'
                    >
                    <img src={ project.thumbnail } alt={ project.text }
                    />
                    </div>
                    }
                </NavLink>
                <ThumbnailDesc side={side} project={project} styleNum={styleNum} changeProject={changeProject} />
            </div>
            )
    }
}

export default Thumbnail;