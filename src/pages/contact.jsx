import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

import "../styling/contact.css";

import GithubBlack from "../images/github-black.png";
import GithubWhite from "../images/github-white.png";
import LinkedinBlack from "../images/linkedin-black.png";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

function Contact() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [message, setMessage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g9ytcpv', 'template_n9c7sc4', form.current, 'jt0cU7YAZASKePKCV')
        .then((result) => {
            console.log(result.text);
            setMessage('Email sent successfully!');
            e.target.reset();
            setTimeout(() => {
                setMessage('');
            }, 10000);
        }, (error) => {
            console.log(error.text);
            setMessage('Something went wrong. Please try again later.');
            setTimeout(() => {
                setMessage('');
            }, 10000);
        });
    };


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

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>

            <div className="contact-section">
                <h2>CONTACT</h2>
                <div className="social-icons">
                    <a href="https://github.com/Hader0">
                        <img src={GithubBlack} alt="Github Icon" className="contact-icon github-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/hayden-bradford-983169175/">
                        <img src={LinkedinBlack} alt="LinkedIn Icon" className="contact-icon linkedin-icon" />
                    </a>
                    
                </div>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Peter Parker" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="spiderman@marvel.com" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Message..." required></textarea>

                    {message && <p className="submit-message">{message}</p>}

                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode}/>
        </div>
    );
}

export default Contact