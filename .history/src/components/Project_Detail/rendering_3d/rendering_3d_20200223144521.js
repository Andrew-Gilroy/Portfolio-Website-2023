import React from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

//IMAGE IMPORTS
import rendering_3d_3drendering8 from "../../../images/render_3d/3drendering-8.gif";
import rendering_3d_3drendering7 from "../../../images/render_3d/3drendering-7.svg";

//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";

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

const Rendering_3d = () => { 
    
    const data = useStaticQuery(
        graphql`
        query {
            rendering_3d_hero_image: file(relativePath: { eq: "render_3d/3drendering_hero.png" }) {
                ...fluidImage
            }
            rendering_3d_blender_screenshot: file(relativePath: { eq: "render_3d/blender_screenshot.png" }) {
                ...fluidImage
            }
            rendering_3d_Halflife_screenshot: file(relativePath: { eq: "render_3d/halflife_screenshot.png" }) {
                ...fluidImage
            }
            rendering_3d_3drendering1: file(relativePath: { eq: "render_3d/3drendering-1.jpg" }) {
                ...fluidImage
            }
            rendering_3d_3drendering2: file(relativePath: { eq: "render_3d/3drendering-2.png" }) {
                ...fluidImage
            }
            rendering_3d_3drendering3: file(relativePath: { eq: "render_3d/3drendering-3.png" }) {
                ...fluidImage
            }
            rendering_3d_3drendering4: file(relativePath: { eq: "render_3d/3drendering-4.png" }) {
                ...fluidImage
            }
            rendering_3d_3drendering5: file(relativePath: { eq: "render_3d/3drendering-5.png" }) {
                ...fluidImage
            }
          }
      `
    );

return (
        <>
        <div className="divider">
                <h2 className="divider_heading">3D Rendering</h2>
            </div>
            <div className="project_hero_image_wrapper">
            <Img fluid={data.rendering_3d_hero_image.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/>
        </div>
    <div className="project_details_flex_row --margin-top">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Methodology</h2>
            <hr></hr>
            <p className="project_details_body_text">
            As 3D modelling enthusiast I often look for ways to bring my designs to the next level. To achieve this I use the incredible (and free!) 3d editing software Blender or software from the adobe creative cloud such as Aftereffects or Photoshop.
            </p>
            <h3 className="project_details_subheading_h3">Blender</h3>
            <hr></hr>
            <br></br>
            <br></br>
            <Img fluid={data.rendering_3d_blender_screenshot.childImageSharp.fluid} alt="Blender screenshot" className="project_details_image--fullWidth box_shadow"/>
            <p className="project_details_body_text">
            Blender has a raft of great new features such as the ability to edit live rendered objects via the new eevee renderer. I hope to grow my skills with the software in time so that I harness its full potential.
            </p>
            <h3 className="project_details_subheading_h3">Halflife Worldcraft Editor - 1998</h3>
            <hr></hr>
            <br></br>
            <br></br>
            <Img fluid={data.rendering_3d_Halflife_screenshot.childImageSharp.fluid} alt="Halflife Worldcraft Editor 1998" className="project_details_image--fullWidth box_shadow"/>
            <p className="project_details_body_text">
            I have been using 3d editing software in various capacities from a very early age. As an avid gamer I would often use inbuilt level editors to design, texture and build my own multiplayer levels or single player scenarios. Halflife and Quake 2 we both very popular games in the late 90's which both came with their own 3d editors which I used extensively at the time. 
            </p>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Tara Giftworks</h2>
            <hr></hr>
            <p className="project_details_body_text">Tara Giftworks are a Dublin based furniture importer/wholesaler. In an effort to display their products in different environments I created accurate 3d models of their furniture. I painstakingly measured each item and recreated them as fully textured 3d models. The finished models were then placed in more appealing and atmospheric home settings.
            </p>
            <Img fluid={data.rendering_3d_3drendering1.childImageSharp.fluid} alt="Tara Giftworks - Home Collection" className="project_details_image--fullWidth box_shadow"/>
            <Img fluid={data.rendering_3d_3drendering2.childImageSharp.fluid} alt="Tara Giftworks - Mirrored furniture in room setting" className="project_details_image--fullWidth box_shadow"/>
            <Img fluid={data.rendering_3d_3drendering3.childImageSharp.fluid} alt="Tara Giftworks - Mirrored furniture in bedroom" className="project_details_image--fullWidth box_shadow"/>
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
            <Img fluid={data.rendering_3d_3drendering4.childImageSharp.fluid} alt="Ask Me Why - Jewellery Mockup" className="project_details_image--fullWidth box_shadow"/>
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
            <Img fluid={data.rendering_3d_3drendering5.childImageSharp.fluid} alt="RYTM - launch party teaser" className="project_details_image--fullWidth box_shadow"/>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">PERSONAL DESIGN LOGO</h2>
            <hr></hr>
            <p className="project_details_body_text">This is an example of a previous design logo I produced for an earlier version of this website. I am currently familiarizing myself with 3d animations in Blender and hope to use them more extensively in future projects.</p>
            {/* <Img fluid={data.rendering_3d_3drendering7.childImageSharp.fluid} alt="Personal Design Logo" className="project_details_image--halfWidth"/> */}
            <img src={rendering_3d_3drendering7} alt="Personal Design Logo" className="project_details_image--halfWidth"></img>
            {/* <Img fluid={data.rendering_3d_3drendering8.childImageSharp.fluid} alt="Personal Design Logo - Animated" className="project_details_image--halfWidth box_shadow"/> */}
            <img src={rendering_3d_3drendering8} alt="Personal Design Logo - Animated" className="project_details_image--halfWidth box_shadow"></img>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    </>
    )
}

export default Rendering_3d
