import React from 'react'
import "./about.css";

import { MdOutlineCloudDownload } from "react-icons/md";
import ava from "../../assets/ava3.png";

const About = () => {
    return (
        <section id="about" className='about section container'>
            <div className='sectionTitle'>
                <span className='titleNumber'>01.</span>
                <h5 className='titleText'>About Me
                    <div className='underline'>
                        <span></span>
                    </div>
                </h5>

            </div>

            <div className="sectionContent grid">
                <div className='textSection'>
                    <h4>
                        
                        My name is Mạnh Tường. With the professional knowledge I have learned at school and through my long-term self-study.  
                        <br/>I hope to become a programmer. Therefore, I always want to find a professional working environment where I can continue to learn, improve, and develop myself.
                    </h4>

                    <div className='aboutBtn'>
                        <a 
                            // href="cv_demo.docx" 
                            // download="cv_demo.docx"
                            href="PHAM-BAO-MANH-TUONG_Web_developer.pdf" 
                            download="PHAM-BAO-MANH-TUONG_Web_developer.pdf"
                            className='flex'>
                            Download Cv <MdOutlineCloudDownload className='icon' />
                        </a>
                    </div>
                </div>

                <div className='aboutImgDiv'>
                    <img src={ava} alt="" className='aboutImg' />

                </div>
            </div>



        </section>
    )
}

export default About