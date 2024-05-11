import React, { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner'

function LoadingImg({ currentProject, imgPath }) {

    const [status, setStatus] = useState("loading");

    const imgRef = useRef(null)

    useEffect( () => {
        if ( imgPath ) {
            setStatus('loading')
            imgRef.current.style.opacity = 0.2 }
    }, [ imgPath ])

    const updateImg = (e) => { // Change status of the image and full opacity when loaded
        setStatus('loaded')
        imgRef.current.style.opacity = 1;
    }

    if ( currentProject )
    return (
        <div className='project-image'>
        <Spinner status={status} />
        {/* {status} */}
        <img ref={imgRef} id={ imgPath } onLoad={ updateImg } src={imgPath} alt={imgPath}  /> 
        </div>
    )
}

export default LoadingImg;