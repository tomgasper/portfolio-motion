import React from "react";

import Thumbnail from "../Thumbnails/Thumbnail";

const WorkSectionMid = (props) => {
    return (
        <div className="workSectionMid-container">
            <div className="workSectionMid-left">
                <Thumbnail project={props.projects[2]} styleNum={1} size={[800,900]} isTextBeforeImg={false} side={"left"} />
            </div>
            <div className="workSectionMid-right">
                <Thumbnail project={props.projects[4]} styleNum={1} size={[800,600]} isTextBeforeImg={false} side={"left"} />
                <Thumbnail project={props.projects[3]} styleNum={1} size={[800,450]} isTextBeforeImg={false} side={"right"} />
            </div>
        </div>
    )
}

export default WorkSectionMid;