import React from "react";
//import InstagramIcon from "@material-ui/icons/Instagram";
//import TwitterIcon from "@material-ui/icons/Twitter";
//import FacebookIcon from "@material-ui/icons/Facebook";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
            <Link to="/contact">Contact us today</Link>
        
      </div>
      <p> &copy; 2023 pizzaWorld.com</p>
    </div>
  );
}

export default Footer;

{/*        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
*/}