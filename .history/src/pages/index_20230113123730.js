//PLUGINS & DEPS
import Reactgatsby --version from 'react';
import * as React from "react"
import Layout from "../layouts/Layout.js";
import SEO from "../components/seo";
import Helmet from "react-helmet"

//COMPONENTS
import Hero from "../components/Hero/Hero.js";
import About from "../components/About/About.js";
import Projects from "../components/Projects/Projects.js";
import Contact from "../components/Contact/Contact.js";
import Footer from "../components/Footer/Footer.js";

//CSS
import global from "../styles/global.css";

//JS Scripts


const IndexPage = () => (
  
    <>  
        <Layout pageTitle="Home"/>
        <SEO title="Home" />
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
)

export default IndexPage
