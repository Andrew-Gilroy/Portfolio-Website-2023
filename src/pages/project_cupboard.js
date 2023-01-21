//PLUGINS & DEPS
import React from 'react';
import Seo from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";

import Project_cupboard_combiner from "../components/Project_Detail/cupboard_combiner/cupboard_combiner.js";
import Footer from "../components/Footer/Footer.js";

//CSS


const Project_Cupboard_Combiner_Page = () => ( 
  <>
    <Layout pageTitle="cupboard"/>
    <Seo title="Cupboard Combiner" />
    <Project_cupboard_combiner/>
   
    <Footer/>
  </>
)

export default Project_Cupboard_Combiner_Page

