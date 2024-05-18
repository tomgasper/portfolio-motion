import React from "react";

import MediaObject from "./MediaObject";

const MediaGrid = ({ mediaArr }) => {
    return(
        <div className="mediaGrid-container">
            <div className="mediaGrid-line-1">
                <div className="mediaGrid-line-1-left">
                    <MediaObject path={mediaArr[0]}/>
                </div>
                <div className="mediaGrid-line-1-right">
                    <MediaObject path={mediaArr[1]}/>
                </div>
            </div>
            <div className="mediaGrid-line-2">
                <div className="mediaGrid-line-2-left">
                    <MediaObject path={mediaArr[2]}/>
                </div>
                <div className="mediaGrid-line-2-right">
                    <MediaObject path={mediaArr[3]}/>
                </div>
            </div>
        </div>
    )
}

export default MediaGrid;