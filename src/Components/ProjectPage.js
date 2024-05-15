import React, { useEffect } from 'react';
import CurrentProject from "./CurrentProject";
import Work from './Work/Work';

import { useParams } from 'react-router-dom';

function ProjectPage({ currentProject, setCurrentProject, changeProject, projects }) {

    let { projectId } = useParams();
    setCurrentProject(projectId);

    return(
        <div className='projectpage-container'>
        <CurrentProject
                currentProject={currentProject}
                projects={projects} />
        <Work
                projects={projects}
                changeProject={changeProject}
                currentProject={currentProject}
                 />
        </div>
    )
}

export default ProjectPage;