import React from "react";

import ProjectDescription from "./ProjectDescription";
import MediaGrid from "./MediaGrid";
import FilmShowcase from "./FilmShowcase";
import MediaObject from "./MediaObject";
import FooterProjectPage from "./FooterProjectPage";

const SimpleProjectPage = ({ details }) => {

    const media = details.media;
    const {showGrid, gridThreeImgs, showText0, showText1, showVid, showEndImg, isEndOneImg, isEndMoreImg } = details.templateOptions;

    return(
        <div className="simpleProject-container">
            <div className="simpleProject-section-1">
                <ProjectDescription desc={details} />
                {showGrid ? <MediaGrid mediaArr={media.slice(0,4)} isThreeImgs={gridThreeImgs} /> : null}
                {showText0 ?
                    <div className="simpleProject-text-section-1">
                        {details.text[0]}
                    </div>
                : null
                }
            </div>
            { showVid ? <>
                <div className="filmSection-container">
                    <div className="filmSection-center">
                        <FilmShowcase src={details.vidUrl} title={details.title} />
                    </div>
            </div>
            </> : null}
            <div className="simpleProject-section-2">
                {showText1 ?
                <div className="simpleProject-text-section-2">
                    {details.text[1]}
                </div> : null}
                {showEndImg ? 
                    <div className="simpleProject-img-end-container">
                        { isEndOneImg ? <MediaObject path={media[4]} /> :
                        <>
                            <div className="simpleProject-img-end-left">
                                <MediaObject path={media[4]} />
                                </div>
                                <div className="simpleProject-img-end-right">
                                    <MediaObject path={media[5]} />
                                </div>
                        </>
                        }
                    </div>
                : null            
            }
            { isEndMoreImg ? media.slice(6,media.length+1).map((el) =>
                            <MediaObject path={el} /> ) : null }
                <FooterProjectPage />
            </div>
        </div>
    )
}

export default SimpleProjectPage;