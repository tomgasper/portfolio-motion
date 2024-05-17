import "./project-styles.css";

import React from "react";

import MediaObject from "./MediaObject";
import ProjectDescription from "./ProjectDescription";
import FilmShowcase from "./FilmShowcase";
import FooterProjectPage from "./FooterProjectPage";

const DetailedProjectPage = ({project, details}) => {
    const media = details.media;

    return (
        <div className="detailedProject-container">
            <div className="detailedProject-section-1">
                <ProjectDescription desc={ details } />
                <div className="detailedProject-img-1">
                    <MediaObject path={media[0]} />
                </div>
                <div className="detailedProject-img-2">
                    <MediaObject path={media[1]} />
                    <MediaObject path={media[2]} />
                </div>
                <div className="detailedProject-text-section-1">
                    <div className="detailedProject-text-section-1-left" >
                        <MediaObject path={media[3]} />
                    </div>
                    <div className="detailedProject-text-section-1-right">
                        {details.text[0]}
                    </div>
                </div>
            </div>
            <div className="filmSection-container">
                <div className="filmSection-center">
                    <FilmShowcase src={details.vidUrl} title={details.title}/>
                </div>
            </div>
            <div className="detailedProject-section-2">
                <div className="detailedProject-text-section-2">
                    {details.text[1]}
                </div>
                <div className="detailedProject-img-3">
                    <MediaObject path={media[4]} />
                    <MediaObject path={media[5]} />
                </div>
                <FooterProjectPage />
            </div>
        </div>
    )
}

export default DetailedProjectPage;