//PLUGINS & DEPS
import React from 'react';
import Seo from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";

import Rendering_3D from "../components/Project_Detail/rendering_3d/rendering_3d.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const Project_Rendering_3d = () => ( 
  <>
    <Layout pageTitle="3D Rendering"/>
    <Seo title="3D Rendering" />
    <Rendering_3D/>
   
    <Footer/>
  </>
)

export default Project_Rendering_3d

