import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../JoblyAPI";

const CompanyDetails = () => {

  let [targetCompany, setTargetCompany] = useState(null);

  let companyHandle = useParams();
  companyHandle = companyHandle.handle;

  useEffect(function requestCompDetails() {
    async function getCompDetails () {
      
      let res = await JoblyApi.getCompany(`${companyHandle}`);
      setTargetCompany(res);
      console.log(targetCompany);

    }
    getCompDetails();
  }, [companyHandle]);

  let {description, handle, jobs, name, numEmployees } = targetCompany.company;

  let companyHTML = <div>
      <h1>{name}</h1>
      <small>Total of Employees: {numEmployees}</small>
      <p>{description}</p>

      <h2>Available Opportunities</h2>
      <ul>
        {jobs.map(j => <li>{j.title} key ={j.id}</li>)}
      </ul>
  </div>




  return(
    <div>
      <p>details here</p>
      {targetCompany ? <h1>{companyHTML}</h1> : <p>Loading...</p> }
    </div>
  )
}

export default CompanyDetails;
