import React from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";
import project_mymentoCSS from "../../project_detail/mymento/mymento.css";

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

const Mymento = () => { 

    const data = useStaticQuery(
        graphql`
        query {
            mymento_hero_image: file(relativePath: { eq: "mymento/mymento_hero_image.png" }) {
                ...fluidImage
            }
            mymento_gravestones: file(relativePath: { eq: "mymento/gravestones2.jpg" }) {
                ...fluidImage
            }
            mymento_persona: file(relativePath: { eq: "mymento/mymento_persona1.png" }) {
                ...fluidImage
            }
            mymento_mock1: file(relativePath: { eq: "mymento/mymento_mock1.png" }) {
                ...fluidImage
            }
            mymento_mock2stretch: file(relativePath: { eq: "mymento/mymento_mock2stretch.png" }) {
                ...fluidImage
            }
            mymento_std: file(relativePath: { eq: "mymento/mymento_std.png" }) {
                ...fluidImage
            }
            mymento_phone_mockup1: file(relativePath: { eq: "mymento/mymento_phone_mockup1.png" }) {
                ...fluidImage
            }
            mymento_phone_mockup2: file(relativePath: { eq: "mymento/mymento_phone_mockup2.png" }) {
                ...fluidImage
            }
            mymento_phone_mockup3: file(relativePath: { eq: "mymento/mymento_phone_mockup3.png" }) {
                ...fluidImage
            }
            mymento_phone_mockup4: file(relativePath: { eq: "mymento/mymento_phone_mockup4.png" }) {
                ...fluidImage
            }
            mymento_video_storyboard1: file(relativePath: { eq: "mymento/mymento_video_storyboard1.png" }) {
                ...fluidImage
            }
            mymento_video_storyboard2: file(relativePath: { eq: "mymento/mymento_video_storyboard2.png" }) {
                ...fluidImage
            }
            mymento_video_storyboard3: file(relativePath: { eq: "mymento/mymento_video_storyboard3.png" }) {
                ...fluidImage
            }
          }
      `
    );
    
return (
        <>
        <div className="divider">
            <h2 className="divider_heading">myMento</h2>
        </div>
        <div className="project_hero_image_wrapper">
            <Img fluid={data.mymento_hero_image.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/>
        </div>   
        <div className="project_details_flex_row --margin-top">

            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Initial Brief &amp; Group Formation</h2>
                <hr></hr>
                <p className="project_details_body_text">myMento was a major project undertaken as part of my digital design and technology course. A cross functional team of four was formed and tasked with delivering a demonstrable prototype of a smartphone application based around the broad theme "make us smarter". For this project we were to use the UX design methodology. Our team collectively brainstormed around 15 initial concepts of which mine was eventually chosen.</p>
            </div>
        {/* <!--end of text wrapper-->  */}    
        </div>
        {/* <!--end of row--> */}    
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Concept Development</h2>
                <hr></hr>
                <p className="project_details_body_text">

                    The concept theme - "make us smarter" lead to me think of opportunities that we have as humans to enhance our learning and how to overcome some of our shortfalls. Quite often we have to learn things the hard way (something I am guilty of!). Young adults are often hurried through childhood without learning valuable life lessons or positive habits from their parents or other authority figures. Many common mistakes are made at this time that may have consequences which last a lifetime. What if we could harness technology to provide access to valuable human experiences and lessons from our forefathers? Why must we repeat the same mistakes again and again?
                    <br/><br/>
                    Whilst visiting a local graveyard I began to think more about personal history and the legacy we leave behind. During my visit I noticed that very little information was given on each headstone. Carved into the rock was a bland summation of a persons life that served little to inform those who wished to learn more. Within the span of 2-3 generations very little information is known about previous family members. Their life and their experiences become largely forgotten and lost to the mists of time. This lead me to explore the concept of legacy and how we could use technology to preserve the thoughts and memories of those closest to us to provide comfort for those left behind and also inform future generations to come.
                    <br/><br/>
                    <Img fluid={data.mymento_gravestones.childImageSharp.fluid} alt="myMento - Gravestone" className="project_details_image--fullWidth box_shadow"/>
                    At this point I conceived the idea behind myMento (my-momento). A digital product that would enable us to permanently store our thoughts, experiences and precious memories so that one day they can be accessed by later generations to come.</p>
            </div>
        {/* <!--end of text wrapper--> */}    
        </div>
        {/*     <!--end of row--> */}    
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Research &amp; Validation</h2>
            <hr></hr>
            <p className="project_details_body_text">
                After completion of our initial concept scope document our next step was to conduct a series of user interviews. Our aim was to find out more about our potential users and to validate our proposed features. We envisaged our typical users to have some of the following characteristics.</p>
            <ul className="project_details_list">
                <li>Have experienced bereavement</li>
                <li>Are members of a large family</li>
                <li>Adults who have children of their own</li>
                <li>Are interested in their heritage</li>
                <li>Concerned with preserving history</li>
                <li>Adults typically over the age of 35</li>
            </ul>
            <p className="project_details_body_text">
                We conducted 20 interviews each lasting approximately 1 hour. We prepared a list of relevant questions enquiring about typical behaviours, technology competencies, pain points and previous positive product interactions.
                <br></br>
                Through our research the following patterns emerged.
            </p>
            <ul className="project_details_list">
                <li>Smartphones were the most commonly used device.</li>
                <li>Lack of time, difficulty and laziness given as reasons for not keeping a personal journal or diary. Most agreed that it was important, but few actually kept one up to date.</li>
                <li>Male interviewees were less likely to keep a personal journal or diary.</li>
                <li>Information privacy was a concern. Interviewees expressed the desire to be able to share information privately or for personal use.</li>
                <li>Family medical history was not an immediate concern.</li>
                <li>Many interviewees had no official records of belongings for the purpose of wills and allocation. Most were not currently concerned by this</li>
                <li>The majority of interviewees owned media that they felt needed to be backed up (printed photographs, VHS tapes etc).</li>
                <li>Accessing family history and learning about their heritage was considered important. Many interviewees expressed concern that they did not know where or how to start the process. Interviewees who had carried out this historical research agreed the results were beneficial to them.</li>
                <li>Many interviewees had lost close loved ones in the past, the majority regretted not spending enough time with them or learning more about them before they died.
                </li>
            </ul>
            <p className="project_details_body_text">
                After gathering and analysing our data we used it to further modify the concept. We added features that would make it easier for users to make recordings and removed others that were not shown to be important to the user.
                <br></br>
                In the initial concept phase we proposed a feature that would enable users to dictate a will or leave behind legal instructions for next of kin. We found through our interviews that many users were not actively concerned with wills and as such we removed this part of the product. Another feature that was initially explored was to possibly store medical information that may be of use in identifying hereditary diseases but our interviewees considered this kind of data to be non important to them.<br></br>
                After we had collated our interview data we created several user personas and user stories. These were used to help validate our design decisions, modify the initial concept and ultimately create a product that would allow users to achieve their goals.
            </p>
           <Img fluid={data.mymento_persona.childImageSharp.fluid} alt="myMento - Persona" className="project_details_image--fullWidth box_shadow"/>

        </div>
{/*         <!--end of text wrapper-->    */} 
        </div>
{/*     <!--end of row--> */}    
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h3 className="project_details_subheading">Design</h3>
            <hr></hr>
            <p className="project_details_body_text">Based on my initial sketches I then used balsalmiq to design a set of wireframes based on our list of validated functional requirements.</p>
            <Img fluid={data.mymento_mock1.childImageSharp.fluid} alt="myMento - Profile Page" className="project_details_image_myMento_phone --margin_right"/>
            <Img fluid={data.mymento_mock2stretch.childImageSharp.fluid} alt="myMento - Context Menu" className="project_details_image_myMento_phone --margin_left"/>
            
            <p className="project_details_body_text">A state transition diagram along with an application site map were created to map out each of the available functions and how user interactions would be handled by the app. </p>
            <Img fluid={data.mymento_std.childImageSharp.fluid} alt="State Transition Diagram" className="project_details_image--fullWidth"/>
            
             <p className="project_details_body_text">High fidelity mockups were created using Adobe Xd which resulted in a clickable prototype which was later showcased in our product demonstration video.</p>
            <Img fluid={data.mymento_phone_mockup1.childImageSharp.fluid} alt="myMento - Profile Page" className="project_details_image_myMento_phone --margin_right"/>
            <Img fluid={data.mymento_phone_mockup2.childImageSharp.fluid} alt="myMento - Interview Prompts" className="project_details_image_myMento_phone --margin_left"/>
            <Img fluid={data.mymento_phone_mockup3.childImageSharp.fluid} alt="myMento - Audio Recording" className="project_details_image_myMento_phone --margin_right"/>
            <Img fluid={data.mymento_phone_mockup4.childImageSharp.fluid} alt="myMento - Context Menu/Share" className="project_details_image_myMento_phone --margin_left"/>
        </div>
        {/*         <!--end of text wrapper--> */}    
        </div>
        {/*     <!--end of row--> */}    
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h3 className="project_details_subheading">Product Demonstration</h3>
            <hr></hr>
            <p className="project_details_body_text">The culmination of our group project was the creation of a product demonstration video. The aim here was to present the key features our concept and how it could be used to fulfill the needs of a typical user. The video was made using a range of Adobe suite software, illustrator, Xd, aftereffects and premier pro. Our product demonstration video was well received by both our course lecturers and fellow peers.</p>
            <Img fluid={data.mymento_video_storyboard1.childImageSharp.fluid} alt="myMento - Video storyboard 1" className="project_details_image--fullWidth"/>
            <Img fluid={data.mymento_video_storyboard2.childImageSharp.fluid} alt="myMento - Video storyboard 2" className="project_details_image--fullWidth"/>
            <Img fluid={data.mymento_video_storyboard3.childImageSharp.fluid} alt="myMento - Video storyboard 3" className="project_details_image--fullWidth"/>
            <div className="iframe_wrapper">
                <iframe src="https://www.youtube.com/embed/2c36iAVauaY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        {/* <!--end of text wrapper--> */}
        </div>
        {/* <!--end of row--> */}    
        {/*<!--END OF PROJECTS SECTION-->*/}
        </>
    )
}

export default Mymento

