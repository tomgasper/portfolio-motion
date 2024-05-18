import React from "react";
import "./project-styles.css";

const ProjectDescription = ({ desc }) => {
    if (desc) { return (
    <div className="projectDesc-container">
        <div className="projectDesc-left">
            <div className="projectDesc-title">{desc.title}</div>
            <div className="projectDesc-client">{desc.client}</div>
            {desc.agency ? <div className="projectDesc-agency">{desc.agency}</div> : null}
            <div className="projectDesc-role">{desc.role}</div>
        </div>
        <div className="projectDesc-right">
            {desc.desc}
        </div>
    </div>
    ) } else return null;
}

export default ProjectDescription;