import React from 'react'

import "./skills.css";

// icon
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
    return (
        <section id="skill" className='skills container'>
            <div className='sectionTitle'>
                <span className='titleNumber'>02.</span>
                <h5 className='titleText'>Skills
                <div className='underline'><span></span></div></h5>
            </div>

            {/* skills container */}
            <div className='skillsContainer grid'>
                {/* singleSkills */}
                <div className='skillGroup'>
                    <div className='groupTitle'>
                        <h2 className='title'>Web Development</h2>
                        <span className='subTitle'></span>
                    </div>

                    <div className='generalSkills'>
                        {/* Single skill div */}
                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaReact  className='icon'/>
                            </div>
                            <span className="skillName">React JS</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <RiJavascriptFill  className='icon'/>
                            </div>
                            <span className="skillName">JavaScript</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <IoLogoSass className='icon'/>
                            </div>
                            <span className="skillName">Sass</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaCss3  className='icon'/>
                            </div>
                            <span className="skillName">Css3</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaHtml5  className='icon'/>
                            </div>
                            <span className="skillName">HTML5</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaNodeJs className='icon'/>
                            </div>
                            <span className="skillName">Node JS</span>
                        </div>
                        {/* =========== */}

                        
                    </div>
                </div>

                <div className='skillGroup'>
                    <div className='groupTitle'>
                        <h2 className='title'>Database </h2>
                        <span className='subTitle'></span>
                    </div>

                    <div className='generalSkills'>
                        {/* Single skill div */}
                        
                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <SiMysql className='icon'/>
                            </div>
                            <span className="skillName">MySQL</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <BiLogoPostgresql className='icon'/>
                            </div>
                            <span className="skillName">Postgres </span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <DiMongodb className='icon' />
                            </div>
                            <span className="skillName">MongoDB </span>
                        </div>
                        {/* =========== */}
                        
                    </div>
                </div>

                <div className='skillGroup'>
                    <div className='groupTitle'>
                        <h2 className='title'>Other Skills</h2>
                        <span className='subTitle'></span>
                    </div>

                    <div className='generalSkills'>
                        {/* Single skill div */}
                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaGitSquare className='icon'/>
                            </div>
                            <span className="skillName">Git</span>
                        </div>
                        {/* =========== */}

                        <div className='singleSkill'>
                            <div className='iconBox flex'>
                                <FaGitlab className='icon'/>
                            </div>
                            <span className="skillName">GitLab</span>
                        </div>
                        {/* =========== */}

                        
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills