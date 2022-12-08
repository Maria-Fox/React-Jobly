import React from "react";
import {Link} from "react-router-dom";
import CompanyCard from "../CompanyComponents/CompanyCard";

const JobCard = ({companyHandle, companyName, equity, id, salary, title, handleApply}) => {

  // comeback and work on theapply button when there's auth for app

  let equityUpdated = equity ? equity : "Unavailable";

  return(
    <div>
      <h1>{companyName}</h1>
      <small>{companyHandle}</small>
      
      <h2>{title}</h2>
      <h3>Salary: {salary} Equity: {equityUpdated}</h3>
      <button onClick = {handleApply}>Apply</button>
    </div>
  )
}

export default JobCard;