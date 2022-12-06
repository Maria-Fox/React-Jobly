import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return(
    <nav className = "NavBar-div">
      <NavLink to = "/" className = "NavBar-item">Home</NavLink>
      
      <NavLink to = "/companies" className = "NavBar-item">Companies</NavLink> 

      <NavLink to = "/jobs" className = "NavBar-item">Jobs</NavLink>

      <NavLink to = "/login" className = "NavBar-item">Login</NavLink>

      <NavLink to = "/signup" className = "NavBar-item">Signup</NavLink>

      <NavLink to = "/profile" className = "NavBar-item">Profile</NavLink>

    </nav>
    
  )
}

export default NavBar;