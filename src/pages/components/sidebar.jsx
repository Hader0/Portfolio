import React from "react";
import "../../styling/main.css";

import whiteCross from "../../images/cross-white.png";
import blackCross from "../../images/cross-black.png";

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <img src={whiteCross} className="close-sidebar" onClick={toggleSidebar}></img>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Sidebar;
