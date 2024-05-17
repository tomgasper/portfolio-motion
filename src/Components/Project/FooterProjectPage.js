import React, { useContext } from "react"
import arrow from '../svg/arrow_right.svg'

import { ProjectContext } from "../ProjectContext";

import { NavLink } from "react-router-dom";

const FooterProjectPage = () => {
    const { setCurrentProject } = useContext(ProjectContext);

    return(
        <div className="projectFooter-container">
            <img className="projectFooter-arrow" src={arrow} alt="Right arrow" />
            <NavLink to ="/home" onClick={ () => { window.scrollTo(0, 0); setCurrentProject(""); } } >See more projects!</NavLink>
        </div>
    )
}

export default FooterProjectPage;