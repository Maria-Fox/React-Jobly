import React, {useEffect, useState} from "react";
import JoblyApi from "../JoblyAPI";
import CompanyCard from "./CompanyCard";
// import UUID for a new 

// need to take in companies.sending reqto backend?
const CompanyList = () => {

  let [companies, setCompanies] = useState([]);

  useEffect(function requestCompanies() {
    async function getAllCompanies() {
      // use the API helper class here & reassign the companies state
      setCompanies(await JoblyApi.getCompanies());
    }
    getAllCompanies();
  }, []);


  return(
    
    <div>
      <h1>View All Companies</h1>
      {companies.map(({handle, name, description, numEmployees, logoUrl }) => <CompanyCard handle = {handle} name = {name} description = {description} numEmployees = {numEmployees}/>)}
    </div>
  )
}

export default CompanyList;