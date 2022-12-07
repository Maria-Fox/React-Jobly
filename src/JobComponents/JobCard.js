import React from "react";
import CompanyCard from "../CompanyComponents/CompanyCard";

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {
  return(
    <div>
      <h1>{companyName}</h1>
    </div>
  )
}

export default JobCard;