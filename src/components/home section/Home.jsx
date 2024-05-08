import React from 'react'
import "./home.css";
// icon
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { TbArrowBigRightLine } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";

const Home = () => {
    return (

        <section id='home' className="home section">

            {/* this div will be only visible at wider screen */}
            <div className='leftIcons'>
                <div className='socials grid'>
                    <a href="#" target='_blank'>
                        <IoLogoGithub  className='icon' />
                    </a>

                    <a href="#" target='_blank'>
                        <FaTwitter  className='icon' />
                    </a>

                    <a href="#" target='_blank'>
                        <FaYoutube  className='icon' />
                    </a>

                    <div className='line'></div>

                </div>
            </div>

            {/* home content */}
            <div className='container homeContainer'>
                <span className='introText'>
                    Hi, my name is,
                </span>
                <h1 className='title'>Mạnh Tường </h1>

                <span className='subTitle'>
                    I develope scalable web based applications and software.
                </span>

                <p className='homeParagraph'>
                    I code within require coding standards and styles to server the exact need.

                </p>

                <div className='lowerHomeSection'>
                    <button className='contactBtn'>
                        <a href="#contact" className='flex'>
                            Contact Me <TbArrowBigRightLine className='icon' />
                        </a>

                    </button>

                    <div className='scrollDiv'>
                        <a href="#about" className='flex'>
                            <h6 className='scroll'>Scroll Down</h6> 
                            <FiChevronsDown className='icon' />
                        </a>
                    
                    </div>

                </div>

            </div>

            {/* right div, with email address (will also be visible at a wider screen only )*/}
            <div className='rightEmail'>
                <div>
                    <div className='emailAddress'>
                        <a href="" target='_blank'>
                            youremail@gmail.com
                        </a>
                    </div>

                    <div className='line'></div>

                </div>
            </div>

        </section>
    )
}

export default Home