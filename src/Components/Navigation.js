import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation({ clearCurrentProject }) {
    return(
        <div className="navigation" >
        <div className="navigation-logo">
        <NavLink to="/home" onClick={ () => clearCurrentProject("")} >tom gasper</NavLink>
        </div>
        <div className="navigation-links" >
        <NavLink to="/home" onClick={ () => clearCurrentProject("") } >work</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to ="/tools" onClick={ () => clearCurrentProject("") }>tools</NavLink>
        </div>
        </div>
    )
}

export default Navigation;