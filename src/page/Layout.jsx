import React from 'react'
import {Outlet} from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import Contact from '../components/contact section/Contact';
import Footer  from '../components/footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            
            <Outlet />
            
            <Contact />
            <Footer />
        </>
    )
}

export default Layout