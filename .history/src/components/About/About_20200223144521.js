import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdobe } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faPencilAlt, faCode, faVideo, faThLarge, faBullhorn, faCameraRetro  } from '@fortawesome/free-solid-svg-icons';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

//IMAGE IMPORTS
//import profile_image from "../../images/profile_picture/profile_image_cropped.png";
import photoshop_cc from "../../images/svgicons/photoshop-cc.svg";
import illustrator_cc from "../../images/svgicons/adobe-illustrator-cc.svg";
import indesign_cc from "../../images/svgicons/indesign-cc.svg";
import adobeXd_cc from "../../images/svgicons/adobe-xd.svg";
import lightroom_cc from "../../images/svgicons/lightroom_classic_cc.svg";
import after_effects_cc from "../../images/svgicons/after-effects-cc.svg";
import premiere_cc from "../../images/svgicons/premiere-cc.svg";
import blender from "../../images/svgicons/blendericon.svg";
import html from "../../images/svgicons/html5.svg";
import css from "../../images/svgicons/css.svg";
import javascript from "../../images/svgicons/javascript.svg";
import npm from "../../images/svgicons/npm.svg";
import react from "../../images/svgicons/react.svg";
import gatsby from "../../images/svgicons/gatsby.svg";

//CSS
import AboutCSS from "../About/AboutCSS.css";

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


const About = () => { 
    const data = useStaticQuery(
        graphql`
        query {
            profileImage: file(relativePath: { eq: "profile_picture/andrew_profile_image.png" }) {
                ...fluidImage
            }
            profileImageCropped: file(relativePath: { eq: "profile_picture/andrew_profile_image_cropped.png" }) {
                ...fluidImage
            }
        }
      `
    );
    return (    
    <>
    <a href="/" id="about" className="hidden_A_link" aria-hidden="true"></a>
        <div className="about_grid_wrapper">
            {/* <img src={profile_image} alt="Andrew's Profile Image" className="about_profile_image--mobile"></img> */}
            <Img fluid={data.profileImageCropped.childImageSharp.fluid} alt="Andrew's Profile Image" className="about_profile_image--mobile"/>
            <div className="about_text_wrapper">
                <h2 className="about_title">ABOUT</h2>
                <hr id="aboutHR"></hr>
                <p className="about_text">I am a creative design professional based in Barcelona. I have 5 years design experience across a broad spectrum of competencies:</p>
                <ul className="about_paragraph_list">
                    <li><FontAwesomeIcon icon={faPencilAlt} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Logo Design &amp; Branding</h3></li>
                    <li><FontAwesomeIcon icon={faCode} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">HTML / CSS / Javascript</h3></li>
                    <li><FontAwesomeIcon icon={faThLarge} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">3D Rendering</h3></li>
                    <li><FontAwesomeIcon icon={faUsers} className="about_paragraph_list_icon pad1"/><h3 className="about_paragraph_list_text">UX &amp; Concept Design</h3></li>
                    <li><FontAwesomeIcon icon={faVideo} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Video Editing &amp; Graphics</h3></li>
                    <li><FontAwesomeIcon icon={faBullhorn} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Digital Marketing</h3></li>
                    <li><FontAwesomeIcon icon={faAdobe} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Adobe Creative Cloud</h3></li>
                    <li><FontAwesomeIcon icon={faCameraRetro} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Digital Photography</h3></li>
                </ul>
                <p className="about_text">I am also a recent graduate with a BSc in Digital Technology &amp; Design with a distinction pass. Here I gained invaluable experience working in a remote agile environment with cross functional teams. I also project managed several of the teams and helped deliver three major projects.</p>
                <div className="svg_icons_wrapper">
                    <img src={photoshop_cc} title="Adobe Photoshop" alt="Adobe Photoshop" className="svg_icon"></img>
                    <img src={illustrator_cc} alt="Adobe Illustrator" title="Adobe Illustrator" className="svg_icon"></img>
                    <img src={indesign_cc} alt="Adobe Indesign" title="Adobe Indesign" className="svg_icon"></img>
                    <img src={adobeXd_cc} alt="Adobe Xd" title="Adobe Xd" className="svg_icon"></img>
                    <img src={lightroom_cc} alt="Adobe Lightroom" title="Adobe Lightroom" className="svg_icon"></img>
                    <img src={after_effects_cc} alt="Adobe AfterEffects" title="Adobe After Effects" className="svg_icon"></img>
                    <img src={premiere_cc} alt="Adobe PremierPro" title="Adobe Premier Pro" className="svg_icon"></img>
                    <img src={blender} alt="Blender" title="Blender" className="svg_icon"></img>
                </div>
                <div className="svg_icons_wrapper-webdev">
                    <img src={html} alt="Html" title="Html" className="svg_icon"></img>
                    <img src={css} alt="CSS" title="CSS" className="svg_icon"></img>
                    <img src={javascript} alt="Javascript" title="Javascript" className="svg_icon"></img>
                    <img src={npm} alt="NPM" title="NPM" className="svg_icon"></img>
                    <img src={react} alt="React" title="React" className="svg_icon"></img>
                    <img src={gatsby} alt="Gatsby" title="Gatsby" className="svg_icon"></img>
                </div>
            </div>
            {/* <!--end of aboutTextWrapper-->}
            {<!--end of svgIconsWrapper--> */}
            <div className="about_profile_image_wrapper">
            </div>
            {/* <!--end of profile wrapper--> */}
        </div>
        {/* <!--END OF ABOUT SECTION--> */}
    </>
    )
}

export default About
