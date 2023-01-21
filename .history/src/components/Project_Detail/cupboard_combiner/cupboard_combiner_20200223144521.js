
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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

const Project_Cupboard_Combiner = () => { 

    const data = useStaticQuery(
        graphql`
        query {
            appBlack: file(relativePath: { eq: "cupboard_combiner/app_black.png" }) {
                ...fluidImage
            }
            appBlueCropped: file(relativePath: { eq: "cupboard_combiner/app_blue_cropped.png" }) {
                ...fluidImage
            }
            appBlue: file(relativePath: { eq: "cupboard_combiner/app_blue.png" }) {
                ...fluidImage
            }
            appBlue2: file(relativePath: { eq: "cupboard_combiner/app_blue2.png" }) {
                ...fluidImage
            }
            appGreen: file(relativePath: { eq: "cupboard_combiner/app_green.png" }) {
                ...fluidImage
            }
            appLightMobile: file(relativePath: { eq: "cupboard_combiner/app_light_mobile.png" }) {
                ...fluidImage
            }
            appLight: file(relativePath: { eq: "cupboard_combiner/app_light.png" }) {
                ...fluidImage
            }
            appRedMobile: file(relativePath: { eq: "cupboard_combiner/app_red_mobile.png" }) {
                ...fluidImage
            }
            appRed: file(relativePath: { eq: "cupboard_combiner/app_red.png" }) {
                ...fluidImage
            }
            appYellowMobile: file(relativePath: { eq: "cupboard_combiner/app_yellow_mobile_expanded.png" }) {
                ...fluidImage
            }
            appYellow: file(relativePath: { eq: "cupboard_combiner/app_yellow.png" }) {
                ...fluidImage
            }
            heroImage: file(relativePath: { eq: "cupboard_combiner/cupboard_combiner_hero_image.png" }) {
                ...fluidImage
            }
            mockup: file(relativePath: { eq: "cupboard_combiner/cupboard_combiner_mockup.png" }) {
                ...fluidImage
            }
            notes: file(relativePath: { eq: "cupboard_combiner/cupboard_combiner_notes_2.png" }) {
                ...fluidImage
            }
          }
      `
    );
//enables prism JS for code example styling
useEffect(() => {
        Prism.highlightAll();
      }, []);
    
return (
        <>
        <div className="divider">
            <h2 className="divider_heading">Cupboard Combiner</h2>
        </div>
        <div className="project_hero_image_wrapper">
            <Img fluid={data.heroImage.childImageSharp.fluid} alt="project hero banner" className="project_hero_image"/>
        </div>
        
        <div className="project_details_flex_row --margin-top">
            <div className="project_details_text_wrapper">
                <h2 className="project_details_subheading">Project Summary</h2>
                <hr></hr>
                <p className="project_details_body_text">
                Cupboard Combiner is a react.js web app that generates random meals using your cupboard leftovers.
                </p>
                <a href="https://andrew-gilroy.github.io/CupboardCombiner/"  target="_blank">
                    <button className="project_details_submit_button">LIVE DEMO</button>
                </a>
                <Img fluid={data.appBlueCropped.childImageSharp.fluid} alt="Cupboard Combiner" className="project_details_image--fullWidth box_shadow"/>
           </div>
            {/* <!--end of text wrapper--> */}
        </div>
        {/*  <!--end of row--> */}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper">
                <h2 className="project_details_subheading">Initial Concept Development</h2>
                <hr></hr>
                <p className="project_details_body_text">Inspired by my girlfriend Ana's approach to cooking I decided to create a web app that can take a list of items supplied by the user and recombine them into random suggested meals.                 
                </p>     
                <Img fluid={data.notes.childImageSharp.fluid} alt="Cupboard Combiner notes" className="project_details_image--fullWidth box_shadow"/>       
            </div>
            {/* <!--end of text wrapper--> */}
        </div>
        {/* <!--end of row--> */}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Development Journey</h2>
                <hr></hr>
                <p className="project_details_body_text">
                As this was to be my first react.js project I undertook to learn the framework using the react docs. I initially laid out the components using my original diagrams and located the main application state in app.js. Following along with the docs I used a class based component architecture for app.js. This approach became quite verbose by having to initialise the constructor method and with repeated calls to .this.
                <br></br>
                <br></br>
                After learning more about the wonderful simplicity of using hooks I refactored my project accordingly. Admittedly it did take up valuable time to complete but it did deepen my understanding of the framework and how I can use it to write cleaner code.  
                <br></br>
                <br></br>
                <a href="https://github.com/Andrew-Gilroy/CupboardCombiner"  target="_blank" className="project_details_paragraph_link">CLICK HERE TO VIEW THE GITHUB REPO</a>
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3 className="project_details_subheading_h3">Example React Code</h3>
                <hr></hr>
                <p className="project_details_body_text">
                State management using a class based component. 
                App.js as the central source of truth. <br></br>
                </p>
            <pre><code className="language-javascript"> {`
    ///////////////////////////////////////////////  
    /// CLASS BASED COMPONENT STATE MANAGEMENT ////
    ///////////////////////////////////////////////

    class App extends React.Component{
        constructor(props){
            super(props);
            this.handleRemove = this.handleRemove.bind(this);
            this.inputOnChange = this.inputOnChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            // Set initial state
            this.state = {
                term: '',
                items: ["Fruit", "Rice", "Beef", "Strawberries"],
                result: [],
            }
        }
    }   
                    `}</code></pre>
                    <p className="project_details_body_text">
                        Here is the final app.js now refactored using React hooks as the central source of truth for the rest of the app.
                    </p>
                    <pre><code className="language-javascript"> {`
    ///////////////////////////////  
    /// HOOKS STATE MANAGEMENT ////
    ///////////////////////////////

    function App() {
      const [term, updateTerm] = useState('');
      const [items, updateItems] = useState([
          {name: 'Bacon', url: 'https://farm66.staticflickr.com/65535/49285056768_de01247872.jpg'}, 
          {name: 'Carrots', url: 'https://farm2.staticflickr.com/1496/24428604506_dfa351a5a7.jpg'}, 
          {name: 'Eggs', url: 'https://farm4.staticflickr.com/3348/3514192452_2981b6e008.jpg'},
          {name: 'Noodles', url: 'https://farm8.staticflickr.com/7858/31620262177_8678387c2c.jpg'}, 
          {name: 'Rice', url: ' https://farm5.staticflickr.com/4063/4513240600_a9df7d1739.jpg'}
        ]);
    
      const [removed, updateRemovedItems] = useState([]);
      const [counter, updateCounter] = useState(1);
      const [theme, updateThemeName] = useState("default");
      const [circleStrokeColor, updateCircleStroke] = useState("RGBA(185,185,185,0.29)");
      const [result, updateResult] = useState([]);
      const [searchTerm, updateSearchTerm] = useState('');
      const [fetchResult, updateFetchResult] = useState('');//API JSON DATA
      const [imageURL, updateImageUrl] = useState('');
    }
      
                    `}</code></pre>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3 className="project_details_subheading_h3">Technologies Covered</h3>
                    <hr></hr>
                    <p className="project_details_body_text">
                        The development journey for this project enabled me to gain valuable experience within the following topics  
                    </p>
                    <ul className="project_details_list">
                        <li>API calls</li>
                        <li>Props</li>
                        <li>React State Management</li>
                        <li>Hooks vs Class based components</li>
                        <li>Functional Components</li>
                        <li>Asynchronous Requests</li>
                        <li>Conditional Rendering</li>
                        <li>Visual Studio Code</li>
                        <li>Github & NPM</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                {/* /* <!--end of text wrapper--> */ }
            </div>
            {/* /* <!--end of row--> */}

            <div className="project_details_flex_row">
                <div className="project_details_text_wrapper ">
                    <h2 className="project_details_subheading">Additional Features</h2>
                    <hr></hr>
                    <p className="project_details_body_text">                    
                    Several additional features were added to the app that were outside of the initial scope. I incorporated the Flickr API to retrieve valid image url's based on a users input. Next I decided to add different themes for the app which can be seen below. This was achieved by writing javascript code that can dynamically inject styling to the document using the docRootStyle method.
                    </p>
                    <Img fluid={data.appBlack.childImageSharp.fluid} alt="Dark theme" className="project_details_image--fullWidth box_shadow"/>
                    <Img fluid={data.appGreen.childImageSharp.fluid} alt="Green theme" className="project_details_image--fullWidth box_shadow"/>
                </div>
                {/* <!--end of text wrapper--> */}
            </div>
            {/* <!--end of row--> */}
            <div className="project_details_flex_row">
                <div className="project_details_text_wrapper ">
                    <h2 className="project_details_subheading">Mobile Responsiveness</h2>
                    <hr></hr>
                    <p className="project_details_body_text">
                    Mobile responsiveness was achieved by using media queries which were used to collapse the layout into a column layout with the theme picker now incorporated into the body of the app.
                    </p>
                    <Img fluid={data.appRedMobile.childImageSharp.fluid} alt="Red mobile theme" className="project_details_image--fullWidth box_shadow"/>
                    <Img fluid={data.appLightMobile.childImageSharp.fluid} alt="Light mobile theme" className="project_details_image--fullWidth box_shadow"/>
                </div>
                {/* <!--end of text wrapper--> */}
            </div>
        </>
    )
}

  
export default Project_Cupboard_Combiner
