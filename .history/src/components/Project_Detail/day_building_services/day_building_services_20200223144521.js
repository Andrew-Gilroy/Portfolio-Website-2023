
import React from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

//IMAGE IMPORTS
import day_building_logo from "../../../images/svg/day_logo_black.svg";
/* import day_building_hero from "../../../images/day_building/day_building_hero.png";
import day_building_web_mockup_1 from "../../../images/day_building/day_building_web_mockup1.png";
import day_building_web_mockup_2 from "../../../images/day_building/day_building_web_mockup2.png"; */

//CSS

//graphQL snippet to reduce code repetition within query below
export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

const DAYBUILDING = () => { 
    
    const data = useStaticQuery(
        graphql`
        query {
            day_building_hero: file(relativePath: { eq: "day_building/day_building_hero.png" }) {
                ...fluidImage
            }
            day_building_web_mockup_1: file(relativePath: { eq: "day_building/day_building_web_mockup1.png" }) {
                ...fluidImage
            }
            day_building_web_mockup_2: file(relativePath: { eq: "day_building/day_building_web_mockup2.png" }) {
                ...fluidImage
            }
          }
      `
    );

return (
    <>
    <div className="divider">
        <h2 className="divider_heading">Day Building Services</h2>
    </div>
        <div className="project_hero_image_wrapper">
            <Img fluid={data.day_building_hero.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/>
        </div>   
    <div className="project_details_flex_row --margin-top">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Initial Brief</h2>
            <hr></hr>
            <p className="project_details_body_text">Day Building Services is a small construction firm based in Aylesbury England. The brief was to develop an updated brand identity along with a new website. The previous website was badly in need of a complete overhaul as it had been thrown together by the business owner - Mr.Day, using a WYSIWYG website builder.
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
                I later produced a logo utilising clean geometric lines with bold widths and color. The aim here was to communicate strength, trust and reliability - qualities that are important when looking to engage with a construction firm.
            </p>
            <img src={day_building_logo} alt="Day Building Services - Logo" className="project_details_image--fullWidth"></img>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Website</h2>
            <hr></hr>
            <p className="project_details_body_text">
                The previous website which was dark, outdated and cluttered was redesigned to give the clients work a modern and friendly showcase platform. Bright imagery was utilised to showcase how the client could deliver projects that would increase the value of their homes by opening up and renovating the available living spaces. Polaroid style images when then used to convey a sense of personability in an attempt at making the business appear more approachable and to encourage clients to imagine how their own projects might turn out.
            </p>
            <Img fluid={data.day_building_web_mockup_1.childImageSharp.fluid} alt="Day Building Services - Home Page" className="project_details_image--fullWidth"/>
            <Img fluid={data.day_building_web_mockup_2.childImageSharp.fluid} alt="Day Building Services - Services Page" className="project_details_image--fullWidth"/>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    {/*<!--END OF PROJECTS SECTION-->*/}
    </>
    )
}

export default DAYBUILDING
