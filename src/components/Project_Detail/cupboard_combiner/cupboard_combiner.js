import React, { useEffect } from 'react';
import Prism from 'prismjs';
//import { StaticImage } from "gatsby-plugin-image";

//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";

//IMAGE IMPORTS
 import cupboard_combiner_hero_image from "../../../images/cupboard_combiner/cupboard_combiner_hero_image.png";
 //import cupboard_combiner_mockup from "../../../images/cupboard_combiner/cupboard_combiner_mockup.png";
 import cupboard_combiner_notes_2 from "../../../images/cupboard_combiner/cupboard_combiner_notes_2.png";
 import app_default from "../../../images/cupboard_combiner/app_default.png";
 //import app_light from "../../../images/cupboard_combiner/app_light.png";
 //import app_blue from "../../../images/cupboard_combiner/app_blue.png";
 //import app_dark from "../../../images/cupboard_combiner/app_dark.png";
 //import app_green from "../../../images/cupboard_combiner/app_green.png";
 import app_orange from "../../../images/cupboard_combiner/app_orange.png";
 import app_pink from "../../../images/cupboard_combiner/app_pink.png";
 //import app_purple from "../../../images/cupboard_combiner/app_purple.png";
 //import app_red from "../../../images/cupboard_combiner/app_red.png";
 //import app_yellow from "../../../images/cupboard_combiner/app_yellow.png";
 import app_mobile_default from "../../../images/cupboard_combiner/app_mobile_default.png";
 import app_mobile_orange from "../../../images/cupboard_combiner/app_mobile_orange.png";
 //import app_mobile_pink from "../../../images/cupboard_combiner/app_mobile_pink.png";
 //import app_random from "../../../images/cupboard_combiner/app_random.png";
 //import app_random2 from "../../../images/cupboard_combiner/app_random2.png";
 

const Project_Cupboard_Combiner = () => { 

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
            {/* <StaticImage src="../../../images/cupboard_combiner/cupboard_combiner_hero_image.png" alt="project hero banner" className="project_hero_image"/> */}
            <img src={cupboard_combiner_hero_image} alt="project hero banner" className="project_hero_image"/>
        </div>
        
        <div className="project_details_flex_row --margin-top">
            <div className="project_details_text_wrapper">
                <h2 className="project_details_subheading">Project Summary</h2>
                <hr></hr>
                <p className="project_details_body_text">
                Cupboard Combiner is a react.js web app that generates random meals based on the contents of your cupboard.
                </p>
                <a href="https://andrew-gilroy.github.io/CupboardCombiner/"  target="_blank">
                    <button className="project_details_submit_button">LIVE DEMO</button>
                </a>
                {/* <StaticImage src="../../../images/cupboard_combiner/app_blue_cropped.png" alt="Cupboard Combiner" className="project_details_image--fullWidth box_shadow"/> */}
                <img src={app_default} alt="Cupboard Combiner default theme" className="project_details_image--fullWidth box_shadow"/>
           </div>
            {/* <!--end of text wrapper--> */}
        </div>
        {/*  <!--end of row--> */}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper">
                <h2 className="project_details_subheading">Initial Concept Development</h2>
                <hr></hr>
                <p className="project_details_body_text">Inspired by a friends random approach to cooking, I developed a React.js web app that can take a list of items supplied by the user and then recombine them into random suggested meals.                 
                </p>
                {/* <StaticImage src="../../../images/cupboard_combiner/cupboard_combiner_notes_2.png" alt="Cupboard Combiner notes" className="project_details_image--fullWidth box_shadow"/>      */}
                <img src={cupboard_combiner_notes_2} alt="Cupboard Combiner notes" className="project_details_image--fullWidth box_shadow"/>       
            </div>
            {/* <!--end of text wrapper--> */}
        </div>
        {/* <!--end of row--> */}
        <div className="project_details_flex_row">
            <div className="project_details_text_wrapper ">
                <h2 className="project_details_subheading">Development Journey</h2>
                <hr></hr>
                <p className="project_details_body_text">
                As this was to be my first react.js project I undertook to learn the framework using the react docs. I initially laid out the components using my original diagrams then located the main application state in app.js. Following along with the documentation I used a class based component architecture for app.js. This approach became quite verbose by having to initialise the constructor method and its repeated references to .this.
                <br></br>
                <br></br>
                After learning more about the wonderful simplicity of using react hooks, I refactored my project accordingly. Admittedly it did take up valuable time to complete but it did deepen my understanding of the framework and how I can use them to write cleaner code.  
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

    const [term, updateTerm] = useState('');
    const [items, updateItems] = useState(
    [
    {name: 'Hamburger', url: 'https://farm2.staticflickr.com/1256/847548367_09142ee453.jpg'}, 
    {name: 'Chicken Salad', url: 'https://farm1.staticflickr.com/62/179151582_a62d0d8cde.jpg'},
    {name: 'Almonds', url: 'https://farm6.staticflickr.com/5102/5605239684_ee76ba7f79.jpg'}
    ]);

    const [removed, updateRemovedItems] = useState([]);
    const [counter, updateCounter] = useState(1);
    const [theme, updateThemeName] = useState("default");
    const [circleStrokeColor, updateCircleStroke] = useState("RGBA(185,185,185,0.29)");
    const [result, updateResult] = useState([]);
    const [urlArray, updateUrlArray] = useState([]);
    
    //API search term states
    const [searchTerm, updateSearchTerm] = useState('');
    const [fetchResult, updateFetchResult] = useState('');//API JSON DATA
    
    //Flickr API image url
    const [imageURL, updateImageUrl] = useState('');
      
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
                    Several additional features were added to the app that were outside of the initial scope. I incorporated the Flickr API to retrieve image url's based on a users input. Next I decided to add different themes for the app which can be seen below. This was achieved by writing javascript code that can dynamically inject styling to the document using the docRootStyle method. The next feature to be added was the ability to save the inputted items between sessions, for this I utilised the browser's localStorage object. 
                    </p>
                    {/* <StaticImage src="../../../images/cupboard_combiner/app_black.png" alt="Dark theme" className="project_details_image--halfWidth box_shadow"/> */}
                    {/* <StaticImage src="../../../images/cupboard_combiner/app_green.png" alt="Green theme" className="project_details_image--halfWidth box_shadow"/> */}
                    <img src={app_pink} alt="Cupboard Combiner pink theme" className="project_details_image--halfWidth box_shadow"/>
                    <img src={app_orange} alt="Cupboard Combiner orange theme" className="project_details_image--halfWidth box_shadow"/>
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
                    {/* <StaticImage src="../../../images/cupboard_combiner/app_red_mobile.png" alt="Red mobile theme" className="project_details_image--fullWidth box_shadow"/> */}
                    {/* <StaticImage src="../../../images/cupboard_combiner/app_light_mobile.png" alt="Light mobile theme" className="project_details_image--fullWidth box_shadow"/> */}
                    <img src={app_mobile_default} alt="Mobile size default theme" className="project_details_image--halfWidth box_shadow"/>
                    <img src={app_mobile_orange} alt="Mobile size orange theme" className="project_details_image--halfWidth box_shadow"/>
                </div>
                {/* <!--end of text wrapper--> */}
            </div>
        </>
    )
}

  
export default Project_Cupboard_Combiner
