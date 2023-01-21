//PLUGINS & DEPS
import React from 'react';
import Seo from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS
import Daybuilding from "../components/Project_Detail/day_building_services/day_building_services.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts

const project_day_building_services = () => ( 
  <>
    <Layout pageTitle="Day Building Services"/>
    <Seo title="Day Building Services" />
    <Daybuilding/>
   
    <Footer/>
  </>
)

export default project_day_building_services

