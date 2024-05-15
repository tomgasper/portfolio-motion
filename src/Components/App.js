import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Work from './Work/Work'
import About from './About.js'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import projects from './Projects.js'
import CurrentProject from './CurrentProject.js'
import Header from './Header.js'

import Tools from './Tools/Tools'

import { useNavigate } from 'react-router-dom';
import { useBackListener } from '../utils/useBackListener.js';

import ProjectPage from './ProjectPage.js';

const RouterSetup = () => {
    const navigate = useNavigate();
  
    useBackListener(({ location, action }) => {
      console.log("Navigated Back", { location, action });
      navigate("/", { replace: true });
    });
  
    return null; // Komponent nie renderuje niczego w DOM
  };


function App() {
    const [currentProject, setCurrentProject] = useState("")

    const changeProject = (e) => {
        window.scrollTo(0, 0);
        console.log(e.target.id);
        setCurrentProject(e.target.id)
    }

    
    return (
        <div className="all">
        <div className="global-container">
        <HashRouter>
        <Navigation
        clearCurrentProject={setCurrentProject}
         />
         <Header />

{/*
        <CurrentProject
        currentProject={currentProject}
        projects={projects}
        /> */}

        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/work/:projectId' element={
                <ProjectPage
                currentProject={currentProject}
                changeProject={changeProject}
                setCurrentProject={setCurrentProject}
                projects={projects}
                />
            } />
            
            <Route path='/home' element={
                <Work
                projects={projects}
                changeProject={changeProject} />
            } />
            
            <Route path='/about' element={
                <About currentProject={currentProject} setCurrentProject={setCurrentProject}/>
            } />
            <Route path='/tools' element={<Tools />} />
        </Routes>
        </HashRouter>

        <Footer />
        </div>
        </div>
    )
}

export default App;