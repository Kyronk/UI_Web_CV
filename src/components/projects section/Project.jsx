import React from 'react';
import "./project.css";

//
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const data = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1715335308/My_CV/Screenshot_2024-05-08_220945_hibgda.png",
        demo: "",
        live: "",
        github: "https://github.com/Kyronk/e-commerce-tgdd-",
        title: "Website ecommerce 1",
        desc: "",
        tech1: "Html",
        tech2: "Tailwind",
        tech3: "ReactJS",
        tech4: "NodeJS",
        tech5: "MongoDB",
        page: "/project-1"
    },

    {
        id: 2,
        image: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1715335301/My_CV/Screenshot_2024-05-10_170015_elh2ej.png ",
        demo: "",
        live: "",
        github: "https://github.com/Kyronk/zillow_mini_full",
        title: "Website House for rent",
        desc: "",
        tech1: "Html",
        tech2: "Tailwind",
        tech3: "ReactJS",
        tech4: "NodeJS",
        tech5: "MySQL",
        page: "/project-2"
    },

    // {
    //     id: 3,
    //     image: "https://pbs.twimg.com/media/FUvqtImUsAA2I7B.png",
    //     demo: "",
    //     live: "",
    //     github: "",
    //     title: "Web eco 1",
    //     desc: "lorem is content desc about project lorem is content desc about project lorem is content desc about project ...",
    //     tech1: "html",
    //     tech2: "css",
    //     tech3: "Javascript",
    //     tech4: "Php",
    //     page: "/project-3"
    // },

    // {
    //     id: 4,
    //     image: "",
    //     demo: "",
    //     live: "",
    //     github: "",
    //     title: "Web eco 1",
    //     desc: "",
    //     tech1: "html",
    //     tech2: "css",
    //     tech3: "Javascript",
    //     tech4: "Php"
    // },
]


const Project = () => {
    return (
        <section id="projects" className='projects container section'>
            <div className='sectionTitle'>
                <span className='titleNumber'>03.</span>
                <h5 className='titleText'>Projects
                    <div className='underline'>
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className='projectContainer grid'>
                {data.map((item, idx) => (
                    <div key={idx} className='singleProject'>

                        <div className='externalLinks flex'>
                            <div className='youtubeIcon'>
                                <a href={item.page} target='_blank'>
                                    <FaYoutube className='icon' />
                                </a>
                            </div>
                            <div className='githubIcon'>
                                <a href={item.github} target='_blank'>
                                    <IoLogoGithub className='icon' />
                                </a>
                            </div>
                                
                        </div>

                        <div className='imgDiv'>
                            <a href={item.page} target='_blank'>
                                <img src={item.image} alt={item.title} />
                            </a>
                        </div>

                        <div className='projectTitle'>
                            <h3>{item.title}</h3>
                        </div>

                        <div className='desc'>
                            {item.desc}
                        </div>
                        
                        <div className='technologies flex'>
                            <small>{item.tech1}</small>
                            <small>{item.tech2}</small>
                            <small>{item.tech3}</small>
                            <small>{item.tech4}</small>
                            <small>{item.tech5}</small>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Project;