import React, { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner'

function Video( { projectData, currentProject, vidPath, index } ) {
    const [ status, setStatus ] = useState('loading');

    let project  = projectData.filter(function(o){return o.id === currentProject;} );
    project = project ? project[0] : null;

    console.log(project);

    if (project == null)
    {
        throw Error("Incorrect project!");
    }

    const vidRef = useRef(null);
    const width= 700
    const height = width/1.77777777778
    const squareWidth = 700;

    const renderVideo = () => { if( project.isSquare ) return <iframe src={vidPath} width={squareWidth} height={squareWidth} frameBorder="0" allowFullScreen title={ project.title} onLoad={ loaded } ></iframe>
    if ( !project.isSquare ) return <iframe src={vidPath} width={width} height={height} frameBorder="0" allowFullScreen title={ project.title } onLoad={ loaded } ></iframe> }

    const loaded = () => {
        setStatus('loaded')
        vidRef.current.style.opacity = 1;
    }

    useEffect( () => {
        if ( project.vid ) {
            setStatus('loading')
            vidRef.current.style.opacity = 0.0
        }
    }, [projectData, currentProject ])

    if ( project.vid[index] )
    return(
        <div className="project-video-container">
        <Spinner status={status} />
        <div ref={ vidRef } className="project-video" style={ { opacity: 0.2 }} id={ project.vid } >
        {/* <iframe src={projectData.vid} width={width} height={height} frameBorder="0" allowFullScreen title={ projectData.title} onLoad={ loaded } ></iframe> */}
        {renderVideo()}
        </div>
        </div>
    )
    else return null
}

export default Video;