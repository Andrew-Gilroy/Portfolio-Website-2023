//PLUGINS & DEPS
import React from 'react';
import SEO from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";

import PROJECT_CUPBOARD_COMBINER from "../components/Project_Detail/cupboard_combiner/cupboard_combiner.js";
import Footer from "../components/Footer/Footer.js";

//CSS


const Project_Cupboard_Combiner_Page = () => ( 
  <>
    <Layout pageTitle="cupboard"/>
    <SEO title="Cupboard Combiner" />
    <PROJECT_CUPBOARD_COMBINER/>
   
    <Footer/>
  </>
)

export default Project_Cupboard_Combiner_Page

