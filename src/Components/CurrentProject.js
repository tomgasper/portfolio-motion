import React from 'react';
import LoadingImg from './LoadingImg'
import Video from './Video';

function CurrentProject({ currentProject, projects }) {
    var project  = projects.filter(function(o){return o.id === currentProject;} );
    project = project ? project[0] : null;
    
    const projectData = project;

    const renderProjectVids = () => {
        if ( projectData.vid.length > 0 ) return projectData.vid.map(
            (vidPath, index ) => { return <Video projectData={ projects } currentProject={currentProject} vidPath={vidPath} index={index}/> }
            )}

    const renderProjectImgs = () => { 
        if ( projectData.img.length > 0 ) return projectData.img.map(
        (imgPath, index ) => { return <LoadingImg currentProject={currentProject} imgPath={ imgPath } key={index} /> }
        )}
    
    if ( currentProject ) { //Render all imgs from 'project' database
    return (
        <div className="project-container" >
        <div className="project-images">
            { renderProjectVids() }
            { renderProjectImgs() }
            </div>
        <div className="project-info">
            <div className="project-info-title">{projectData.title}</div>
            <div className="project-info-text1">{projectData.text}</div>
            <div className="project-info-text2">{projectData.text2}</div>
        </div>
        
        </div>       
    )
    }
    else return null;
}

export default CurrentProject;