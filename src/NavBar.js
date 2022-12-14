import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import UserContext from "./UserComponents.js/UserContext";

const NavBar = ({logout}) => {

  // holds a valid user object. If it exsits will determine which nav user sees.
  let {currentUser} = useContext(UserContext);

  if(!currentUser){
    return(
        <nav className = "NavBar-div">
        
        <NavLink to = "/">Jobly</NavLink>

        <NavLink to = "/login" className = "NavBar-item">Login</NavLink>

        <NavLink to = "/signup" className = "NavBar-item">Signup </NavLink>         
          
        </nav>
    )
  } else {

    return(
      <nav className = "NavBar-div">
        <NavLink to = "/" className = "NavBar-item">Jobly</NavLink>
        
        <NavLink to = "/companies" className = "NavBar-item">Companies</NavLink> 
  
        <NavLink to = "/jobs" className = "NavBar-item">Jobs</NavLink>
  
        <NavLink to = "/profile" className = "NavBar-item">Profile</NavLink>
  
        <NavLink onClick={logout} className = "NavBar-item">Logout</NavLink>
  
  
      </nav>
    )

  }



}

export default NavBar;