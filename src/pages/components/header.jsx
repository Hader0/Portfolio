import React from "react";
import "../../styling/main.css";

import DarkMenu from "../../images/menu-black.png";
import LightMenu from "../../images/menu-white.png";
import DarkMoon from "../../images/moon-black.png";
import LightSun from "../../images/sun-white.png";


function Header({ toggleSidebar, toggleTheme, isDarkMode }) {

    return (
        <div className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

            <div className="header-name"><a href="/">Hayden Bradford</a></div>
            <div className="header-icons">

                <div className="theme" onClick={toggleTheme}>
                    <img 
                        src={isDarkMode ? LightSun : DarkMoon} 
                        alt="Toggle Theme" 
                        className={isDarkMode ? 'dark-mode-hover' : ''} 
                    />
                </div>

                <div className="menu" onClick={toggleSidebar}>
                    <img src={isDarkMode ? LightMenu : DarkMenu} alt="Toggle Sidebar" />
                </div>

            </div>

        </div>
    );
}

export default Header