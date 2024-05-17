import React, { useContext } from 'react';
import CurrentProject from "./CurrentProject";
import Project from './Project/Project';
import Work from './Work/Work';

import { useParams } from 'react-router-dom';

import { ProjectContext } from './ProjectContext';

function ProjectPage({ projects }) {
    const {currentProject, setCurrentProject, changeProject} = useContext(ProjectContext);

    let { projectId } = useParams();
    setCurrentProject(projectId);

    return(
        <div className='projectpage-container'>
            <Project
            projects={projects}
            />
        </div>
    )
}

export default ProjectPage;