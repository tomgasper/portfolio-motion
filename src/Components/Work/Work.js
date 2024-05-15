import React from 'react';

import "./work-styles.css";

import Thumbnail from '../Thumbnails/Thumbnail';
import Hero from '../Hero';
import LogoSection from '../LogoSection/LogoSection';
import WorkSectionMid from './WorkSectionMid';
import WorkSectionEnd from './WorkSectionEnd';


function Work(props) {
    const projects = props.projects;
    return (
        <div className="work-container">
            <Hero />
            <Thumbnail vid={false} project={projects[0]} size={[1700,1000]} styleNum={1} isTextBeforeImg={false} side={"right"} />
            <Thumbnail vid={true} project={projects[1]} size={[1250,800]} styleNum={2} isTextBeforeImg={true} side={"left"}  />
            <LogoSection/>
            <WorkSectionMid projects={props.projects} />
            <Thumbnail project={projects[0]} size={[1200,800]} styleNum={1} isTextBeforeImg={false} />
            <WorkSectionEnd projects={props.projects} />
        </div>
    )
}

export default Work;