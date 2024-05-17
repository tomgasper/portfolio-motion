import React from "react";

const FilmShowcase = ({src, title}) => {
    return(
        <div className="filmShowcase-container">
            <iframe src={src} frameborder="0" title={title}></iframe>
            </div>
    )
}

export default FilmShowcase;