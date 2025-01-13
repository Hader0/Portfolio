import React from "react";
import "../../styling/main.css";

import DarkMenu from "../../images/menu-black.png";
import LightMenu from "../../images/menu-white.png";
import DarkMoon from "../../images/moon-black.png";
import LightMoon from "../../images/moon-white.png";
import DarkSun from "../../images/sun-black.png";
import LightSun from "../../images/sun-white.png";


function Header({ toggleSidebar }) {

    return (
        <div className="header">

            <div className="header-name">Hayden Bradford</div>
            <div className="header-icons">

                <div className="theme">
                    <img src={DarkMoon} />
                </div>

                <div className="menu" onClick={toggleSidebar}>
                    <img src={DarkMenu} />
                </div>

            </div>

        </div>
    )
}

export default Header