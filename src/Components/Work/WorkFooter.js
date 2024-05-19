import React from "react"
import { NavLink } from "react-router-dom";

const WorkFooter = () => {
    return(
        <div className="workFooter-container">
            <div className="workFooter-email-text">
                <div className="workFooter-text-1">
                I'm always happy to discuss new projects or just chat.
                <br />Feel free to reach out:
                </div>
                <div className="workFooter-text-2">
                    tomgasper01@gmail.com
                </div>
            </div>
            <div className="workFooter-links">
                <a href="https://www.behance.net/">Behance</a>
                <a href="https://vimeo.com/tomgasper">Vimeo</a>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default WorkFooter;