//PLUGINS & DEPS
import React from 'react';
import SEO from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";

import FACTS from "../components/Project_Detail/facts/facts.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const Project_Facts = () => ( 
  <>
    <Layout pageTitle="Facts.com"/>
    <SEO title="Facts.com" />
    <FACTS/>
   
    <Footer/>
  </>
)

export default Project_Facts

