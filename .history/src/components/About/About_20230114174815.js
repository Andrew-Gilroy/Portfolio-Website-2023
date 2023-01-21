import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuysellads } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faPencilAlt, faCode, faVideo, faThLarge, faBullhorn, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from "gatsby-plugin-image";

//IMAGE IMPORTS
//import profile_image_cropped from "../../images/profile_picture/profile_image_cropped.png";
import photoshop_ccSVG from "../../images/svgicons/photoshop-cc.svg";
import illustrator_ccSVG from "../../images/svgicons/adobe-illustrator-cc.svg";
import indesign_ccSVG from "../../images/svgicons/indesign-cc.svg";
import adobeXd_ccSVG from "../../images/svgicons/adobe-xd.svg";
import lightroom_ccSVG from "../../images/svgicons/lightroom_classic_cc.svg";
import after_effects_ccSVG from "../../images/svgicons/after-effects-cc.svg";
import premiere_ccSVG from "../../images/svgicons/premiere-cc.svg";
import blenderSVG from "../../images/svgicons/blendericon.svg";
import htmlSVG from "../../images/svgicons/html5.svg";
import cssSVG from "../../images/svgicons/css.svg";
import javascriptSVG from "../../images/svgicons/javascript.svg";
import googleMaps from "../../images/svgicons/google_maps.svg";
//import npmSVG from "../../images/svgicons/npm.svg";
import reactSVG from "../../images/svgicons/react.svg";
import gatsbySVG from "../../images/svgicons/gatsby.svg";

//CSS
import AboutCSS from "../About/AboutCSS.css";

const About = () => { 
    
    return (    
    <>
    <a href="/" id="about" className="hidden_A_link" aria-hidden="true"></a>
        <div className="about_grid_wrapper">
            {/* <img src={profile_image} alt="Andrew's Profile Image" className="about_profile_image--mobile"></img> */}
            <StaticImage src="../../images/profile_picture/andrew_profile_image_cropped.png" alt="Andrew's Profile Image" className="about_profile_image--mobile" placeholder="blurred"/>
            {/*<Img fluid={data.profileImageCropped.childImageSharp.fluid} alt="Andrew's Profile Image" className="about_profile_image--mobile"/>*/}
            <div className="about_text_wrapper">
                <h2 className="about_title">ABOUT</h2>
                <hr id="aboutHR"></hr>
                <p className="about_text">I am a creative design professional currently based in Glasgow. I have over 5 years of design and development experience across a broad spectrum of competencies:</p>
                <ul className="about_paragraph_list">
                <FontAwesomeIcon icon="fa-brands fa-buysellads" />
                    <li><FontAwesomeIcon icon={faPencilAlt} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Logo Design &amp; Branding</h3></li>
                    <li><FontAwesomeIcon icon={faCode} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">HTML / CSS / Javascript</h3></li>
                    <li><FontAwesomeIcon icon={faThLarge} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">3D Rendering</h3></li>
                    <li><FontAwesomeIcon icon={faUsers} className="about_paragraph_list_icon pad1"/><h3 className="about_paragraph_list_text">UX &amp; Concept Design</h3></li>
                    <li><FontAwesomeIcon icon={faVideo} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Video Editing &amp; Graphics</h3></li>
                    <li><FontAwesomeIcon icon={faBullhorn} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Digital Marketing</h3></li>
                    <li><FontAwesomeIcon icon={faBuysellads} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Adobe Creative Cloud</h3></li>
                    <li><FontAwesomeIcon icon={faCameraRetro} className="about_paragraph_list_icon"/><h3 className="about_paragraph_list_text">Digital Photography</h3></li>
                </ul>
                <p className="about_text">I am also a recent graduate with a BSc in Digital Technology &amp; Design with a distinction pass. Here I gained invaluable experience working in a remote agile environment with cross functional teams. I also project managed several of the teams and helped deliver three major projects.</p>
                <div className="svg_icons_wrapper">
                    {/* <StaticImage src="../../images/svgicons/photoshop-cc.svg" alt="Adobe Photoshop" title="Adobe Photoshop" className="svg_icon" height={55}/>
                    <StaticImage src="../../images/svgicons/adobe-illustrator-cc.svg" alt="Adobe Illustrator" title="Adobe Illustrator" className="svg_icon" height={55}/>
                    <StaticImage src="../../images/svgicons/indesign-cc.svg" alt="Adobe Indesign" title="Adobe Indesign" className="svg_icon"height={55}/>
                    <StaticImage src="../../images/svgicons/adobe-xd.svg" alt="Adobe Xd" title="Adobe Xd" className="svg_icon"height={55}/>
                    <StaticImage src="../../images/svgicons/lightroom_classic_cc.svg" alt="Adobe Lightroom" title="Adobe Lightroom" className="svg_icon"height={55}/>
                    <StaticImage src="../../images/svgicons/after-effects-cc.svg" alt="Adobe AfterEffects" title="Adobe After Effects" className="svg_icon"height={55}/>
                    <StaticImage src="../../images/svgicons/premiere-cc.svg" alt="Adobe PremierPro" title="Adobe Premier Pro" className="svg_icon"height={55}/>
                    <StaticImage src="../../images/svgicons/blendericon.svg" alt="Blender" title="Blender" className="svg_icon"height={55}/> */}
                    <img src={photoshop_ccSVG} alt="Photoshop" title="Photoshop" className="svg_icon"/>
                    <img src={illustrator_ccSVG} alt="Illustrator" title="Illustrator" className="svg_icon"/>
                    <img src={indesign_ccSVG} alt="Indesign" title="Indesign" className="svg_icon"/>
                    <img src={adobeXd_ccSVG} alt="Adobe XD" title="Adobe XD" className="svg_icon"/>
                    <img src={lightroom_ccSVG} alt="Lightroom" title="Lightroom" className="svg_icon"/>
                    <img src={after_effects_ccSVG} alt="After Effects" title="After Effects" className="svg_icon"/>
                    <img src={premiere_ccSVG} alt="Premier Pro" title="Premier Pro" className="svg_icon"/>
                    <img src={blenderSVG} alt="Blender" title="Blender" className="svg_icon"/>
                </div>
                <div className="svg_icons_wrapper-webdev">
                    {/* <StaticImage src="../../images/svgicons/html5.svg" alt="Html" title="Html" className="svg_icon" height={55}/>
                    // <StaticImage src="../../images/svgicons/css.svg" alt="CSS" title="CSS" className="svg_icon" height={55}/>
                    <StaticImage src="../../images/svgicons/javascript.svg" alt="Javascript" title="Javascript" className="svg_icon" height={55}/>
                    <StaticImage src="../../images/svgicons/npm.svg" alt="NPM" title="NPM" className="svg_icon" height={55}/>
                    <StaticImage src="../../images/svgicons/react.svg" alt="React" title="React" className="svg_icon" height={55}/> */}
                    {/* <StaticImage src="../../images/svgicons/gatsby.svg" alt="Gatsby" title="Gatsby" className="svg_icon" height={55} width={55}/> */}
                    <img src={htmlSVG} alt="HTML" title="HTML" className="svg_icon"/>
                    <img src={cssSVG} alt="CSS" title="CSS" className="svg_icon"/>
                    <img src={javascriptSVG} alt="JavaScript" title="JavaScript" className="svg_icon"/>
                    <img src={googleMaps} alt="NPM" title="NPM" className="svg_icon"/>
                    <img src={reactSVG} alt="React" title="React" className="svg_icon"/>
                    <img src={gatsbySVG} alt="Gatsby" title="Gatsby" className="svg_icon"/>
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
