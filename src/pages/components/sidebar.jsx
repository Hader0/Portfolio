import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styling/main.css";

import whiteCross from "../../images/cross-white.png";
import blackCross from "../../images/cross-black.png";

function Sidebar({ isOpen, toggleSidebar, isDarkMode }) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('sidebar-active');
        } else {
            document.body.classList.remove('sidebar-active');
        }
    }, [isOpen]);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={isDarkMode ? blackCross : whiteCross} className="close-sidebar" onClick={toggleSidebar} />
            <ul className="links">
                <li><Link to="/" onClick={toggleSidebar}>HOME</Link></li>
                <li><Link to="/about" onClick={toggleSidebar}>ABOUT</Link></li>
                <li><Link to="/projects" onClick={toggleSidebar}>PROJECTS</Link></li>
                <li><Link to="/contact" onClick={toggleSidebar}>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
