import React from 'react';
import Thumbnail from './Thumbnail'


function Work(props) {

    console.log("changing!");

    const renderThumbnails = props.projects.map( ( item, index) => {
    return <Thumbnail project={item} id={index} key={index} changeProject={props.changeProject} currentProject={ props.currentProject } />
    })

    return (
        <div
        className="work-container">
        {renderThumbnails}
        </div>
        
    )
}

export default Work;