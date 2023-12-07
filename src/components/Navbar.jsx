import React,{ useState } from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
//import ReorderIcon from "@material-ui/icons/Reorder";
//import ReorderIcon from "@mui/icons/Reorder";
//import Icon from '@mui/material/Icon';
//import { Button } from '@mui/material';

//import ReoderIcon from '@emotion/styled/ReoderIcon';
import "../styles/navbar.css";
import SearchIcon from "../search.svg";

function Navbar(){
const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return(
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open": "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact </Link>
        </div>
      </div>
    <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact">Contact </Link>
        <button onClick={toggleNavbar}>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        </button>

      </div>
    </div>
    )
  
}
export default Navbar;