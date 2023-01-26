//PLUGINS & DEPS
import React from 'react';
import Seo from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS

import Other from "../components/Project_Detail/other_projects/other_projects.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const Project_Other_Projects = () => ( 
  <>
    <Layout pageTitle="Other Projects"/>
    <Seo title="Other Projects" />
    <Other/>
    <Footer/>
  </>
)

export default Project_Other_Projects

