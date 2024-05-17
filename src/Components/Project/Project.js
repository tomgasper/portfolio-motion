import React, { useContext, useState } from "react";
import { ProjectContext } from "../ProjectContext";

import DetailedProjectPage from "./DetailedProjectPage";
import SimpleProjectPage from "./SimpleProjectPage";

import projectDetails from "../ProjectDetails";

const Project = ({ projects }) => {
    const {currentProject} = useContext(ProjectContext);
    const project = projects.find(obj => obj.id === currentProject);
    const details = projectDetails.find(obj => obj.id === currentProject);

    console.log(details);

    const chooseTemplate = (project) => {
        console.log(project);
        if (project === undefined || project.template === undefined) return <div>No template selected!</div>;

        switch (project.template) {
            case 0:
                return <DetailedProjectPage project={project} details={details} />
            case 1:
                return <SimpleProjectPage project={project} details={details} />
            default:
                return <div>Wrong template selected!</div>
        }
    }

    if (!currentProject) return null;
    else return chooseTemplate(project);
}

export default Project;