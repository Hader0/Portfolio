import React, { useState } from "react";
import "../styling/main.css";

import ReactIcon from "../images/react-icon.png";
import PythonIcon from "../images/python-icon.png";
import JavascriptIcon from "../images/javascript-icon.png";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

function Main() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="main-page">
            <Header toggleSidebar={toggleSidebar}/>

            <div className="main-body"> 
                <div className="profile-section">
                    <p className="profile-role">Junior Full-Stack Developer</p>

                    <div className="profile-icons">
                        <img src={PythonIcon} alt="Python" className="icons"/>
                        <img src={ReactIcon} alt="React" className="icons"/>
                        <img src={JavascriptIcon} alt="Javascript" className="icons"/>
                    </div>

                    <hr className="rounded"/>

                    <p className="profile-about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum, massa eu tristique commodo, massa erat aliquam quam, sit amet efficitur felis tellus id nulla. Morbi libero nisl, dapibus a libero in, tempus commodo leo. Nunc ultrices vulputate nulla in aliquam. Vivamus id mattis arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Main