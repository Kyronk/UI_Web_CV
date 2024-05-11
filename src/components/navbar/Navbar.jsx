import React, { useState } from 'react'

import "./navbar.css";

// icon
import { MdClose } from "react-icons/md";
import { RiGridFill } from "react-icons/ri";

const Navbar = () => {

    // code to toggle on and off the navbar at small width
    const [active, setActive ] = useState('navBar');

    // this will bring in the navbar from the top
    const showNavBar = () => {
        setActive('navBar activeNavbar');
    }

    // this will hide the navbar again
    const removeNavBar = () => {
        setActive("navBar");
    }

    // code statement to add background color to the header
    const [activeHeader, setActiveHeader] = useState("header");
    const addBg = () => {
        if(window.scrollY >= 10) {
            setActiveHeader("header activeHeader")
        } else {
            setActiveHeader("header")
        }
    }
    window.addEventListener('scroll', addBg);
    // console.log(window.)


    return (
        // <header className='header'>
        <header className={activeHeader}>
            <div className='logoDiv'>
                <h1 className='logo'><a href="/">Ai.</a></h1>
            </div>

            {/* <div className='navBar'> */}
            <div className={active}>
                <ul onClick={removeNavBar} className='navLists'>
                    <li className='navItem'>
                        <a href="#about" className='navLink'>
                        <span className='headerNumber'>1.</span>
                        <span>About</span></a>
                    </li>

                    <li className='navItem'>
                        <a href="#skill" className='navLink'>
                        <span className='headerNumber'>2.</span>
                        <span>Skills</span></a>
                    </li>

                    <li className='navItem'>
                        <a href="#projects" className='navLink'>
                        <span className='headerNumber'>3.</span>
                        <span>Projects</span></a>
                    </li>

                    <li className='navItem'>
                        <a href="#contact" className='navLink'>
                        <span className='headerNumber'>4.</span>
                        <span>Contact</span></a>
                    </li>

                    <button className='btn'>
                        <a href="">Resume</a>
                    </button>

                </ul>


                <div onClick={removeNavBar} className='closeNavBar'>
                    <MdClose className='icon' />
                </div>
            </div>


            <div onClick={showNavBar} className='toggleNavBar'>
                <RiGridFill className='icon'/>
            </div>

        </header>
    )
}

export default Navbar