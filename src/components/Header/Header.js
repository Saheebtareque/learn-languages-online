import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        fontSize: "40px",
         color: "yellow",
        margin: "30px" ,
        backgroundColor:"grey",
        borderRadius:"10px",
        padding:"5px"
    }
    return (
        <nav className="navigation">
            <NavLink activeStyle={activeStyle} to="/home ">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/about ">About-us</NavLink>
            <NavLink activeStyle={activeStyle} to="/services ">Services</NavLink>
            <NavLink activeStyle={activeStyle} to="/tutor ">Become a tutor</NavLink>

        </nav>
 
    );
};

export default Header;