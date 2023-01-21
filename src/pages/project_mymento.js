//PLUGINS & DEPS
import React from 'react';
import Seo from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";

import Project_Mymento from "../components/Project_Detail/mymento/mymento.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const Project_Cupboard_Combiner_Page = () => ( 
  <>
    <Layout pageTitle="Mymento"/>
    <Seo title="Mymento" />
    <Project_Mymento/>
   
    <Footer/>
  </>
)

export default Project_Cupboard_Combiner_Page

