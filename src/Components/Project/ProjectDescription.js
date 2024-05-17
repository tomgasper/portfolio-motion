import React from "react";
import "./project-styles.css";

const ProjectDescription = ({ desc }) => {
    if (desc) { return (
    <div className="projectDesc-container">
        <div className="projectDesc-left">
            <div className="projectDesc-title">{desc.title}</div>
            <div className="projectDesc-client">{desc.client}</div>
            <div className="projectDesc-role">{desc.role}</div>
        </div>
        <div className="projectDesc-right">
            {desc.desc}
        </div>
    </div>
    ) } else return null;
}

export default ProjectDescription;