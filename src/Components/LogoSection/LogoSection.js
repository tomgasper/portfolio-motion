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
                <img src={amazonLogo} height={50}></img>
                <img src={akamaiLogo} height={80}></img>
                <img src={bmsLogo} height={50}></img>
                <img src={pwcLogo} height={80}></img>
            </div>
            <div className="logoSection-img-line-2">
                <img src={cs} height={60}></img>
                <img src={pfizer} height={70}></img>
                <img src={mtv} height={100}></img>
                <img src={truist} className="logoSection-img-last" height={115}></img>
            </div>
            </div>
        </div>
    )
}

export default LogoSection;