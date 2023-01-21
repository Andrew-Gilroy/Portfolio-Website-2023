import React from "react";
import { useRef, useEffect} from "react";
//import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//CSS IMPORT (REQUIRED!)
import ProjectsCSS from "../Projects/ProjectsCSS.css";

//IMAGE IMPORTS
import cupboardCombinerMockup from "../../images/cupboard_combiner/cupboard_combiner_mockup.png";
import myMentoMockup from "../../images/myMento/myMento_project_image.png";
import renderingMockup from "../../images/render_3d/3drendering-6.png";
import factsMockup from "../../images/facts/facts_logo1_crop_mockup2.png";
import dayMockup from "../../images/day_building/day_building_web_mockup1.png";
import telfordMockup from "../../images/telford_paints/telford_mockup.png";
import otherMockup from "../../images/other_projects/other_projects_7.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    
    useEffect(() => {
        const images = gsap.utils.toArray('.project_image');
        images.forEach(image => {
            gsap.to(image, { 
                x: 300,
                opacity
                scrollTrigger: {
                    trigger: image,
                    scrub: true
                }
            })
        });
    }, []);

    return(
    <>
    <a href="/" id="projects" className="hidden_A_link" aria-hidden="true"></a>
    <div className="divider">
        <h2 className="divider_heading">PROJECTS</h2>
    </div>
    <a href="/" id="cupboard" className="hidden_A_link" aria-hidden="true"></a>
    <div className="project_flex_row">
        <Link to="/project_cupboard/" className="project_page_image_link" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
            {/* <StaticImage src="../../images/cupboard_combiner/cupboard_combiner_mockup.png" alt="Cupboard Combiner App Mockup" className="project_image"  /> */}
            <img src={cupboardCombinerMockup} alt="Cupboard Combiner App Mockup" className="project_image"   />
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
            {/* <StaticImage src="../../images/myMento/myMento_project_image.png" alt="myMento Mockup" className="project_image"/> */}
            <img src={myMentoMockup} alt="myMento Mockup" className="project_image"  />
        </Link>
        <div className="project_text_wrapper" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="2000">
        <Link to="/project_mymento/" className="project_page_text_link project_title">myMento</Link>
            <hr></hr>
            <p className="project_text">An in-depth UXCD team project - myMento is a smart phone application concept that allows users to preserve their precious memories. </p>
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
            {/* <StaticImage src="../../images/render_3d/3drendering-6.png" alt="3D Rendering" className="project_image"/> */}
            <img src={renderingMockup} alt="3D Rendering" className="project_image"  />
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
            {/* <StaticImage src="../../images/facts/facts_logo1_crop_mockup2.png" alt="Facts Mockup" className="project_image"/> */}
            <img src={factsMockup} alt="Facts Mockup" className="project_image"  />
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
            {/* <StaticImage src="../../images/day_building/day_building_web_mockup1.png" alt="Day Building Services Mockup" className="project_image"/> */}
            <img src={dayMockup} alt="Day Building Services Mockup" className="project_image"  />
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
            {/* <StaticImage src="../../images/telford_paints/telford_mockup.png" alt="Telford Mockup" className="project_image"/> */}
            <img src={telfordMockup} alt="Telford Mockup" className="project_image"  />
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
            {/* <StaticImage src="../../images/other_projects/other_projects_7.png" alt="Other projects" className="project_image"/> */}
            <img src={otherMockup} alt="Other projects" className="project_image"  />
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
