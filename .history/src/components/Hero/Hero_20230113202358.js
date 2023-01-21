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

               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile1.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile2.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile3.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile4.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile5.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile7.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile8.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile9.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile10.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile11.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile12.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile13.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile14.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile15.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile16.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile17.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile18.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>

               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile19.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile3.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile14.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile7.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile22a.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile1.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile5.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile20.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile9.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile19.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile12.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile23.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile13.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile8.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile10.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile2.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>

               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile8.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile3.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile18.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile11.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile20.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile7.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile5.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile16.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile24.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile4.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile13.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile21.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile12.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile15.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile9.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile22a.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile1.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>

               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile23.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile15.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile2.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile19.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile5.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile10.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile7.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile8.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile9.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile11.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile1.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile18.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile13.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile15.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile19.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile4.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>
               <li className="image_grid_item_container"><StaticImage src="../../images/tile_images/tile6.png" alt="tiled background" className="image_grid_item tile" placeholder="blurred"/></li>

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