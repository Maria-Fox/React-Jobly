import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import JoblyApi from "../JoblyAPI";

const CompanyCard = ({handle, name, description, numEmployees}) => {

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