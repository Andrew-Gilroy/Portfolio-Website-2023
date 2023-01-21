//PLUGINS & DEPS
import React from 'react';
import SEO from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
import DAYBUILDING from "../components/Project_Detail/day_building_services/day_building_services.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const project_day_building_services = () => ( 
  <>
    <Layout pageTitle="Day Building Services"/>
    <SEO title="Day Building Services" />
    <DAYBUILDING/>
   
    <Footer/>
  </>
)

export default project_day_building_services

