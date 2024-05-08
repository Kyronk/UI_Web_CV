import React from 'react';
import "./project.css";

//
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const data = [
    {
        id: 1,
        image: "https://pbs.twimg.com/media/FUvqtImUsAA2I7B.png",
        demo: "",
        live: "",
        github: "",
        title: "Web eco 1",
        desc: "lorem is content desc about project lorem is content desc about project lorem is content desc about project ...",
        tech1: "html",
        tech2: "css",
        tech3: "Javascript",
        tech4: "Php"
    },

    {
        id: 2,
        image: "https://pbs.twimg.com/media/FUvqtImUsAA2I7B.png",
        demo: "",
        live: "",
        github: "",
        title: "Web eco 1",
        desc: "lorem is content desc about project lorem is content desc about project lorem is content desc about project ...",
        tech1: "html",
        tech2: "css",
        tech3: "Javascript",
        tech4: "Php"
    },

    {
        id: 3,
        image: "https://pbs.twimg.com/media/FUvqtImUsAA2I7B.png",
        demo: "",
        live: "",
        github: "",
        title: "Web eco 1",
        desc: "lorem is content desc about project lorem is content desc about project lorem is content desc about project ...",
        tech1: "html",
        tech2: "css",
        tech3: "Javascript",
        tech4: "Php"
    },

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

const dataMyProjectList = [
    {
        id: 1,
        image: [
            {id: 1, img: ""},
            {id: 1, img: ""},
            {id: 1, img: ""},
            {id: 1, img: ""},
        ],
        demo: "",
        live: "",
        github: "https://github.com/Kyronk/e-commerce-tgdd-",
        title: "Web eco 1",
        desc: "",
        tech1: "html",
        tech2: "css",
        tech3: "Javascript",
        tech4: "Php"
    },
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
                                <a href={item.demo} target='_blank'>
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
                            <a href="" target='_blank'>
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
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Project;