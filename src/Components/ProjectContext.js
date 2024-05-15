import React, { createContext,useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
    const [currentProject, setCurrentProject] = useState("");

    const changeProject = (e) => {
        window.scrollTo(0, 0);
        console.log(e.target.id);
        setCurrentProject(e.target.id)
    };

    return (
        <ProjectContext.Provider value={{currentProject, setCurrentProject, changeProject}}>
            {children}
        </ProjectContext.Provider>
    );
};