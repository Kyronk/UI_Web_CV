import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import About from "./components/about section/About";
import Home from "./components/home section/Home";
import Navbar from './components/navbar/Navbar';
import Skills from "./components/skills section/Skills";
import Project from "./components/projects section/Project";
import Footer from "./components/footer/Footer";
import Contact from './components/contact section/Contact';

import { Routes, Route } from "react-router-dom"
import Layout from './page/Layout';
import HomePage from './page/HomePage';
import ProjectPage from './page/ProjectPage/ProjectPage';
import ProjectPage_2 from './page/ProjectPage_2/ProjectPage_2';
import ProjectPage_3 from './page/ProjectPage_3/ProjectPage_3';



function App() {
    // const [count, setCount] = useState(0)

    return (
        // <>
        //     <Navbar />
        //     <Home />
        //     <About />
        //     <Skills />
        //     <Project />
        //     <Contact />
        //     <Footer />
        // </>

        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<HomePage />}/>
                    <Route path='/project-1' element={<ProjectPage />} />
                    <Route path='/project-2' element={<ProjectPage_2 />} />
                    <Route path='/project-3' element={<ProjectPage_3 />} />

                </Route>
            </Routes>
        </>
    )
}

export default App
