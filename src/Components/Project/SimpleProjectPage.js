import React from "react";

import ProjectDescription from "./ProjectDescription";
import MediaGrid from "./MediaGrid";
import FilmShowcase from "./FilmShowcase";
import MediaObject from "./MediaObject";
import FooterProjectPage from "./FooterProjectPage";

const SimpleProjectPage = ({project, details}) => {
    const media = details.media;

    return(
        <div className="simpleProject-container">
            <div className="simpleProject-section-1">
                <ProjectDescription desc={details} />
                <MediaGrid mediaArr={media.slice(0,4)} />
                <div className="simpleProject-text-section-1">
                    {details.text[0]}
                </div>
            </div>
            <div className="filmSection-container">
                <div className="filmSection-center">
                    <FilmShowcase src={details.vidUrl} title={details.title} />
                </div>
            </div>
            <div className="simpleProject-section-2">
                <div className="simpleProject-text-section-1">
                    {details.text[1]}
                </div>
                <div className="simpleProject-img-end-container">
                    <div className="simpleProject-img-end-left">
                        <MediaObject path={media[0]} />
                    </div>
                    <div className="simpleProject-img-end-right">
                        <MediaObject path={media[1]} />
                    </div>
                </div>
                <FooterProjectPage />
            </div>
        </div>
    )
}

export default SimpleProjectPage;