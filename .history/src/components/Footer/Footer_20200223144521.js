import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

//CSS
import FooterCSS from "../Footer/FooterCSS.css";

const Footer = () => ( 
   
    <footer>
        <div className="footer_div_left">
            <AnchorLink href="#home" className="nav_logo_link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" className="footer_icon_left">
                    <title>Back to top</title>
                    <path d="M51.022,1.022A49.978,49.978,0,1,0,82.827,89.516V51h0A31.82,31.82,0,1,0,73.74,73.269V85A40.885,40.885,0,1,1,91.913,51.017h0v28.71h0V94.136L101,98.721V51A49.978,49.978,0,0,0,51.022,1.022Zm0,72.7A22.706,22.706,0,1,1,73.727,51.013h0A22.745,22.745,0,0,1,51.022,73.719Z" />
                </svg>
            </AnchorLink>
        </div>
        <div className="footer_div_center">
            <p className="footer_text">Andrew Gilroy 2020<span id="footer_copyright_symbol">&copy;</span></p>
        </div>
        <div className="footer_div_mobile">
            <p>Connect with me</p>
        </div>
        
        <div className="footer_div_right">
            <a href="https://wa.me/34632834019" className="footer_link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" className="footer_icon_right">
                    <title>Send a message via Whatsapp</title>
                    <g>
                        <path d="M51,101a50,50,0,1,1,50-50A50.062,50.062,0,0,1,51,101ZM51,9.292A41.708,41.708,0,1,0,92.708,51,41.756,41.756,0,0,0,51,9.292Z" />
                        <path d="M75.481,68.391c-1.043,2.922-6.034,5.583-8.434,5.941a17.089,17.089,0,0,1-7.87-.492,71.9,71.9,0,0,1-7.123-2.633C39.52,65.794,31.337,53.176,30.71,52.342s-5.1-6.775-5.1-12.928a14,14,0,0,1,4.375-10.421c1.144-1.253,7.3-2.473,8.538.626,1,2.514,3.541,8.651,3.851,9.278a2.292,2.292,0,0,1,.1,2.185,8.571,8.571,0,0,1-1.249,2.088c-.626.729-1.312,1.626-1.876,2.189-.623.623-1.274,1.3-.545,2.548a37.556,37.556,0,0,0,6.951,8.655A34.239,34.239,0,0,0,55.8,62.767c1.249.627,1.978.521,2.707-.317s3.125-3.646,3.956-4.9,1.668-1.046,2.815-.627,7.286,3.439,8.539,4.065,2.077.936,2.393,1.457S76.522,65.477,75.481,68.391Z" />
                    </g>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/andrew-gilroy-a4b7aaa2/" target="_blank" className="footer_link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" className="footer_icon_right">
                    <title>Contact me on LinkedIn</title>
                    <g>
                        <path d="M38.185,71.252H29.4V39.033h8.787ZM33.792,35.319a5.167,5.167,0,1,1,5.126-5.167A5.148,5.148,0,0,1,33.792,35.319ZM73.334,71.252H64.547V54.838c0-9.865-11.716-9.118-11.716,0V71.252H44.044V39.033h8.787V44.2c4.088-7.575,20.5-8.134,20.5,7.252Z" />
                        <path d="M51,101a50,50,0,1,1,50-50A50.058,50.058,0,0,1,51,101ZM51,9.3A41.705,41.705,0,1,0,92.708,51,41.752,41.752,0,0,0,51,9.3Z" />
                    </g>
                </svg>
            </a>
            <a href="mailto:a.gilroy83@gmail.com?Subject=Website%20enquiry" target="_top" className="footer_link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" className="footer_icon_right">
                    <title>Send me an email</title>
                    <g>
                        <path d="M51,101a50,50,0,1,1,50-50A50.062,50.062,0,0,1,51,101ZM51,9.292A41.708,41.708,0,1,0,92.708,51,41.756,41.756,0,0,0,51,9.292Z" />
                        <path d="M60.58,30.41H41.42c-17.8,0-17.8,9.454-17.8,17.795v5.6c0,8.341,0,17.795,17.8,17.795H60.58c17.8,0,17.8-9.454,17.8-17.795v-5.6C78.376,39.864,78.376,30.41,60.58,30.41Zm0,5.251a24.376,24.376,0,0,1,7.558.92L50.972,47.875l-17.558-11.1a22.251,22.251,0,0,1,8.006-1.118ZM73.124,53.8c0,8.348,0,12.544-12.544,12.544H41.42c-12.544,0-12.544-4.2-12.544-12.544v-5.6c0-3.139,0-5.69.669-7.652L51.028,54.125,72.255,40.163c.825,2.014.869,4.673.869,8.042Z" />
                    </g>
                </svg>
            </a>
        </div>
    </footer>
)

export default Footer
