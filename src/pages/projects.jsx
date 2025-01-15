import React, { useState, useEffect } from "react";

import "../styling/main.css";
import "../styling/projects.css";

import LightArrow from "../images/arrow-white.png";
import DarkArrow from "../images/arrow-black.png";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { projects } from "./components/projects-content";

function Projects() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [rotation, setRotation] = useState(0);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const rotate = () => {
        setRotation(rotation + 180);
    }

     // Check if theme is saved in local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }
    }, []);
    
    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = !isDarkMode ? "dark" : "light";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>

            <div className="projects-body">

                <div className="project-info">
                    <p className="project-title">{projects.project1.title}</p>
                    <div className="project-icons">
                        {projects.project1.icons.map((icon, index) => {
                            return <img key={index} src={icon} alt="icon" className="project-icon"/>
                        })}
                    </div>
                    <p className="created-by">Developed by <b>{projects.project1.createdBy}</b></p>
                    <p className="project-about">{projects.project1.about}</p>
                    <div className="project-deployment">Site: <a href={projects.project1.deployment}>{projects.project1.deployment}</a></div>
                    <div className="project-repository">Code: <a href={projects.project1.repository}>{projects.project1.repository}</a></div>
                </div>

                <div className="seperator">
                    <hr className="rounded-projects"/>
                </div>

                <div className="project-image">
                    <img src={`https://placehold.co/400?text=${projects.project1.title}`} alt={projects.project1.title} />
                </div>

                <div className={`next-arrow arrow-theme rotate-${rotation % 360}`} onClick={rotate}>
                    <img src={isDarkMode ? LightArrow : DarkArrow} className="arrow-up" alt="Next Section" />
                    <img src={isDarkMode ? LightArrow : DarkArrow} className="arrow-down" alt="Next Section" />
                </div>

            </div>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode}/>
        </div>
    )

}

export default Projects