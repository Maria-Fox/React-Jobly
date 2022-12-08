

import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../JoblyAPI";
import UserContext from "../UserComponents.js/UserContext";
import JobCard from "../JobComponents/JobCard";

const CompanyDetails = ({handleApply}) => {

  let [targetCompany, setTargetCompany] = useState(null);
  let {currentUser} = useContext(UserContext);

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
// can otherwise be an epty array, or changes on companyHandle

  // async function handleApply (username, jobId) {
  //   // use currentUser.isername (once resovled tokem issues)
  //   try {
  //     let applied = await JoblyApi.applyForJob(username, jobId)
  //   } catch(err){
  //     console.log(err);
  //   }
  // }


  return(
    <div>
      <p>details here</p>
      {targetCompany ? 
        <div>
          <h1>{targetCompany.name}</h1> 
          <small>Total of Employees: {targetCompany.numEmployees}</small>
          <p>{targetCompany.description}</p>

          <h2>Available Opportunities</h2>
          <ul>
            {targetCompany.jobs.map(({companyHandle, companyName, equity, id, salary, title}) => 
            <JobCard 
            comapnyHandle = {companyHandle} 
            comapnyName = {companyName}
            equity = {equity} 
            id = {id} 
            salary = {salary} 
            title = {title}
            key = {id}
            handleApply = {() => handleApply(currentUser.username, id)}
          />)}

          </ul>

          {/* <button onClick = {() => handleApply()}>Apply</button> */}
    </div> 
    : <p>Loading...</p> }
    </div>
  )
}

export default CompanyDetails;
