import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

//CSS
import HeroCSS from "../Hero/HeroCSS.css";

const Hero = () => { 
   
    return (
    <>
    <div className="hero_background">
            <div className="hero_logo_wrapper slide-in-fwd-center">
            <h1 id="hero_andrew_gilroy" className="focus-in-expand">ANDREW<span id="hero_logo_colon">:</span>GILROY</h1>
            </div>
            <div className="hero_text_wrapper">
                <h1>GRAPHIC DESIGN</h1>
                <h1 id="hero_bullet2">&#9679;</h1>
                <h1>WEB DEVELOPMENT</h1>
                <h1 id="hero_bullet1">&#9679;</h1>
                <h1>3D RENDERING</h1>
            </div>
            <ul className="image_grid">

               <StaticImage src="../../../images/cupboard_combiner/app_black.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/>
            


                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile24.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile14.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile20.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile23.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile20.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile24.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile21.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile23.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile14.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile17.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile24.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile" loading="eager"/></li>
            </ul>
        </div>
    </>
    )
}

export default Hero