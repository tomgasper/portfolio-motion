import React, { useEffect } from 'react';

import dribbbleIcon from './svg/dribbble.svg'
import instagramIcon from './svg/instagram.svg'
import vimeoIcon from './svg/vimeo.svg'
import emailIcon from './svg/email.svg'

function About( { currentProject, setCurrentProject } ) {
    useEffect( () => {
    if ( currentProject )
    setCurrentProject("")
    } )

    return (
        <div className="about-container">
            <div className="about-title">Hello! / Czesc!</div>
            <br></br>
            <div className="about-section"><br/>
            I'm a Polish freelance Art Director and Motion Designer with a focus on 2D animation.<br/>I combine creativity with technical expertise to bring dynamic visuals to life. With a solid background in both artistic and technical disciplines, I aim to create animations that not only look stunning but also convey messages effectively.<br/><br/>Beyond my professional work, I'm passionate about road cycling and graphics programming. I value collaboration and am always open to discussing new, exciting projects.
            <br/><br/>Let's connect: tomgasper01@gmail.com
            <br/><br/><br/>Represented in Finland by: btq.fi
            </div>
            {/*<div className="about-links">
            <a href='https://dribbble.com/tomgasper'> <img className="about-icons" src={dribbbleIcon} alt="Dribbble Icon" /> </a>
            <a href='https://instagram.com/tomgasper'><img className="about-icons" src={instagramIcon} alt="Instagram Icon" /></a>
            <a href='https://vimeo.com/tomgasper'><img className="about-icons" src={vimeoIcon} alt="Vimeo Icon" /></a>
    <a href='mailto:tomgasper01@gmail.com'><img className="about-icons" src={emailIcon} alt="Email Icon" /> </a>
            </div>*/}
    
        </div>
    )
}

export default About;