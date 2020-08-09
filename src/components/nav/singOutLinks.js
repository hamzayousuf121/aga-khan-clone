import React from 'react'
import {
    NavItem,} from 'reactstrap';
    import { Link } from 'react-router-dom'


 const SingOut = (props) => {
    return (
        <>
            
              <NavItem>
               <Link className="text-decoration-none text-white text-bold mr-3" to="/">Home</Link> 
              </NavItem>
              <NavItem>
               <Link className="text-decoration-none text-white text-bold mr-3" to="/service">Service</Link> 
              </NavItem>
              <NavItem>
              <Link className="text-decoration-none text-white text-bold mr-3" to="aboutUs">AboutUs</Link> 
              </NavItem>
              
        </>
    )
}

export default SingOut;