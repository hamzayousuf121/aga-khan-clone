import React from 'react'
import {
    NavItem,} from 'reactstrap';
    import { Link } from 'react-router-dom'


 const  NavLinks = (props) => {
    return (
        <>
            
              <NavItem className="myNav">
               <Link className="text-decoration-none text-white text-bold mr-3 myNav"  to="/">Home</Link> 
              </NavItem>
              <NavItem className="myNav">
               <Link className="text-decoration-none text-white text-bold mr-3 myNav" to="/service">Services</Link> 
              </NavItem>
              <NavItem className="myNav">
              <Link className="text-decoration-none text-white text-bold mr-3 myNav" to="/aboutUs">About Us</Link> 
              </NavItem>
              <NavItem className="myNav">
              <Link className="text-decoration-none text-white text-bold mr-3 myNav" to="/contact">Contact</Link> 
              </NavItem>
              <NavItem className="myNav">
              <Link className="text-decoration-none text-white text-bold mr-3 myNav" to="/singUp">Sing Up</Link> 
              </NavItem>
              <NavItem className="myNav">
              <Link className="text-decoration-none text-white text-bold mr-3 myNav" to="/logIn">LogIn</Link> 
              </NavItem>
        </>
    )
}

export default NavLinks;