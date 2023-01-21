
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//import { useStaticQuery, graphql } from "gatsby";

//IMAGE IMPORTS
import facts_animated_video from "../../../images/facts/facts_animated_landingpage_video.mp4";

//CSS
//are these imports used or required? doesn't seem so!
import project_factsCSS from "../../project_detail/facts/facts.css";
import project_detailsCSS from "../../project_detail/project_detail.css";



const FACTS = () => { 
    
return (
    <>
        <div className="divider">
            <h2 className="divider_heading">Facts.com</h2>
        </div>
        <div className="project_hero_image_wrapper">
            <StaticImage src="../../../images/facts/facts_hero.png" alt="project hero banner" className="project_hero_image"/>
            <img src={"../../../images/facts/facts_hero.png}" alt="project hero banner" className="project_hero_image"/>
            {/*<Img fluid={data.facts_hero_image.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/>*/}
        </div>
        <div className="project_details_flex_row --margin-top">
            <div className="project_details_text_wrapper">
                <h2 className="project_details_subheading">Initial Brief</h2>
                <hr></hr>
                <p className="project_details_body_text">
                    This project required the creation of a full set of design collateral and branding for a fictitious website, Facts.com. Facts.com is a website/service that seeks to dispel common misconceptions.
                    <br></br>
                    <br></br>
                    Deliverables for this project were a high fidelity landing page mockup, branded logo, twitter/facebook account mockups with banners along with a branding guidelines document.
                    <br></br>
                    <br></br>           
                </p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>
        {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Logo Design</h2>
                <hr></hr>
                <p className="project_details_body_text">
                    Careful considerations were made in selecting a range of fonts and colors that represented the service. Facts.com would be presenting information that may be in conflict with a users own preconceptions. This new information could be a shock to the user and as such the brand should present itself as a stable authority. Stability and authority were identified as two primary design goals for this project. Cool blues with a serif font for the main logo were thus chosen.
                    <StaticImage src="../../../images/facts/facts_logo1.jpg" alt="Facts.com - Primary logo" className="project_details_image--fullWidth"/>
                    {/*<Img fluid={data.facts_logo.childImageSharp.fluid} alt="Facts.com - Primary logo" className="project_details_image--fullWidth"/>*/}           
                </p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>
        {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Banner &amp; Branding Guidelines</h2>
                <hr></hr>
                <p className="project_details_body_text">Several web banners were created along with a comprehensive branding guidelines document.</p>
                <StaticImage src="../../../images/facts/facts_banner.png" alt="Facts.com - banner" className="project_details_image--fullWidth box_shadow"/>
                <StaticImage src="../../../images/facts/facts_branding1.png" alt="Facts.com - reversed logo" className="project_details_image--fullWidth box_shadow"/>
                <StaticImage src="../../../images/facts/facts_branding2.png" alt="Facts.com - style guide" className="project_details_image--fullWidth box_shadow"/>
                {/*<Img fluid={data.facts_banner.childImageSharp.fluid} alt="Facts.com - banner" className="project_details_image--fullWidth box_shadow"/>*/}
                {/*<Img fluid={data.facts_branding_1.childImageSharp.fluid} alt="Facts.com - reversed logo" className="project_details_image--fullWidth box_shadow"/>*/}
                {/*<Img fluid={data.facts_branding_2.childImageSharp.fluid} alt="Facts.com - style guide" className="project_details_image--fullWidth box_shadow"/>*/}
                <div className="facts_pallette_wrapper">
                    <div className="facts_brand_color_1"></div>
                    <div className="facts_brand_color_2"></div>
                    <div className="facts_brand_color_3"></div>
                    <div className="facts_brand_color_4"></div>
                </div>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>
        {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h3 className="project_details_subheading">Landing Page</h3>
                <hr></hr>
                <p className="project_details_body_text">Based upon the branding guidelines and primary design goals a mockup for a landing page was created. Here the user can quickly learn about the service and subscribe to weekly curated facts to be delivered via email.  </p>
                <video loop autoPlay muted width="100%">
                    <source src={facts_animated_video} type="video/mp4"></source>
                </video>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>
    </>
    )
}

export default FACTS
