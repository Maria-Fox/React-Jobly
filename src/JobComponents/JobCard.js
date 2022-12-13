import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import CompanyCard from "../CompanyComponents/CompanyCard";
import UserContext from "../UserComponents.js/UserContext";

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {

  let [applied, setApplied] = useState(new Set([]));

  let {currentUser, handleApply, didUserPreviouslyApply} = useContext(UserContext);

  useEffect(
    function checkIfApplied() {
      if(!currentUser) Navigate("/login");
      setApplied(didUserPreviouslyApply(id));
    },
    [id, didUserPreviouslyApply]
  )

  let equityUpdated = equity ? equity : "Unavailable";
  let buttonStyle = didUserPreviouslyApply(id) ? "applied" : "not-applied";

  return(    
    <div>
      <h1>{companyName}</h1>
      <small>{companyHandle}</small>
      
      <h2>{title} {id}</h2>
      <h3>Salary: {salary} Equity: {equityUpdated}</h3>
      <button onClick = {() => handleApply(id)} className = {buttonStyle}>Apply</button>
    </div>
  )
}

// go to css and style based off class name.

export default JobCard;