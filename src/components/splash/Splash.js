import React from "react";
import logo from "./components/logo/Storebook-logo.png";
import logo2 from "./components/logo/Sb-logo-txt.png";
import "./Splash.scss";



function Splash() {

    return (
        <div className="spl-scrn">
            <title>Ateker | Storebook</title>
            <div className="logo">
                <img className="icn" src={logo} alt="Storebook" />
                <img className="txt" src={logo2} alt="Ateker | Storebook" />
            </div>
            <div className="vrsn">

            </div>
        </div>
    )
}

export default Splash
