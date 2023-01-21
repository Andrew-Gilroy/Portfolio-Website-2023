import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

//CSS
import ProjectsCSS from "../Projects/ProjectsCSS.css";

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

const Projects = () => {
    const data = useStaticQuery(
        graphql`
        query {
            cupboardCombinerMockup: file(relativePath: { eq: "cupboard_combiner/cupboard_combiner_mockup.png" }) {
                ...fluidImage
            }
            myMentoMockup: file(relativePath: { eq: "mymento/myMento_project_image.png" }) {
                ...fluidImage
            }
            renderingMockup: file(relativePath: { eq: "render_3d/3drendering-6.png" }) {
                ...fluidImage
            }
            factsMockup: file(relativePath: { eq: "facts/facts_logo1_crop_mockup2.png" }) {
                ...fluidImage
            }
            dayMockup: file(relativePath: { eq: "day_building/day_building_web_mockup1.png" }) {
                ...fluidImage
            }
            telfordMockup: file(relativePath: { eq: "telford_paints/telford_mockup.png" }) {
                ...fluidImage
            }
            othersMockup: file(relativePath: { eq: "other_projects/other_projects_7.png" }) {
                ...fluidImage
            }
          }
      `
    );

    return(
    <>
    <a href="/" id="projects" className="hidden_A_link" aria-hidden="true"></a>
    <div className="divider">
        <h2 className="divider_heading">PROJECTS</h2>
    </div>
    <a href="/" id="cupboard" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_cupboard/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.cupboardCombinerMockup.childImageSharp.fluid} alt="Cupboard Combiner App Mockup" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_cupboard/" className="project_page_text_link project_title">Cupboard Combiner</Link>
            <hr></hr>
            <p className="project_text">Cupboard Combiner is a React web app that generates random meals based on what you have left in the cupboard.</p>
            <ul className="project_tag">
                <li>React</li>
                <li>Javascript</li>
                <li>Web Design</li>
                <li>Web Development</li>
            </ul>  
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="myMento" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_mymento/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.myMentoMockup.childImageSharp.fluid} alt="myMento Mockup" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_mymento/" className="project_page_text_link project_title">myMento</Link>
            <hr></hr>
            <p className="project_text">An indepth UXCD team project - myMento is a smart phone application concept that allows users to preserve their precious memories. </p>
            <ul className="project_tag">
                <li>UX Design</li>
                <li>Concept Development</li>
                <li>Video Editing</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="3d_Rendering" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_rendering_3d/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.renderingMockup.childImageSharp.fluid} alt="3D Rendering" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_rendering_3d/" className="project_page_text_link project_title">3d Rendering</Link>
            <hr></hr>
            <p className="project_text">3d Rendering projects used primarily in advertising and logo design.</p>
            <ul className="project_tag">
                <li>Architectural Modelling</li>
                <li>Logo Design</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="facts" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_facts/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.factsMockup.childImageSharp.fluid} alt="Facts Mockup" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_facts/" className="project_page_text_link project_title">Facts.com</Link>
            <hr></hr>
            <p className="project_text">A full set of marketing materials - twitter, facebook and a website landing page for the fictitious website - Facts.com.</p>
            <ul className="project_tag">
                <li>Logo Design</li>
                <li>Branding</li>
                <li>Web Design</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="daybuild" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_day_building_services/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.dayMockup.childImageSharp.fluid} alt="Day Building Services Mockup" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_day_building_services/" className="project_page_text_link project_title">Day Building Services</Link>
            <hr></hr>
            <p className="project_text">A redesigned set of branding materials and website for a local construction firm.</p>
            <ul className="project_tag">
                <li>Logo Design</li>
                <li>Branding</li>
                <li>Web Design</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="telford" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_telford_paints/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.telfordMockup.childImageSharp.fluid} alt="Telford Mockup" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_telford_paints/" className="project_page_text_link project_title">Telford Paints</Link>
            <hr></hr>
            <p className="project_text">A set of branding materials, logo and stationary based around a central icon for a paint firm.</p>
            <ul className="project_tag">
                <li>Logo Design</li>
                <li>Branding</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    <a href="/" id="otherprojects" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_other_projects/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            <Img fluid={data.othersMockup.childImageSharp.fluid} alt="Other projects" className="project_image"/>
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_other_projects/"  className="project_page_text_link project_title">Other Projects</Link>
            <hr></hr>
            <p className="project_text">Here are some examples of my other design projects. A broad mix of graphic design and illustration.</p>
            <ul className="project_tag">
                <li>Graphic Design</li>
                <li>Illustration</li>
            </ul>
        </div>
    </div>
    {/* End of row*/}
    </>
    )
}

export default Projects
