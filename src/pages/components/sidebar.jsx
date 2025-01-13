import React from "react";
import "../../styling/main.css";

import whiteCross from "../../images/cross-white.png";
import blackCross from "../../images/cross-black.png";

function Sidebar({ isOpen, toggleSidebar, isDarkMode }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isDarkMode ? 'dark-mode' : ''}`}>
            <img src={isDarkMode ? blackCross : whiteCross} className="close-sidebar" onClick={toggleSidebar} />
            <ul>
                <li >HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Sidebar;
