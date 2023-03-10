import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//import { useStaticQuery, graphql } from "gatsby";

//IMAGE IMPORTS
import rendering_3d_3drendering8 from "../../../images/render_3d/3drendering-8.gif";
import rendering_3d_3drendering7 from "../../../images/render_3d/3drendering-7.svg";

//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";


const Rendering_3d = () => { 
    
return (
        <>
        <div className="divider">
                <h2 className="divider_heading">3D Rendering</h2>
            </div>
            <div className="project_hero_image_wrapper">
            <StaticImage src="../../../images/render_3d/3drendering_hero.png" alt="project hero banner" className="project_hero_image"/>
            {/* <Img fluid={data.rendering_3d_hero_image.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/> */}
        </div>
    <div className="project_details_flex_row --margin-top">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Tara Giftworks</h2>
            <hr></hr>
            <p className="project_details_body_text">Tara Giftworks are a Dublin based furniture importer/wholesaler. I created accurate 3d models of their furniture by painstakingly measuring each item. The finished models were then textured and placed in more appealing and atmospheric home settings.
            </p>
            <StaticImage src="../../../images/render_3d/3drendering-1.jpg" alt="Tara Giftworks - Home Collection" className="project_details_image--fullWidth box_shadow"/>
            <StaticImage src="../../../images/render_3d/3drendering-2.png" alt="Tara Giftworks - Mirrored furniture in room setting" className="project_details_image--fullWidth box_shadow"/>
            <StaticImage src="../../../images/render_3d/3drendering-3.png" alt="Tara Giftworks - Mirrored furniture in bedroom" className="project_details_image--fullWidth box_shadow"/>
            {/* <Img fluid={data.rendering_3d_3drendering1.childImageSharp.fluid} alt="Tara Giftworks - Home Collection" className="project_details_image--fullWidth box_shadow"/> */}
            {/* <Img fluid={data.rendering_3d_3drendering2.childImageSharp.fluid} alt="Tara Giftworks - Mirrored furniture in room setting" className="project_details_image--fullWidth box_shadow"/> */}
            {/* <Img fluid={data.rendering_3d_3drendering3.childImageSharp.fluid} alt="Tara Giftworks - Mirrored furniture in bedroom" className="project_details_image--fullWidth box_shadow"/> */}
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Ask Me Why</h2>
            <hr></hr>
            <p className="project_details_body_text">
                Ask Me Why is a social media app that is currently under development. Initially the client was looking to revamp their logo in vector format. Happy with the result the client requested the production of a 3d version. The resultant design and files are now being being prepared for mass 3d printing as a unique piece of fashionable jewellery to help identify fellow app users.
            </p>
            <StaticImage src="../../../images/render_3d/3drendering-4.png" alt="Ask Me Why - Jewellery Mockup" className="project_details_image--fullWidth box_shadow"/>
            {/* <Img fluid={data.rendering_3d_3drendering4.childImageSharp.fluid} alt="Ask Me Why - Jewellery Mockup" className="project_details_image--fullWidth box_shadow"/> */}
        </div>

        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">RYTM</h2>
            <hr></hr>
            <p className="project_details_body_text">RYTM is a DJing collective located in Dublin. The client wished to create a teaser poster for an upcoming launch party. The final design was based around a "hot and heavy" theme.
            </p>
            <StaticImage src="../../../images/render_3d/3drendering-5.png" alt="RYTM - launch party teaser" className="project_details_image--fullWidth box_shadow"/>
            {/* <Img fluid={data.rendering_3d_3drendering5.childImageSharp.fluid} alt="RYTM - launch party teaser" className="project_details_image--fullWidth box_shadow"/> */}
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">PERSONAL DESIGN LOGO</h2>
            <hr></hr>
            <p className="project_details_body_text">This is an example of a previous design logo I produced for an earlier version of this website. I am currently familiarizing myself with 3d animations in Blender and hope to use them more extensively in future projects.</p>
            <StaticImage src="../../../images/render_3d/3drendering-7.svg" alt="Personal Design Logo" className="project_details_image--halfWidth"/>
            {/* <Img fluid={data.rendering_3d_3drendering7.childImageSharp.fluid} alt="Personal Design Logo" className="project_details_image--halfWidth"/> */}
            {/* <StaticImage src="../../../images/render_3d/3drendering-8.gif" alt="Personal Design Logo - Animated" className="project_details_image--halfWidth box_shadow"/> */}
            <img src={rendering_3d_3drendering8} alt="Personal Design Logo - Animated" className="project_details_image--halfWidth box_shadow"/>
            {/* <Img fluid={data.rendering_3d_3drendering8.childImageSharp.fluid} alt="Personal Design Logo - Animated" className="project_details_image--halfWidth box_shadow"/> */}
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    </>
    )
}

export default Rendering_3d
