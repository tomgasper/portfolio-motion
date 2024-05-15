import React, { useContext } from 'react';
import CurrentProject from "./CurrentProject";
import Work from './Work/Work';

import { useParams } from 'react-router-dom';

import { ProjectContext } from './ProjectContext';

function ProjectPage({ projects }) {
    const {currentProject, setCurrentProject, changeProject} = useContext(ProjectContext);

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