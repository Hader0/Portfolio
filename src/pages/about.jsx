import React, { useState, useEffect } from "react";

import "../styling/main.css";
import "../styling/about.css";

import LightArrow from "../images/arrow-white.png";
import DarkArrow from "../images/arrow-black.png";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { personality, hobbies, countryBeginnings, workLife } from './components/about-content';

function About() {
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);
    const [transitionClass, setTransitionClass] = useState("");
    const [rotation, setRotation] = useState(0);

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

    // Function to change section for about titles and content
    const nextSection = () => {
        setTransitionClass("fade-out");
        setTimeout(() => {
            setCurrentSection((currentSection + 1) % 2);
            setTransitionClass("fade-in");
            setRotation(rotation + 180);
        }, 500);
    };

    // Check if theme is saved in local storage
    useEffect(() => {
        if (transitionClass === "fade-in") {
            setTimeout(() => setTransitionClass(""), 500);
        }
    }, [transitionClass]);

    const titles = [
        ["Hobbies", "Personality"],
        ["Country Beginnings", "Work Life"]
    ];

    return (
        <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>

            <div className="about-body">
                <div className="about-title">
                    <hr className="rounded-about"/>
                    <p className="about-heading">ABOUT</p>
                    <hr className="rounded-about"/>
                </div>

                <div className="about-infomation"> 

                    <div className={`about-section ${transitionClass}`}>
                        <p className="info-title">{titles[currentSection][0]}</p>
                        <div className="info-about">{currentSection === 0 ? hobbies : countryBeginnings}</div>
                    </div>    

                    <div className="gap"></div>
                    
                    <div className={`about-section ${transitionClass}`}>
                        <p className="info-title">{titles[currentSection][1]}</p>
                        <div className="info-about">{currentSection === 0 ? personality : workLife}</div>
                    </div>

                </div>

                <div className={`next-arrow arrow-theme rotate-${rotation % 360}`} onClick={nextSection}>
                    <img src={isDarkMode ? LightArrow : DarkArrow} className="arrow-hover" alt="Next Section" />
                </div>
            </div>
            
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode}/>
        </div>
    )
}

export default About