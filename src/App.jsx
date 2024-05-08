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

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </>
    )
}

export default App
