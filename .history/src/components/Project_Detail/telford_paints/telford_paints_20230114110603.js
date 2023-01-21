import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

//IMAGE IMPORTS
// import telford_hero from "../../../images/telford_paints/telford_hero.png";
// import telford_logo from "../../../images/svg/telford_paints_1.svg";
// import telford_mockup from "../../../images/telford_paints/telford_mockup.png";

const TELFORD = () => { 
    
return (
    <>
    <div className="divider">
        <h2 className="divider_heading">Telford Paints</h2>
    </div>
    <div className="project_hero_image_wrapper">
        <StaticImage src="../../../images/telford_paints/telford_hero.png" alt="project hero banner" className="project_hero_image"/>
        {/* <Img fluid={data.telford_hero_image.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/> */}
    </div>   
    {/*<!--PROJECTS SECTION-->*/}
    <div className="project_details_flex_row --margin-top">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Initial Brief</h2>
            <hr></hr>
            <p className="project_details_body_text">The Telford paints design project was created in response to a brief that required the designer to created a set of branded marketing materials for a paint firm.
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
                For this particular logo I decided upon a central paintbrush icon. The icon can be expanded vertically to mimic the downward stroke of a paintbrush and thus lend itself to being utilised across a variety of mediums.
            </p>
            <StaticImage src="../../../images/svg/telford_paints_1.svg" alt="Telford Paints - Logo" className="project_details_image--fullWidth"/>
            {/* <img src={telford_logo} alt="Telford Paints - Logo" className="project_details_image--fullWidth "></img> */}
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Branded Marketing Materials</h2>
            <hr></hr>
            <p className="project_details_body_text">
                Next I applied the logo and the primary icon across a range of different marketing materials.
            </p>
            <StaticImage src="../../../images/telford_paints/telford_mockup.png" alt="Telford Paints - Marketing Materials" className="project_details_image--fullWidth box_shadow"/>
            {/* <Img fluid={data.telford_mockup.childImageSharp.fluid} alt="Telford Paints - Marketing Materials" className="project_details_image--fullWidth box_shadow"/> */}
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    {/*<!--END OF PROJECTS SECTION-->*/}
    </>
    )
}

export default TELFORD
