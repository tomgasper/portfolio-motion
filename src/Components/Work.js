import React from 'react';
import Thumbnail from './Thumbnail';
import Thumbnail_1 from './Thumbnails/Thumbnail_1';

import Hero from './Hero';


function Work(props) {
    /*
    const renderThumbnails = props.projects.map( ( item, index) => {
    return <Thumbnail project={item} id={index} key={index} changeProject={props.changeProject} currentProject={ props.currentProject } />
    })

    return (
        <div
        className="work-container">
        {renderThumbnails}
        </div>
        
    )
    */

    const projects = props.projects;
    return (
        <div className="work-container">
            <Hero />
            <Thumbnail_1 project={projects[0]} style={1} changeProject={props.changeProject} currentProject={props.currentProject}></Thumbnail_1>
            <Thumbnail_1 project={projects[1]} style={2} changeProject={props.changeProject} currentProject={props.currentProject}></Thumbnail_1>
        </div>
    )
}

export default Work;