import React from 'react';
import Thumbnail_1 from '../Thumbnails/Thumbnail_1';

import Hero from '../Hero';
import LogoSection from '../LogoSection/LogoSection';


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
            <Thumbnail_1 project={projects[0]} size={[1600,1000]} style={1} changeProject={props.changeProject} currentProject={props.currentProject} />
            <Thumbnail_1 project={projects[1]} size={[1400,800]} style={2} side={"left"} changeProject={props.changeProject} currentProject={props.currentProject} />
            <LogoSection/>
        </div>
    )
}

export default Work;