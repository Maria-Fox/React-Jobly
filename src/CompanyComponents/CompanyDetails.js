import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../JoblyAPI";

const CompanyDetails = () => {

  let [targetCompany, setTargetCompany] = useState(null);

  let companyHandle = useParams();
  companyHandle = companyHandle.handle;

  useEffect(function requestCoDetails() {
    async function getCoDetails () {
      
      let res = await JoblyApi.getCompany(`${companyHandle}`);
      console.log(res);
      setTargetCompany(res);

      // let {description, handle, jobs, name, numEmployees } = targetCompany;
      // console.log(description, handle, jobs, name, numEmployees);
    }
    getCoDetails();
  }, [companyHandle]);


  return(
    <div>
      <p>details here</p>
      {targetCompany ? <h1>{targetCompany.name}</h1> : <p>Loading...</p> }
    </div>
  )
}

export default CompanyDetails;
