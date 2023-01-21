import React, { useState , useEffect } from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { window, document, exists } from 'browser-monads'; //prevents no window/doc errors on gatsby build - life saver!!
//CSS
import layout from "../layouts/layout.css";
import "./layout.css";

//JS Scripts
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Panzoom from '@panzoom/panzoom';


const Layout = ({ children, pageTitle }) => {
    
    
    //reveals scroll to top button after page load (useEffect on functional component)
    useEffect(() => {
        window.onscroll = function() {
            if(window.pageYOffset >= 400)
            {
                document.getElementById('scrolltop').style.display="block";
            }
            else{
                document.getElementById('scrolltop').style.display="none";
            }
        };
    }, []); 

    // Panzoom for zoomed image "modal"
    // Get the modal
    var modal = document.querySelector('#myModal');
  
    // panzoom function is then invoked targeting all elements with classname "panzoom"
    // Documentation for Panzoom here - https://github.com/timmywil/panzoom/blob/master/README.md#Documentation
    
    var modalImg = document.querySelector("#img01");
    var captionText = document.querySelector("#caption");
  
    //selects all images & adds event listeners - various selectors separated by comma. I used dev tools to help generate the selectors.  
    [].forEach.call(document.querySelectorAll('div.project_details_image--fullWidth > picture > img, div.project_details_image_myMento_phone > picture > img, img.project_details_image--halfWidth, img.project_details_image--fullWidth, div.project_details_image_other_projects--fullWidth > picture > img'), function(el) {
    el.addEventListener('click', function() {
            modal.style.display = "flex";
            var newSrc = this.currentSrc;
            const zoomedElement = document.querySelector(".panzoom");
            // Get the image and insert it inside the modal - use its "alt" text as a caption
            modalImg.setAttribute('src', newSrc);
            captionText.innerHTML = this.alt;
            const panzoom = Panzoom(zoomedElement, {
                cursor: "grab",
                minScale: 0.8,
                maxScale: 4,
            });
            zoomedElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
        });
    });
    
    //close the image modal after X is clicked
    [].forEach.call(document.querySelectorAll('.close'), function(el) {
        el.addEventListener('click', function() {
            modal.style.display = "none";
            });
    });

    // Reveals mobile menu after hamburger icon is clicked
    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    };

    // Close mobile menu after hamburger icon is clicked
    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    };
    
    const [docTitle, updateDocTitle] = useState("Home | Andrew Gilroy Design");

    //Updates state with current document title. This is used to conditionally render a different navbar ("return to projects")
    useEffect(() => {
    updateDocTitle(document.title);
    }, [docTitle]); 

   if (pageTitle === "Home") {
      return (
        <>
            <a href="/" id="home" className="hidden_A_link" aria-hidden="true"></a>
            <div id="scrolltop">
                <AnchorLink href="#home" >
                <div className="scroll">
                    <FontAwesomeIcon className="icon" icon={faAngleUp}/>
                </div>
                </AnchorLink>
            </div>
            {/*end of Scroll to top button*/}
            {/* The Project Image Modal */}
            <div id="myModal" className="modal">
                {/* The Close Button */}
                <span className="close">&times;</span>
                {/* Modal Content (The Image) */}
                <img className="modal_content panzoom" id="img01" alt="zoomed project img"></img>
                {/* Modal Caption (Image Text) */}
                <div id="caption"></div>
            </div>
            {/*mobile overlay menu via hamburger*/}
            <div id="myNav" className="overlay">
                {/* <i className="fas fa-times closebtn" onClick={closeNav()}></i> */}
                <FontAwesomeIcon icon={faTimes} className="closebtn" onClick={closeNav}/>
                <div className="overlay-content">
                    <a href="#about" className="nav_overlay_link" onClick={closeNav}>about</a>
                    <a href="#projects" className="nav_overlay_link" onClick={closeNav}>projects</a>
                    <a href="#contact" className="nav_overlay_link" onClick={closeNav}>contact</a>
                </div>
            </div>
            {/*END OF MOBILE OVERLAY*/}
            <header>
                <AnchorLink href="#home" className="nav_logo_link">
                    <div className="nav-logoWrapper">
                        <h1 className="nav-logo-AndrewGilroy">ANDREW<span id="nav-logo-colon">:</span>GILROY</h1>
                    </div>
                </AnchorLink>
                <nav>
                    <FontAwesomeIcon icon={faBars} id="nav_hamburger" onClick={openNav}/>
                    <AnchorLink href='#about' className="nav_home_link">ABOUT</AnchorLink>
                    <AnchorLink href='#projects' className="nav_home_link">PROJECTS</AnchorLink>
                    <AnchorLink href='#contact' className="nav_home_link">CONTACT</AnchorLink>
                </nav>
            </header>
          <main>{children}</main>
          </>
          )
  } else {
      return (
          <>
          <AnchorLink href="/" id="home" className="hidden_A_link" aria-hidden="true"></AnchorLink>
          {/*Scroll to top button*/}
          {/* The Project Image Modal */}
          <div id="myModal" className="modal">
                {/* The Close Button */}
                <span className="close">&times;</span>
                {/* Modal Content (The Image) */}
                <img className="modal_content panzoom" id="img01" alt="zoomed project img"></img>
                {/* Modal Caption (Image Text) */}
                <div id="caption"></div>
            </div>
          {/* <div className="thetop"></div> */}
          <div id="scrolltop">
              <AnchorLink href='#home'>
                  <div className="scroll">
                      <FontAwesomeIcon className="icon" icon={faAngleUp}></FontAwesomeIcon>
                  </div>
              </AnchorLink>
          </div>
          {/*end of Scroll to top button*/}
          {/*mobile overlay menu via hamburger*/}
          <div id="myNav" className="overlay">
              <FontAwesomeIcon icon={faTimes} className="closebtn" onClick={closeNav}/>
              <div className="overlay-content">
                  <a href="about" className="nav_overlay_link" onClick={closeNav}>about</a>
                  <a href="#projects" className="nav_overlay_link" onClick={closeNav}>projects</a>
                  <a href="#contact" className="nav_overlay_link" onClick={closeNav}>contact</a>
              </div>
          </div>
          {/*END OF MOBILE OVERLAY*/}
          <header>
              <a href="#home" className="nav_logo_link">
                  <div className="nav-logoWrapper">
                      <h1 className="nav-logo-AndrewGilroy">ANDREW<span id="nav-logo-colon">:</span>GILROY</h1>
                  </div>
              </a>
              <nav>
              <Link to="/#projects" id="nav_return_to_projects_link">&#10237; BACK TO PROJECTS</Link>
              </nav>
          </header>
          <main>{children}</main>
          </>
      )
  }
}

export default Layout
