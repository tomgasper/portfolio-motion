import React, { useEffect, useContext } from 'react';

import dribbbleIcon from './svg/dribbble.svg'
import instagramIcon from './svg/instagram.svg'
import vimeoIcon from './svg/vimeo.svg'
import emailIcon from './svg/email.svg';

import { ProjectContext } from './ProjectContext';

function About( ) {
    const {currentProject, setCurrentProject, changeProject} = useContext(ProjectContext);

    useEffect( () => {
    if ( currentProject )
    setCurrentProject("")
    } )

    return (
        <div className="about-container">
            <div className="about-title">Hello! / Czesc!</div>
            <br></br>
            <div className="about-section"><br/>
            I'm a Polish Art Director and Motion Designer specializing in 2D animation.<br />I love blending creativity with technical skills to bring dynamic visuals to life.
            With a background in both art and tech,I strive to create animations that are visually engaging and effectively communicate their message.<br/><br/>Beyond my professional work, I really enjoy road cycling and graphics programming and spend most of my free time on those hobbies.
            <br/><br/>I love collaborating and am always excited to discuss new projects.<br />Let's connect: <b>tomgasper01@gmail.com</b>
            <br/><br/><br/>Represented in Finland by: <a href="https://btq.fi/">btq.fi</a>
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