import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation({ clearCurrentProject }) {
    return(
        <div className="navigation" >
        {/* 
        <div className="navigation-logo">
        <NavLink to="/home" onClick={ () => clearCurrentProject("")} >tom gasper</NavLink>
        </div>
        */}
        <div className="navigation-links" >
        <NavLink to="/home" onClick={ () => clearCurrentProject("") } >Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to ="/tools" onClick={ () => clearCurrentProject("") }>Tools</NavLink>
        </div>
        </div>
    )
}

export default Navigation;