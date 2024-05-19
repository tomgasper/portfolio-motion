import React from "react";
import "./logoSection-styles.css";

import amazonLogo from "../../publicTemp/img/logos/amazon.svg";
import akamaiLogo from "../../publicTemp/img/logos/akamai.svg";
import bmsLogo from "../../publicTemp/img/logos/bms.svg";
import pwcLogo from "../../publicTemp/img/logos/pwc.png";
import cs from "../../publicTemp/img/logos/cs.png";
import pfizer from "../../publicTemp/img/logos/pfizer.svg";
import mtv from "../../publicTemp/img/logos/mtv.svg";
import truist from "../../publicTemp/img/logos/truist.svg";

const LogoSection = () => {
    return (
        <div className="logoSection-container">
            <div className="logoSection-text">
            Over the years I had a chance to produce content for small and big companies.
            </div>
            <div className="logoSection-line"></div>
            <div className="logoSection-img">
            <div className="logoSection-img-line-1">
                <img className="logo-1" src={amazonLogo} height={50} alt="Logo 1"></img>
                <img className="logo-2" src={akamaiLogo} height={80} alt="Logo 2"></img>
                <img className="logo-3" src={bmsLogo} height={50} alt="Logo 3"></img>
                <img className="logo-4" src={pwcLogo} height={80} alt="Logo 4"></img>
            </div>
            <div className="logoSection-img-line-2">
                <img className="logo-5" src={cs} height={60} alt="Logo 5"></img>
                <img className="logo-6" src={pfizer} height={70} alt="Logo 6"></img>
                <img className="logo-7" src={mtv} height={100} alt="Logo 7"></img>
                <img src={truist} className="logoSection-img-last" height={115} alt="Logo 8"></img>
            </div>
            </div>
        </div>
    )
}

export default LogoSection;