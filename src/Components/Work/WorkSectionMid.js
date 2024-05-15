import React from "react";

import Thumbnail from "../Thumbnails/Thumbnail";

const WorkSectionMid = (props) => {
    return (
        <div className="workSectionMid-container">
            <div className="workSectionMid-left">
                <Thumbnail project={props.projects[3]} size={[800,950]} styleNum={1} isTextBeforeImg={false} side={"left"} />
            </div>
            <div className="workSectionMid-right">
                <Thumbnail project={props.projects[4]} size={[800,600]} styleNum={1} isTextBeforeImg={false} side={"left"} />
                <Thumbnail project={props.projects[5]} size={[800,600]} styleNum={1} isTextBeforeImg={false} side={"right"} />
            </div>
        </div>
    )
}

export default WorkSectionMid;