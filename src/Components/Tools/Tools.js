import React,{ useState } from 'react';
import Spinner from '../Spinner'

import Section0 from './Section0'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

import TrackVisibility from './TrackVisibility'

const Tools = () => {
    const [isLoaded, setIsLoaded] = useState('loading')
    const [visible, setVisible] = useState({})

    const showImg = (ref) => {
        ref.current.src = ref.current.dataset.src
    }

    // let observer;

    // const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1.0
    // }

    // observer = new IntersectionObserver(callback, options);

    const onLoad = () => {
        setIsLoaded( 'loaded' )
    }
    
    const onVisible = (e) => {
        console.log(e.target)    
    }

    const loadPage = (isLoaded) => {
        if (isLoaded === "loaded") {
            return null
        }
        else {
            return (
            <div className='loader-page'>
                Loading...
            </div>
            )
            
        }
    }

            return(
                <div className="tools-container">
                    {loadPage(isLoaded)}
                    <div className="tools-title-container">
                        <div className="tools-title-image">
                            <img className="tools-gif" src='./img/tools/work_man.gif' alt="Opening gif" onLoad={onLoad}></img>
                        </div>
                        <div className='tools-title'>Copy Pose v.0.1</div>
                            <div className="tools-about">     
                            Copy Pose is a simple After Effects script that allows animators to quickly copy their rigged character poses without having
                            to go through each property manually.
                        </div>
                    </div>
                    { ( isLoaded === 'loaded' ) ?
                        (
                        <div className="tools-section-container">
                        <Section0 />
                        <Section1 />
                        <Section2 />
                        <Section3/>
                        <div className="tools-footer-container">
                        <a className="tools-download-link" href="https://gumroad.com/l/YPrLt">Grab it here!</a>
                        <br />
                        (Tested on: AE CC 2018-2020 but should also run on earlier versions of After Effects)
                        <br />
                        <br />
                        Please note, it’s an early version of the script so there might be some bugs.
                        <br />
                        If you happen to encounter any weird behaviour, please feel free to reach out to me: tomgasper01@gmail.com
                        </div>
                        </div>
                        ) : null }
                        
        
                    
                    
                    
                </div>
            )
        }


export default Tools