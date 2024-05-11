import React from 'react';
import loader from '../spinner.json'
import Lottie from 'react-lottie';

const Spinner = ({ status }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loader,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    if (status === 'loading') return <div className="project-spinner">
        <Lottie options={defaultOptions} width={100} height={100} /> </div>
    if (status === 'loaded') return null
    }

export default Spinner;