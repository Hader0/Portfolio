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
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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

    const nextProject = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % Object.keys(projects).length);
          setIsTransitioning(false);
        }, 500);
      };
      
      const previousProject = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + Object.keys(projects).length) % Object.keys(projects).length);
          setIsTransitioning(false);
        }, 500);
      };

    const currentProject = projects[`project${currentProjectIndex + 1}`];

    return (
        <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>

            <div className="projects-body">

            <div className={`project-info ${isTransitioning ? 'fading' : ''}`}>
                    <p className="project-title">{currentProject.title}</p>
                    <div className="project-icons">
                        {currentProject.icons.map((icon, index) => {
                            return <img key={index} src={icon} alt="icon" className="project-icon"/>
                        })}
                    </div>
                    <p className="created-by">Developed by <b>{currentProject.createdBy}</b></p>
                    <p className="project-about">{currentProject.about}</p>
                    <div className="project-deployment">Site: <a href={currentProject.deployment}>{currentProject.deployment}</a></div>
                    <div className="project-repository">Code: <a href={currentProject.repository}>{currentProject.repository}</a></div>
                </div>

                <div className="seperator">
                    <hr className="rounded-projects"/>
                </div>

                <div className={`project-image ${isTransitioning ? 'fading' : ''}`}>
                    <img src={`https://placehold.co/400?text=${currentProject.title}`} alt={currentProject.title} />
                </div>

                <div className={`next-arrow arrow-buttons arrow-theme`}>
                    <img src={isDarkMode ? LightArrow : DarkArrow} className="arrow-up" alt="Next Section" onClick={nextProject}/>
                    <img src={isDarkMode ? LightArrow : DarkArrow} className="arrow-down rotate-180" alt="Next Section" onClick={previousProject}/>
                </div>

            </div>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode}/>
        </div>
    )

}

export default Projects