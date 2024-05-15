import React, { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Work from './Work/Work'
import About from './About.js'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import projects from './Projects.js'
import Header from './Header.js'

import Tools from './Tools/Tools'
import ProjectPage from './ProjectPage.js';

import WorkFooter from './Work/WorkFooter.js';

import { ProjectProvider } from './ProjectContext.js';
import { ProjectContext } from './ProjectContext.js';


function App() {
    const { currentProject, setCurrentProject } = useContext(ProjectContext);
    
    return (
        <div className="all">
            <div className="global-container">
            <HashRouter>
                <Navigation
                clearCurrentProject={setCurrentProject}
                />
                <Header />
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/work/:projectId' element={
                    <ProjectPage projects={projects}
                    />
                } />
                <Route path='/home' element={
                    <><Work
                    projects={projects} />
                    <WorkFooter />
                    </>
                } />
                <Route path='/about' element={
                    <About />
                } />
                <Route path='/tools' element={<Tools />} />
            </Routes>
            </HashRouter>
            </div>
        </div>
    )
}

export default () => (
    <ProjectProvider>
    <App />
    </ProjectProvider>
);