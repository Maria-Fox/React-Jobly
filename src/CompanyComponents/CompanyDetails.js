

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../JoblyAPI";

const CompanyDetails = () => {

  let [targetCompany, setTargetCompany] = useState(null);

  let companyHandle = useParams();
  companyHandle = companyHandle.handle;

  useEffect(function requestCompDetails() {
    async function getCompDetails () {
      
      let res = await JoblyApi.getCompany(companyHandle);
      console.log(res)
      setTargetCompany(res);
    }
    getCompDetails();
  }, [companyHandle]);
// can otherwise be an epty array, or changes on companyHandle


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
            {targetCompany.jobs.map(j => <li>{j.title} key ={j.id}</li>)}
          </ul>
    </div> 
    : <p>Loading...</p> }
    </div>
  )
}

export default CompanyDetails;
