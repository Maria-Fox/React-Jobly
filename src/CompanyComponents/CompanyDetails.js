

import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../JoblyAPI";
import UserContext from "../UserComponents.js/UserContext";
import JobCard from "../JobComponents/JobCard";

const CompanyDetails = () => {

  let [targetCompany, setTargetCompany] = useState(null);
  let {currentUser, handleApply, didUserPreviouslyApply} = useContext(UserContext);

  let companyHandle = useParams();
  companyHandle = companyHandle.handle;

  useEffect(function requestCompDetails() {
    async function getCompDetails () {
      
      let company = await JoblyApi.getCompany(companyHandle);
      console.log(company)
      setTargetCompany(company);
    }
    getCompDetails();
  }, [companyHandle]);

  // i am returning a JobCard vs. JobList bc the JobList will send another API request, this component already does that. Additionally, it means styling on the JobCard alone instead of multiple places.
  return(
    <div>
      <p>details here</p>
      {targetCompany ? 
        <div>
          <h1>{targetCompany.name}</h1> 
          <small>Total of Employees: {targetCompany.numEmployees}</small>
          <p>{targetCompany.description}</p>

          <h2>Available Opportunities</h2>

            {targetCompany.jobs.map(({companyHandle, companyName, equity, id, salary, title}) => 
            <JobCard 
            comapnyHandle = {companyHandle} 
            comapnyName = {companyName}
            equity = {equity} 
            id = {id} 
            salary = {salary} 
            title = {title}
            key = {id}
          />)}
  
    </div> 
    : <p>Loading...</p> }
    </div>
  )
}

export default CompanyDetails;
