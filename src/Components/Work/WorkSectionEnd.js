import React from "react";
import Thumbnail from "../Thumbnails/Thumbnail";

const WorkSectionEnd = (props) => {
    return(
    <div className="workSectionEnd-container">
        <div className="workSectionEnd-left">
            <Thumbnail vid={true} project={props.projects[7]} size={[800,700]} styleNum={1} isTextBeforeImg={false} side={"left"}/>
        </div>
        <div className="workSectionEnd-right">
            <Thumbnail project={props.projects[6]} size={[650,500]} styleNum={1} isTextBeforeImg={false} side={"right"} />
        </div>
    </div>
    )
}

export default WorkSectionEnd;