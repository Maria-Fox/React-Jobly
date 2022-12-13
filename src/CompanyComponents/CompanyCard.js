import React, {useEffect, useState, useContext} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import JoblyApi from "../JoblyAPI";
import UserContext from "../UserComponents.js/UserContext";

const CompanyCard = ({handle, name, description, numEmployees}) => {

  let navigate = useNavigate();
  let {currentUser} = useContext(UserContext);

  useEffect(function testAuth () {
    if(!currentUser){
      Navigate("/login")
    }
  })

  return(
    <div>
      <h3>{name}</h3> 
      <small>{handle} {numEmployees} Employees</small>
      <br/>
      
      <p>{description}</p>

      <Link to = {`/companies/${handle}`} >View Jobs</Link>

    </div>
  )
}

export default CompanyCard;